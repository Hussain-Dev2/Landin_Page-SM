import React, { useState, useEffect } from 'react';
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
  ChevronDown
} from 'lucide-react';

export default function App() {
  const [t, setT] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Detect language on mount
    const trans = detectLanguage();
    setT(trans);
    document.documentElement.dir = trans.dir;
    document.documentElement.lang = trans.lang;
    
    // Add a slight delay for entry animations
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  if (!t) return null; // Avoid flashing raw text before detection

  // Force Native WhatsApp Protocol
  const handleWhatsAppClick = () => {
    // 964 format for Iraq, user can update this number later
    const phoneNumber = "9647700000000"; 
    const message = encodeURIComponent("مرحباً، أريد الاستفسار عن عرض القائمة الرقمية بسعر 40,000 دينار.");
    // whatsapp://send forces the native app to open
    window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
  };

  const ArrowIcon = t.dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen bg-mesh font-sans overflow-hidden">
      
      {/* ── Navbar ─────────────────────────────────── */}
      <nav className="fixed top-0 w-full z-50 glass-card rounded-none border-t-0 border-l-0 border-r-0 border-b border-cyan-500/20 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-violet-600 p-[1px] shadow-xl shadow-indigo-500/10 transition-transform duration-500">
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
              <span className="hidden md:block text-[10px] md:text-xs text-indigo-400 font-bold tracking-[0.15em] uppercase mt-1">Digital Solutions</span>
            </div>
          </div>
          <button 
            onClick={handleWhatsAppClick}
            className="px-4 py-2 md:px-5 md:py-2 rounded-full bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 text-white text-xs md:text-sm font-medium transition-all btn-press flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-green-400" />
            <span className="hidden xs:block">{t.nav_cta}</span>
          </button>
        </div>
      </nav>

      <main className="pt-24 pb-16 px-4 md:px-6 max-w-6xl mx-auto space-y-20 md:space-y-32">
        
        {/* ── Hero Section ───────────────────────────── */}
        <section className={`flex flex-col items-center text-center space-y-6 md:space-y-8 ${isLoaded ? 'fade-up' : 'opacity-0'}`}>
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-card border-indigo-500/20 text-indigo-300 text-xs md:text-sm font-medium mb-1 md:mb-4 delay-100 animate-float">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            {t.hero_badge}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold leading-[1.15] md:leading-[1.1] tracking-tight delay-200 px-2">
            {t.hero_headline_1} <br/>
            <span className="text-gradient-vibrant block mt-1 md:mt-2">{t.hero_headline_2}</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl delay-300 leading-relaxed px-2">
            {t.hero_sub}
          </p>

          {/* Pricing Highlight */}
          <div className="delay-400 py-4 md:py-6">
            <div className="inline-flex flex-col items-center justify-center px-6 py-4 md:px-10 md:py-6 rounded-2xl md:rounded-3xl bg-indigo-900/10 border border-indigo-500/20 relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-baseline gap-2 md:gap-3">
                <span className="text-4xl sm:text-5xl md:text-7xl font-black text-gradient-vibrant drop-shadow-lg">{t.hero_price}</span>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-lg md:text-2xl font-bold text-white/90">{t.hero_currency}</span>
                  <span className="text-sm md:text-lg font-medium text-indigo-400/80">{t.hero_period}</span>
                </div>
              </div>
              <span className="text-slate-400 mt-2 md:mt-3 font-medium tracking-wide uppercase text-[10px] md:text-xs opacity-70">{t.hero_price_label}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full px-4 sm:px-0 sm:w-auto delay-500">
            <button 
              onClick={handleWhatsAppClick}
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

        </section>

        <div className="section-divider"></div>

        {/* ── Features Section ───────────────────────── */}
        <section className="space-y-10 md:space-y-16">
          <div className="text-center space-y-2 md:space-y-4 max-w-3xl mx-auto px-2">
            <span className="text-indigo-400 font-semibold tracking-wider uppercase text-xs md:text-sm">{t.features_eyebrow}</span>
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
              icon={<QrCode className="w-6 h-6 md:w-8 md:h-8 text-violet-400" />}
              title={t.feat_4_title}
              desc={t.feat_4_desc}
              delay="delay-400"
            />
          </div>
        </section>

        {/* ── Live Demos Section ─────────────────────── */}
        <section id="demos" className="space-y-8 md:space-y-12 relative">
          {/* Decorative background elements */}
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
                {/* Abstract graphic representing a menu */}
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
            
            {/* CTA Card inline with demos */}
            <div 
              onClick={handleWhatsAppClick}
              className="glass-card glass-card-hover group p-4 md:p-6 flex flex-col items-center justify-center text-center h-36 md:h-48 cursor-pointer bg-gradient-to-br from-indigo-900/20 to-violet-900/20 border-dashed border-2 border-indigo-500/20 rounded-2xl md:rounded-3xl"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform">
                <ArrowIcon className="w-5 h-5 md:w-6 md:h-6 text-indigo-400 ltr-icon" />
              </div>
              <h3 className="font-bold text-sm md:text-base text-slate-200">صمم قائمتك الآن</h3>
            </div>
          </div>
        </section>

        {/* ── Pricing Section ────────────────────────── */}
        <section className="py-8 md:py-12 relative px-0 sm:px-2">
          <div className="max-w-4xl mx-auto glass-card border-indigo-500/20 p-5 md:p-12 rounded-2xl md:rounded-3xl relative overflow-hidden shadow-2xl">
            {/* Circuit background */}
            <div className="absolute inset-0 bg-circuit opacity-30 pointer-events-none"></div>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 relative z-10">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <span className="text-indigo-400 font-semibold tracking-wider uppercase text-xs md:text-sm">{t.price_eyebrow}</span>
                  <h2 className="text-xl md:text-3xl font-bold mt-1 md:mt-2">{t.price_title}</h2>
                  <p className="text-slate-400 mt-1 md:mt-2 text-xs md:text-base">{t.price_subtitle}</p>
                </div>
                
                <div className="flex items-baseline gap-1.5 md:gap-2">
                  <span className="text-4xl md:text-6xl font-black text-white">{t.price_amount}</span>
                  <span className="text-base md:text-xl text-slate-400">{t.price_currency} {t.price_period}</span>
                </div>
                
                <p className="text-slate-300 leading-relaxed text-xs md:text-base">
                  {t.price_desc}
                </p>

                <button 
                  onClick={handleWhatsAppClick}
                  className="w-full btn-press flex items-center justify-center gap-2 px-5 py-4 md:px-6 md:py-5 rounded-xl md:rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-base md:text-lg transition-colors glow-indigo shadow-lg"
                >
                  {t.price_cta}
                  <ArrowIcon className="w-4 h-4 md:w-5 md:h-5 ltr-icon" />
                </button>
              </div>

              <div className="bg-indigo-900/20 rounded-xl md:rounded-2xl p-5 md:p-8 border border-indigo-500/10">
                <h3 className="font-semibold text-base md:text-lg mb-4 md:mb-6">{t.price_includes}</h3>
                <ul className="space-y-3 md:space-y-4">
                  {t.price_items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 md:gap-3">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-xs md:text-base leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA ──────────────────────────────── */}
        <section className="text-center space-y-4 md:space-y-8 pb-12 px-2">
          <h2 className="text-3xl md:text-6xl font-black text-white">{t.final_cta_title}</h2>
          <p className="text-sm md:text-xl text-slate-400 max-w-2xl mx-auto">{t.final_cta_sub}</p>
          <div className="flex justify-center pt-2 md:pt-0">
             <button 
                onClick={handleWhatsAppClick}
                className="wa-btn btn-press flex items-center justify-center gap-2 md:gap-3 px-6 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl bg-green-500 hover:bg-green-400 text-slate-950 font-black text-base md:text-xl transition-colors glow-green shadow-xl"
              >
                <MessageCircle className="w-5 h-5 md:w-7 md:h-7" />
                {t.final_cta_btn}
              </button>
          </div>
        </section>

      </main>

      {/* Fixed Mobile Floating CTA */}
      <div className="fixed bottom-6 right-6 z-[60] md:hidden">
        <button 
          onClick={handleWhatsAppClick}
          className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-2xl glow-green animate-bounce-slow"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </button>
      </div>

      {/* ── Footer ─────────────────────────────────── */}
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
              <span className="text-[9px] text-indigo-400/50 font-bold uppercase tracking-widest">Premium Menu Agency</span>
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
