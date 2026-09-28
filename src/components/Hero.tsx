import React from 'react';
import { Phone, MessageCircle, ShieldCheck, HeartPulse, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { BUSINESS, IMAGES } from '../config/siteConfig';

export const Hero: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

  return (
    <section id="home" className="relative pt-24 sm:pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-navy via-navy to-navy-dark text-white overflow-hidden">
      {/* Abstract Background Healthcare Vector Graphics */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-teal rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text & CTA Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* 24x7 Availability Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-light/60 border border-teal/40 backdrop-blur-md shadow-inner text-xs sm:text-sm font-semibold text-teal-light">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-light opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal"></span>
              </span>
              <Clock className="w-4 h-4 text-gold" />
              <span>Available 24 Hours • 7 Days a Week</span>
            </div>

            {/* Main Title - SEO single H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight font-heading">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-light via-teal to-gold">Home Healthcare</span>, When You Need It
            </h1>

            {/* Supporting Headline */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
              Trusted nursing care delivered with <strong className="text-white font-semibold">professionalism</strong>, <strong className="text-white font-semibold">hygiene</strong>, and <strong className="text-white font-semibold">compassion</strong> — right at your home.
            </p>

            {/* Key Service Highlights Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full pt-1">
              {[
                'Wound Dressing & Post-Surgery Care',
                'Injection, Saline & IV Drip Setup',
                'Catheter Care & Daily Vitals Check',
                '24/7 Emergency Nursing Visit'
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-light flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Primary & Secondary Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto pt-4">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-navy bg-gold hover:bg-gold-light rounded-2xl shadow-gold-glow transition-all duration-300 hover:-translate-y-1 active:translate-y-0 text-center"
              >
                <Phone className="w-5 h-5 text-navy fill-navy/20 animate-bounce" />
                <span>Call Now: {BUSINESS.phone}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-bold text-white bg-teal hover:bg-teal-dark rounded-2xl shadow-teal-glow transition-all duration-300 hover:-translate-y-1 active:translate-y-0 text-center border border-teal-light/30"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Trust Micro Footer */}
            <div className="pt-2 flex items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-light" />
                <span>Hygienic & Sterile Protocols</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HeartPulse className="w-4 h-4 text-gold" />
                <span>Care at Doorstep</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Image Card + Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Glowing Backdrop Circle */}
            <div className="absolute -inset-4 bg-gradient-to-r from-teal/30 to-gold/30 rounded-3xl blur-2xl opacity-60"></div>

            <div className="relative w-full max-w-md bg-navy-dark/90 border border-slate-700/60 rounded-3xl p-3 shadow-2xl backdrop-blur-xl space-y-3 overflow-hidden">
              
              {/* High-Resolution Hero Photography */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-slate-700">
                <img
                  src={IMAGES.hero}
                  alt={IMAGES.heroAlt}
                  width="800"
                  height="600"
                  decoding="async"
                  // @ts-ignore
                  fetchpriority="high"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Glass Badge on Top Left of Photo */}
                <div className="absolute top-3 left-3 bg-navy-dark/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-gold/40 flex items-center gap-2 shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold animate-ping"></span>
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider">24x7 Home Service</span>
                </div>
              </div>

              {/* Title & Slogan inside Card */}
              <div className="p-3 text-center">
                <div className="flex items-center justify-center gap-2">
                  <h3 className="text-xl font-black text-white uppercase tracking-wider font-heading">
                    NAMASKAR
                  </h3>
                  <span className="text-[10px] bg-gold text-navy font-bold px-1.5 py-0.5 rounded">CARE</span>
                </div>
                <p className="text-[11px] font-bold text-teal-light tracking-widest uppercase mt-0.5">
                  HOME HEALTH CARE SERVICE
                </p>
                
                {/* Quick Phone Bar */}
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="mt-2.5 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gold/15 hover:bg-gold/25 border border-gold/40 text-gold font-bold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" /> Call: {BUSINESS.phone}
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
