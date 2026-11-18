"""Non-blocking Tier 1 (impeccable detect across all 3 worlds) + Tier 2 (Playwright E2E) verifier for Qawam-Studio."""

from __future__ import annotations

import functools
import http.server
import json
import os
import pathlib
import socketserver
import subprocess
import sys
import tempfile
import threading

ROOT_DIR = pathlib.Path(__file__).resolve().parent
IMPECCABLE_CMD = r"C:\Users\saeed\.gemini\config\skills\impeccable\scripts\impeccable.cmd"
CHROME_EXE = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
PLAYWRIGHT_NODE_MODULES = (
    pathlib.Path(os.environ.get("APPDATA", ""))
    / "npm"
    / "node_modules"
    / "@playwright"
    / "mcp"
    / "node_modules"
)
HOST = "127.0.0.1"
PORT = 8768
WORLDS = ("rawnaq", "miqyas", "madar")


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format: str, *args: object) -> None:
        return


class ReusableTCPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    allow_reuse_address = True
    daemon_threads = True


def start_bg_server() -> ReusableTCPServer:
    handler = functools.partial(QuietHandler, directory=str(ROOT_DIR))
    server = ReusableTCPServer((HOST, PORT), handler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    return server


def run_impeccable_detect(viewport: str, vertical: str) -> dict:
    env = os.environ.copy()
    env["DO_NOT_TRACK"] = "1"
    if os.path.exists(CHROME_EXE):
        env.setdefault("PUPPETEER_EXECUTABLE_PATH", CHROME_EXE)

    url = f"http://{HOST}:{PORT}/?vertical={vertical}"
    cmd = [IMPECCABLE_CMD, "detect", "--json", "--viewport", viewport, url]
    proc = subprocess.run(cmd, cwd=str(ROOT_DIR), env=env, capture_output=True, text=True, timeout=90)
    stdout = proc.stdout.strip()
    stderr = proc.stderr.strip()
    if proc.returncode not in (0, 2):
        raise RuntimeError(f"impeccable detect failed ({vertical} {viewport}, rc={proc.returncode}): {stderr}\n{stdout}")
    data = json.loads(stdout) if stdout else []
    return {"returncode": proc.returncode, "viewport": viewport, "vertical": vertical, "data": data}


def normalize_detect_payload(payload: object) -> tuple[int, list]:
    if isinstance(payload, list):
        primary = [f for f in payload if not f.get("advisory")]
        return len(primary), payload
    if isinstance(payload, dict):
        findings = payload.get("findings", [])
        primary_count = payload.get("primaryCount", len(findings))
        return primary_count, findings
    return 0, []


PLAYWRIGHT_SCRIPT = r"""
const path = require("path");
const { chromium } = require("playwright");

const URL = process.argv[2];
const CHROME_EXE = process.argv[3];
const SHOT_DIR = process.argv[4];

function assert(cond, msg) {
  if (!cond) throw new Error("ASSERTION FAILED: " + msg);
}

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: CHROME_EXE,
    args: ["--no-sandbox", "--disable-gpu"],
  });

  const consoleErrors = [];
  const pageErrors = [];
  const failedRequests = [];

  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", (err) => pageErrors.push(String(err)));
  page.on("requestfailed", (req) => failedRequests.push(`${req.url()} (${req.failure()?.errorText})`));

  async function verifyVisibleImages(label, minCount) {
    await page.evaluate(async () => {
      await Promise.all(
        Array.from(document.images).map((img) =>
          typeof img.decode === "function" ? img.decode().catch(() => {}) : Promise.resolve()
        )
      );
    });
    const imgs = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("img"))
        .filter((img) => img.offsetParent !== null)
        .map((img) => ({
          src: img.getAttribute("src"),
          complete: img.complete,
          nw: img.naturalWidth,
          nh: img.naturalHeight,
        }));
    });
    assert(imgs.length >= minCount, `${label}: expected >= ${minCount} visible images, found ${imgs.length}`);
    for (const im of imgs) {
      assert(im.complete && im.nw >= 400 && im.nh >= 300, `${label}: invalid image ${im.src} (${im.nw}x${im.nh}, complete=${im.complete})`);
    }
    return imgs.length;
  }

  await page.goto(URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(350);

  // 1. World 01: RAWNAQ (Light Editorial)
  const bgRawnaq = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  assert(await page.locator("#worldRawnaq").isVisible(), "RAWNAQ world should be visible");
  assert(!(await page.locator("#worldMiqyas").isVisible()), "MIQYAS world should be hidden");
  const deskRawnaq = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth }));
  assert(deskRawnaq.sw <= deskRawnaq.iw, `RAWNAQ desktop overflow: ${deskRawnaq.sw} > ${deskRawnaq.iw}`);
  const imgRawnaq = await verifyVisibleImages("RAWNAQ", 5);
  await page.screenshot({ path: path.join(SHOT_DIR, "desktop-rawnaq.png"), fullPage: true });

  const initialCount = parseInt(await page.locator("#headerCartCount").textContent(), 10);
  await page.fill("#rawnaqEngravingInput", "AL-ULA GOLD");
  await page.waitForTimeout(100);
  assert((await page.locator("#rawnaqLivePlaqueText").textContent()) === "AL-ULA GOLD", "RAWNAQ engraving mismatch");
  await page.click("#btnAddRawnaq");
  const afterRawnaqCount = parseInt(await page.locator("#headerCartCount").textContent(), 10);
  assert(afterRawnaqCount === initialCount + 1, "RAWNAQ add to cart failed");

  // 2. World 02: MIQYAS (Dark Blueprint Workbench)
  await page.click("#tabMiqyas");
  await page.waitForTimeout(250);
  const bgMiqyas = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  assert(bgMiqyas !== bgRawnaq, `RAWNAQ and MIQYAS should have distinct backgrounds: ${bgRawnaq} vs ${bgMiqyas}`);
  assert(await page.locator("#worldMiqyas").isVisible(), "MIQYAS world should be visible");
  const deskMiqyas = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth }));
  assert(deskMiqyas.sw <= deskMiqyas.iw, `MIQYAS desktop overflow: ${deskMiqyas.sw} > ${deskMiqyas.iw}`);

  const beforeNestMetrics = await page.locator("#miqyasMetrics").textContent();
  const beforeNestPath = await page.locator("#miqyasNestSvg path").getAttribute("d");
  await page.fill("#miqyasWidthInput", "600");
  await page.dispatchEvent("#miqyasWidthInput", "input");
  await page.fill("#miqyasQtyInput", "120");
  await page.dispatchEvent("#miqyasQtyInput", "input");
  await page.click('[data-miqyas-led="neonhalo"]');
  await page.click('[data-miqyas-pf="grommets"]');
  await page.waitForTimeout(150);

  const afterNestMetrics = await page.locator("#miqyasMetrics").textContent();
  const afterNestPath = await page.locator("#miqyasNestSvg path").getAttribute("d");
  assert(beforeNestMetrics !== afterNestMetrics, "MIQYAS metrics did not update");
  assert(afterNestMetrics.includes("18%"), "MIQYAS 120 qty should trigger 18% tier discount");
  assert(beforeNestPath !== afterNestPath, "MIQYAS 2D nesting SVG path did not update");

  await page.fill("#miqyasSignTextInput", "NOOR TOWER");
  await page.dispatchEvent("#miqyasSignTextInput", "input");
  await page.waitForTimeout(100);
  const signSvgText = await page.locator("#miqyasSignSvg").textContent();
  assert(signSvgText.includes("NOOR TOWER"), "MIQYAS live face text did not render in mockup SVG");

  await page.click('#miqyasCatalogRows [data-inspect="miqyas:mq-acrylic-facade"]');
  await page.waitForTimeout(200);
  assert(await page.locator("#productModal").isVisible(), "Quick-View Product Modal did not open");
  const modalImgOk = await page.evaluate(() => {
    const im = document.querySelector("#productModalMedia img");
    return Boolean(im && im.complete && im.naturalWidth >= 400);
  });
  assert(modalImgOk, "Product Modal hero image failed to load");
  await page.screenshot({ path: path.join(SHOT_DIR, "modal-miqyas.png") });
  await page.click("#btnCloseProductModal");
  await page.waitForTimeout(120);

  const imgMiqyas = await verifyVisibleImages("MIQYAS", 4);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(150);
  await page.screenshot({ path: path.join(SHOT_DIR, "desktop-miqyas.png"), fullPage: true });

  await page.click("#btnAddMiqyas");
  const afterMiqyasCount = parseInt(await page.locator("#headerCartCount").textContent(), 10);
  assert(afterMiqyasCount === afterRawnaqCount + 120, "MIQYAS add to cart failed");

  // 3. World 03: MADAR (Machined Aluminum + Safety Orange Modular Hardware)
  await page.click("#tabMadar");
  await page.waitForTimeout(250);
  const bgMadar = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  assert(bgMadar !== bgMiqyas && bgMadar !== bgRawnaq, `All 3 worlds must have distinct surface colors: ${bgRawnaq} | ${bgMiqyas} | ${bgMadar}`);
  assert(await page.locator("#worldMadar").isVisible(), "MADAR world should be visible");
  const deskMadar = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth }));
  assert(deskMadar.sw <= deskMadar.iw, `MADAR desktop overflow: ${deskMadar.sw} > ${deskMadar.iw}`);

  const beforeCols = await page.locator("#madarSpecHead th").count();
  await page.click('[data-madar-toggle="poe-switch-24p"]');
  await page.waitForTimeout(100);
  assert((await page.locator("#madarSpecHead th").count()) === beforeCols, "Should cap compare devices at 3");

  const beforeBulkMetrics = await page.locator("#madarMetrics").textContent();
  await page.click('[data-bulk-step="edge-npu-x4:10"]');
  await page.click('[data-bulk-step="edge-npu-x4:10"]');
  await page.waitForTimeout(100);
  assert((await page.locator("#madarMetrics").textContent()) !== beforeBulkMetrics, "MADAR bulk metrics did not update");
  await page.click("#btnAddMadarBulk");
  const imgMadar = await verifyVisibleImages("MADAR", 5);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(150);
  await page.screenshot({ path: path.join(SHOT_DIR, "desktop-madar.png"), fullPage: true });

  // 4. RTL <-> LTR + Mobile App Simulator + Cart & Quote Modal
  await page.click("#btnLangToggle");
  await page.waitForTimeout(150);
  assert((await page.evaluate(() => document.documentElement.dir)) === "ltr", "Expected dir=ltr");

  await page.click("#btnViewMobile");
  await page.waitForTimeout(200);
  assert((await page.evaluate(() => document.documentElement.dataset.view)) === "mobile", "Expected view=mobile");
  await page.click("#mTabStudio");
  await page.waitForTimeout(150);
  await page.click("#mTabCart");
  await page.waitForTimeout(200);
  assert(await page.locator("#cartDrawer").isVisible(), "Cart Drawer did not open");

  await page.click("#btnOpenQuoteModal");
  await page.waitForTimeout(200);
  assert(await page.locator("#quoteModal").isVisible(), "Quote Modal did not open");
  const quoteRows = await page.locator("#quoteItemsBody tr").count();
  assert(quoteRows >= 3, `Expected >= 3 quote rows, got ${quoteRows}`);
  await page.click("#btnCopyQuote");
  await page.click("#btnCloseQuoteModal");

  // 5. Mobile 390x844 Overflow Check Across All 3 Worlds
  await page.setViewportSize({ width: 390, height: 844 });
  await page.click("#btnLangToggle"); // Back to AR RTL
  const mobOverflows = {};
  for (const w of ["rawnaq", "miqyas", "madar"]) {
    const tabMap = { rawnaq: "#tabRawnaq", miqyas: "#tabMiqyas", madar: "#tabMadar" };
    await page.click(tabMap[w]);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(200);
    const ov = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth }));
    assert(ov.sw <= ov.iw, `Mobile 390 overflow on ${w}: ${ov.sw} > ${ov.iw}`);
    mobOverflows[w] = ov;
  }
  await page.click("#tabRawnaq");
  await page.click("#mTabHome");
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(SHOT_DIR, "mobile-390.png"), fullPage: false });

  await browser.close();

  assert(consoleErrors.length === 0, `Console errors: ${consoleErrors.join(" | ")}`);
  assert(pageErrors.length === 0, `Page errors: ${pageErrors.join(" | ")}`);
  assert(failedRequests.length === 0, `Failed requests: ${failedRequests.join(" | ")}`);

  console.log(JSON.stringify({
    status: "PASS",
    imagesVerified: { imgRawnaq, imgMiqyas, imgMadar },
    surfaceBackgrounds: { bgRawnaq, bgMiqyas, bgMadar },
    desktopOverflows: { deskRawnaq, deskMiqyas, deskMadar },
    mobOverflows,
    quoteRows,
    consoleErrors: consoleErrors.length,
    pageErrors: pageErrors.length,
    failedRequests: failedRequests.length
  }));
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
"""


def run_playwright_e2e(shot_dir: pathlib.Path) -> dict:
    with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8") as tf:
        tf.write(PLAYWRIGHT_SCRIPT)
        script_path = tf.name

    env = os.environ.copy()
    existing_node_path = env.get("NODE_PATH", "")
    env["NODE_PATH"] = (
        f"{PLAYWRIGHT_NODE_MODULES}{os.pathsep}{existing_node_path}"
        if existing_node_path
        else str(PLAYWRIGHT_NODE_MODULES)
    )

    try:
        proc = subprocess.run(
            ["node", script_path, f"http://{HOST}:{PORT}/", CHROME_EXE, str(shot_dir)],
            cwd=str(ROOT_DIR),
            env=env,
            capture_output=True,
            text=True,
            timeout=120,
        )
        if proc.returncode != 0:
            raise RuntimeError(f"Playwright E2E failed:\n{proc.stderr}\n{proc.stdout}")
        return json.loads(proc.stdout.strip().splitlines()[-1])
    finally:
        if os.path.exists(script_path):
            os.remove(script_path)


def main() -> int:
    shot_dir = ROOT_DIR / ".verify_shots"
    shot_dir.mkdir(exist_ok=True)
    server = start_bg_server()
    try:
        detect_summary = {}
        any_fail = False
        for world in WORLDS:
            d_res = run_impeccable_detect("1440x900", world)
            m_res = run_impeccable_detect("390x844", world)
            d_count, d_findings = normalize_detect_payload(d_res["data"])
            m_count, m_findings = normalize_detect_payload(m_res["data"])
            detect_summary[world] = {
                "desktop": {"rc": d_res["returncode"], "primaryCount": d_count, "findings": d_findings},
                "mobile": {"rc": m_res["returncode"], "primaryCount": m_count, "findings": m_findings},
            }
            if d_res["returncode"] != 0 or m_res["returncode"] != 0:
                any_fail = True

        e2e_result = run_playwright_e2e(shot_dir)

        print(json.dumps({"impeccable": detect_summary, "playwright_e2e": e2e_result}, indent=2, ensure_ascii=False))
        return 2 if any_fail else 0
    finally:
        server.shutdown()
        server.server_close()


if __name__ == "__main__":
    sys.exit(main())
