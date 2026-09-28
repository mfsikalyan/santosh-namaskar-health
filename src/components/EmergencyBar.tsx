import React from 'react';
import { Phone, MessageCircle, Clock } from 'lucide-react';
import { BUSINESS } from '../config/siteConfig';

export const EmergencyBar: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-teal-dark via-teal to-teal-dark rounded-2xl shadow-health-lg p-5 sm:p-6 text-white border border-teal-light/40">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          
          {/* Left info badge & title */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-full bg-gold/20 border border-gold/50 items-center justify-center text-gold">
              <Clock className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <span className="bg-gold text-navy font-extrabold text-[10px] uppercase px-2 py-0.5 rounded tracking-wider">
                  24x7 Home Service
                </span>
                <span className="text-xs font-semibold text-teal-soft">Immediate Nursing Visit Support</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">
                Need Home Nursing Care Right Now?
              </h2>
              <p className="text-xs sm:text-sm text-slate-100 font-medium mt-0.5">
                Call or WhatsApp us directly for prompt assistance: <strong className="text-gold">{BUSINESS.phone}</strong>
              </p>
            </div>
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center gap-3 w-full md:w-auto flex-shrink-0">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gold text-navy font-extrabold text-sm shadow-md hover:bg-gold-light transition-all hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4 fill-navy/20" />
              <span>Call Now</span>
            </a>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-navy text-white font-extrabold text-sm shadow-md hover:bg-navy-dark transition-all hover:scale-105 active:scale-95 border border-white/20"
            >
              <MessageCircle className="w-4 h-4 text-teal-light" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
