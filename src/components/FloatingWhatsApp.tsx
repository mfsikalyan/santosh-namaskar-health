import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS } from '../config/siteConfig';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-5 z-40 group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-navy text-white text-xs font-bold rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-teal/40">
        Chat 24/7 on WhatsApp!
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="WhatsApp Us"
      >
        {/* Pulsing Green Glow Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
        <MessageCircle className="w-7 h-7 relative z-10 fill-white/20" />
      </a>
    </div>
  );
};
