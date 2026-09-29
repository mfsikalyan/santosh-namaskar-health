import React from 'react';
import { Phone, MessageCircle, Clock, ShieldAlert, Heart, MapPin, Mail, ExternalLink, Star, Award } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS, LOCATION, MEDICAL_DISCLAIMER } from '../config/siteConfig';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

  return (
    <footer className="bg-navy-dark text-white border-t border-slate-800 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Google Map & Verified Location Details Banner */}
        <div className="bg-navy/80 rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Location & Credentials Info */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-bold uppercase tracking-wider border border-gold/30">
                <MapPin className="w-3.5 h-3.5 text-gold" /> {LOCATION.city}, {LOCATION.state}
              </div>

              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>5.0 ★ Google Rated</span>
              </div>

              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-bold border border-pink-500/30">
                <Award className="w-3.5 h-3.5 text-pink-300" />
                <span>Women-Owned</span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-heading text-white leading-tight">
              Namaskar Home Health Care Service Location
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Serving <strong className="text-white">Raghunathpur, Bhubaneswar, Odisha</strong> and surrounding areas with 24/7 dedicated home nursing care.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              <div className="flex items-start gap-3 text-slate-200">
                <MapPin className="w-5 h-5 text-teal-light flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">{BUSINESS.name}</strong>
                  <span>{LOCATION.fullAddress}</span>
                  <span className="block text-[11px] text-teal-light font-mono mt-0.5">Plus Code: {LOCATION.plusCode}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-200">
                <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                <span><strong className="text-white">Service Hours:</strong> {BUSINESS.availability}</span>
              </div>

              <div className="flex items-center gap-3 text-slate-200">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span><strong className="text-white">Direct Phone:</strong> <a href={`tel:${BUSINESS.phoneRaw}`} className="text-gold font-bold hover:underline">{BUSINESS.phoneDisplay}</a> ({BUSINESS.phone})</span>
              </div>

              <div className="flex items-center gap-3 text-slate-200">
                <Mail className="w-5 h-5 text-teal-light flex-shrink-0" />
                <span><strong className="text-white">Email:</strong> <a href={`mailto:${LOCATION.email}`} className="text-teal-light hover:underline">{LOCATION.email}</a></span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={LOCATION.googleMapsDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gold text-navy font-extrabold text-xs shadow-md hover:bg-gold-light transition-all"
              >
                <MapPin className="w-4 h-4 fill-navy/20" /> Open in Google Maps
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal text-white font-extrabold text-xs shadow-md hover:bg-teal-dark transition-all"
              >
                <MessageCircle className="w-4 h-4" /> Instant WhatsApp
              </a>
            </div>
          </div>

          {/* Right Google Maps Embed Container */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-xl h-64 sm:h-80 bg-slate-900 group">
            <iframe
              title="Namaskar Home Health Care Service Google Map Location Bhubaneswar"
              src={LOCATION.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-[0.9] contrast-[1.05] group-hover:saturate-100 transition-all duration-300"
            ></iframe>

            {/* Map Overlay Badge */}
            <div className="absolute top-3 left-3 bg-navy-dark/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-gold/40 flex items-center gap-2 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-gold animate-ping"></span>
              <span className="text-[11px] font-extrabold text-white uppercase tracking-wider">Raghunathpur, Bhubaneswar • 24/7</span>
            </div>
          </div>

        </div>

        {/* Main Footer Links & Company Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Logo & Business Info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="horizontal" lightBg={false} />
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Trusted home nursing care delivered with clinical discipline, hygienic single-use equipment, and compassion right at your doorstep in Bhubaneswar.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-gold">
              <Clock className="w-4 h-4" />
              <span>{BUSINESS.availability}</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gold text-navy font-bold text-xs shadow-sm hover:bg-gold-light"
              >
                <Phone className="w-3.5 h-3.5 fill-navy/20" /> Call {BUSINESS.phoneDisplay}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal text-white font-bold text-xs shadow-sm hover:bg-teal-dark"
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
