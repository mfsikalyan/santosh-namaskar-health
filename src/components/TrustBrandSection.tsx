import React from 'react';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { BUSINESS } from '../config/siteConfig';

export const TrustBrandSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-navy via-navy to-navy-dark text-white relative overflow-hidden">
      {/* Visual Accent Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Large Logo Emblem */}
        <div className="w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-3xl bg-navy-dark/90 p-4 border-2 border-gold/40 shadow-2xl flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <circle cx="50" cy="50" r="48" fill="#063B5A" />
            <circle cx="50" cy="50" r="44" fill="none" stroke="#E5B52B" strokeWidth="3" />
            <path d="M50 80 C32 66 22 52 22 40 A14 14 0 0 1 50 28 A14 14 0 0 1 78 40 C78 52 68 66 50 80 Z" fill="#079B84" opacity="0.4"/>
            <rect x="43" y="26" width="14" height="48" rx="4" fill="#079B84"/>
            <rect x="26" y="43" width="48" height="14" rx="4" fill="#079B84"/>
            <circle cx="50" cy="50" r="6" fill="#E5B52B"/>
          </svg>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider font-heading text-white">
            NAMASKAR HOME HEALTH CARE SERVICE
          </h2>
          
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-0.5 w-12 sm:w-20 bg-gold"></div>
            <p className="text-sm sm:text-base font-extrabold text-gold tracking-widest uppercase">
              {BUSINESS.tagline}
            </p>
            <div className="h-0.5 w-12 sm:w-20 bg-gold"></div>
          </div>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto font-normal">
            Our goal is to make professional home nursing support easier to access for patients and their families, ensuring comfort, dignity, and high hygienic standards.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-3xl mx-auto">
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center space-y-1">
            <ShieldCheck className="w-6 h-6 text-gold mx-auto" />
            <h3 className="text-sm font-bold text-white">Professional Support</h3>
            <p className="text-xs text-slate-300">Dedicated nursing staff for home visits.</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center space-y-1">
            <Sparkles className="w-6 h-6 text-teal-light mx-auto" />
            <h3 className="text-sm font-bold text-white">Strict Hygiene</h3>
            <p className="text-xs text-slate-300">Sterile equipment and single-use supplies.</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center space-y-1">
            <Heart className="w-6 h-6 text-gold mx-auto" />
            <h3 className="text-sm font-bold text-white">24/7 Availability</h3>
            <p className="text-xs text-slate-300">Round-the-clock emergency support.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
