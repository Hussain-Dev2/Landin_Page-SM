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
    hero_badge: 'عرض خاص: أول 50 مطعم فقط',
    hero_headline_1: 'ودّع طباعة القوائم الورقية',
    hero_headline_2: 'قائمة رقمية فاخرة لمطعمك',
    hero_sub: 'خلص من مصاريف الطباعة الشهرية وتكاليف التحديث. قائمة رقمية بتصميم خاص بمطعمك — تعدّل أسعارك بنفسك وتستقبل الطلبات عبر واتساب بدون وسيط.',
    hero_cta_main: 'احجز مقعدك الآن',
    hero_cta_demos: 'شاهد نماذج حية',

    // Dynamic pricing placeholders (handled by component)
    hero_price: '40,000',
    hero_currency: 'د.ع',
    hero_period: '/ سنة',
    hero_price_label: 'اشتراك سنوي — دعم محلي',

    // Scarcity / urgency
    hero_scarcity: 'أول 50 مطعم فقط بهذا السعر',

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
    iq_tier_title: 'الباقة المحلية — العراق',
    iq_tier_badge: 'دعم محلي',
    iq_tier_amount: '40,000',
    iq_tier_currency: 'د.ع',
    iq_tier_period: '/ سنة',
    iq_tier_desc: 'سعر خاص لدعم المطاعم العراقية — أقل من تكلفة طباعة شهرين!',

    // International tier
    intl_tier_title: 'الباقة العالمية',
    intl_tier_badge: 'خدمة بريميوم',
    intl_tier_amount: '$35',
    intl_tier_currency: 'USD',
    intl_tier_period: '/ year',
    intl_tier_desc: 'خدمة عالمية بمعايير احترافية — دفعة واحدة وتستمتع سنة كاملة.',

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
    intl_payments: 'نقبل طرق دفع عالمية: PayPal • بطاقات ائتمان USDT • تحويل بنكي',
    intl_cta: 'Start Now — Pay via PayPal/Card',

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

    // ── Trust Factors ──
    trust_eyebrow: 'نكسا ديجيتال',
    trust_title: 'خدمة موثوقة تدعمك على طول',
    trust_sub: 'ما تدفع فلوسك وتروح — احنا ويّاك خطوة بخطوة.',
    trust_items: [
      { title: 'دعم فني 24/7', desc: 'فريق متكامل يرد عليك بأي وقت — حتى العطل الرسمية. واتساب، اتصال، كل شي.' },
      { title: 'سرعة تحميل خيالية', desc: 'سيرفرات عالية الأداء — قائمتك تتحمل بأقل من ثانية. ما يضيع زبون بسبب البطيء.' },
      { title: 'تصميم احترافي', desc: 'قائمة رقمية بهوية مطعمك — ألوانك، شعارك، طابعك. مو قوالب جاهزة.' },
      { title: 'ضمان الرضا', desc: 'ما يعجبك التصميم؟ نعدّله لحد ما ترتاح — بدون رسوم إضافية.' },
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
    hero_badge: 'Limited Offer: First 50 Restaurants Only',
    hero_headline_1: 'Stop Throwing Money Away on',
    hero_headline_2: 'Paper Menu Printing',
    hero_sub: 'Eliminate monthly printing costs and price update fees. A premium digital menu built around your brand — update prices instantly and receive orders directly on WhatsApp. Zero printing. Zero waste.',
    hero_cta_main: 'Secure Your Spot Now',
    hero_cta_demos: 'View Live Demos',

    hero_price: '$35',
    hero_currency: 'USD',
    hero_period: '/ year',
    hero_price_label: 'All-inclusive — Premium Global Service',

    hero_scarcity: 'First 50 restaurants at this price only',

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
    iq_tier_title: 'Local Plan — Iraq',
    iq_tier_badge: 'Local Support',
    iq_tier_amount: '40,000',
    iq_tier_currency: 'IQD',
    iq_tier_period: '/ year',
    iq_tier_desc: 'Special pricing for Iraqi restaurants — less than 2 months of printing costs!',

    // International tier
    intl_tier_title: 'Global Plan',
    intl_tier_badge: 'Premium Service',
    intl_tier_amount: '$35',
    intl_tier_currency: 'USD',
    intl_tier_period: '/ year',
    intl_tier_desc: 'World-class service at a fraction of the cost — one payment, one year of premium digital menu.',

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
    intl_payments: 'We accept: PayPal • Credit Cards USDT • Bank Transfer',
    intl_cta: 'Start Now — Pay via PayPal/Card',

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

    // ── Trust Factors ──
    trust_eyebrow: 'Nexa Digital',
    trust_title: 'Reliable Service Backed by Real Support',
    trust_sub: "You're not just buying software — you're getting a partner who's with you every step.",
    trust_items: [
      { title: '24/7 Technical Support', desc: 'A dedicated team responds anytime — holidays included. WhatsApp, phone, however you need us.' },
      { title: 'Blazing-Fast Speed', desc: 'Enterprise-grade servers — your menu loads in under 1 second. No customer left waiting.' },
      { title: 'Custom Brand Design', desc: 'Your menu, your identity — colors, logo, style. No generic templates. Ever.' },
      { title: 'Satisfaction Guarantee', desc: "Not happy with the design? We'll redo it until you love it — at no extra cost." },
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
