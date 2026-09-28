import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS } from '../config/siteConfig';

export const MobileActionBar: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

  return (
    <aside aria-label="Mobile sticky action bar" className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-2xl">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gold text-navy font-black text-xs uppercase tracking-wide shadow-md active:scale-95 transition-transform border border-gold-dark/20"
        >
          <Phone className="w-4 h-4 fill-navy/20 animate-pulse" />
          <span>Call Now</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-teal text-white font-black text-xs uppercase tracking-wide shadow-md active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
