# Qawam-Studio (قَوَام استوديو) — Multi-Vertical B2B/B2C Commerce & Zero-Float CPQ Suite

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-10b981?style=for-the-badge&logo=github)](https://eng-saeed-ali.github.io/Qawam-Studio/)
[![Zero-Float CPQ](https://img.shields.io/badge/Math-Zero--Float%20Integer%20CPQ-855106?style=for-the-badge)](#3-zero-float-integer-cpq--2d-nesting-mathematics)
[![Impeccable Gate](https://img.shields.io/badge/Impeccable%20Detect-0%20Findings-059669?style=for-the-badge)](#5-curated-studio-imagery--two-tier-verification-ledger)
[![Playwright E2E](https://img.shields.io/badge/Playwright%20E2E-PASS-b53808?style=for-the-badge)](#5-curated-studio-imagery--two-tier-verification-ledger)
[![License: MIT](https://img.shields.io/badge/License-MIT-334155?style=for-the-badge)](LICENSE)

**Live Storefront & Interactive CPQ Suite:** <https://eng-saeed-ali.github.io/Qawam-Studio/>

Qawam-Studio (`قَوَام استوديو`) is a dependency-free, production-verified multi-vertical e-commerce storefront, interactive customizer/CPQ workbench, and synchronized Desktop/Mobile App preview suite. Rather than cloning a single template with swapped accent colors, Qawam-Studio houses **three architecturally distinct commercial worlds** under a shared header, cart, and print-ready tax invoice engine.

---

## 1. Suite Architecture & Global Controls

- **Native Arabic `RTL` ↔ English `LTR` Engine:** Switches `dir="rtl"` ↔ `dir="ltr"`, typography stacks (`Amiri` + `IBM Plex Sans Arabic` ↔ `Cormorant Garamond` + `Plus Jakarta Sans`), and all domain copy dynamically, while isolating SKU codes, dimensions, weights, and currency values with `dir="ltr"` and `JetBrains Mono` (`tabular-nums`).
- **Desktop Web Store ↔ Interactive Mobile App Simulator:** Toggling `data-view="mobile"` wraps the active storefront inside an interactive mobile device shell featuring a status bar, category rail, and persistent 4-tab bottom navigation bar (`Home` | `Store` | `Studio` | `Cart`).
- **Cross-World Cart Drawer & Proforma Tax Invoice Modal:** Accumulates custom engraved editions, millimeter-exact nested print jobs, and corporate bulk hardware tenders into one consolidated cart, computing `15% VAT` and shipping weight (`kg`) with instant clipboard export and `@media print` PDF formatting.

---

## 2. Three Distinct Storefront Worlds

Each vertical enforces its own surface polarity, corner geometry, spatial grid hierarchy, and domain configurator:

| Vertical | Surface Polarity & Palette | Spatial DOM Archetype | Interactive Workbench |
| :--- | :--- | :--- | :--- |
| **`01. رَوْنَق \| RAWNAQ`**<br>*Rare Oud & Mechanical Horology* | Light Porcelain Gallery<br>`#ffffff` · Bronze Gold `#855106` | Editorial hero split + asymmetric full-bleed feature lookbook (`grid-column: 1 / -1`) & 3-plate archive | **Laser Engraving & Gift Case Salon** — live bottle/watch tray composer with Velvet, Burnt Walnut, or Warm Stone Shagreen box & 24K Gold / Rose Bronze / Platinum plaque etching |
| **`02. مِقْيَاس \| MIQYAS`**<br>*Illuminated Signage & Print CPQ* | Deep Blueprint Darkroom<br>`#0b121c` · Emerald `#10b981` | Immediate 3-zone CPQ workbench above a wide `220×138px` Horizontal Production Run Ledger | **Signage Mockup & 2D Nesting Lab** — millimeter sizing, editable face text (`#miqyasSignTextInput`), multi-layer LED halo SVG filters (`3000K`, `6500K`, Emerald), corner standoffs, grommets & single-path 2D sheet/roll nesting |
| **`03. مَدَار \| MADAR`**<br>*Edge Compute & Industrial Hardware* | Anodized Aluminum & Safety Orange<br>`#e8ebee` · `#b53808` | Technical spec-tag hero + 4-column modular chassis grid (`4px` radii) & dual B2B engineering bay | **Spec Benchmark & Bulk Tender Builder** — 2–3 device side-by-side matrix highlighting optimal Compute, Power (`W`), Ingress (`IP`), and `MTBF`, paired with a multi-SKU wholesale quantity matrix |

---

## 3. Zero-Float Integer CPQ & 2D Nesting Mathematics

All financial, mass, and nested cutting calculations avoid IEEE-754 floating-point currency drift by operating on integer millimeter (`mm`), gram (`g`), and Saudi Riyal (`SAR`) quantities:

- **2D Sheet Packing (`isRoll = false`):** Given piece bounds `(w, h)`, sheet margin `M`, cutter kerf `k`, and master sheet dimensions `(W_s, H_s)`, usable span is `U_W = W_s - 2×M` and `U_H = H_s - 2×M`. Across orientations `θ ∈ {0°, 90°}` where `(p_w, p_h) = (w, h)` or `(h, w)`:
  - `cols = ⌊(U_W + k) / (p_w + k)⌋`, `rows = ⌊(U_H + k) / (p_h + k)⌋`, `perSheet = cols × rows`
  - Orientation maximizing `perSheet` is selected automatically, yielding `sheets = ⌈qty / perSheet⌉`.
- **Continuous Roll Packing (`isRoll = true`):** For roll widths `1500 mm` and `1600 mm`, the optimizer evaluates `θ ∈ {0°, 90°}` to minimize consumed linear roll length:
  - `rowsNeeded = ⌈qty / cols⌉`, `rollLength = 2×M + rowsNeeded × p_h + (rowsNeeded - 1) × k`
- **Utilization & Tiered B2B Discounts:**
  - `utilization% = clamp(round((qty × w × h × 100) / stockArea), 1, 100)` and `waste% = 100 - utilization%`
  - Print volume tiers: `qty ≥ 25 → 10%`, `qty ≥ 100 → 18%`.
  - Hardware wholesale tiers: `units ≥ 10 → 8%`, `units ≥ 50 → 15%`, `units ≥ 200 → 22%`.
  - Invoice totals use deterministic integer rounding (`VAT = round((subtotal × 15) / 100)`).

---

## 4. Quick-View Inspector & Interactive Flows

- **Unified Quick-View Modal (`#productModal`):** Clicking any product image, title link, or `Quick View` (`معاينة`) button across `RAWNAQ`, `MIQYAS`, or `MADAR` opens an isolated accessible inspector (`role="dialog"`, `aria-modal="true"`, `Escape` dismissal) displaying the full photograph, per-vertical engineering specs, cart addition, and direct transfer into the world configurator.
- **Bidirectional Text Discipline:** All Arabic specification values render cleanly in native `RTL` while pure numeric strings (prices, millimeters, kilograms, `MTBF` hours, `SFP+` ratings) remain isolated via `dir="ltr"`.

---

## 5. Curated Studio Imagery & Two-Tier Verification Ledger

All `14` product and hero photographs stored under `assets/images/` are unbranded local high-resolution assets visually matched to their catalog metadata. Every release passes a strict two-tier automated verification gate via `verify_qawam.py`:

- **Tier 1 — Static & Rendered Audit (`DO_NOT_TRACK=1 impeccable detect --json`):** Verified on both Desktop (`1440×900`) and Mobile (`390×844`) across `?vertical=rawnaq`, `?vertical=miqyas`, and `?vertical=madar` with **`0` primary findings** (`primaryCount: 0` across all 6 passes).
- **Tier 2 — Headless Chrome Playwright E2E & Image Integrity Gate:** Verified **PASS** (`imgRawnaq: 6`, `imgMiqyas: 5`, `imgMadar: 9` — `100%` loaded with `naturalWidth ≥ 400` and `naturalHeight ≥ 300`), live SVG sign labeling (`NOOR TOWER`), Quick-View Modal image & spec integrity, multi-world `quoteRows: 4`, `0` console errors, `0` page errors, `0` failed requests, and `0` horizontal overflow (`scrollWidth ≤ innerWidth` at `1440px` and `390px`).

---

## 6. Repository Structure & File Inventory

| File / Directory | Purpose | Verified LOC / Count |
| :--- | :--- | :---: |
| `index.html` | Semantic 3-world DOM architecture, mobile shell chrome, Cart Drawer, Quote & Product Modals | `506` lines |
| `styles.css` | Per-world CSS custom property palettes, responsive grids, Print styles & Mobile simulator | `2,077` lines |
| `app.js` | Bilingual `I18N`, domain catalogs, Zero-Float 2D Nesting & Bulk CPQ calculators, Quick-View & DOM renderers | `1,898` lines |
| `verify_qawam.py` | Local HTTP daemon + `impeccable detect` (Desktop & Mobile) + Playwright E2E gate | `303` lines |
| `design-system/qawam-studio/MASTER.md` | Multi-world visual tokens, contrast rules & typographic scale specification | `166` lines |
| `HANDOFF.md` | Engineering summary & verification snapshot in ASD-STE100 Simplified Technical English | `18` lines |
| `assets/images/*.jpg` | Curated unbranded studio product & hardware photography (`RAWNAQ` `5`, `MIQYAS` `4`, `MADAR` `5`) | `14` JPEGs |
| `LICENSE` | MIT open-source license | Standard MIT |

---

## 7. Quick Start & Verification Reproduction

No bundler, compiler, or database is required. Serve the static directory over HTTP and run the full verification suite:

```powershell
# 1. Clone and serve locally
git clone https://github.com/Eng-Saeed-Ali/Qawam-Studio.git
cd Qawam-Studio
python -m http.server 8768

# 2. Open in browser: http://127.0.0.1:8768/

# 3. Run Tier 1 (impeccable detect) + Tier 2 (Playwright E2E) verification
python verify_qawam.py
```

---

## License

Released under the [MIT License](LICENSE) — Copyright (c) 2026 Saeed Ali.
