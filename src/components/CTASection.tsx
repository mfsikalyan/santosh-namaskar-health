import React from 'react';
import { Phone, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS } from '../config/siteConfig';

export const CTASection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-navy via-navy-royal to-navy text-white relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20%" cy="50%" r="300" fill="#079B84" />
          <circle cx="80%" cy="50%" r="300" fill="#E5B52B" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 text-gold text-xs font-bold uppercase tracking-wider border border-gold/40">
          <Clock className="w-4 h-4" /> Available 24 Hours • 7 Days a Week
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading leading-tight">
          Ready to Arrange Home Nursing Care?
        </h2>

        <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-normal">
          Talk to our team now. We are available day and night to provide compassionate, hygienic nursing support at your doorstep.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gold text-navy font-extrabold text-base shadow-gold-glow hover:bg-gold-light transition-all hover:scale-105"
          >
            <Phone className="w-5 h-5 fill-navy/20" />
            <span>Call Now: {BUSINESS.phone}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-teal text-white font-extrabold text-base shadow-teal-glow hover:bg-teal-dark transition-all hover:scale-105 border border-teal-light/30"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Us Now</span>
          </a>
        </div>

        <div className="pt-4 flex items-center justify-center gap-6 text-xs text-slate-300">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-teal-light" /> Professional Nursing
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-gold" /> Hygienic Protocols
          </span>
        </div>

      </div>
    </section>
  );
};
