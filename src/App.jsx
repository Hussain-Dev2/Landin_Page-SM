import { useState, useEffect, useCallback, useMemo } from 'react';
import { detectLanguage } from './i18n';
import {
  Smartphone,
  LayoutDashboard,
  MessageCircle,
  QrCode,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  Shield,
  Zap,
  Star,
  MapPin,
  User,
  Store,
  Phone,
  Send,
  Clock,
  TrendingDown,
  AlertTriangle,
  Package,
  Globe,
  Users,
  Timer,
  Landmark,
} from 'lucide-react';

function useVisitorLocation() {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    fetch('https://ip-api.com/json/?fields=countryCode,country', { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        if (data?.countryCode) setCountry(data.countryCode);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  return { country, isIraq: country === null || country === 'IQ', loading };
}

export default function App() {
  const t = useMemo(() => detectLanguage(), []);
  const [isLoaded, setIsLoaded] = useState(false);
  const { isIraq, loading: locationLoading } = useVisitorLocation();
  const [formData, setFormData] = useState({ name: '', restaurant: '', phone: '', location: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = t.lang;
    setTimeout(() => setIsLoaded(true), 100);
  }, [t]);

  const handleWhatsAppClick = useCallback((msg) => {
    const phoneNumber = "9647738411429";
    const message = encodeURIComponent(msg || "أهلاً نكسا ديجيتال، أريد تجربة المنيو الذكي لمطعمي");
    window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
  }, []);

  const handleFormChange = useCallback((field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleFormSubmit = useCallback((e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    const msg = t.dir === 'rtl'
      ? `طلب حجز قائمة رقمية:\nالاسم: ${formData.name}\nالمطعم: ${formData.restaurant}\nالهاتف: ${formData.phone}\nالموقع: ${formData.location}`
      : `Digital Menu Booking Request:\nName: ${formData.name}\nRestaurant: ${formData.restaurant}\nPhone: ${formData.phone}\nLocation: ${formData.location}`;
    handleWhatsAppClick(msg);
    setFormSubmitted(true);
  }, [formData, handleWhatsAppClick, t.dir]);

  if (locationLoading && !isLoaded) return null;

  const ArrowIcon = t.dir === 'rtl' ? ArrowLeft : ArrowRight;
  const showIraqPricing = isIraq;

  return (
    <div className="min-h-screen bg-mesh font-sans overflow-hidden">

      {/* ── Navbar ── */}
      <nav className="fixed top-0 w-full z-50 glass-card rounded-none border-t-0 border-l-0 border-r-0 border-b border-amber-500/20 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-amber-500 p-[1px] shadow-xl shadow-indigo-500/10 transition-transform duration-500">
              <div className="w-full h-full rounded-[11px] md:rounded-[15px] bg-[#0a0f1e] flex items-center justify-center overflow-hidden">
                <img
                  src="/logo-icon.png"
                  alt="Nexa Digital"
                  className="w-full h-full object-cover scale-110"
                  fetchpriority="high"
                  loading="eager"
                  width="56"
                  height="56"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-2xl font-black tracking-tight text-white leading-none">
                {t.nav_brand}
              </span>
              <span className="hidden md:block text-[10px] md:text-xs text-amber-400 font-bold tracking-[0.15em] uppercase mt-1">Smart Digital Menus</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${showIraqPricing ? 'bg-amber-500/10 border border-amber-500/20 text-amber-300' : 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-300'}`}>
              <Globe className="w-3 h-3" />
              {showIraqPricing ? 'العراق' : 'Global'}
            </span>
            <button
              onClick={() => handleWhatsAppClick()}
              className="px-4 py-2 md:px-5 md:py-2 rounded-full bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 text-white text-xs md:text-sm font-medium transition-all btn-press flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-green-400" />
              <span className="hidden xs:block">{t.nav_cta}</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16 px-4 md:px-6 max-w-6xl mx-auto space-y-20 md:space-y-32">

        {/* ═══════════════════════════════════════════════
           HERO — ATTENTION
           ═══════════════════════════════════════════════ */}
        <section className={`flex flex-col items-center text-center space-y-6 md:space-y-8 ${isLoaded ? 'fade-up' : 'opacity-0'}`}>

          {/* Scarcity badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-card border-amber-500/30 bg-amber-500/5 text-amber-300 text-xs md:text-sm font-medium mb-1 md:mb-4 delay-100 animate-float">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-400 animate-pulse"></span>
            {t.hero_badge}
          </div>

          {/* Main headline — pain point */}
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold leading-[1.15] md:leading-[1.1] tracking-tight delay-200 px-2">
            {t.hero_headline_1} <br/>
            <span className="text-gradient-vibrant block mt-1 md:mt-2">{t.hero_headline_2}</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl delay-300 leading-relaxed px-2">
            {t.hero_sub}
          </p>

          {/* Dynamic Pricing Display — ONLY the relevant price */}
          {showIraqPricing ? (
            <div className="delay-400 py-4 md:py-6">
              <div className="inline-flex flex-col items-center justify-center px-6 py-4 md:px-10 md:py-6 rounded-2xl md:rounded-3xl bg-gradient-to-b from-amber-900/20 to-indigo-900/10 border-2 border-amber-500/30 relative overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Location badge */}
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] md:text-xs font-bold tracking-wide">
                  العراق
                </span>
                <div className="flex items-baseline gap-2 md:gap-3 mt-3">
                  <span className="text-4xl sm:text-5xl md:text-7xl font-black text-gradient-vibrant drop-shadow-lg">{t.iq_tier_amount}</span>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-lg md:text-2xl font-bold text-white/90">{t.iq_tier_currency}</span>
                    <span className="text-sm md:text-lg font-medium text-indigo-400/80">{t.iq_tier_period}</span>
                  </div>
                </div>
                <span className="text-slate-400 mt-2 md:mt-3 font-medium tracking-wide uppercase text-[10px] md:text-xs opacity-70">{t.hero_price_label}</span>
              </div>
            </div>
          ) : (
            <div className="delay-400 py-4 md:py-6">
              <div className="inline-flex flex-col items-center justify-center px-6 py-4 md:px-10 md:py-6 rounded-2xl md:rounded-3xl bg-gradient-to-b from-cyan-900/20 to-indigo-900/10 border-2 border-cyan-500/30 relative overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-[10px] md:text-xs font-bold tracking-wide">
                  Global
                </span>
                <div className="flex items-baseline gap-2 md:gap-3 mt-3">
                  <span className="text-4xl sm:text-5xl md:text-7xl font-black text-gradient-vibrant drop-shadow-lg">{t.intl_tier_amount}</span>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-lg md:text-2xl font-bold text-white/90">{t.intl_tier_currency}</span>
                    <span className="text-sm md:text-lg font-medium text-indigo-400/80">{t.intl_tier_period}</span>
                  </div>
                </div>
                <span className="text-slate-400 mt-2 md:mt-3 font-medium tracking-wide uppercase text-[10px] md:text-xs opacity-70">{t.intl_tier_desc}</span>
              </div>
            </div>
          )}

          {/* Scarcity + Live Counter */}
          <div className="flex flex-col items-center gap-3 delay-400">
            <div className="flex items-center gap-2 text-sm md:text-base text-amber-400/80 font-medium">
              <Clock className="w-4 h-4" />
              <span>{t.hero_scarcity}</span>
            </div>
            <LiveCounter total={50} />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full px-4 sm:px-0 sm:w-auto delay-500">
            <button
              onClick={() => handleWhatsAppClick()}
              className="wa-btn btn-press flex items-center justify-center gap-2 md:gap-3 px-6 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl bg-green-500 hover:bg-green-400 text-slate-950 font-black text-base md:text-lg transition-colors glow-green"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              {t.hero_cta_main}
            </button>
            <a
              href="#demos"
              className="btn-press flex items-center justify-center gap-2 px-6 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl glass-card hover:bg-white/5 text-white font-semibold text-sm md:text-base transition-colors border border-white/10"
            >
              {t.hero_cta_demos}
              <ChevronDown className="w-4 h-4 md:w-5 md:h-5 opacity-70" />
            </a>
          </div>

          {/* Social proof micro */}
          <div className="flex items-center gap-4 text-xs md:text-sm text-slate-500 delay-500 pt-2">
            <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-cyan-400" /> 24/7 Support</span>
            <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-amber-400" /> Fast Loading</span>
            <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-indigo-400" /> Custom Design</span>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* ═══════════════════════════════════════════════
           PAIN POINTS / PROBLEM AGITATION — INTEREST
           ═══════════════════════════════════════════════ */}
        <section className="space-y-10 md:space-y-16">
          <div className="text-center space-y-2 md:space-y-4 max-w-3xl mx-auto px-2">
            <span className="text-amber-400 font-semibold tracking-wider uppercase text-xs md:text-sm">{t.pain_eyebrow}</span>
            <h2 className="text-2xl md:text-5xl font-bold text-white">{t.pain_title}</h2>
            <p className="text-slate-400 text-sm md:text-lg">{t.pain_sub}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {t.pain_items.map((item, idx) => (
              <PainCard
                key={idx}
                icon={idx === 0 ? <TrendingDown className="w-5 h-5 md:w-6 md:h-6 text-red-400" /> :
                      idx === 1 ? <Clock className="w-5 h-5 md:w-6 md:h-6 text-amber-400" /> :
                      idx === 2 ? <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-orange-400" /> :
                                  <Package className="w-5 h-5 md:w-6 md:h-6 text-slate-400" />}
                title={item.title}
                desc={item.desc}
                delay={`delay-${(idx + 1) * 100}`}
              />
            ))}
          </div>
        </section>

        <div className="section-divider"></div>

        {/* ═══════════════════════════════════════════════
           FEATURES / SOLUTION — DESIRE
           ═══════════════════════════════════════════════ */}
        <section className="space-y-10 md:space-y-16">
          <div className="text-center space-y-2 md:space-y-4 max-w-3xl mx-auto px-2">
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-xs md:text-sm">{t.features_eyebrow}</span>
            <h2 className="text-2xl md:text-5xl font-bold">{t.features_title}</h2>
            <p className="text-slate-400 text-sm md:text-lg">{t.features_sub}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <FeatureCard
              icon={<Smartphone className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />}
              title={t.feat_1_title}
              desc={t.feat_1_desc}
              delay="delay-100"
            />
            <FeatureCard
              icon={<LayoutDashboard className="w-6 h-6 md:w-8 md:h-8 text-indigo-400" />}
              title={t.feat_2_title}
              desc={t.feat_2_desc}
              delay="delay-200"
            />
            <FeatureCard
              icon={<MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-green-400" />}
              title={t.feat_3_title}
              desc={t.feat_3_desc}
              delay="delay-300"
            />
            <FeatureCard
              icon={<QrCode className="w-6 h-6 md:w-8 md:h-8 text-amber-400" />}
              title={t.feat_4_title}
              desc={t.feat_4_desc}
              delay="delay-400"
            />
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
           LIVE DEMOS — SOCIAL PROOF
           ═══════════════════════════════════════════════ */}
        <section id="demos" className="space-y-8 md:space-y-12 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"></div>

          <div className="text-center space-y-2 md:space-y-4 relative z-10 px-2">
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-xs md:text-sm">{t.demos_eyebrow}</span>
            <h2 className="text-2xl md:text-5xl font-bold">{t.demos_title}</h2>
            <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto">{t.demos_sub}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative z-10">
            {t.demos.map((demo, idx) => (
              <a
                key={idx}
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover group p-4 md:p-6 flex flex-col justify-between h-36 md:h-48 relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 md:w-32 md:h-32 md:-right-6 md:-top-6 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="space-y-2 md:space-y-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-xl md:text-2xl shadow-inner">
                    {demo.emoji}
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg text-slate-100 group-hover:text-cyan-300 transition-colors leading-tight">{demo.label}</h3>
                    <p className="text-xs md:text-sm text-slate-500 font-mono mt-0.5 md:mt-1 truncate">{new URL(demo.url).hostname}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs md:text-sm font-medium text-indigo-400 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>{t.demos_visit}</span>
                  <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform rtl:group-hover:-translate-x-1 ltr-icon" />
                </div>
              </a>
            ))}

            {/* CTA inline with demos */}
            <div
              onClick={() => handleWhatsAppClick()}
              className="glass-card glass-card-hover group p-4 md:p-6 flex flex-col items-center justify-center text-center h-36 md:h-48 cursor-pointer bg-gradient-to-br from-amber-900/20 to-indigo-900/20 border-dashed border-2 border-amber-500/20 rounded-2xl md:rounded-3xl"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform">
                <ArrowIcon className="w-5 h-5 md:w-6 md:h-6 text-amber-400 ltr-icon" />
              </div>
              <h3 className="font-bold text-sm md:text-base text-slate-200">{t.dir === 'rtl' ? 'صمم قائمتك الآن' : 'Design Your Menu Now'}</h3>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
           PRICING — DUAL TIER
           ═══════════════════════════════════════════════ */}
        <section className="py-8 md:py-12 relative px-0 sm:px-2">
          <div className="max-w-5xl mx-auto relative">
            <div className="text-center space-y-2 md:space-y-4 mb-8 md:mb-12 px-2">
              <span className="text-amber-400 font-semibold tracking-wider uppercase text-xs md:text-sm">{t.price_eyebrow}</span>
              <h2 className="text-2xl md:text-5xl font-bold">{t.price_title}</h2>
              <p className="text-slate-400 text-sm md:text-lg">{t.price_subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">

              {/* Iraq Tier — Primary for Iraqi users */}
              <div className={`glass-card border-2 p-5 md:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden shadow-2xl transition-all duration-500 ${showIraqPricing ? 'border-amber-500/40 scale-[1.02] ring-1 ring-amber-500/20' : 'border-white/10'}`}>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{t.iq_tier_title}</h3>
                    <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold">{t.iq_tier_badge}</span>
                  </div>
                  <div className="flex items-baseline gap-1.5 md:gap-2 mb-2">
                    <span className="text-3xl md:text-5xl font-black text-white">{t.iq_tier_amount}</span>
                    <span className="text-base md:text-lg text-slate-400">{t.iq_tier_currency}{t.iq_tier_period}</span>
                  </div>
                  <p className="text-slate-500 text-xs mb-1">{t.iq_tier_payment}</p>
                  <p className="text-slate-400 text-sm mb-6">{t.iq_tier_desc}</p>
                  <button
                    onClick={() => handleWhatsAppClick()}
                    className="w-full btn-press flex items-center justify-center gap-2 px-5 py-4 rounded-xl font-black text-base transition-all glow-amber bg-amber-500 hover:bg-amber-400 text-slate-950"
                  >
                    {t.price_cta}
                    <ArrowIcon className="w-4 h-4 ltr-icon" />
                  </button>
                </div>
              </div>

              {/* International Tier — de-emphasized for Iraqi users */}
              <div className={`glass-card border-2 p-5 md:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden shadow-2xl transition-all duration-500 ${!showIraqPricing ? 'border-cyan-500/40 scale-[1.02] ring-1 ring-cyan-500/20' : 'border-white/10 opacity-60 hover:opacity-100'}`}>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{t.intl_tier_title}</h3>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold">{t.intl_tier_badge}</span>
                  </div>
                  <div className="flex items-baseline gap-1.5 md:gap-2 mb-2">
                    <span className="text-3xl md:text-5xl font-black text-white">{t.intl_tier_amount}</span>
                    <span className="text-base md:text-lg text-slate-400">{t.intl_tier_currency}{t.intl_tier_period}</span>
                  </div>
                  <p className="text-slate-500 text-xs mb-1">{t.intl_tier_payment}</p>
                  <p className="text-slate-400 text-sm mb-6">{t.intl_tier_desc}</p>
                  <button
                    onClick={() => handleWhatsAppClick()}
                    className="w-full btn-press flex items-center justify-center gap-2 px-5 py-4 rounded-xl font-black text-base transition-all glow-cyan bg-cyan-600 hover:bg-cyan-500 text-white"
                  >
                    {t.price_cta}
                    <ArrowIcon className="w-4 h-4 ltr-icon" />
                  </button>
                  {showIraqPricing && (
                    <p className="text-center text-[10px] text-slate-500 mt-3 border-t border-slate-700/50 pt-3">
                      {t.dir === 'rtl' ? 'هذه الباقة للعملاء خارج العراق' : 'This plan is for customers outside Iraq'}
                    </p>
                  )}
                </div>
              </div>

            </div>

            {/* Included items */}
            <div className="mt-8 md:mt-12 glass-card border-indigo-500/10 p-5 md:p-8 rounded-2xl md:rounded-3xl">
              <h3 className="font-semibold text-base md:text-lg mb-4 md:mb-6 text-center">{t.price_includes}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {t.price_items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 md:gap-3 p-3 rounded-xl bg-indigo-900/10 border border-indigo-500/5">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-xs md:text-sm leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
           LEAD CAPTURE FORM — MICRO-CONVERSION
           ═══════════════════════════════════════════════ */}
        <section id="lead-form" className="relative">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-2 md:space-y-4 mb-6 md:mb-8 px-2">
              <span className="text-amber-400 font-semibold tracking-wider uppercase text-xs md:text-sm">{t.form_eyebrow}</span>
              <h2 className="text-2xl md:text-4xl font-bold">{t.form_title}</h2>
              <p className="text-slate-400 text-sm md:text-base">{t.form_sub}</p>
            </div>

            {formSubmitted ? (
              <div className="glass-card border-green-500/20 p-8 md:p-12 rounded-2xl md:rounded-3xl text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {t.dir === 'rtl' ? 'تم استلام طلبك!' : 'Request Received!'}
                </h3>
                <p className="text-slate-400">
                  {t.dir === 'rtl'
                    ? 'فريق Nexa Digital سيتواصل معك خلال 24 ساعة. أو تواصل معنا مباشرة على واتساب.'
                    : 'Our team will reach out within 24 hours. Or chat with us directly on WhatsApp.'}
                </p>
                <button
                  onClick={() => handleWhatsAppClick()}
                  className="btn-press inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-slate-950 font-bold text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t.dir === 'rtl' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="glass-card border-indigo-500/10 p-5 md:p-10 rounded-2xl md:rounded-3xl space-y-5">
                <FormField
                  icon={<User className="w-4 h-4 text-cyan-400" />}
                  label={t.form_name_label}
                  placeholder={t.form_name_placeholder}
                  value={formData.name}
                  onChange={(v) => handleFormChange('name', v)}
                  required
                />
                <FormField
                  icon={<Store className="w-4 h-4 text-indigo-400" />}
                  label={t.form_restaurant_label}
                  placeholder={t.form_restaurant_placeholder}
                  value={formData.restaurant}
                  onChange={(v) => handleFormChange('restaurant', v)}
                />
                <FormField
                  icon={<Phone className="w-4 h-4 text-green-400" />}
                  label={t.form_phone_label}
                  placeholder={t.form_phone_placeholder}
                  value={formData.phone}
                  onChange={(v) => handleFormChange('phone', v)}
                  type="tel"
                  required
                />
                <FormField
                  icon={<MapPin className="w-4 h-4 text-amber-400" />}
                  label={t.form_location_label}
                  placeholder={t.form_location_placeholder}
                  value={formData.location}
                  onChange={(v) => handleFormChange('location', v)}
                />
                <p className="text-xs text-slate-500 flex items-center gap-1.5">
                  <Shield className="w-3 h-3 text-green-400/60" />
                  {t.form_note}
                </p>
                <button
                  type="submit"
                  className="w-full btn-press flex items-center justify-center gap-2 px-6 py-4 md:py-5 rounded-xl md:rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-base md:text-lg transition-all glow-amber shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  {t.form_submit}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
           WHY NEXA DIGITAL? — TRUST
           ═══════════════════════════════════════════════ */}
        <section className="space-y-10 md:space-y-16">
          <div className="text-center space-y-2 md:space-y-4 max-w-3xl mx-auto px-2">
            <span className="text-amber-400 font-semibold tracking-wider uppercase text-xs md:text-sm">{t.trust_eyebrow}</span>
            <h2 className="text-2xl md:text-5xl font-bold">{t.trust_title}</h2>
            <p className="text-slate-400 text-sm md:text-lg">{t.trust_sub}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {t.trust_items.map((item, idx) => (
              <TrustCard
                key={idx}
                icon={idx === 0 ? <Landmark className="w-6 h-6 md:w-8 md:h-8 text-amber-400" /> :
                      idx === 1 ? <Timer className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" /> :
                      idx === 2 ? <Shield className="w-6 h-6 md:w-8 md:h-8 text-green-400" /> :
                                  <Star className="w-6 h-6 md:w-8 md:h-8 text-indigo-400" />}
                title={item.title}
                desc={item.desc}
                delay={`delay-${(idx + 1) * 100}`}
              />
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
           FINAL CTA
           ═══════════════════════════════════════════════ */}
        <section className="text-center space-y-4 md:space-y-8 pb-12 px-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-amber-500/30 bg-amber-500/5 text-amber-300 text-xs md:text-sm font-medium mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            {t.hero_scarcity}
          </div>
          <h2 className="text-3xl md:text-6xl font-black text-white">{t.final_cta_title}</h2>
          <p className="text-sm md:text-xl text-slate-400 max-w-2xl mx-auto">{t.final_cta_sub}</p>
          <div className="flex justify-center pt-2 md:pt-0">
            <button
              onClick={() => handleWhatsAppClick()}
              className="wa-btn btn-press flex items-center justify-center gap-2 md:gap-3 px-6 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl bg-green-500 hover:bg-green-400 text-slate-950 font-black text-base md:text-xl transition-colors glow-green shadow-xl"
            >
              <MessageCircle className="w-5 h-5 md:w-7 md:h-7" />
              {t.final_cta_btn}
            </button>
          </div>
          {/* Scarcity countdown */}
          <div className="flex flex-col items-center gap-3 pt-4">
            <LiveCounter total={50} large />
            <span className="flex items-center gap-1.5 text-xs md:text-sm text-slate-500"><TrendingDown className="w-4 h-4 text-green-400" /> {t.dir === 'rtl' ? 'السعر الحالي مضمون' : 'Current price locked'}</span>
          </div>
        </section>

      </main>

      {/* Fixed Mobile Floating CTA */}
      <div className="fixed bottom-6 right-6 z-[60] md:hidden">
        <button
          onClick={() => handleWhatsAppClick()}
          className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-2xl glow-green animate-bounce-slow"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </button>
      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-800/60 bg-slate-950 py-12 px-6 text-center text-slate-500 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/50 to-violet-600/50 p-[1px]">
              <div className="w-full h-full rounded-[11px] bg-[#0a0f1e] flex items-center justify-center overflow-hidden">
                <img
                  src="/logo-icon.png"
                  alt="Nexa Digital"
                  className="w-full h-full object-cover opacity-80"
                  loading="lazy"
                  width="40"
                  height="40"
                />
              </div>
            </div>
            <div className="flex flex-col text-left rtl:text-right">
              <span className="font-black text-slate-200 tracking-tight">{t.nav_brand}</span>
              <span className="text-[9px] text-amber-400/50 font-bold uppercase tracking-widest">Digital Menu Agency</span>
            </div>
          </div>
          <p>{t.footer_rights}</p>
          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-cyan-500/70">{t.footer_tagline}</p>
            <a
              href="https://me.nexadigital.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium flex items-center gap-1 group"
            >
              <span>{t.dir === 'rtl' ? 'رؤية أعمالنا' : 'View Portfolio'}</span>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Sub-components ── */

function FeatureCard({ icon, title, desc, delay }) {
  return (
    <div className={`glass-card p-4 md:p-6 rounded-xl md:rounded-2xl hover:bg-white/[0.02] transition-colors border border-white/5 hover:border-indigo-500/30 ${delay}`}>
      <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-[#121b33] border border-white/5 flex items-center justify-center mb-3 md:mb-6 shadow-inner">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold text-slate-200 mb-1.5 md:mb-3 leading-tight">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-xs md:text-base">{desc}</p>
    </div>
  );
}

function PainCard({ icon, title, desc, delay }) {
  return (
    <div className={`glass-card p-4 md:p-6 rounded-xl md:rounded-2xl border border-red-500/10 hover:border-red-500/20 transition-colors ${delay}`}>
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-red-900/20 border border-red-500/10 flex items-center justify-center shrink-0 shadow-inner">
          {icon}
        </div>
        <div>
          <h3 className="text-base md:text-lg font-bold text-slate-200 mb-1 leading-tight">{title}</h3>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function TrustCard({ icon, title, desc, delay }) {
  return (
    <div className={`glass-card p-4 md:p-6 rounded-xl md:rounded-2xl border border-cyan-500/10 hover:border-cyan-500/20 transition-colors hover:bg-white/[0.02] ${delay}`}>
      <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-[#121b33] border border-white/5 flex items-center justify-center mb-3 md:mb-6 shadow-inner">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold text-slate-200 mb-1.5 md:mb-3 leading-tight">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-xs md:text-base">{desc}</p>
    </div>
  );
}

/* ── Live Counter (FOMO Component) ── */
function LiveCounter({ total = 50, large = false }) {
  const [remaining, setRemaining] = useState(() => Math.floor(Math.random() * 8) + 40);
  const [animated, setAnimated] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining(prev => Math.max(1, prev - (Math.random() > 0.6 ? 1 : 0)));
    }, 8000 + Math.random() * 7000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (animated < remaining) {
      const timeout = setTimeout(() => setAnimated(prev => Math.min(prev + 1, remaining)), 40);
      return () => clearTimeout(timeout);
    }
  }, [animated, remaining]);

  const filled = total - remaining;
  const pct = (filled / total) * 100;

  return (
    <div className={`flex flex-col items-center gap-1.5 ${large ? 'scale-110' : ''}`}>
      <div className="flex items-center gap-2 text-xs md:text-sm font-bold">
        <Users className={`${large ? 'w-4 h-4 md:w-5 md:h-5' : 'w-3.5 h-3.5'} text-amber-400`} />
        <span className="text-slate-300">
          <span className="text-amber-400 font-black tabular-nums">{animated}</span>
          <span className="text-slate-500 mx-1">/</span>
          <span>{total}</span>
        </span>
        <span className="text-slate-500 font-medium">{large ? (remaining === 1 ? 'spot left' : 'spots left') : (remaining === 1 ? 'spot' : 'spots')}</span>
      </div>
      {/* Progress bar */}
      <div className={`w-32 ${large ? 'md:w-48' : ''} h-1.5 rounded-full bg-slate-800 overflow-hidden`}>
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-1000 ease-out"
          style={{ width: `${Math.min(pct, 100)}%` }}
        />
      </div>
    </div>
  );
}

function FormField({ icon, label, placeholder, value, onChange, type = 'text', required = false }) {
  const inputId = `field-${label.replace(/\s+/g, '-').toLowerCase()}`;
  return (
    <div>
      <label htmlFor={inputId} className="block text-sm md:text-base font-medium text-slate-300 mb-1.5 md:mb-2">
        {label}{required && <span className="text-red-400 mr-1">*</span>}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          {icon}
        </div>
        <input
          id={inputId}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl py-3.5 ps-10 pe-4 text-sm md:text-base text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
        />
      </div>
    </div>
  );
}
