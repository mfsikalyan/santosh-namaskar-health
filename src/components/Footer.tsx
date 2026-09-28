import React from 'react';
import { Phone, MessageCircle, Clock, ShieldAlert, Heart } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS, MEDICAL_DISCLAIMER } from '../config/siteConfig';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

  return (
    <footer className="bg-navy-dark text-white border-t border-slate-800 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Logo & Business Info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="horizontal" lightBg={false} />
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Trusted home nursing care delivered with clinical discipline, hygienic single-use equipment, and compassion right at your home.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-gold">
              <Clock className="w-4 h-4" />
              <span>{BUSINESS.availability}</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gold text-navy font-bold text-xs"
              >
                <Phone className="w-3.5 h-3.5 fill-navy/20" /> Call {BUSINESS.phone}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal text-white font-bold text-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-light font-heading">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-gold transition-colors">Why Choose Us</a></li>
              <li><a href="#how-it-works" className="hover:text-gold transition-colors">How It Works</a></li>
              <li><a href="#faq" className="hover:text-gold transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Services Links & Legal */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-light font-heading">
              Home Nursing Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li><a href="#services" className="hover:text-gold transition-colors">Wound Dressing & Post-Surgery Care</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Injection, Saline & IV Drip Setup</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Catheter Care & Daily Vitals Check</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">24/7 Emergency Nursing Visit Support</a></li>
            </ul>

            <div className="pt-4 flex items-center gap-4 text-xs text-slate-400">
              <button
                onClick={() => onOpenLegal('privacy')}
                className="hover:text-gold underline focus:outline-none"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={() => onOpenLegal('terms')}
                className="hover:text-gold underline focus:outline-none"
              >
                Terms & Conditions
              </button>
            </div>
          </div>

        </div>

        {/* Section 30: Safety / Medical Disclaimer Box */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-400 leading-relaxed flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-200 font-bold block mb-0.5">{MEDICAL_DISCLAIMER.title}:</strong>
            <p>{MEDICAL_DISCLAIMER.content}</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p className="flex items-center gap-1 text-[11px]">
            <span>Designed for safe patient care</span> <Heart className="w-3 h-3 text-gold fill-gold" />
          </p>
        </div>

      </div>
    </footer>
  );
};
