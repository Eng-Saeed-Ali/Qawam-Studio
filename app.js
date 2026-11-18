(() => {
  "use strict";

  /* ========================================================================
     1. I18N DICTIONARY & WORLD COPY
     ======================================================================== */
  const I18N = {
    ar: {
      skip: "تجاوز إلى المحتوى الرئيسي",
      brand_name: "قَوَام استوديو",
      brand_sub: "منصة التجارة متعددة العوالم",
      v_rawnaq: "رَوْنَق | RAWNAQ",
      v_rawnaq_tag: "دار الفخامة",
      v_miqyas: "مِقْيَاس | MIQYAS",
      v_miqyas_tag: "منصة CPQ",
      v_madar: "مَدَار | MADAR",
      v_madar_tag: "عتاد معياري",
      view_web: "الويب",
      view_mobile: "تطبيق الجوال",
      lang_toggle: "English",
      cart_btn: "السلة",
      mobile_sub: "تطبيق المتجر التفاعلي",
      mtab_home: "الرئيسية",
      mtab_store: "المتجر",
      mtab_studio: "الاستوديو",
      mtab_cart: "السلة",
      // RAWNAQ
      r_hero_title: "دار رَوْنَق للعطور النادرة والساعات الميكانيكية",
      r_hero_desc: "مقتنيات صُممت للبقاء الطويل مع نقش ليزري مذهب حسب الطلب وصناديق عرض من المخمل والجوز الطبيعي.",
      r_cta_atelier: "ادخل صالون النقش",
      r_cta_gallery: "مختارات الدار",
      r_gallery_title: "أرشيف الإصدارات المرقّمة",
      r_gallery_sub: "تصفح المختارات أو أرسل أي قطعة مباشرة إلى طاولة النقش.",
      r_atelier_title: "صالون النقش بالليزر وتغليف الهدايا",
      r_atelier_sub: "خصّص العبارة والمعدن وتشطيب الصندوق مع معاينة حية قبل الإضافة للسلة.",
      r_edition: "الإصدار الفاخر",
      r_box: "تشطيب صندوق الإهداء",
      r_plaque: "معدن اللوحة التذكارية",
      r_engraving: "نص النقش بالليزر",
      r_monogram: "التاريخ أو الأحرف",
      r_add_btn: "اعتماد الطقم وإضافته للسلة",
      r_search_ph: "ابحث في الأرشيف...",
      // MIQYAS
      m_hero_title: "مختبر مِقْيَاس للوحات المضيئة والتعشيش الهندسي 2D",
      m_hero_desc: "ضبط فوري للأبعاد بالملليمتر، فحص هوامش القص والإضاءة، وحساب الألواح والرولات بأعداد صحيحة دون كسور.",
      m_jump_ledger: "جدول المقاسات القياسية",
      m_width: "العرض (mm)",
      m_height: "الارتفاع (mm)",
      m_qty: "الكمية (1–500)",
      m_substrate: "الخامة واللوح القياسي",
      m_sign_label: "النص الظاهر على النموذج",
      m_led: "إضاءة الخلفية LED",
      m_preflight: "طبقات الفحص المسبق Pre-Flight",
      m_sign_preview: "معاينة اللوحة والفحص المسبق",
      m_nest_preview: "خريطة التعشيش الهندسي 2D",
      m_add_btn: "أضف طلب الطباعة والتعشيش للسلة",
      m_ledger_title: "دليل التشغيلات القياسية الجاهزة",
      m_ledger_sub: "اضغط على أي صورة لتكبير النموذج ومواصفاته، أو حمّل المقاس مباشرة إلى المختبر.",
      m_search_ph: "ابحث بالمقاس أو الكود...",
      // MADAR
      d_hero_title: "منظومة مَدَار للعتاد الصناعي وحوسبة الحافة",
      d_hero_desc: "وحدات معالجة وبوابات استشعار معيارية بهياكل ألومنيوم مؤكسد وتبريد سلبي ومواصفات موثقة للتشغيل المتواصل.",
      d_cta_matrix: "مصفوفة المقارنة والجملة",
      d_cta_modules: "استعراض الوحدات",
      d_modules_title: "وحدات العتاد الصناعي المعيارية",
      d_modules_sub: "أضف وحدات منفردة أو اضغط على أي جهاز لاستعراض مواصفاته وصورته الكاملة.",
      d_studio_title: "مصفوفة المواصفات ومُكوّن مناقصات الجملة",
      d_studio_sub: "قارن بين جهازين أو ثلاثة مع تمييز الأعلى كفاءة، واضبط كميات التوريد الفورية.",
      d_compare_title: "مقارنة المواصفات الهندسية (2–3 أجهزة)",
      d_bulk_title: "مُكوّن طلبات الشركات بالجملة",
      d_add_btn: "أضف طلبية الجملة للسلة",
      d_search_ph: "ابحث بالرقم الهندسي SKU...",
      // Shared
      sort_featured: "الأبرز",
      sort_asc: "السعر: الأقل",
      sort_desc: "السعر: الأعلى",
      cart_title: "سلة المشتريات وعرض السعر",
      cart_quote_btn: "إصدار فاتورة وعرض سعر فوري",
      cart_clear_btn: "تفريغ السلة",
      quote_title: "فاتورة وعرض سعر فوري",
      q_issuer: "قَوَام استوديو | Qawam-Studio",
      q_sub: "حي العليا التجاري، الرياض",
      q_number: "رقم العرض:",
      q_date: "التاريخ:",
      q_buyer_label: "اسم العميل أو المنشأة",
      q_notes_label: "مرجع المشروع أو التوصيل",
      q_col_item: "الصنف والمواصفات",
      q_col_vert: "المسار",
      q_col_qty: "الكمية",
      q_col_total: "الإجمالي",
      q_copy_btn: "نسخ ملخص العرض",
      q_print_btn: "طباعة / حفظ PDF",
      footer_copy: "قَوَام استوديو: ثلاثة عوالم تجارية مستقلة ومحرك تسعير هندسي صحيح",
      sar: "ر.س",
      add_cart: "أضف للسلة",
      send_studio: "خصّص بالاستوديو",
      inspect_btn: "معاينة",
      included_lbl: "مشمول",
      bulk_add5: "+5 جملة",
      ref_model_lbl: "النموذج المرجعي النشط",
      inspect_model_btn: "عرض النموذج",
      empty_cart: "السلة فارغة حالياً. أضف منتجات من أي عالم لإعداد عرض السعر.",
      subtotal: "المجموع الفرعي",
      vat15: "ضريبة القيمة المضافة 15%",
      grand_total: "الإجمالي النهائي",
      ship_weight: "إجمالي وزن الشحن",
      remove: "حذف",
      all_cats: "الكل",
      copied_toast: "تم نسخ ملخص عرض السعر إلى الحافظة",
      added_toast: "تمت الإضافة إلى السلة:",
      winner: "الأفضل",
      metric_spec: "المعيار الهندسي",
      no_results: "لا توجد عناصر مطابقة للبحث.",
      compare_hint: "حدّد جهازين أو ثلاثة للمقارنة",
      bulk_empty: "اختر كمية لجهاز واحد على الأقل لإضافته للسلة.",
    },
    en: {
      skip: "Skip to main content",
      brand_name: "Qawam-Studio",
      brand_sub: "Multi-World Commerce Suite",
      v_rawnaq: "RAWNAQ | رَوْنَق",
      v_rawnaq_tag: "Maison",
      v_miqyas: "MIQYAS | مِقْيَاس",
      v_miqyas_tag: "Print CPQ",
      v_madar: "MADAR | مَدَار",
      v_madar_tag: "Modular Tech",
      view_web: "Web Store",
      view_mobile: "Mobile App",
      lang_toggle: "العربية",
      cart_btn: "Cart",
      mobile_sub: "Interactive Store App",
      mtab_home: "Home",
      mtab_store: "Store",
      mtab_studio: "Studio",
      mtab_cart: "Cart",
      // RAWNAQ
      r_hero_title: "Maison RAWNAQ Rare Oud & Mechanical Horology",
      r_hero_desc: "Numbered editions crafted for permanence with custom gold laser engraving and velvet or walnut presentation cases.",
      r_cta_atelier: "Enter Engraving Salon",
      r_cta_gallery: "Explore Lookbook",
      r_gallery_title: "Numbered Edition Archive",
      r_gallery_sub: "Browse the curated lookbook or transfer any edition directly onto the engraving table.",
      r_atelier_title: "Laser Engraving & Gift Box Salon",
      r_atelier_sub: "Personalize dedication text, plaque metal, and box finish with live visual inspection.",
      r_edition: "Signature Edition",
      r_box: "Gift Box Finish",
      r_plaque: "Plaque Metal Trim",
      r_engraving: "Laser Engraving Text",
      r_monogram: "Date or Monogram",
      r_add_btn: "Acquire Bespoke Gift Set",
      r_search_ph: "Search archive...",
      // MIQYAS
      m_hero_title: "MIQYAS Illuminated Signage & Zero-Float 2D Nesting Lab",
      m_hero_desc: "Configure dimensions in millimeters, verify bleed and LED illumination, and compute exact sheet or roll packing without floating-point drift.",
      m_jump_ledger: "Standard Print Ledger",
      m_width: "Width (mm)",
      m_height: "Height (mm)",
      m_qty: "Quantity (1–500)",
      m_substrate: "Substrate & Master Stock",
      m_sign_label: "Signage Face Label",
      m_led: "LED Backlight Mode",
      m_preflight: "Pre-Flight Verification Layers",
      m_sign_preview: "Signage & Pre-Flight Preview",
      m_nest_preview: "2D Cut-Sheet Nesting Map",
      m_add_btn: "Add Custom Print Job to Cart",
      m_ledger_title: "Standard Production Run Ledger",
      m_ledger_sub: "Click any run thumbnail to inspect the full model specs, or load it directly into the CPQ lab.",
      m_search_ph: "Search size or SKU...",
      // MADAR
      d_hero_title: "MADAR Modular Edge Compute & Industrial Hardware",
      d_hero_desc: "Anodized aluminum edge nodes and IoT gateways engineered for continuous wide-temperature deployment.",
      d_cta_matrix: "Spec Matrix & Bulk RFQ",
      d_cta_modules: "Inspect Modules",
      d_modules_title: "Modular Hardware Units",
      d_modules_sub: "Add single engineering units or inspect any device for its complete datasheet and gallery view.",
      d_studio_title: "Spec Benchmark Matrix & Bulk SKU Order Builder",
      d_studio_sub: "Compare 2–3 devices side-by-side with winner highlights and build tiered corporate quantities.",
      d_compare_title: "Engineering Spec Matrix (2–3 Devices)",
      d_bulk_title: "Wholesale B2B SKU Order Matrix",
      d_add_btn: "Add Bulk Hardware Order to Cart",
      d_search_ph: "Search SKU or spec...",
      // Shared
      sort_featured: "Featured",
      sort_asc: "Price: Low to High",
      sort_desc: "Price: High to Low",
      cart_title: "Shopping Cart & Quote Builder",
      cart_quote_btn: "Generate Instant Quote / Tax Invoice",
      cart_clear_btn: "Clear Cart",
      quote_title: "Instant Proforma Quote / Tax Invoice",
      q_issuer: "Qawam-Studio",
      q_sub: "Olaya Commercial District, Riyadh",
      q_number: "Quote Ref:",
      q_date: "Date:",
      q_buyer_label: "Client or Company Name",
      q_notes_label: "Project or Delivery Reference",
      q_col_item: "Item & Configuration",
      q_col_vert: "Vertical",
      q_col_qty: "Qty",
      q_col_total: "Total",
      q_copy_btn: "Copy Quote Summary",
      q_print_btn: "Print / Save PDF",
      footer_copy: "Qawam-Studio: Three Distinct Commerce Worlds & Deterministic CPQ Engine",
      sar: "SAR",
      add_cart: "Add to Cart",
      send_studio: "Configure",
      inspect_btn: "Quick View",
      included_lbl: "Included",
      bulk_add5: "+5 Bulk",
      ref_model_lbl: "Active Physical Model",
      inspect_model_btn: "Inspect Model",
      empty_cart: "Your cart is empty. Add items from any world to build a proforma quote.",
      subtotal: "Subtotal",
      vat15: "VAT 15%",
      grand_total: "Grand Total",
      ship_weight: "Total Shipping Weight",
      remove: "Remove",
      all_cats: "All",
      copied_toast: "Quote summary copied to clipboard",
      added_toast: "Added to cart:",
      winner: "Best",
      metric_spec: "Specification",
      no_results: "No matching items found.",
      compare_hint: "Select 2 or 3 devices to compare",
      bulk_empty: "Set quantity above 0 for at least one hardware SKU.",
    },
  };

  const WORLD_TITLES = {
    rawnaq: { ar: "رَوْنَق | RAWNAQ", en: "RAWNAQ | رَوْنَق" },
    miqyas: { ar: "مِقْيَاس | MIQYAS", en: "MIQYAS | مِقْيَاس" },
    madar: { ar: "مَدَار | MADAR", en: "MADAR | مَدَار" },
  };

  /* ========================================================================
     2. DOMAIN DATA MODELS
     ======================================================================== */
  const RAWNAQ_EDITIONS = [
    {
      id: "oud-mamlakah",
      sku: "RWN-OUD-100",
      nameAr: "عود المملكة إكستريت 100 مل",
      nameEn: "Oud Al-Mamlakah Extrait 100ml",
      categoryAr: "عطور العود",
      categoryEn: "Oud Extraits",
      specAr: "تركيز 35% عود كمبودي معتق مع عنبر وزعفران في زجاجة مربعة وغطاء برونزي",
      specEn: "35% Aged Cambodian Oud, Ambergris & Saffron in square glass flacon with bronze cap",
      priceSar: 980,
      weightGrams: 540,
      shape: "bottle",
      image: "assets/images/rawnaq-oud-mamlakah.jpg",
    },
    {
      id: "qawam-reserve",
      sku: "RWN-RSV-075",
      nameAr: "قوام ريزيرف عود ملكي 75 مل",
      nameEn: "Qawam Reserve Royal 75ml",
      categoryAr: "عطور العود",
      categoryEn: "Oud Extraits",
      specAr: "توليفة خشب الصندل والمسك الأسود في زجاجة مربعة شفافة بغطاء أسود مطفي",
      specEn: "Black Musk & Sandalwood in sculpted clear glass flacon with matte black cap",
      priceSar: 1240,
      weightGrams: 610,
      shape: "decanter",
      image: "assets/images/rawnaq-qawam-reserve.jpg",
    },
    {
      id: "safwa-tourbillon",
      sku: "RWN-WTC-040",
      nameAr: "ساعة صفوة توربيون 40 مم",
      nameEn: "Safwa Tourbillon Timepiece 40mm",
      categoryAr: "الساعات",
      categoryEn: "Timepieces",
      specAr: "توربيون مكشوف بميناء رمادي وإطار تيتانيوم مصقول مع سوار جلد تمساح أسود",
      specEn: "Exposed 6-o'clock tourbillon with sunburst grey dial, titanium case & black leather strap",
      priceSar: 4850,
      weightGrams: 390,
      shape: "watch",
      image: "assets/images/rawnaq-safwa-tourbillon.jpg",
    },
    {
      id: "alula-amber",
      sku: "RWN-AMB-100",
      nameAr: "إكسير العلا عنبر ولبان 100 مل",
      nameEn: "Al-Ula Amber & Frankincense 100ml",
      categoryAr: "أطقم الهدايا",
      categoryEn: "Gift Sets",
      specAr: "لبان حوجري وفانيليا مدخنة في قارورة ذهبية منقوشة مع علبة جلدية فاخرة",
      specEn: "Pure Hojari Frankincense & smoked vanilla in engraved gold flacon with leather case",
      priceSar: 860,
      weightGrams: 490,
      shape: "bottle",
      image: "assets/images/rawnaq-alula-amber.jpg",
    },
  ];

  const RAWNAQ_BOXES = [
    { id: "velvet", nameAr: "مخمل أوبسيديان", nameEn: "Obsidian Velvet", extraSar: 0, extraGrams: 220, fill: "#1B1815", stroke: "#5A5045" },
    { id: "walnut", nameAr: "جوز طبيعي محروق", nameEn: "Burnt Walnut", extraSar: 140, extraGrams: 480, fill: "#332217", stroke: "#7E593F" },
    { id: "shagreen", nameAr: "جلد حجري دافئ", nameEn: "Warm Stone Shagreen", extraSar: 190, extraGrams: 360, fill: "#EAE4D9", stroke: "#9D917D" },
  ];

  const RAWNAQ_PLAQUES = [
    { id: "gold24", nameAr: "ذهب مصقول 24K", nameEn: "Burnished Gold 24K", extraSar: 90, fill: "#D4AF37", text: "#141008" },
    { id: "rosegold", nameAr: "برونز وردي مطفي", nameEn: "Brushed Rose Bronze", extraSar: 75, fill: "#C88A73", text: "#170E0A" },
    { id: "platinum", nameAr: "بلاتين فضي", nameEn: "Satin Platinum", extraSar: 110, fill: "#D6DBE0", text: "#101419" },
  ];

  const MIQYAS_SUBSTRATES = [
    { id: "acrylic5", nameAr: "أكريليك 5 مم (لوح 1220×2440)", nameEn: "Acrylic 5mm (1220x2440 Sheet)", stockW: 1220, stockH: 2440, margin: 10, kerf: 4, ratePerM2Sar: 380, gramsPerM2: 6000, isRoll: false },
    { id: "forex10", nameAr: "فوركس PVC 10 مم (لوح 1220×2440)", nameEn: "Forex PVC 10mm (1220x2440 Sheet)", stockW: 1220, stockH: 2440, margin: 10, kerf: 4, ratePerM2Sar: 240, gramsPerM2: 5200, isRoll: false },
    { id: "banner440", nameAr: "رول بنر 440 جم (عرض 1500 مم)", nameEn: "Banner Roll 440g (1500mm Width)", stockW: 1500, stockH: 0, margin: 15, kerf: 6, ratePerM2Sar: 95, gramsPerM2: 440, isRoll: true },
    { id: "banner610", nameAr: "رول فليكس 610 جم (عرض 1600 مم)", nameEn: "Flex Banner 610g (1600mm Width)", stockW: 1600, stockH: 0, margin: 15, kerf: 6, ratePerM2Sar: 130, gramsPerM2: 610, isRoll: true },
  ];

  const MIQYAS_LEDS = [
    { id: "off", nameAr: "بدون إضاءة", nameEn: "LED Off", extraSar: 0, extraGrams: 0, watts: 0, stroke: "none" },
    { id: "warm3000", nameAr: "دافئ 3000K", nameEn: "Warm 3000K", extraSar: 85, extraGrams: 280, watts: 18, stroke: "#FBBF24" },
    { id: "cool6500", nameAr: "أبيض ناصع 6500K", nameEn: "Cool 6500K", extraSar: 95, extraGrams: 280, watts: 20, stroke: "#E2E8F0" },
    { id: "neonhalo", nameAr: "هالة نيون زمردية", nameEn: "Neon Halo", extraSar: 160, extraGrams: 420, watts: 28, stroke: "#34D399" },
  ];

  const MIQYAS_CATALOG = [
    {
      id: "mq-acrylic-facade",
      sku: "MQY-ACR-6040",
      nameAr: "لافتة أكريليك مطفي بإضاءة دافئة 600×400 مم",
      nameEn: "Frosted Acrylic Brass Plaque 600x400mm",
      categoryAr: "لافتات مضيئة",
      categoryEn: "Illuminated Signs",
      specAr: "أكريليك 5 مم أسود مطفي مع هالة LED دافئة 3000K ومثبتات نحاسية مصقولة",
      specEn: "5mm matte black acrylic with Warm 3000K LED halo and brushed brass standoffs",
      priceSar: 340,
      weightGrams: 1720,
      image: "assets/images/miqyas-acrylic-facade.jpg",
      preset: { wMm: 600, hMm: 400, qty: 12, substrateId: "acrylic5", ledId: "warm3000" },
    },
    {
      id: "mq-forex-wayfinding",
      sku: "MQY-FRX-3020",
      nameAr: "طقم لوحات إرشادية فوركس 300×200 مم",
      nameEn: "Forex Architectural Wayfinding 300x200mm",
      categoryAr: "لوحات إرشادية",
      categoryEn: "Wayfinding",
      specAr: "فوركس PVC 10 مم مطبوع بدقة 300 DPI مقاوم للأشعة فوق البنفسجية",
      specEn: "10mm Forex PVC UV-cured print at 300 DPI for commercial corridors",
      priceSar: 125,
      weightGrams: 312,
      image: "assets/images/miqyas-forex-wayfinding.jpg",
      preset: { wMm: 300, hMm: 200, qty: 40, substrateId: "forex10", ledId: "off" },
    },
    {
      id: "mq-banner-expo",
      sku: "MQY-BNR-1208",
      nameAr: "طباعة رول لاتكس عريض 1200×800 مم",
      nameEn: "Wide-Format Roll Press Print 1200x800mm",
      categoryAr: "مطبوعات الرولات",
      categoryEn: "Roll Media",
      specAr: "رول فليكس 610 جم مطبوع على خطوط لاتكس صناعية عالية الثبات",
      specEn: "610gsm heavy roll media printed on industrial wide-format latex press",
      priceSar: 195,
      weightGrams: 586,
      image: "assets/images/miqyas-banner-expo.jpg",
      preset: { wMm: 1200, hMm: 800, qty: 18, substrateId: "banner610", ledId: "off" },
    },
    {
      id: "mq-neon-studio",
      sku: "MQY-NEO-5035",
      nameAr: "لوحة استقبال بهالة زمردية 500×350 مم",
      nameEn: "Emerald Halo Reception Plaque 500x350mm",
      categoryAr: "لافتات مضيئة",
      categoryEn: "Illuminated Signs",
      specAr: "أكريليك أسود لامع مع شعار معدني محفور وهالة LED زمردية للاستقبال",
      specEn: "Gloss black acrylic reception panel with brushed metal crest and emerald halo",
      priceSar: 410,
      weightGrams: 1470,
      image: "assets/images/miqyas-neon-studio.jpg",
      preset: { wMm: 500, hMm: 350, qty: 8, substrateId: "acrylic5", ledId: "neonhalo" },
    },
  ];

  const MADAR_DEVICES = [
    {
      id: "edge-npu-x4",
      sku: "MDR-NPU-X4",
      nameAr: "لوحة الحافة Madar Edge-NPU X4",
      nameEn: "Madar Edge-NPU X4 Board",
      categoryAr: "حوسبة الحافة",
      categoryEn: "Edge AI",
      specAr: "وحدة استدلال صناعية 64 TOPS بمشتت حراري صامت ومنفذ شبكة GbE وهوائي خارجي",
      specEn: "64 TOPS industrial carrier board with finned heatsink, GbE, serial I/O & antenna",
      priceSar: 3450,
      weightGrams: 1850,
      computeScore: 64,
      computeLabel: "64 TOPS",
      powerWatts: 24,
      ipScore: 67,
      ipLabel: "IP67",
      uplinkLabel: "GbE + Serial",
      mtbfHours: 120000,
      image: "assets/images/madar-edge-npu.jpg",
    },
    {
      id: "lorawan-gw-pro",
      sku: "MDR-LORA-16",
      nameAr: "بوابة LoRaWAN Gateway Pro",
      nameEn: "Madar LoRaWAN Gateway Pro",
      categoryAr: "بوابات IoT",
      categoryEn: "IoT Gateways",
      specAr: "بوابة 16 قناة بهوائيات مزدوجة من الألياف الزجاجية وهيكل ألومنيوم IP68",
      specEn: "16-channel outdoor gateway with dual fiberglass antennas & die-cast IP68 housing",
      priceSar: 2180,
      weightGrams: 1420,
      computeScore: 16,
      computeLabel: "16 Ch SX1303",
      powerWatts: 12,
      ipScore: 68,
      ipLabel: "IP68",
      uplinkLabel: "M12 PoE+ / N",
      mtbfHours: 150000,
      image: "assets/images/madar-lorawan-gw.jpg",
    },
    {
      id: "thermal-vision-node",
      sku: "MDR-THM-640",
      nameAr: "حساس الرؤية الحراري Thermal Node",
      nameEn: "Madar Thermal Vision Node",
      categoryAr: "الاستشعار الذكي",
      categoryEn: "Smart Sensors",
      specAr: "كاميرا حرارية بعدسة جرمانيوم 640×512 وهيكل معدني IP67 مع كابل M12 PoE+",
      specEn: "640x512 germanium-lens thermal node in CNC anodized housing with M12 PoE+ pigtail",
      priceSar: 4900,
      weightGrams: 2100,
      computeScore: 32,
      computeLabel: "32 TOPS ISP",
      powerWatts: 18,
      ipScore: 67,
      ipLabel: "IP67",
      uplinkLabel: "M12 PoE+",
      mtbfHours: 95000,
      image: "assets/images/madar-thermal-node.jpg",
    },
    {
      id: "poe-switch-24p",
      sku: "MDR-SW-24P",
      nameAr: "محول الألياف الصناعي 10G SFP+ 24P",
      nameEn: "Madar Fiber & SFP+ Core Switch 24P",
      categoryAr: "الشبكات الصناعية",
      categoryEn: "Industrial Switches",
      specAr: "هيكل رك للربط البصري مع لوحات ألياف LC/APC ومنافذ 10G SFP+ عالية الكثافة",
      specEn: "High-density rack optical switch with single-mode LC/APC patch bays & 10G SFP+ ports",
      priceSar: 3890,
      weightGrams: 3400,
      computeScore: 48,
      computeLabel: "240 Gbps",
      powerWatts: 45,
      ipScore: 40,
      ipLabel: "IP40 Rack",
      uplinkLabel: "24x LC / 10G SFP+",
      mtbfHours: 140000,
      image: "assets/images/madar-poe-switch.jpg",
    },
  ];

  /* ========================================================================
     3. STATE INITIALIZATION (Supports ?vertical=rawnaq|miqyas|madar)
     ======================================================================== */
  const params = new URLSearchParams(window.location.search);
  const initVert = ["rawnaq", "miqyas", "madar"].includes(params.get("vertical")) ? params.get("vertical") : "rawnaq";
  const initLang = params.get("lang") === "en" ? "en" : "ar";
  const initView = params.get("view") === "mobile" ? "mobile" : "web";

  const state = {
    lang: initLang,
    vertical: initVert,
    view: initView,
    mobileTab: "home",

    rawnaqCat: "all",
    rawnaqSearch: "",
    miqyasCat: "all",
    miqyasSearch: "",
    madarCat: "all",
    madarSearch: "",
    madarSort: "featured",

    rawnaq: {
      editionId: "oud-mamlakah",
      boxId: "velvet",
      plaqueId: "gold24",
      engravingText: initLang === "en" ? "QAWAM 2026" : "قَوَام ٢٠٢٦",
      monogramText: "EST. 2026",
    },

    miqyas: {
      wMm: 420,
      hMm: 280,
      qty: 28,
      substrateId: "acrylic5",
      ledId: "warm3000",
      presetId: "mq-acrylic-facade",
      signText: "QAWAM ATELIER",
      preflight: {
        cutLine: true,
        bleedSafe: true,
        grommets: false,
        dpiCheck: true,
      },
    },

    activeInspect: null,

    madar: {
      compareIds: ["edge-npu-x4", "lorawan-gw-pro", "thermal-vision-node"],
      bulkQuantities: {
        "edge-npu-x4": 12,
        "lorawan-gw-pro": 8,
        "thermal-vision-node": 4,
        "poe-switch-24p": 2,
      },
    },

    cart: [
      {
        uid: "seed-1",
        vertical: "rawnaq",
        sku: "RWN-OUD-100",
        titleAr: "عود المملكة إكستريت 100 مل",
        titleEn: "Oud Al-Mamlakah Extrait 100ml",
        detailAr: "صندوق: مخمل أوبسيديان | لوحة: ذهب مصقول 24K | نقش: قَوَام ٢٠٢٦",
        detailEn: "Box: Obsidian Velvet | Plaque: Burnished Gold 24K | Etch: QAWAM 2026",
        qty: 1,
        unitPriceSar: 1070,
        weightGrams: 760,
        image: "assets/images/rawnaq-oud-mamlakah.jpg",
      },
    ],
  };

  /* ========================================================================
     4. ZERO-FLOAT INTEGER CPQ ENGINES
     ======================================================================== */
  function clampInt(val, min, max) {
    const n = parseInt(val, 10);
    if (Number.isNaN(n)) return min;
    return Math.min(max, Math.max(min, n));
  }

  function computeRawnaqPricing() {
    const ed = RAWNAQ_EDITIONS.find((e) => e.id === state.rawnaq.editionId) || RAWNAQ_EDITIONS[0];
    const box = RAWNAQ_BOXES.find((b) => b.id === state.rawnaq.boxId) || RAWNAQ_BOXES[0];
    const plaque = RAWNAQ_PLAQUES.find((p) => p.id === state.rawnaq.plaqueId) || RAWNAQ_PLAQUES[0];
    const unitPriceSar = ed.priceSar + box.extraSar + plaque.extraSar;
    const weightGrams = ed.weightGrams + box.extraGrams;
    return { ed, box, plaque, unitPriceSar, weightGrams };
  }

  function computeMiqyasCPQ() {
    const wMm = clampInt(state.miqyas.wMm, 150, 2400);
    const hMm = clampInt(state.miqyas.hMm, 100, 1200);
    const qty = clampInt(state.miqyas.qty, 1, 500);
    const sub = MIQYAS_SUBSTRATES.find((s) => s.id === state.miqyas.substrateId) || MIQYAS_SUBSTRATES[0];
    const led = MIQYAS_LEDS.find((l) => l.id === state.miqyas.ledId) || MIQYAS_LEDS[0];

    const usableW = sub.stockW - 2 * sub.margin;
    let best = null;

    if (!sub.isRoll) {
      const usableH = sub.stockH - 2 * sub.margin;
      for (const c of [
        { rot: 0, pw: wMm, ph: hMm },
        { rot: 90, pw: hMm, ph: wMm },
      ]) {
        if (c.pw <= usableW && c.ph <= usableH) {
          const cols = Math.floor((usableW + sub.kerf) / (c.pw + sub.kerf));
          const rows = Math.floor((usableH + sub.kerf) / (c.ph + sub.kerf));
          const perSheet = cols * rows;
          if (!best || perSheet > best.perSheet) best = { ...c, cols, rows, perSheet };
        }
      }
      if (!best) {
        best = { rot: 0, pw: Math.min(wMm, usableW), ph: Math.min(hMm, usableH), cols: 1, rows: 1, perSheet: 1 };
      }
      const sheetsRequired = Math.ceil(qty / best.perSheet);
      const usedAreaMm2 = qty * wMm * hMm;
      const stockAreaMm2 = sheetsRequired * sub.stockW * sub.stockH;
      const utilizationPct = Math.min(100, Math.max(1, Math.round((usedAreaMm2 * 100) / stockAreaMm2)));
      const wastePct = 100 - utilizationPct;

      const pieceAreaCostSar = Math.max(22, Math.round((wMm * hMm * sub.ratePerM2Sar) / 1000000));
      const grommetSar = state.miqyas.preflight.grommets ? 12 : 0;
      const unitGrossSar = pieceAreaCostSar + led.extraSar + grommetSar;
      const grossSubtotalSar = unitGrossSar * qty;
      const tierDiscountPct = qty >= 100 ? 18 : qty >= 25 ? 10 : 0;
      const discountSar = Math.round((grossSubtotalSar * tierDiscountPct) / 100);
      const netPriceSar = grossSubtotalSar - discountSar;

      const pieceGrams = Math.round((wMm * hMm * sub.gramsPerM2) / 1000000) + led.extraGrams;
      const totalWeightGrams = pieceGrams * qty;

      return {
        isRoll: false,
        sub,
        led,
        wMm,
        hMm,
        qty,
        best,
        sheetsRequired,
        rollLengthMm: 0,
        utilizationPct,
        wastePct,
        tierDiscountPct,
        discountSar,
        netPriceSar,
        pieceGrams,
        totalWeightGrams,
      };
    }

    for (const c of [
      { rot: 0, pw: wMm, ph: hMm },
      { rot: 90, pw: hMm, ph: wMm },
    ]) {
      if (c.pw <= usableW) {
        const cols = Math.floor((usableW + sub.kerf) / (c.pw + sub.kerf));
        const rowsNeeded = Math.ceil(qty / cols);
        const rollLengthMm = 2 * sub.margin + rowsNeeded * c.ph + (rowsNeeded - 1) * sub.kerf;
        if (!best || rollLengthMm < best.rollLengthMm) {
          best = { ...c, cols, rows: rowsNeeded, perSheet: qty, rollLengthMm };
        }
      }
    }
    if (!best) {
      best = { rot: 0, pw: Math.min(wMm, usableW), ph: hMm, cols: 1, rows: qty, perSheet: qty, rollLengthMm: 2 * sub.margin + qty * hMm };
    }

    const usedAreaMm2 = qty * wMm * hMm;
    const stockAreaMm2 = sub.stockW * best.rollLengthMm;
    const utilizationPct = Math.min(100, Math.max(1, Math.round((usedAreaMm2 * 100) / stockAreaMm2)));
    const wastePct = 100 - utilizationPct;

    const pieceAreaCostSar = Math.max(18, Math.round((wMm * hMm * sub.ratePerM2Sar) / 1000000));
    const grommetSar = state.miqyas.preflight.grommets ? 12 : 0;
    const unitGrossSar = pieceAreaCostSar + led.extraSar + grommetSar;
    const grossSubtotalSar = unitGrossSar * qty;
    const tierDiscountPct = qty >= 100 ? 18 : qty >= 25 ? 10 : 0;
    const discountSar = Math.round((grossSubtotalSar * tierDiscountPct) / 100);
    const netPriceSar = grossSubtotalSar - discountSar;

    const pieceGrams = Math.round((wMm * hMm * sub.gramsPerM2) / 1000000) + led.extraGrams;
    const totalWeightGrams = pieceGrams * qty;

    return {
      isRoll: true,
      sub,
      led,
      wMm,
      hMm,
      qty,
      best,
      sheetsRequired: 1,
      rollLengthMm: best.rollLengthMm,
      utilizationPct,
      wastePct,
      tierDiscountPct,
      discountSar,
      netPriceSar,
      pieceGrams,
      totalWeightGrams,
    };
  }

  function computeMadarBulk() {
    let totalUnits = 0;
    let grossSar = 0;
    let totalWatts = 0;
    let totalWeightGrams = 0;
    const activeLines = [];

    for (const dev of MADAR_DEVICES) {
      const q = clampInt(state.madar.bulkQuantities[dev.id] || 0, 0, 500);
      if (q > 0) {
        totalUnits += q;
        grossSar += q * dev.priceSar;
        totalWatts += q * dev.powerWatts;
        totalWeightGrams += q * dev.weightGrams;
        activeLines.push({ dev, qty: q, lineGross: q * dev.priceSar });
      }
    }

    const tierPct = totalUnits >= 200 ? 22 : totalUnits >= 50 ? 15 : totalUnits >= 10 ? 8 : 0;
    const discountSar = Math.round((grossSar * tierPct) / 100);
    const netSar = grossSar - discountSar;
    return { totalUnits, grossSar, tierPct, discountSar, netSar, totalWatts, totalWeightGrams, activeLines };
  }

  function computeCartSummary() {
    let itemCount = 0;
    let subtotalSar = 0;
    let totalWeightGrams = 0;
    for (const item of state.cart) {
      itemCount += item.qty;
      subtotalSar += item.unitPriceSar * item.qty;
      totalWeightGrams += item.weightGrams * item.qty;
    }
    const vatSar = Math.round((subtotalSar * 15) / 100);
    const grandTotalSar = subtotalSar + vatSar;
    return { itemCount, subtotalSar, vatSar, grandTotalSar, totalWeightGrams };
  }

  /* ========================================================================
     5. HELPERS & MOTION
     ======================================================================== */
  function escHtml(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function t(key) {
    return I18N[state.lang][key] || key;
  }

  function formatMoney(sar) {
    return `${Number(sar).toLocaleString("en-US")} ${t("sar")}`;
  }

  function formatKg(grams) {
    return `${(grams / 1000).toFixed(2)} kg`;
  }

  function animateWorldEnter(el) {
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof el.animate === "function") {
      el.animate(
        [
          { opacity: 0.72, transform: "translateY(10px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: 240, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
      );
    }
  }

  let toastTimer = null;
  function showToast(msg) {
    const region = document.getElementById("toastRegion");
    if (!region) return;
    region.innerHTML = `<div class="toast-pill">${escHtml(msg)}</div>`;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      region.innerHTML = "";
    }, 2600);
  }

  /* ========================================================================
     6. WORLD 01 RENDERER: RAWNAQ (Alabaster Editorial Maison)
     ======================================================================== */
  function renderRawnaqWorld() {
    const isAr = state.lang === "ar";
    document.getElementById("rawnaqHeroTitle").textContent = t("r_hero_title");
    document.getElementById("rawnaqHeroDesc").textContent = t("r_hero_desc");
    document.getElementById("rawnaqSearchInput").placeholder = t("r_search_ph");

    // Editorial Hero Photograph
    const rawnaqHeroAlt = isAr
      ? "زجاجة عطر عنبر ذهبي فاخرة على حرير دافئ في استوديو رونق"
      : "Amber glass luxury fragrance flacon draped on champagne silk in RAWNAQ Atelier";
    document.getElementById("rawnaqHeroPlinth").innerHTML = `
      <img src="assets/images/rawnaq-hero.jpg" width="1200" height="1500" loading="eager" decoding="async" alt="${escHtml(rawnaqHeroAlt)}" />`;

    // Lookbook Gallery & Category Filter
    const cats = [t("all_cats"), ...new Set(RAWNAQ_EDITIONS.map((e) => (isAr ? e.categoryAr : e.categoryEn)))];
    if (!cats.includes(state.rawnaqCat)) state.rawnaqCat = cats[0];

    const pillsHtml = cats
      .map(
        (cat) =>
          `<button type="button" class="cat-pill ${cat === state.rawnaqCat ? "is-active" : ""}" data-rawnaq-cat="${escHtml(cat)}">${escHtml(cat)}</button>`
      )
      .join("");
    document.getElementById("rawnaqCategoryPills").innerHTML = pillsHtml;
    if (state.vertical === "rawnaq") document.getElementById("mobileCategoryRail").innerHTML = pillsHtml;

    const q = state.rawnaqSearch.trim().toLowerCase();
    const filtered = RAWNAQ_EDITIONS.filter((it) => {
      const c = isAr ? it.categoryAr : it.categoryEn;
      const matchCat = state.rawnaqCat === t("all_cats") || c === state.rawnaqCat;
      const hay = `${it.nameAr} ${it.nameEn} ${it.sku} ${it.specAr} ${it.specEn}`.toLowerCase();
      return matchCat && (!q || hay.includes(q));
    });

    const grid = document.getElementById("rawnaqCatalogGrid");
    if (!filtered.length) {
      grid.innerHTML = `<p class="rawnaq-sub">${escHtml(t("no_results"))}</p>`;
    } else {
      grid.innerHTML = filtered
        .map((it, idx) => {
          const isFeature = idx === 0 && filtered.length > 1;
          const title = isAr ? it.nameAr : it.nameEn;
          const cat = isAr ? it.categoryAr : it.categoryEn;
          const spec = isAr ? it.specAr : it.specEn;

          return `
          <article class="rawnaq-plate ${isFeature ? "rawnaq-plate-feature" : ""}">
            <div class="rawnaq-plate-frame">
              <button type="button" class="img-inspect-trigger" data-inspect="rawnaq:${it.id}" aria-label="${escHtml(t("inspect_btn"))}: ${escHtml(title)}">
                <img src="${escHtml(it.image)}" width="1200" height="${isFeature ? 900 : 1500}" loading="eager" decoding="async" alt="${escHtml(title)}" />
              </button>
            </div>
            <div class="rawnaq-plate-body">
              <div class="rawnaq-plate-meta">
                <span class="rawnaq-plate-cat">${escHtml(cat)}</span>
                <span class="num" dir="ltr">${escHtml(it.sku)}</span>
              </div>
              <h3 class="rawnaq-plate-title">
                <button type="button" class="card-title-btn" data-inspect="rawnaq:${it.id}">${escHtml(title)}</button>
              </h3>
              <p class="rawnaq-plate-note">${escHtml(spec)}</p>
              <div class="rawnaq-plate-foot">
                <span class="rawnaq-plate-price num" dir="ltr">${formatMoney(it.priceSar)}</span>
                <div class="rawnaq-plate-actions">
                  <button type="button" class="btn-primary btn-sm" data-rawnaq-add="${it.id}">${escHtml(t("add_cart"))}</button>
                  <button type="button" class="btn-secondary btn-sm" data-rawnaq-load="${it.id}">${escHtml(t("send_studio"))}</button>
                  <button type="button" class="btn-secondary btn-sm" data-inspect="rawnaq:${it.id}">${escHtml(t("inspect_btn"))}</button>
                </div>
              </div>
            </div>
          </article>`;
        })
        .join("");
    }

    // Salon Atelier Controls & Editorial Presentation Tray
    const select = document.getElementById("rawnaqEditionSelect");
    select.innerHTML = RAWNAQ_EDITIONS.map(
      (ed) =>
        `<option value="${ed.id}" ${ed.id === state.rawnaq.editionId ? "selected" : ""}>${escHtml(
          isAr ? ed.nameAr : ed.nameEn
        )} — ${ed.priceSar} ${t("sar")}</option>`
    ).join("");

    document.getElementById("rawnaqBoxOptions").innerHTML = RAWNAQ_BOXES.map(
      (b) => `
      <button type="button" class="swatch-btn ${b.id === state.rawnaq.boxId ? "is-selected" : ""}" data-rawnaq-box="${b.id}" role="radio" aria-checked="${b.id === state.rawnaq.boxId}">
        <span>${escHtml(isAr ? b.nameAr : b.nameEn)}</span>
        <span class="swatch-chip-price num" dir="ltr">${b.extraSar > 0 ? `+${b.extraSar} ${t("sar")}` : t("included_lbl")}</span>
      </button>`
    ).join("");

    document.getElementById("rawnaqPlaqueOptions").innerHTML = RAWNAQ_PLAQUES.map(
      (p) => `
      <button type="button" class="swatch-btn ${p.id === state.rawnaq.plaqueId ? "is-selected" : ""}" data-rawnaq-plaque="${p.id}" role="radio" aria-checked="${p.id === state.rawnaq.plaqueId}">
        <span>${escHtml(isAr ? p.nameAr : p.nameEn)}</span>
        <span class="swatch-chip-price num" dir="ltr">+${p.extraSar} ${t("sar")}</span>
      </button>`
    ).join("");

    const { ed, box, plaque, unitPriceSar, weightGrams } = computeRawnaqPricing();
    const engrave = (state.rawnaq.engravingText || "").trim() || (isAr ? "قَوَام" : "QAWAM");
    const mono = (state.rawnaq.monogramText || "").trim() || "2026";
    const trayCaptionColor = box.id === "shagreen" ? "#2B251F" : "#E4DED3";

    document.getElementById("rawnaqSvgStage").innerHTML = `
      <div class="canvas-bar">
        <span class="canvas-title">${escHtml(isAr ? ed.nameAr : ed.nameEn)}</span>
        <span class="canvas-meta num" dir="ltr">${escHtml(ed.sku)}</span>
      </div>
      <div class="rawnaq-tray-box" style="background-color:${box.fill}; border-color:${box.stroke};">
        <div class="rawnaq-tray-photo-well">
          <button type="button" class="img-inspect-trigger" data-inspect="rawnaq:${ed.id}" aria-label="${escHtml(t("inspect_btn"))}: ${escHtml(isAr ? ed.nameAr : ed.nameEn)}">
            <img src="${escHtml(ed.image)}" width="800" height="1000" loading="eager" decoding="async" alt="${escHtml(isAr ? ed.nameAr : ed.nameEn)}" />
          </button>
        </div>
        <div class="rawnaq-tray-plaque-side">
          <span class="rawnaq-tray-caption">${escHtml(isAr ? `صندوق ${box.nameAr}` : `${box.nameEn} Case`)}</span>
          <div class="rawnaq-engraved-plaque" style="background-color:${plaque.fill}; color:${plaque.text};">
            <span class="rawnaq-plaque-line" id="rawnaqLivePlaqueText">${escHtml(engrave)}</span>
            <span class="rawnaq-plaque-mono num" dir="ltr">${escHtml(mono)}</span>
          </div>
          <span class="rawnaq-tray-caption" style="color:${trayCaptionColor};">${escHtml(isAr ? plaque.nameAr : plaque.nameEn)}</span>
        </div>
      </div>`;
    const firstCaption = document.querySelector(".rawnaq-tray-box .rawnaq-tray-caption");
    if (firstCaption) firstCaption.style.color = trayCaptionColor;

    document.getElementById("rawnaqMetrics").innerHTML = `
      <div class="metric-cell">
        <span class="metric-label">${isAr ? "الإصدار" : "Edition"}</span>
        <span class="metric-val num" dir="ltr">${formatMoney(ed.priceSar)}</span>
      </div>
      <div class="metric-cell">
        <span class="metric-label">${isAr ? "التغليف واللوحة" : "Box & Plaque"}</span>
        <span class="metric-val num" dir="ltr">+${formatMoney(box.extraSar + plaque.extraSar)}</span>
      </div>
      <div class="metric-cell">
        <span class="metric-label">${isAr ? "الوزن" : "Weight"}</span>
        <span class="metric-val num" dir="ltr">${weightGrams} g</span>
      </div>
      <div class="metric-cell">
        <span class="metric-label">${isAr ? "الإجمالي" : "Final Price"}</span>
        <span class="metric-val metric-val-accent num" dir="ltr">${formatMoney(unitPriceSar)}</span>
      </div>`;
  }

  /* ========================================================================
     7. WORLD 02 RENDERER: MIQYAS (Dark Blueprint Workbench + Horizontal Ledger)
     ======================================================================== */
  function resolveMiqyasRefItem() {
    const byId = MIQYAS_CATALOG.find((x) => x.id === state.miqyas.presetId);
    if (byId) return byId;
    if (state.miqyas.substrateId === "forex10") return MIQYAS_CATALOG[1];
    if (state.miqyas.substrateId === "banner440" || state.miqyas.substrateId === "banner610") return MIQYAS_CATALOG[2];
    if (state.miqyas.ledId === "neonhalo") return MIQYAS_CATALOG[3];
    return MIQYAS_CATALOG[0];
  }

  function renderMiqyasWorld() {
    const isAr = state.lang === "ar";
    document.getElementById("miqyasHeroTitle").textContent = t("m_hero_title");
    document.getElementById("miqyasHeroDesc").textContent = t("m_hero_desc");
    document.getElementById("miqyasSearchInput").placeholder = t("m_search_ph");

    const presetChipsEl = document.getElementById("miqyasPresetChips");
    if (presetChipsEl) {
      const chipsHtml = MIQYAS_CATALOG.map((it) => {
        const shortAr = it.id === "mq-acrylic-facade" ? "أكريليك 3000K" : it.id === "mq-forex-wayfinding" ? "فوركس إرشادي" : it.id === "mq-banner-expo" ? "رول لاتكس 610g" : "هالة زمردية";
        const shortEn = it.id === "mq-acrylic-facade" ? "Acrylic 3000K" : it.id === "mq-forex-wayfinding" ? "Forex Sign" : it.id === "mq-banner-expo" ? "Roll Press" : "Neon Halo";
        return `<button type="button" class="preset-chip ${it.id === state.miqyas.presetId ? "is-active" : ""}" data-miqyas-load="${it.id}">${escHtml(isAr ? shortAr : shortEn)}</button>`;
      }).join("");
      presetChipsEl.innerHTML = `${chipsHtml}<a href="#miqyasLedger" class="btn-secondary btn-sm">${escHtml(t("m_jump_ledger"))}</a>`;
    }

    const refItem = resolveMiqyasRefItem();
    const refStripEl = document.getElementById("miqyasRefStrip");
    if (refStripEl && refItem) {
      const refTitle = isAr ? refItem.nameAr : refItem.nameEn;
      refStripEl.innerHTML = `
        <div class="miqyas-ref-lead">
          <img class="miqyas-ref-thumb" src="${escHtml(refItem.image)}" width="400" height="300" loading="eager" alt="${escHtml(refTitle)}" />
          <div class="miqyas-ref-meta">
            <span class="miqyas-ref-label">${escHtml(t("ref_model_lbl"))} · <span class="num" dir="ltr">${escHtml(refItem.sku)}</span></span>
            <span class="miqyas-ref-name">${escHtml(refTitle)}</span>
          </div>
        </div>
        <button type="button" class="btn-secondary btn-sm" data-inspect="miqyas:${refItem.id}">${escHtml(t("inspect_model_btn"))}</button>`;
    }

    const subSel = document.getElementById("miqyasSubstrateSelect");
    subSel.innerHTML = MIQYAS_SUBSTRATES.map(
      (s) => `<option value="${s.id}" ${s.id === state.miqyas.substrateId ? "selected" : ""}>${escHtml(isAr ? s.nameAr : s.nameEn)}</option>`
    ).join("");

    document.getElementById("miqyasLedOptions").innerHTML = MIQYAS_LEDS.map(
      (l) => `
      <button type="button" class="option-btn ${l.id === state.miqyas.ledId ? "is-selected" : ""}" data-miqyas-led="${l.id}" role="radio" aria-checked="${l.id === state.miqyas.ledId}">
        <span>${escHtml(isAr ? l.nameAr : l.nameEn)}</span>
        <span class="option-btn-meta num" dir="ltr">${l.extraSar > 0 ? `+${l.extraSar} ${t("sar")}` : escHtml(t("included_lbl"))}</span>
      </button>`
    ).join("");

    const checkDefs = [
      { key: "cutLine", labelAr: "خط القص (Cut Line)", labelEn: "Cut Line" },
      { key: "bleedSafe", labelAr: "أمان 3 مم (Bleed)", labelEn: "3mm Bleed Safe" },
      { key: "grommets", labelAr: "حلقات معدنية (+12)", labelEn: "Grommets (+12)" },
      { key: "dpiCheck", labelAr: "فحص دقة DPI", labelEn: "DPI Check" },
    ];
    document.getElementById("miqyasPreflightChecks").innerHTML = checkDefs
      .map(
        (c) => `
      <label class="check-pill">
        <input type="checkbox" data-miqyas-pf="${c.key}" ${state.miqyas.preflight[c.key] ? "checked" : ""} />
        <span>${escHtml(isAr ? c.labelAr : c.labelEn)}</span>
      </label>`
      )
      .join("");

    const cpq = computeMiqyasCPQ();
    const dpiOk = cpq.wMm <= 1600 && cpq.hMm <= 1200;
    document.getElementById("miqyasDpiBadge").textContent = state.miqyas.preflight.dpiCheck
      ? dpiOk
        ? "300 DPI OPTIMAL"
        : "150 DPI WIDE FORMAT"
      : "DPI CHECK OFF";

    // Rich Physical Signage Mockup SVG
    const scale = Math.min(204 / cpq.wMm, 118 / cpq.hMm);
    const drawW = Math.max(76, Math.round(cpq.wMm * scale));
    const drawH = Math.max(48, Math.round(cpq.hMm * scale));
    const sx = Math.round((300 - drawW) / 2);
    const sy = Math.round((194 - drawH) / 2);

    const isForex = cpq.sub.id === "forex10";
    const isRollMat = cpq.sub.isRoll;
    const plateFill = isForex ? "#E8EDF2" : isRollMat ? "#1C293B" : "#151E2B";
    const plateBorder = isForex ? "#94A3B8" : "#475569";
    const faceTextFill = isForex ? "#0F172A" : "#F8FAFC";
    const motifColor = isForex ? "#0F172A" : cpq.led.id === "neonhalo" ? "#34D399" : "#D4AF37";
    const signLabel = ((state.miqyas.signText || "").trim() || "QAWAM ATELIER").slice(0, 22);

    const ledHaloSvg =
      cpq.led.id !== "off"
        ? `<rect x="${sx - 4}" y="${sy - 4}" width="${drawW + 8}" height="${drawH + 8}" rx="6" stroke="${cpq.led.stroke}" stroke-width="6" opacity="0.42" filter="url(#miqyasLedGlow)"/>
           <rect x="${sx - 2}" y="${sy - 2}" width="${drawW + 4}" height="${drawH + 4}" rx="5" stroke="${cpq.led.stroke}" stroke-width="2" opacity="0.88"/>`
        : "";
    const standoffsSvg =
      cpq.sub.id === "acrylic5"
        ? `<circle cx="${sx + 9}" cy="${sy + 9}" r="3" fill="#D4AF37" stroke="#0B121C" stroke-width="0.8"/>
           <circle cx="${sx + drawW - 9}" cy="${sy + 9}" r="3" fill="#D4AF37" stroke="#0B121C" stroke-width="0.8"/>
           <circle cx="${sx + 9}" cy="${sy + drawH - 9}" r="3" fill="#D4AF37" stroke="#0B121C" stroke-width="0.8"/>
           <circle cx="${sx + drawW - 9}" cy="${sy + drawH - 9}" r="3" fill="#D4AF37" stroke="#0B121C" stroke-width="0.8"/>`
        : "";
    const emblemSvg = isForex
      ? `<path d="M144 ${sy + Math.round(drawH * 0.34)}h12m0 0l-4-4m4 4l-4 4" stroke="${motifColor}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`
      : `<polygon points="150,${sy + Math.round(drawH * 0.22)} 159,${sy + Math.round(drawH * 0.42)} 141,${sy + Math.round(drawH * 0.42)}" stroke="${motifColor}" stroke-width="1.6" fill="none"/>`;

    const cutRect = state.miqyas.preflight.cutLine
      ? `<rect x="${sx}" y="${sy}" width="${drawW}" height="${drawH}" rx="2" stroke="#34D399" stroke-width="1.4" stroke-dasharray="5 3"/>`
      : "";
    const bleedRect = state.miqyas.preflight.bleedSafe
      ? `<rect x="${sx + 6}" y="${sy + 6}" width="${Math.max(16, drawW - 12)}" height="${Math.max(16, drawH - 12)}" rx="1" stroke="#F59E0B" stroke-width="1" stroke-dasharray="3 3"/>`
      : "";
    const grommetsSvg = state.miqyas.preflight.grommets
      ? `<circle cx="${sx + 10}" cy="${sy + 10}" r="3.5" fill="#FBBF24" stroke="#0B111A" stroke-width="1"/>
         <circle cx="${sx + drawW - 10}" cy="${sy + 10}" r="3.5" fill="#FBBF24" stroke="#0B111A" stroke-width="1"/>
         <circle cx="${sx + 10}" cy="${sy + drawH - 10}" r="3.5" fill="#FBBF24" stroke="#0B111A" stroke-width="1"/>
         <circle cx="${sx + drawW - 10}" cy="${sy + drawH - 10}" r="3.5" fill="#FBBF24" stroke="#0B111A" stroke-width="1"/>`
      : "";

    document.getElementById("miqyasSignSvg").innerHTML = `
      <svg viewBox="0 0 300 205" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Signage Pre-Flight Mockup">
        <defs>
          <filter id="miqyasLedGlow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="4" result="blur"/>
          </filter>
        </defs>
        <rect x="6" y="6" width="288" height="193" rx="8" fill="#0B121C" stroke="#223247" stroke-width="1"/>
        ${ledHaloSvg}
        <rect x="${sx}" y="${sy}" width="${drawW}" height="${drawH}" rx="3" fill="${plateFill}" stroke="${plateBorder}" stroke-width="1.2"/>
        ${cutRect}
        ${bleedRect}
        ${standoffsSvg}
        ${grommetsSvg}
        ${emblemSvg}
        <text x="150" y="${sy + Math.round(drawH * 0.65)}" text-anchor="middle" fill="${faceTextFill}" font-size="11" font-weight="700" font-family="Plus Jakarta Sans, IBM Plex Sans Arabic, sans-serif">${escHtml(signLabel)}</text>
        <text x="150" y="${Math.max(20, sy - 8)}" text-anchor="middle" fill="#34D399" font-size="11" font-weight="600" font-family="JetBrains Mono, monospace">W ${cpq.wMm} mm x H ${cpq.hMm} mm</text>
        <text x="150" y="191" text-anchor="middle" fill="#9EB0C4" font-size="11" font-family="JetBrains Mono, monospace">${isRollMat ? "ROLL MEDIA" : "SHEET STOCK"} | LED ${cpq.led.watts}W | QTY ${cpq.qty}</text>
      </svg>`;

    // Single-Path 2D Cut-Sheet / Roll Nesting Map SVG
    const stockW = cpq.sub.stockW;
    const stockH = cpq.isRoll ? Math.max(cpq.rollLengthMm, cpq.best.ph + 2 * cpq.sub.margin) : cpq.sub.stockH;
    const mScale = Math.min(264 / stockW, 158 / stockH);
    const drawSheetW = Math.max(70, Math.round(stockW * mScale));
    const drawSheetH = Math.max(50, Math.round(stockH * mScale));
    const mx = Math.round((300 - drawSheetW) / 2);
    const my = Math.round((180 - drawSheetH) / 2);

    const piecesOnFirst = cpq.isRoll ? cpq.qty : Math.min(cpq.qty, cpq.best.perSheet);
    const pathCmds = [];
    const maxVisPieces = Math.min(piecesOnFirst, 64);
    for (let i = 0; i < maxVisPieces; i++) {
      const col = i % cpq.best.cols;
      const row = Math.floor(i / cpq.best.cols);
      const pxMm = cpq.sub.margin + col * (cpq.best.pw + cpq.sub.kerf);
      const pyMm = cpq.sub.margin + row * (cpq.best.ph + cpq.sub.kerf);
      const rx = mx + Math.round(pxMm * mScale);
      const ry = my + Math.round(pyMm * mScale);
      const rw = Math.max(4, Math.round(cpq.best.pw * mScale));
      const rh = Math.max(4, Math.round(cpq.best.ph * mScale));
      if (rx + rw <= mx + drawSheetW + 1 && ry + rh <= my + drawSheetH + 1) {
        pathCmds.push(`M${rx} ${ry}h${rw}v${rh}h-${rw}z`);
      }
    }

    const orientExtra = piecesOnFirst > maxVisPieces ? ` · ${maxVisPieces}/${piecesOnFirst} SHOWN` : "";
    document.getElementById("miqyasOrientBadge").textContent = `${cpq.best.rot}° BEST FIT (${cpq.utilizationPct}%)${orientExtra}`;

    const stockDimText = cpq.isRoll
      ? `${stockW}mm x ${(cpq.rollLengthMm / 1000).toFixed(2)}m`
      : `${stockW} x ${stockH} mm`;

    document.getElementById("miqyasNestSvg").innerHTML = `
      <svg viewBox="0 0 300 205" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="2D Nesting Map">
        <rect x="6" y="6" width="288" height="193" rx="8" fill="#0B121C" stroke="#223247" stroke-width="1"/>
        <rect x="${mx}" y="${my}" width="${drawSheetW}" height="${drawSheetH}" rx="2" fill="#111B29" stroke="#9EB0C4" stroke-width="1.2"/>
        <path d="${pathCmds.join(" ")}" fill="#10B981" fill-opacity="0.28" stroke="#34D399" stroke-width="1"/>
        <text x="150" y="193" text-anchor="middle" fill="#CBD5E1" font-size="11" font-family="JetBrains Mono, monospace">${stockDimText}</text>
      </svg>`;

    const stockNeedVal = cpq.isRoll
      ? `${(cpq.rollLengthMm / 1000).toFixed(2)} m`
      : `${cpq.sheetsRequired} ${isAr ? "لوح" : "sheets"}`;
    const tierDiscHtml =
      cpq.tierDiscountPct > 0
        ? `<span class="num" dir="ltr">${cpq.tierDiscountPct}%</span> · <span class="num" dir="ltr">-${cpq.discountSar.toLocaleString("en-US")}</span> ${escHtml(t("sar"))}`
        : `<span class="num" dir="ltr">0%</span>`;

    document.getElementById("miqyasMetrics").innerHTML = `
      <div class="metric-cell">
        <span class="metric-label">${isAr ? "المطلوب من الخامة" : "Stock Needed"}</span>
        <span class="metric-val num" dir="ltr">${stockNeedVal}</span>
      </div>
      <div class="metric-cell">
        <span class="metric-label">${isAr ? "الاستغلال / الهدر" : "Yield / Waste"}</span>
        <span class="metric-val num" dir="ltr">${cpq.utilizationPct}% / ${cpq.wastePct}%</span>
      </div>
      <div class="metric-cell">
        <span class="metric-label">${isAr ? "الوزن الكلي" : "Total Weight"}</span>
        <span class="metric-val num" dir="ltr">${formatKg(cpq.totalWeightGrams)}</span>
      </div>
      <div class="metric-cell">
        <span class="metric-label">${isAr ? "خصم الكميات" : "Tier Discount"}</span>
        <span class="metric-val">${tierDiscHtml}</span>
      </div>
      <div class="metric-cell">
        <span class="metric-label">${isAr ? "القطع باللوح" : "Pieces / Sheet"}</span>
        <span class="metric-val num" dir="ltr">${cpq.isRoll ? cpq.best.cols + "/row" : cpq.best.perSheet}</span>
      </div>
      <div class="metric-cell">
        <span class="metric-label">${isAr ? "الصافي المعتمد" : "Net CPQ Price"}</span>
        <span class="metric-val metric-val-accent num" dir="ltr">${formatMoney(cpq.netPriceSar)}</span>
      </div>`;

    // Horizontal Production Ledger Rows (Larger 220px thumbnails + spec badges + Quick View)
    const cats = [t("all_cats"), ...new Set(MIQYAS_CATALOG.map((e) => (isAr ? e.categoryAr : e.categoryEn)))];
    if (!cats.includes(state.miqyasCat)) state.miqyasCat = cats[0];
    const pillsHtml = cats
      .map(
        (cat) =>
          `<button type="button" class="cat-pill ${cat === state.miqyasCat ? "is-active" : ""}" data-miqyas-cat="${escHtml(cat)}">${escHtml(cat)}</button>`
      )
      .join("");
    document.getElementById("miqyasCategoryPills").innerHTML = pillsHtml;
    if (state.vertical === "miqyas") document.getElementById("mobileCategoryRail").innerHTML = pillsHtml;

    const q = state.miqyasSearch.trim().toLowerCase();
    const filtered = MIQYAS_CATALOG.filter((it) => {
      const c = isAr ? it.categoryAr : it.categoryEn;
      const matchCat = state.miqyasCat === t("all_cats") || c === state.miqyasCat;
      const hay = `${it.nameAr} ${it.nameEn} ${it.sku} ${it.specAr} ${it.specEn}`.toLowerCase();
      return matchCat && (!q || hay.includes(q));
    });

    const rowsEl = document.getElementById("miqyasCatalogRows");
    if (!filtered.length) {
      rowsEl.innerHTML = `<p class="miqyas-sub">${escHtml(t("no_results"))}</p>`;
    } else {
      rowsEl.innerHTML = filtered
        .map((it) => {
          const title = isAr ? it.nameAr : it.nameEn;
          const spec = isAr ? it.specAr : it.specEn;
          const subObj = MIQYAS_SUBSTRATES.find((s) => s.id === it.preset.substrateId) || MIQYAS_SUBSTRATES[0];
          const ledObj = MIQYAS_LEDS.find((l) => l.id === it.preset.ledId) || MIQYAS_LEDS[0];
          return `
          <div class="ledger-row">
            <div class="ledger-thumb">
              <button type="button" class="img-inspect-trigger" data-inspect="miqyas:${it.id}" aria-label="${escHtml(t("inspect_btn"))}: ${escHtml(title)}">
                <img src="${escHtml(it.image)}" width="640" height="400" loading="eager" decoding="async" alt="${escHtml(title)}" />
              </button>
            </div>
            <div class="ledger-info">
              <span class="ledger-sku num" dir="ltr">${escHtml(it.sku)} · ${it.preset.wMm}x${it.preset.hMm}mm</span>
              <span class="ledger-title">
                <button type="button" class="card-title-btn" data-inspect="miqyas:${it.id}">${escHtml(title)}</button>
              </span>
              <span class="ledger-spec">${escHtml(spec)}</span>
              <div class="ledger-meta-pills">
                <span class="ledger-chip">${escHtml(isAr ? subObj.nameAr : subObj.nameEn)}</span>
                <span class="ledger-chip">${escHtml(isAr ? ledObj.nameAr : ledObj.nameEn)}</span>
                <span class="ledger-chip num" dir="ltr">${it.preset.qty} ${isAr ? "قطعة" : "pcs"}</span>
              </div>
            </div>
            <div class="ledger-price-col">
              <span class="ledger-price num" dir="ltr">${formatMoney(it.priceSar)}</span>
              <span class="ledger-weight num" dir="ltr">${formatKg(it.weightGrams)}</span>
            </div>
            <div class="ledger-actions">
              <button type="button" class="btn-primary btn-sm" data-miqyas-add="${it.id}">${escHtml(t("add_cart"))}</button>
              <button type="button" class="btn-secondary btn-sm" data-miqyas-load="${it.id}">${escHtml(t("send_studio"))}</button>
              <button type="button" class="btn-secondary btn-sm" data-inspect="miqyas:${it.id}">${escHtml(t("inspect_btn"))}</button>
            </div>
          </div>`;
        })
        .join("");
    }
  }

  /* ========================================================================
     8. WORLD 03 RENDERER: MADAR (Machined Aluminum + Safety Orange Hardware)
     ======================================================================== */
  function renderMadarWorld() {
    const isAr = state.lang === "ar";
    document.getElementById("madarHeroTitle").textContent = t("d_hero_title");
    document.getElementById("madarHeroDesc").textContent = t("d_hero_desc");
    document.getElementById("madarSearchInput").placeholder = t("d_search_ph");

    const madarHeroAlt = isAr
      ? "هيكل حوسبة صناعي من الألومنيوم المؤكسد مع زعانف تبريد ومنفذي 10G SFP+ من مدار"
      : "CNC anodized aluminum edge compute chassis with machined cooling fins and dual 10G SFP+ ports from MADAR";
    document.getElementById("madarHeroSchematic").innerHTML = `
      <img src="assets/images/madar-hero.jpg" width="1200" height="900" loading="eager" decoding="async" alt="${escHtml(madarHeroAlt)}" />`;

    // Modular 4-Block Hardware Catalog Grid
    const cats = [t("all_cats"), ...new Set(MADAR_DEVICES.map((d) => (isAr ? d.categoryAr : d.categoryEn)))];
    if (!cats.includes(state.madarCat)) state.madarCat = cats[0];
    const pillsHtml = cats
      .map(
        (cat) =>
          `<button type="button" class="cat-pill ${cat === state.madarCat ? "is-active" : ""}" data-madar-cat="${escHtml(cat)}">${escHtml(cat)}</button>`
      )
      .join("");
    document.getElementById("madarCategoryPills").innerHTML = pillsHtml;
    if (state.vertical === "madar") document.getElementById("mobileCategoryRail").innerHTML = pillsHtml;

    const q = state.madarSearch.trim().toLowerCase();
    let filtered = MADAR_DEVICES.filter((it) => {
      const c = isAr ? it.categoryAr : it.categoryEn;
      const matchCat = state.madarCat === t("all_cats") || c === state.madarCat;
      const hay = `${it.nameAr} ${it.nameEn} ${it.sku} ${it.specAr} ${it.specEn}`.toLowerCase();
      return matchCat && (!q || hay.includes(q));
    });

    if (state.madarSort === "price-asc") filtered = [...filtered].sort((a, b) => a.priceSar - b.priceSar);
    if (state.madarSort === "price-desc") filtered = [...filtered].sort((a, b) => b.priceSar - a.priceSar);

    const grid = document.getElementById("madarCatalogGrid");
    if (!filtered.length) {
      grid.innerHTML = `<p class="madar-sub">${escHtml(t("no_results"))}</p>`;
    } else {
      grid.innerHTML = filtered
        .map((d) => {
          const title = isAr ? d.nameAr : d.nameEn;
          const spec = isAr ? d.specAr : d.specEn;
          return `
          <article class="madar-module-card">
            <div class="madar-module-head">
              <span class="num" dir="ltr">${escHtml(d.sku)}</span>
              <span class="num" dir="ltr">${escHtml(d.ipLabel)}</span>
            </div>
            <div class="madar-module-diagram">
              <button type="button" class="img-inspect-trigger" data-inspect="madar:${d.id}" aria-label="${escHtml(t("inspect_btn"))}: ${escHtml(title)}">
                <img src="${escHtml(d.image)}" width="800" height="600" loading="eager" decoding="async" alt="${escHtml(title)}" />
              </button>
            </div>
            <h3 class="madar-module-title">
              <button type="button" class="card-title-btn" data-inspect="madar:${d.id}">${escHtml(title)}</button>
            </h3>
            <p class="madar-module-spec">${escHtml(spec)}</p>
            <div class="madar-module-telemetry num" dir="ltr">
              <span>${escHtml(d.computeLabel)}</span>
              <span>${d.powerWatts}W</span>
              <span>${formatKg(d.weightGrams)}</span>
            </div>
            <div class="madar-module-price num" dir="ltr">${formatMoney(d.priceSar)}</div>
            <div class="madar-module-actions">
              <button type="button" class="btn-primary btn-sm" data-madar-add="${d.id}">${escHtml(t("add_cart"))}</button>
              <button type="button" class="btn-secondary btn-sm" data-madar-load="${d.id}">${escHtml(t("bulk_add5"))}</button>
              <button type="button" class="btn-secondary btn-sm btn-inspect-full" data-inspect="madar:${d.id}">${escHtml(t("inspect_btn"))}</button>
            </div>
          </article>`;
        })
        .join("");
    }

    // Spec Comparison Matrix
    document.getElementById("madarCompareToggles").innerHTML = MADAR_DEVICES.map((d) => {
      const active = state.madar.compareIds.includes(d.id);
      return `<button type="button" class="compare-chip ${active ? "is-selected" : ""}" data-madar-toggle="${d.id}" aria-pressed="${active}">${escHtml(isAr ? d.nameAr : d.nameEn)}</button>`;
    }).join("");

    const selected = MADAR_DEVICES.filter((d) => state.madar.compareIds.includes(d.id));
    const headEl = document.getElementById("madarSpecHead");
    const bodyEl = document.getElementById("madarSpecBody");

    if (selected.length < 2) {
      headEl.innerHTML = "";
      bodyEl.innerHTML = `<tr><td>${escHtml(t("compare_hint"))}</td></tr>`;
    } else {
      headEl.innerHTML = `<tr><th>${escHtml(t("metric_spec"))}</th>${selected.map((d) => `<th>${escHtml(isAr ? d.nameAr : d.nameEn)}</th>`).join("")}</tr>`;
      const maxCompute = Math.max(...selected.map((d) => d.computeScore));
      const minPower = Math.min(...selected.map((d) => d.powerWatts));
      const maxIp = Math.max(...selected.map((d) => d.ipScore));
      const maxMtbf = Math.max(...selected.map((d) => d.mtbfHours));
      const minPrice = Math.min(...selected.map((d) => d.priceSar));

      const rows = [
        { label: isAr ? "القدرة الحاسوبية" : "Compute", vals: selected.map((d) => ({ text: d.computeLabel, win: d.computeScore === maxCompute })) },
        { label: isAr ? "الطاقة" : "Power Draw", vals: selected.map((d) => ({ text: `${d.powerWatts} W`, win: d.powerWatts === minPower })) },
        { label: isAr ? "الحماية" : "Ingress", vals: selected.map((d) => ({ text: d.ipLabel, win: d.ipScore === maxIp })) },
        { label: isAr ? "الربط" : "Uplink", vals: selected.map((d) => ({ text: d.uplinkLabel, win: false })) },
        { label: isAr ? "العمر MTBF" : "MTBF", vals: selected.map((d) => ({ text: `${d.mtbfHours.toLocaleString("en-US")} h`, win: d.mtbfHours === maxMtbf })) },
        { label: isAr ? "السعر" : "Unit Price", vals: selected.map((d) => ({ text: formatMoney(d.priceSar), win: d.priceSar === minPrice })) },
      ];

      bodyEl.innerHTML = rows
        .map(
          (r) =>
            `<tr><td><strong>${escHtml(r.label)}</strong></td>${r.vals
              .map(
                (v) =>
                  `<td class="${v.win ? "spec-winner" : ""} num" dir="ltr">${escHtml(v.text)}${
                    v.win ? `<span class="winner-mark">${escHtml(t("winner"))}</span>` : ""
                  }</td>`
              )
              .join("")}</tr>`
        )
        .join("");
    }

    // Bulk Matrix Rows
    document.getElementById("madarBulkList").innerHTML = MADAR_DEVICES.map((d) => {
      const qVal = clampInt(state.madar.bulkQuantities[d.id] || 0, 0, 500);
      const lineTotal = qVal * d.priceSar;
      const dTitle = isAr ? d.nameAr : d.nameEn;
      return `
        <div class="bulk-sku-row">
          <div class="bulk-sku-lead">
            <img class="bulk-sku-thumb" src="${escHtml(d.image)}" width="400" height="300" loading="eager" alt="${escHtml(dTitle)}" />
            <div class="bulk-sku-meta">
              <span class="bulk-sku-name">${escHtml(dTitle)}</span>
              <span class="bulk-sku-code"><span class="num">${escHtml(d.sku)}</span> · <span class="num">${d.priceSar.toLocaleString("en-US")}</span> ${escHtml(t("sar"))} · <span class="num">${d.powerWatts}W</span></span>
            </div>
          </div>
          <div class="bulk-qty-controls">
            <button type="button" class="qty-step-btn num" dir="ltr" data-bulk-step="${d.id}:-5">-5</button>
            <button type="button" class="qty-step-btn num" dir="ltr" data-bulk-step="${d.id}:-1">-1</button>
            <span class="bulk-qty-val num" dir="ltr">${qVal}</span>
            <button type="button" class="qty-step-btn num" dir="ltr" data-bulk-step="${d.id}:1">+1</button>
            <button type="button" class="qty-step-btn num" dir="ltr" data-bulk-step="${d.id}:10">+10</button>
          </div>
          <span class="bulk-line-price num" dir="ltr">${formatMoney(lineTotal)}</span>
        </div>`;
    }).join("");

    const bulk = computeMadarBulk();
    const madarTierHtml =
      bulk.tierPct > 0
        ? `<span class="num" dir="ltr">${bulk.tierPct}%</span> · <span class="num" dir="ltr">-${bulk.discountSar.toLocaleString("en-US")}</span> ${escHtml(t("sar"))}`
        : `<span class="num" dir="ltr">0%</span>`;
    document.getElementById("madarMetrics").innerHTML = `
      <div class="metric-cell">
        <span class="metric-label">${isAr ? "الوحدات" : "Total Units"}</span>
        <span class="metric-val num" dir="ltr">${bulk.totalUnits}</span>
      </div>
      <div class="metric-cell">
        <span class="metric-label">${isAr ? "خصم الشريحة" : "Tier Discount"}</span>
        <span class="metric-val">${madarTierHtml}</span>
      </div>
      <div class="metric-cell">
        <span class="metric-label">${isAr ? "الطاقة والوزن" : "Power & Weight"}</span>
        <span class="metric-val num" dir="ltr">${bulk.totalWatts}W · ${formatKg(bulk.totalWeightGrams)}</span>
      </div>
      <div class="metric-cell">
        <span class="metric-label">${isAr ? "الصافي" : "Bulk Net"}</span>
        <span class="metric-val metric-val-accent num" dir="ltr">${formatMoney(bulk.netSar)}</span>
      </div>`;
  }

  /* ========================================================================
     9. CART, QUOTE MODAL & GLOBAL CHROME SYNC
     ======================================================================== */
  function renderCart() {
    const isAr = state.lang === "ar";
    const summary = computeCartSummary();
    document.getElementById("headerCartCount").textContent = String(summary.itemCount);
    document.getElementById("mobileCartCount").textContent = String(summary.itemCount);

    const container = document.getElementById("cartItemsContainer");
    if (!state.cart.length) {
      container.innerHTML = `<div class="cart-empty"><p>${escHtml(t("empty_cart"))}</p></div>`;
    } else {
      container.innerHTML = state.cart
        .map((item) => {
          const title = isAr ? item.titleAr : item.titleEn;
          const detail = isAr ? item.detailAr : item.detailEn;
          const fallbackImg =
            item.vertical === "rawnaq"
              ? "assets/images/rawnaq-hero.jpg"
              : item.vertical === "miqyas"
              ? "assets/images/miqyas-acrylic-facade.jpg"
              : "assets/images/madar-hero.jpg";
          const thumb = item.image || fallbackImg;
          return `
          <div class="cart-item-row">
            <div class="cart-item-top">
              <div class="cart-item-lead">
                <img class="cart-item-thumb" src="${escHtml(thumb)}" width="96" height="96" loading="eager" alt="${escHtml(title)}" />
                <div>
                  <div class="cart-item-vert num" dir="ltr">${escHtml(item.vertical.toUpperCase())} · ${escHtml(item.sku)}</div>
                  <div class="cart-item-title">${escHtml(title)}</div>
                </div>
              </div>
              <button type="button" class="cart-remove-btn" data-cart-remove="${item.uid}">${escHtml(t("remove"))}</button>
            </div>
            <div class="cart-item-detail">${escHtml(detail)}</div>
            <div class="cart-item-bottom">
              <div class="bulk-qty-controls">
                <button type="button" class="qty-step-btn num" dir="ltr" data-cart-qty="${item.uid}:-1">-</button>
                <span class="bulk-qty-val num" dir="ltr">${item.qty}</span>
                <button type="button" class="qty-step-btn num" dir="ltr" data-cart-qty="${item.uid}:1">+</button>
              </div>
              <strong class="num" dir="ltr">${formatMoney(item.unitPriceSar * item.qty)}</strong>
            </div>
          </div>`;
        })
        .join("");
    }

    document.getElementById("cartTotalsBox").innerHTML = `
      <div class="total-line"><span>${escHtml(t("subtotal"))}</span><span class="num" dir="ltr">${formatMoney(summary.subtotalSar)}</span></div>
      <div class="total-line"><span>${escHtml(t("vat15"))}</span><span class="num" dir="ltr">${formatMoney(summary.vatSar)}</span></div>
      <div class="total-line"><span>${escHtml(t("ship_weight"))}</span><span class="num" dir="ltr">${formatKg(summary.totalWeightGrams)}</span></div>
      <div class="total-line total-line-grand"><span>${escHtml(t("grand_total"))}</span><span class="num" dir="ltr">${formatMoney(summary.grandTotalSar)}</span></div>`;
  }

  function renderQuoteModal() {
    const isAr = state.lang === "ar";
    const summary = computeCartSummary();
    document.getElementById("quoteIssuerName").textContent = t("q_issuer");
    document.getElementById("quoteIssuerSub").textContent = t("q_sub");

    document.getElementById("quoteItemsBody").innerHTML = state.cart
      .map((item) => {
        const title = isAr ? item.titleAr : item.titleEn;
        const detail = isAr ? item.detailAr : item.detailEn;
        return `
        <tr>
          <td><strong>${escHtml(title)}</strong><br/><span class="cart-item-detail">${escHtml(detail)}</span></td>
          <td class="num" dir="ltr">${escHtml(item.vertical.toUpperCase())}</td>
          <td class="num" dir="ltr">${item.qty}</td>
          <td class="num" dir="ltr">${formatMoney(item.unitPriceSar * item.qty)}</td>
        </tr>`;
      })
      .join("");

    document.getElementById("quoteTotalsSummary").innerHTML = `
      <div class="total-line"><span>${escHtml(t("subtotal"))}</span><span class="num" dir="ltr">${formatMoney(summary.subtotalSar)}</span></div>
      <div class="total-line"><span>${escHtml(t("vat15"))}</span><span class="num" dir="ltr">${formatMoney(summary.vatSar)}</span></div>
      <div class="total-line"><span>${escHtml(t("ship_weight"))}</span><span class="num" dir="ltr">${formatKg(summary.totalWeightGrams)}</span></div>
      <div class="total-line total-line-grand"><span>${escHtml(t("grand_total"))}</span><span class="num" dir="ltr">${formatMoney(summary.grandTotalSar)}</span></div>`;
  }

  function syncChrome() {
    const isAr = state.lang === "ar";
    document.documentElement.lang = state.lang;
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    document.documentElement.dataset.vertical = state.vertical;
    document.documentElement.dataset.view = state.view;

    document.getElementById("skipLink").textContent = t("skip");
    document.getElementById("brandName").textContent = t("brand_name");
    document.getElementById("brandSub").textContent = t("brand_sub");
    document.getElementById("langLabel").textContent = t("lang_toggle");
    document.getElementById("footerCopy").textContent = t("footer_copy");
    document.getElementById("mobileAppSub").textContent = t("mobile_sub");
    document.getElementById("mobileAppTitle").textContent = WORLD_TITLES[state.vertical][state.lang];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.getAttribute("data-i18n");
      if (I18N[state.lang][k]) el.textContent = I18N[state.lang][k];
    });

    document.querySelectorAll("[data-vertical-btn]").forEach((btn) => {
      const active = btn.dataset.verticalBtn === state.vertical;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", String(active));
    });

    const isMobile = state.view === "mobile";
    document.getElementById("mobileChromeTop").hidden = !isMobile;
    document.getElementById("mobileBottomNav").hidden = !isMobile;
    document.getElementById("btnViewWeb").classList.toggle("is-active", !isMobile);
    document.getElementById("btnViewWeb").setAttribute("aria-pressed", String(!isMobile));
    document.getElementById("btnViewMobile").classList.toggle("is-active", isMobile);
    document.getElementById("btnViewMobile").setAttribute("aria-pressed", String(isMobile));

    document.querySelectorAll("[data-world]").forEach((w) => {
      w.hidden = w.dataset.world !== state.vertical;
    });
  }

  function renderAll() {
    syncChrome();
    renderRawnaqWorld();
    renderMiqyasWorld();
    renderMadarWorld();
    renderCart();
    if (state.activeInspect) renderProductModal();
  }

  function addToCart(item) {
    const existing = state.cart.find((c) => c.sku === item.sku && c.detailEn === item.detailEn);
    if (existing) {
      existing.qty += item.qty;
    } else {
      state.cart.push({ ...item, uid: `item-${Date.now()}-${Math.floor(Math.random() * 1000)}` });
    }
    renderCart();
    showToast(`${t("added_toast")} ${state.lang === "ar" ? item.titleAr : item.titleEn}`);
  }

  function openCartDrawer() {
    document.getElementById("cartBackdrop").hidden = false;
    document.getElementById("cartDrawer").hidden = false;
    renderCart();
  }

  function closeCartDrawer() {
    document.getElementById("cartBackdrop").hidden = true;
    document.getElementById("cartDrawer").hidden = true;
  }

  function openQuoteModal() {
    renderQuoteModal();
    document.getElementById("quoteModalBackdrop").hidden = false;
    document.getElementById("quoteModal").hidden = false;
  }

  function closeQuoteModal() {
    document.getElementById("quoteModalBackdrop").hidden = true;
    document.getElementById("quoteModal").hidden = true;
  }

  function renderProductModal() {
    if (!state.activeInspect) return;
    const isAr = state.lang === "ar";
    const { vertical, id } = state.activeInspect;

    let item = null;
    let specs = [];
    let secondaryAction = "";

    if (vertical === "rawnaq") {
      item = RAWNAQ_EDITIONS.find((x) => x.id === id);
      if (!item) return;
      specs = [
        { k: isAr ? "السعر" : "Price", v: formatMoney(item.priceSar), isNum: true },
        { k: isAr ? "الوزن الصافي" : "Net Weight", v: `${item.weightGrams} g`, isNum: true },
        { k: isAr ? "الفئة" : "Category", v: isAr ? item.categoryAr : item.categoryEn, isNum: false },
        { k: isAr ? "التخصيص" : "Personalization", v: isAr ? "نقش ليزر وصندوق إهداء" : "Laser Etch & Case", isNum: false },
      ];
      secondaryAction = `<button type="button" class="btn-secondary btn-full" data-rawnaq-load="${item.id}" data-close-inspect="1">${escHtml(t("send_studio"))}</button>`;
    } else if (vertical === "miqyas") {
      item = MIQYAS_CATALOG.find((x) => x.id === id);
      if (!item) return;
      const subObj = MIQYAS_SUBSTRATES.find((s) => s.id === item.preset.substrateId) || MIQYAS_SUBSTRATES[0];
      const ledObj = MIQYAS_LEDS.find((l) => l.id === item.preset.ledId) || MIQYAS_LEDS[0];
      specs = [
        { k: isAr ? "السعر القياسي" : "Standard Unit", v: formatMoney(item.priceSar), isNum: true },
        { k: isAr ? "الأبعاد القياسية" : "Dimensions", v: `${item.preset.wMm} x ${item.preset.hMm} mm`, isNum: true },
        { k: isAr ? "الخامة" : "Substrate", v: isAr ? subObj.nameAr : subObj.nameEn, isNum: false },
        { k: isAr ? "الإضاءة" : "LED Halo", v: isAr ? ledObj.nameAr : ledObj.nameEn, isNum: false },
        { k: isAr ? "كمية التشغيل" : "Preset Run Qty", v: `${item.preset.qty}`, isNum: true },
        { k: isAr ? "الوزن التقديري" : "Unit Weight", v: formatKg(item.weightGrams), isNum: true },
      ];
      secondaryAction = `<button type="button" class="btn-secondary btn-full" data-miqyas-load="${item.id}" data-close-inspect="1">${escHtml(t("send_studio"))}</button>`;
    } else if (vertical === "madar") {
      item = MADAR_DEVICES.find((x) => x.id === id);
      if (!item) return;
      specs = [
        { k: isAr ? "سعر الوحدة" : "Unit Price", v: formatMoney(item.priceSar), isNum: true },
        { k: isAr ? "الحوسبة / السعة" : "Compute", v: item.computeLabel, isNum: true },
        { k: isAr ? "استهلاك الطاقة" : "Power Draw", v: `${item.powerWatts} W`, isNum: true },
        { k: isAr ? "الحماية" : "Ingress", v: item.ipLabel, isNum: true },
        { k: isAr ? "الربط" : "Uplink", v: item.uplinkLabel, isNum: true },
        { k: "MTBF", v: `${item.mtbfHours.toLocaleString("en-US")} h`, isNum: true },
      ];
      secondaryAction = `<button type="button" class="btn-secondary btn-full" data-madar-load="${item.id}" data-close-inspect="1">${escHtml(t("bulk_add5"))}</button>`;
    }

    const title = isAr ? item.nameAr : item.nameEn;
    const catLabel = isAr ? item.categoryAr : item.categoryEn;
    const desc = isAr ? item.specAr : item.specEn;

    document.getElementById("productModalKicker").textContent = `${item.sku} · ${catLabel}`;
    document.getElementById("productModalTitle").textContent = title;
    document.getElementById("productModalDesc").textContent = desc;
    document.getElementById("productModalMedia").innerHTML = `
      <div class="product-modal-frame">
        <img src="${escHtml(item.image)}" width="1000" height="750" loading="eager" alt="${escHtml(title)}" />
      </div>`;
    document.getElementById("productModalSpecs").innerHTML = specs
      .map(
        (s) => `
      <div class="product-spec-item">
        <dt>${escHtml(s.k)}</dt>
        <dd${s.isNum ? ' class="num" dir="ltr"' : ""}>${escHtml(s.v)}</dd>
      </div>`
      )
      .join("");

    const addAttr =
      vertical === "rawnaq"
        ? `data-rawnaq-add="${item.id}"`
        : vertical === "miqyas"
        ? `data-miqyas-add="${item.id}"`
        : `data-madar-add="${item.id}"`;

    document.getElementById("productModalActions").innerHTML = `
      <button type="button" class="btn-primary btn-full" ${addAttr} data-close-inspect="1">${escHtml(t("add_cart"))}</button>
      ${secondaryAction}`;
  }

  function openProductModal(vertical, id) {
    state.activeInspect = { vertical, id };
    renderProductModal();
    document.getElementById("productModalBackdrop").hidden = false;
    document.getElementById("productModal").hidden = false;
    document.getElementById("btnCloseProductModal").focus();
  }

  function closeProductModal() {
    state.activeInspect = null;
    document.getElementById("productModalBackdrop").hidden = true;
    document.getElementById("productModal").hidden = true;
  }

  /* ========================================================================
     10. EVENT BINDING
     ======================================================================== */
  function applyMiqyasPreset(id) {
    const it = MIQYAS_CATALOG.find((x) => x.id === id);
    if (!it || !it.preset) return;
    Object.assign(state.miqyas, it.preset);
    state.miqyas.presetId = it.id;
    document.getElementById("miqyasWidthRange").value = String(it.preset.wMm);
    document.getElementById("miqyasWidthInput").value = String(it.preset.wMm);
    document.getElementById("miqyasHeightRange").value = String(it.preset.hMm);
    document.getElementById("miqyasHeightInput").value = String(it.preset.hMm);
    document.getElementById("miqyasQtyRange").value = String(it.preset.qty);
    document.getElementById("miqyasQtyInput").value = String(it.preset.qty);
    renderMiqyasWorld();
  }

  function bindEvents() {
    // 3-World Switcher
    document.getElementById("verticalSwitcher").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-vertical-btn]");
      if (!btn) return;
      state.vertical = btn.dataset.verticalBtn;
      renderAll();
      const activeWorld = document.querySelector(`[data-world="${state.vertical}"]`);
      animateWorldEnter(activeWorld);
    });

    // Web / Mobile Toggle
    document.querySelectorAll("[data-view-btn]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.view = btn.dataset.viewBtn;
        syncChrome();
        animateWorldEnter(document.getElementById("deviceShell"));
      });
    });

    // Mobile Bottom Navigation
    document.getElementById("mobileBottomNav").addEventListener("click", (e) => {
      const tab = e.target.closest("[data-mobile-tab]");
      if (!tab) return;
      const target = tab.dataset.mobileTab;
      state.mobileTab = target;
      document.querySelectorAll("[data-mobile-tab]").forEach((el) => el.classList.toggle("is-active", el.dataset.mobileTab === target));

      if (target === "cart") {
        openCartDrawer();
        return;
      }
      if (target === "home") {
        const mc = document.getElementById("mainContent");
        if (mc) mc.scrollTop = 0;
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const worldTargets = {
        rawnaq: { home: "rawnaqHero", store: "rawnaqLookbook", studio: "rawnaqAtelier" },
        miqyas: { home: "miqyasHero", store: "miqyasLedger", studio: "miqyasStudio" },
        madar: { home: "madarHero", store: "madarCatalog", studio: "madarStudio" },
      };
      const destId = worldTargets[state.vertical][target];
      const dest = document.getElementById(destId);
      if (dest) dest.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    // Language Toggle
    document.getElementById("btnLangToggle").addEventListener("click", () => {
      state.lang = state.lang === "ar" ? "en" : "ar";
      if (state.rawnaq.engravingText === "قَوَام ٢٠٢٦" && state.lang === "en") {
        state.rawnaq.engravingText = "QAWAM 2026";
        document.getElementById("rawnaqEngravingInput").value = "QAWAM 2026";
      } else if (state.rawnaq.engravingText === "QAWAM 2026" && state.lang === "ar") {
        state.rawnaq.engravingText = "قَوَام ٢٠٢٦";
        document.getElementById("rawnaqEngravingInput").value = "قَوَام ٢٠٢٦";
      }
      renderAll();
    });

    // RAWNAQ Events
    document.getElementById("rawnaqCategoryPills").addEventListener("click", (e) => {
      const pill = e.target.closest("[data-rawnaq-cat]");
      if (!pill) return;
      state.rawnaqCat = pill.dataset.rawnaqCat;
      renderRawnaqWorld();
    });
    document.getElementById("rawnaqSearchInput").addEventListener("input", (e) => {
      state.rawnaqSearch = e.target.value;
      renderRawnaqWorld();
    });
    document.getElementById("rawnaqCatalogGrid").addEventListener("click", (e) => {
      const addBtn = e.target.closest("[data-rawnaq-add]");
      const loadBtn = e.target.closest("[data-rawnaq-load]");
      if (addBtn) {
        const it = RAWNAQ_EDITIONS.find((x) => x.id === addBtn.dataset.rawnaqAdd);
        if (it) addToCart({ vertical: "rawnaq", sku: it.sku, titleAr: it.nameAr, titleEn: it.nameEn, detailAr: it.specAr, detailEn: it.specEn, qty: 1, unitPriceSar: it.priceSar, weightGrams: it.weightGrams, image: it.image });
      }
      if (loadBtn) {
        state.rawnaq.editionId = loadBtn.dataset.rawnaqLoad;
        renderRawnaqWorld();
        document.getElementById("rawnaqAtelier").scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
    document.getElementById("rawnaqEditionSelect").addEventListener("change", (e) => {
      state.rawnaq.editionId = e.target.value;
      renderRawnaqWorld();
    });
    document.getElementById("rawnaqBoxOptions").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-rawnaq-box]");
      if (!btn) return;
      state.rawnaq.boxId = btn.dataset.rawnaqBox;
      renderRawnaqWorld();
    });
    document.getElementById("rawnaqPlaqueOptions").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-rawnaq-plaque]");
      if (!btn) return;
      state.rawnaq.plaqueId = btn.dataset.rawnaqPlaque;
      renderRawnaqWorld();
    });
    document.getElementById("rawnaqEngravingInput").addEventListener("input", (e) => {
      state.rawnaq.engravingText = e.target.value;
      renderRawnaqWorld();
    });
    document.getElementById("rawnaqYearInput").addEventListener("input", (e) => {
      state.rawnaq.monogramText = e.target.value;
      renderRawnaqWorld();
    });
    document.getElementById("btnAddRawnaq").addEventListener("click", () => {
      const { ed, box, plaque, unitPriceSar, weightGrams } = computeRawnaqPricing();
      const etch = (state.rawnaq.engravingText || "").trim() || "QAWAM";
      addToCart({
        vertical: "rawnaq",
        sku: ed.sku,
        titleAr: ed.nameAr,
        titleEn: ed.nameEn,
        detailAr: `صندوق: ${box.nameAr} | لوحة: ${plaque.nameAr} | نقش: ${etch}`,
        detailEn: `Box: ${box.nameEn} | Plaque: ${plaque.nameEn} | Etch: ${etch}`,
        qty: 1,
        unitPriceSar,
        weightGrams,
        image: ed.image,
      });
    });

    // MIQYAS Events
    const syncMiqyasField = (rangeId, inputId, key, min, max) => {
      const r = document.getElementById(rangeId);
      const inp = document.getElementById(inputId);
      r.addEventListener("input", () => {
        state.miqyas[key] = clampInt(r.value, min, max);
        inp.value = String(state.miqyas[key]);
        renderMiqyasWorld();
      });
      inp.addEventListener("input", () => {
        state.miqyas[key] = clampInt(inp.value, min, max);
        r.value = String(state.miqyas[key]);
        renderMiqyasWorld();
      });
    };
    syncMiqyasField("miqyasWidthRange", "miqyasWidthInput", "wMm", 150, 2400);
    syncMiqyasField("miqyasHeightRange", "miqyasHeightInput", "hMm", 100, 1200);
    syncMiqyasField("miqyasQtyRange", "miqyasQtyInput", "qty", 1, 500);

    document.getElementById("miqyasSubstrateSelect").addEventListener("change", (e) => {
      state.miqyas.substrateId = e.target.value;
      state.miqyas.presetId = "";
      renderMiqyasWorld();
    });
    document.getElementById("miqyasSignTextInput").addEventListener("input", (e) => {
      state.miqyas.signText = e.target.value;
      renderMiqyasWorld();
    });
    document.getElementById("miqyasPresetChips").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-miqyas-load]");
      if (!btn) return;
      applyMiqyasPreset(btn.dataset.miqyasLoad);
    });
    document.getElementById("miqyasLedOptions").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-miqyas-led]");
      if (!btn) return;
      state.miqyas.ledId = btn.dataset.miqyasLed;
      renderMiqyasWorld();
    });
    document.getElementById("miqyasPreflightChecks").addEventListener("change", (e) => {
      const inp = e.target.closest("[data-miqyas-pf]");
      if (!inp) return;
      state.miqyas.preflight[inp.dataset.miqyasPf] = inp.checked;
      renderMiqyasWorld();
    });
    document.getElementById("btnAddMiqyas").addEventListener("click", () => {
      const cpq = computeMiqyasCPQ();
      const refItem = resolveMiqyasRefItem();
      const unitNet = Math.max(1, Math.round(cpq.netPriceSar / cpq.qty));
      const stockInfo = cpq.isRoll ? `${(cpq.rollLengthMm / 1000).toFixed(2)}m Roll` : `${cpq.sheetsRequired} Sheets`;
      addToCart({
        vertical: "miqyas",
        sku: `CPQ-${cpq.wMm}x${cpq.hMm}`,
        titleAr: `طباعة مخصصة ${cpq.wMm}×${cpq.hMm} مم (${cpq.sub.nameAr})`,
        titleEn: `Custom Print ${cpq.wMm}x${cpq.hMm}mm (${cpq.sub.nameEn})`,
        detailAr: `تعشيش: ${stockInfo} | استغلال ${cpq.utilizationPct}% | LED: ${cpq.led.nameAr}`,
        detailEn: `Nesting: ${stockInfo} | Yield ${cpq.utilizationPct}% | LED: ${cpq.led.nameEn}`,
        qty: cpq.qty,
        unitPriceSar: unitNet,
        weightGrams: cpq.pieceGrams,
        image: refItem ? refItem.image : "assets/images/miqyas-acrylic-facade.jpg",
      });
    });
    document.getElementById("miqyasCategoryPills").addEventListener("click", (e) => {
      const pill = e.target.closest("[data-miqyas-cat]");
      if (!pill) return;
      state.miqyasCat = pill.dataset.miqyasCat;
      renderMiqyasWorld();
    });
    document.getElementById("miqyasSearchInput").addEventListener("input", (e) => {
      state.miqyasSearch = e.target.value;
      renderMiqyasWorld();
    });
    document.getElementById("miqyasCatalogRows").addEventListener("click", (e) => {
      const addBtn = e.target.closest("[data-miqyas-add]");
      const loadBtn = e.target.closest("[data-miqyas-load]");
      if (addBtn) {
        const it = MIQYAS_CATALOG.find((x) => x.id === addBtn.dataset.miqyasAdd);
        if (it) addToCart({ vertical: "miqyas", sku: it.sku, titleAr: it.nameAr, titleEn: it.nameEn, detailAr: it.specAr, detailEn: it.specEn, qty: 1, unitPriceSar: it.priceSar, weightGrams: it.weightGrams, image: it.image });
      }
      if (loadBtn) {
        applyMiqyasPreset(loadBtn.dataset.miqyasLoad);
        document.getElementById("miqyasStudio").scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    // MADAR Events
    document.getElementById("madarCategoryPills").addEventListener("click", (e) => {
      const pill = e.target.closest("[data-madar-cat]");
      if (!pill) return;
      state.madarCat = pill.dataset.madarCat;
      renderMadarWorld();
    });
    document.getElementById("madarSearchInput").addEventListener("input", (e) => {
      state.madarSearch = e.target.value;
      renderMadarWorld();
    });
    document.getElementById("madarSortSelect").addEventListener("change", (e) => {
      state.madarSort = e.target.value;
      renderMadarWorld();
    });
    document.getElementById("madarCatalogGrid").addEventListener("click", (e) => {
      const addBtn = e.target.closest("[data-madar-add]");
      const loadBtn = e.target.closest("[data-madar-load]");
      if (addBtn) {
        const d = MADAR_DEVICES.find((x) => x.id === addBtn.dataset.madarAdd);
        if (d) addToCart({ vertical: "madar", sku: d.sku, titleAr: d.nameAr, titleEn: d.nameEn, detailAr: d.specAr, detailEn: d.specEn, qty: 1, unitPriceSar: d.priceSar, weightGrams: d.weightGrams, image: d.image });
      }
      if (loadBtn) {
        const id = loadBtn.dataset.madarLoad;
        state.madar.bulkQuantities[id] = clampInt((state.madar.bulkQuantities[id] || 0) + 5, 0, 500);
        renderMadarWorld();
        document.getElementById("madarStudio").scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
    document.getElementById("madarCompareToggles").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-madar-toggle]");
      if (!btn) return;
      const id = btn.dataset.madarToggle;
      if (state.madar.compareIds.includes(id)) {
        if (state.madar.compareIds.length <= 2) return;
        state.madar.compareIds = state.madar.compareIds.filter((x) => x !== id);
      } else {
        if (state.madar.compareIds.length >= 3) state.madar.compareIds.shift();
        state.madar.compareIds.push(id);
      }
      renderMadarWorld();
    });
    document.getElementById("madarBulkList").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-bulk-step]");
      if (!btn) return;
      const [id, deltaStr] = btn.dataset.bulkStep.split(":");
      state.madar.bulkQuantities[id] = clampInt((state.madar.bulkQuantities[id] || 0) + parseInt(deltaStr, 10), 0, 500);
      renderMadarWorld();
    });
    document.getElementById("btnAddMadarBulk").addEventListener("click", () => {
      const bulk = computeMadarBulk();
      if (!bulk.totalUnits) {
        showToast(t("bulk_empty"));
        return;
      }
      addToCart({
        vertical: "madar",
        sku: `MDR-BULK-${bulk.totalUnits}`,
        titleAr: `طلبية جملة عتاد صناعي (${bulk.totalUnits} وحدة)`,
        titleEn: `Industrial Hardware Bulk Order (${bulk.totalUnits} Units)`,
        detailAr: `خصم شريحة ${bulk.tierPct}% | طاقة ${bulk.totalWatts}W | ${bulk.activeLines.length} أصناف`,
        detailEn: `Tier Discount ${bulk.tierPct}% | Power ${bulk.totalWatts}W | ${bulk.activeLines.length} SKUs`,
        qty: 1,
        unitPriceSar: bulk.netSar,
        weightGrams: bulk.totalWeightGrams,
      });
    });

    // Mobile Category Rail sync
    document.getElementById("mobileCategoryRail").addEventListener("click", (e) => {
      const r = e.target.closest("[data-rawnaq-cat]");
      const m = e.target.closest("[data-miqyas-cat]");
      const d = e.target.closest("[data-madar-cat]");
      if (r) { state.rawnaqCat = r.dataset.rawnaqCat; renderRawnaqWorld(); }
      if (m) { state.miqyasCat = m.dataset.miqyasCat; renderMiqyasWorld(); }
      if (d) { state.madarCat = d.dataset.madarCat; renderMadarWorld(); }
    });

    // Cart & Quote Modal Events
    document.getElementById("btnOpenCart").addEventListener("click", openCartDrawer);
    document.getElementById("mobileTopCartBtn").addEventListener("click", openCartDrawer);
    document.getElementById("btnCloseCart").addEventListener("click", closeCartDrawer);
    document.getElementById("cartBackdrop").addEventListener("click", closeCartDrawer);
    document.getElementById("cartItemsContainer").addEventListener("click", (e) => {
      const rem = e.target.closest("[data-cart-remove]");
      const qtyBtn = e.target.closest("[data-cart-qty]");
      if (rem) {
        state.cart = state.cart.filter((c) => c.uid !== rem.dataset.cartRemove);
        renderCart();
      }
      if (qtyBtn) {
        const [uid, deltaStr] = qtyBtn.dataset.cartQty.split(":");
        const item = state.cart.find((c) => c.uid === uid);
        if (item) {
          item.qty = clampInt(item.qty + parseInt(deltaStr, 10), 1, 500);
          renderCart();
        }
      }
    });
    document.getElementById("btnClearCart").addEventListener("click", () => {
      state.cart = [];
      renderCart();
    });
    document.getElementById("btnOpenQuoteModal").addEventListener("click", () => {
      closeCartDrawer();
      openQuoteModal();
    });
    document.getElementById("btnCloseQuoteModal").addEventListener("click", closeQuoteModal);
    document.getElementById("quoteModalBackdrop").addEventListener("click", closeQuoteModal);
    document.getElementById("btnCopyQuote").addEventListener("click", async () => {
      const summary = computeCartSummary();
      const buyer = document.getElementById("quoteBuyerInput").value;
      const ref = document.getElementById("quoteRefNum").textContent;
      const lines = state.cart.map(
        (c) => `- [${c.vertical.toUpperCase()}] ${state.lang === "ar" ? c.titleAr : c.titleEn} x${c.qty} = ${c.unitPriceSar * c.qty} SAR`
      );
      const text = [`Qawam-Studio Quote ${ref}`, `Client: ${buyer}`, ...lines, `Subtotal: ${summary.subtotalSar} SAR`, `VAT 15%: ${summary.vatSar} SAR`, `Grand Total: ${summary.grandTotalSar} SAR`, `Weight: ${formatKg(summary.totalWeightGrams)}`].join("\n");
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) await navigator.clipboard.writeText(text);
      } catch (_err) {}
      showToast(t("copied_toast"));
    });
    document.getElementById("btnPrintQuote").addEventListener("click", () => window.print());

    // Product Quick-View Inspector Events (Global delegation)
    document.addEventListener("click", (e) => {
      const inspectEl = e.target.closest("[data-inspect]");
      if (inspectEl) {
        const [vert, pid] = inspectEl.dataset.inspect.split(":");
        if (vert && pid) openProductModal(vert, pid);
      }
    });
    document.getElementById("btnCloseProductModal").addEventListener("click", closeProductModal);
    document.getElementById("productModalBackdrop").addEventListener("click", closeProductModal);
    document.getElementById("productModalActions").addEventListener("click", (e) => {
      const rAdd = e.target.closest("[data-rawnaq-add]");
      const rLoad = e.target.closest("[data-rawnaq-load]");
      const mAdd = e.target.closest("[data-miqyas-add]");
      const mLoad = e.target.closest("[data-miqyas-load]");
      const dAdd = e.target.closest("[data-madar-add]");
      const dLoad = e.target.closest("[data-madar-load]");

      if (rAdd) {
        const it = RAWNAQ_EDITIONS.find((x) => x.id === rAdd.dataset.rawnaqAdd);
        if (it) addToCart({ vertical: "rawnaq", sku: it.sku, titleAr: it.nameAr, titleEn: it.nameEn, detailAr: it.specAr, detailEn: it.specEn, qty: 1, unitPriceSar: it.priceSar, weightGrams: it.weightGrams, image: it.image });
      } else if (rLoad) {
        state.rawnaq.editionId = rLoad.dataset.rawnaqLoad;
        renderRawnaqWorld();
        closeProductModal();
        document.getElementById("rawnaqAtelier").scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      } else if (mAdd) {
        const it = MIQYAS_CATALOG.find((x) => x.id === mAdd.dataset.miqyasAdd);
        if (it) addToCart({ vertical: "miqyas", sku: it.sku, titleAr: it.nameAr, titleEn: it.nameEn, detailAr: it.specAr, detailEn: it.specEn, qty: 1, unitPriceSar: it.priceSar, weightGrams: it.weightGrams, image: it.image });
      } else if (mLoad) {
        applyMiqyasPreset(mLoad.dataset.miqyasLoad);
        closeProductModal();
        document.getElementById("miqyasStudio").scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      } else if (dAdd) {
        const d = MADAR_DEVICES.find((x) => x.id === dAdd.dataset.madarAdd);
        if (d) addToCart({ vertical: "madar", sku: d.sku, titleAr: d.nameAr, titleEn: d.nameEn, detailAr: d.specAr, detailEn: d.specEn, qty: 1, unitPriceSar: d.priceSar, weightGrams: d.weightGrams, image: d.image });
      } else if (dLoad) {
        const id = dLoad.dataset.madarLoad;
        state.madar.bulkQuantities[id] = clampInt((state.madar.bulkQuantities[id] || 0) + 5, 0, 500);
        renderMadarWorld();
        closeProductModal();
        document.getElementById("madarStudio").scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (e.target.closest("[data-close-inspect]")) closeProductModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (!document.getElementById("productModal").hidden) closeProductModal();
        else if (!document.getElementById("quoteModal").hidden) closeQuoteModal();
        else if (!document.getElementById("cartDrawer").hidden) closeCartDrawer();
      }
    });
  }

  renderAll();
  bindEvents();
})();
