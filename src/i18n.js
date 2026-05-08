// ── Translation Dictionary ─────────────────────────
// Auto-detects browser language. Defaults to Arabic (RTL).
// High-converting copy using AIDA framework

export const translations = {
  ar: {
    dir: 'rtl',
    lang: 'ar',

    // ── Navigation ──
    nav_brand: 'Nexa Digital',
    nav_cta: 'تواصل معنا',

    // ── Hero: ATTENTION ──
    hero_badge: '🔥 عرض خاص: أول 50 مطعم فقط',
    hero_headline_1: 'تعبت من تبديل المنيو كل ما يتغير سعر الدولار؟',
    hero_headline_2: 'قائمة رقمية لمطعمك بـ 40,000 دينار — وخلاص',
    hero_sub: 'كل ما يرتفع سعر الصرف، تضطر تطبع منيو جديد بأسعار جديدة. مع القائمة الرقمية: تعدّل الأسعار بنفسك بثواني، تستقبل الطلبات على واتساب، وتوفر فلوس الطباعة الشهرية. مرة واحدة تدفع — وسنة كاملة من غير مصاريف.',
    hero_cta_main: 'احجز مقعدك الآن',
    hero_cta_demos: 'شاهد نماذج حية',

    // Dynamic pricing placeholders (handled by component)
    hero_price: '40,000',
    hero_currency: 'د.ع',
    hero_period: '/ سنة',
    hero_price_label: 'اشتراك سنوي — دعم محلي عراقي',

    // Scarcity / urgency
    hero_scarcity: 'أول 50 مطعم فقط بهذا السعر — بعدها يرتفع',

    // ── Pain Points: INTEREST ──
    pain_eyebrow: 'توقف عن حرق فلوسك',
    pain_title: 'طباعة القوائم الورقية تكلفك أكثر مما تتصور',
    pain_sub: 'كل شهر تطبع قوائم جديدة. كل مرة تغير سعر، تضطر ترجع للمطبعة. سنة من طباعة القوائم = 3 أضعاف سعر القائمة الرقمية.',
    pain_items: [
      { title: 'طباعة مكلفة', desc: '150,000 - 300,000 دينار شهرياً على طباعة القوائم في المطاعم المتوسطة' },
      { title: 'تحديث مؤلم', desc: 'كل تغيير سعر أو إضافة وجبة يعني طباعة جديدة وتكاليف إضافية' },
      { title: 'أخطاء محرجة', desc: 'قوائم قديمة، أسعار غلط، أو منتجات منتهية — أمام الزبون مباشرة' },
      { title: 'تأخير وانتظار', desc: 'الزبون ينتظر القائمة الورقية ويضيع وقت في التقليب — تجربة سيئة' },
    ],

    // ── Features: DESIRE ──
    features_eyebrow: 'الحل كامل',
    features_title: 'كل شيء تحتاجه في منصة واحدة',
    features_sub: 'نقدم لك منظومة متكاملة توفر فلوسك، تزيد مبيعاتك، وتريح بالك.',
    feat_1_title: 'وفر طباعة القوائم',
    feat_1_desc: 'استغن عن فواتير الطباعة الشهرية. قائمة رقمية محدثة على طول — بدون ريال واحد إضافي.',
    feat_2_title: 'تحكم كامل بالأسعار',
    feat_2_desc: 'غيّر الأسعار وأضف وجبات وعروض في ثواني. شدخل، بدون مبرمج وبدون مطبعة.',
    feat_3_title: 'طلبات عبر واتساب',
    feat_3_desc: 'الزبون يطلب ضغطة زر — واصل الطلب واتسابك مباشرة. ولا تطبيق، ولا رقم هاتف تكتّه.',
    feat_4_title: 'كود QR جاهز',
    feat_4_desc: 'كود QR حصري لمطعمك. عالطاولة، عالشباك، عالسيارة — مسح والزبون يشوف القائمة كاملة.',

    // ── Demos ──
    demos_eyebrow: 'أعمالنا تتكلم',
    demos_title: 'شوف بنفسك كيف صارت قوائم عملائنا',
    demos_sub: 'قوائم رقمية حية نفذناها — كل واحدة بهوية صاحبها.',
    demos_visit: 'زيارة',

    demos: [
      { name: 'Tabasco Al-Sham', label: 'مطعم تاباسكو الشام', url: 'https://tabasco-al-sham.nexadigital.dev/', target: '_blank', rel: 'noopener noreferrer', emoji: '🌮' },
      { name: 'Mahshi Al-Baghdady', label: 'محشي البغدادي', url: 'https://mahshi-albaghdady2.vercel.app/', target: '_blank', rel: 'noopener noreferrer', emoji: '🍲' },
      { name: 'Product Menu', label: 'الساعات الذهبية', url: 'https://product-menu.nexadigital.dev/', target: '_blank', rel: 'noopener noreferrer', emoji: '📋' },
      { name: 'Coral Perfumes', label: 'كورال للعطور', url: 'https://coral-perfumes.nexadigital.dev/', target: '_blank', rel: 'noopener noreferrer', emoji: '✨' },
      { name: 'Shawarma Nazoland', label: 'شاورما نازولاند', url: 'https://shawarma-nazoland.nexadigital.dev/', target: '_blank', rel: 'noopener noreferrer', emoji: '🌯' },
    ],

    // ── Pricing Section ──
    price_eyebrow: 'سعر خرافي — فرصة محدودة',
    price_title: 'اختر باقة تناسبك',
    price_subtitle: 'سعر واحد شامل، بدون رسوم خفية ولا عقود طويلة.',

    // Iraq tier
    iq_tier_title: 'المنيو المتكامل',
    iq_tier_badge: 'دفع محلي',
    iq_tier_amount: '40,000',
    iq_tier_currency: 'د.ع',
    iq_tier_period: '/ سنة',
    iq_tier_desc: 'اشتراك سنوي شامل للمطاعم العراقية — ادفع مرّة واستمتع سنة كاملة.',
    iq_tier_payment: 'ZainCash • تحويل محلي',

    // International tier
    intl_tier_title: 'المنيو المتكامل',
    intl_tier_badge: 'دفع دولي',
    intl_tier_amount: '$35',
    intl_tier_currency: 'USD',
    intl_tier_period: '/ year',
    intl_tier_desc: 'نفس الميزات الاحترافية — الدفع بالدولار للعملاء خارج العراق.',
    intl_tier_payment: 'بطاقات ائتمان • USDT • تحويل بنكي',

    price_desc: 'الباقة المتكاملة تشمل كل ما تحتاجه لانطلاق قائمتك الرقمية',
    price_includes: 'ماذا يشمل الاشتراك؟',
    price_items: [
      'تصميم القائمة بالهوية البصرية لمطعمك',
      'لوحة تحكم ذكية — عدّل بأي وقت',
      'تكامل واتساب لاستقبال الطلبات',
      'كود QR مخصص جاهز للطباعة',
      'دعم فني 24/7 على مدار السنة',
      'استضافة عالية السرعة (أقل من ثانية تحميل)',
      'تحديثات مجانية للنظام',
    ],
    price_cta: 'احجز مقعدك الآن',

    // ── International Customers Section ──
    intl_eyebrow: 'Global Service',
    intl_title: 'Premium Digital Menu — $35/Year',
    intl_sub: 'Same premium service. Same 24/7 support. Lightning-fast hosting. One low annual price with global payment options.',
    intl_payments: 'بطاقات ائتمان • USDT • تحويل بنكي',
    intl_cta: 'Start Now — Pay via Card',

    // ── Lead Capture Form (Micro-Conversion) ──
    form_eyebrow: 'لا تفوت الفرصة',
    form_title: 'اطلب عرض السعر المجاني',
    form_sub: 'خلّي بياناتك وتواصل معك فريق Nexa Digital خلال 24 ساعة — أو تواصل وياها على واتساب.',
    form_name_label: 'الاسم الكامل',
    form_name_placeholder: 'مثلاً: حسين علي',
    form_restaurant_label: 'اسم المطعم / الكافية',
    form_restaurant_placeholder: 'مثلاً: مطعم بغداد',
    form_phone_label: 'رقم الهاتف / واتساب',
    form_phone_placeholder: 'مثلاً: 0770 000 0000',
    form_location_label: 'المحافظة / المدينة',
    form_location_placeholder: 'مثلاً: بغداد، الكرخ',
    form_note: 'بياناتك آمنة — نستخدمها فقط للتواصل معك',
    form_submit: 'أرسل الطلب — احجز مقعدك',

    // ── Why Nexa Digital? (Trust Section) ──
    trust_eyebrow: 'ليه نكسا ديجيتال؟',
    trust_title: 'لأنّ خدماتنا مصممة للمطاعم العراقية',
    trust_sub: 'مو بس نبيعك منيو — احنا ندعمك من البصرة لكل العراق.',
    trust_items: [
      { title: 'دعم محلي — من البصرة', desc: 'فريقنا موجود بالبصرة وجاهز يرد عليك بأي وقت. واتساب، اتصال، أو حتى زبونك يجينا — احنه ويّاك.' },
      { title: 'تجهيز خلال 24 ساعة', desc: 'تبي المنيو جاهز بكرة؟ نشتغل ونرسله لك خلال 24 ساعة من تأكيد الطلب — لا تأخير ولا أعذار.' },
      { title: 'بدون رسوم خفية', desc: '40,000 دينار فقط — كل شي شامل. التصميم، الاستضافة، الدعم، التحديثات. ولا ريال زيادة.' },
      { title: 'ضمان الرضا الكامل', desc: 'ما عجبك التصميم؟ نعدّله لحد ما تخلص منه — بدون فلوس زيادة. رضاك يهمنا مو نخلص منك.' },
    ],

    // ── Final CTA ──
    final_cta_title: 'الفرصة محدودة — 50 مطعم فقط',
    final_cta_sub: 'بعد اكتمال العدد، يرتفع السعر. احجز مقعد مطعمك اليوم وخلّي القائمة الرقمية تشتغل لحسابك.',
    final_cta_btn: 'تواصل معنا على واتساب',

    // ── Footer ──
    footer_rights: '© 2025 Nexa Digital. جميع الحقوق محفوظة.',
    footer_tagline: 'القوائم الرقمية الذكية — 24/7 دعم فني',
  },

  en: {
    dir: 'ltr',
    lang: 'en',

    // ── Navigation ──
    nav_brand: 'Nexa Digital',
    nav_cta: 'Contact Us',

    // ── Hero: ATTENTION ──
    hero_badge: '🔥 Limited Offer: First 50 Restaurants Only',
    hero_headline_1: 'Tired of Replacing Your Menu',
    hero_headline_2: 'Every Time Prices Change?',
    hero_sub: 'Exchange rate fluctuates? Need to update prices? With a digital menu, you make changes in seconds — no reprinting, no extra costs. Receive orders via WhatsApp, save on monthly printing, and pay once for a full year.',
    hero_cta_main: 'Secure Your Spot Now',
    hero_cta_demos: 'View Live Demos',

    hero_price: '$35',
    hero_currency: 'USD',
    hero_period: '/ year',
    hero_price_label: 'All-inclusive — Premium Global Service',

    hero_scarcity: 'First 50 restaurants at this price — then it goes up',

    // ── Pain Points: INTEREST ──
    pain_eyebrow: 'Stop the Bleeding',
    pain_title: 'Paper Menus Are Costing You More Than You Think',
    pain_sub: 'Every month you reprint. Every price change means another print run. A year of paper menus costs 3x what a digital menu costs — and that\'s before the lost sales from outdated pricing.',
    pain_items: [
      { title: 'Expensive Printing', desc: '$50–$300+ monthly on menu printing for most restaurants, depending on size and quality' },
      { title: 'Painful Updates', desc: 'Every price change, new dish, or promotion requires a costly reprint — time and money down the drain' },
      { title: 'Embarrassing Errors', desc: 'Old menus with wrong prices or unavailable items in front of customers — looks unprofessional' },
      { title: 'Slow Experience', desc: 'Customers wait for a physical menu, flip through pages, and wait again for updates — terrible UX' },
    ],

    // ── Features: DESIRE ──
    features_eyebrow: 'Complete Solution',
    features_title: 'Everything You Need in One Platform',
    features_sub: 'A fully integrated system that saves you money, boosts sales, and gives you peace of mind.',
    feat_1_title: 'Zero Printing Costs',
    feat_1_desc: 'Eliminate monthly printing bills forever. Your menu updates instantly — free of charge, every time.',
    feat_2_title: 'Full Price Control',
    feat_2_desc: 'Update prices, add items, run promotions in seconds. No developer. No print shop. Just you.',
    feat_3_title: 'WhatsApp Orders',
    feat_3_desc: 'Customers tap to order — it lands in your WhatsApp instantly. No apps. No missed calls. No confusion.',
    feat_4_title: 'Custom QR Code',
    feat_4_desc: 'A unique QR code for your restaurant. Table, window, drive-thru — scan and the full menu appears.',

    // ── Demos ──
    demos_eyebrow: 'Our Work Speaks',
    demos_title: 'See Live Digital Menus in Action',
    demos_sub: 'Real digital menus we built for real restaurants — each one with its own brand identity.',
    demos_visit: 'Visit',

    demos: [
      { name: 'Tabasco Al-Sham', label: 'Tabasco Al-Sham Restaurant', url: 'https://tabasco-al-sham.nexadigital.dev/', emoji: '🌮' },
      { name: 'Mahshi Al-Baghdady', label: 'Mahshi Al-Baghdady', url: 'https://mahshi-albaghdady2.vercel.app/', emoji: '🍲' },
      { name: 'Product Menu', label: 'Product Menu', url: 'https://product-menu.nexadigital.dev/', emoji: '📋' },
      { name: 'Coral Perfumes', label: 'Coral Perfumes', url: 'https://coral-perfumes.nexadigital.dev/', emoji: '✨' },
      { name: 'Shawarma Nazoland', label: 'Shawarma Nazoland', url: 'https://shawarma-nazoland.nexadigital.dev/', emoji: '🌯' },
    ],

    // ── Pricing Section ──
    price_eyebrow: 'Incredible Value — Limited Spots',
    price_title: 'Choose Your Plan',
    price_subtitle: 'All-inclusive pricing. No hidden fees. No long-term contracts.',

    // Iraq tier
    iq_tier_title: 'Full Professional Plan',
    iq_tier_badge: 'Local Payment',
    iq_tier_amount: '40,000',
    iq_tier_currency: 'IQD',
    iq_tier_period: '/ year',
    iq_tier_desc: 'All-inclusive annual subscription for Iraqi restaurants — pay once, enjoy a full year.',
    iq_tier_payment: 'ZainCash • Local Transfer',

    // International tier
    intl_tier_title: 'Full Professional Plan',
    intl_tier_badge: 'International Payment',
    intl_tier_amount: '$35',
    intl_tier_currency: 'USD',
    intl_tier_period: '/ year',
    intl_tier_desc: 'Same professional features — USD payment for customers outside Iraq.',
    intl_tier_payment: 'Credit Cards • USDT • Bank Transfer',

    price_desc: 'Everything included to launch your digital menu',
    price_includes: "What's included?",
    price_items: [
      'Full custom menu design with your brand identity',
      'Smart dashboard for instant updates',
      'WhatsApp order integration',
      'Custom print-ready QR code',
      '24/7 technical support all year',
      'Lightning-fast hosting (under 1s load time)',
      'Free system updates',
    ],
    price_cta: 'Reserve Your Spot',

    // ── International Customers Section ──
    intl_eyebrow: 'Global Service',
    intl_title: 'Premium Digital Menu — $35/Year',
    intl_sub: 'Same premium service. Same 24/7 support. Lightning-fast hosting. One low annual price with global payment options.',
    intl_payments: 'Credit Cards • USDT • Bank Transfer',
    intl_cta: 'Start Now — Pay via Card',

    // ── Lead Capture Form ──
    form_eyebrow: "Don't Miss Out",
    form_title: 'Request a Free Quote',
    form_sub: 'Drop your details and our team will reach out within 24 hours — or contact us directly on WhatsApp.',
    form_name_label: 'Full Name',
    form_name_placeholder: 'e.g. John Smith',
    form_restaurant_label: 'Restaurant / Cafe Name',
    form_restaurant_placeholder: 'e.g. Baghdad Grill',
    form_phone_label: 'Phone / WhatsApp',
    form_phone_placeholder: 'e.g. +964 770 000 0000',
    form_location_label: 'City / Governorate',
    form_location_placeholder: 'e.g. Baghdad',
    form_note: 'Your data is safe — we only use it to contact you',
    form_submit: 'Send Request — Reserve My Spot',

    // ── Why Nexa Digital? (Trust Section) ──
    trust_eyebrow: 'Why Nexa Digital?',
    trust_title: 'Built for Iraqi Restaurants — Backed by Local Support',
    trust_sub: "We're not just selling you a menu — we're your local partner from Basra to everywhere.",
    trust_items: [
      { title: 'Local Support — From Basra', desc: 'Our team is based in Basra and responds anytime. WhatsApp, call, or visit — we are here for you.' },
      { title: 'Setup in Under 24 Hours', desc: 'Need your menu ready tomorrow? We deliver within 24 hours of order confirmation — no delays, no excuses.' },
      { title: 'No Hidden Fees', desc: '$35 or 40,000 IQD — everything included. Design, hosting, support, updates. Not a penny more.' },
      { title: 'Full Satisfaction Guarantee', desc: "Not happy with the design? We'll rework it until you love it — at no extra cost. Your satisfaction drives us." },
    ],

    // ── Final CTA ──
    final_cta_title: 'Limited Spots — Only 50 Restaurants',
    final_cta_sub: 'Once the 50 spots are filled, the price goes up. Secure your restaurant\'s spot today and let your digital menu work for you.',
    final_cta_btn: 'Chat With Us on WhatsApp',

    // ── Footer ──
    footer_rights: '© 2025 Nexa Digital. All rights reserved.',
    footer_tagline: 'Smart Digital Menus — 24/7 Support',
  },
};

/**
 * Detects browser language and returns the matching translation set.
 */
export function detectLanguage() {
  const lang = navigator.language || navigator.userLanguage || 'ar';
  return lang.toLowerCase().startsWith('en') ? translations.en : translations.ar;
}
