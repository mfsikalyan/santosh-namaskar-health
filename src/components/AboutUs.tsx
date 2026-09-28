import React from 'react';
import { ShieldCheck, Heart, Sparkles, Clock, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS, IMAGES } from '../config/siteConfig';

export const AboutUs: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Photo Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-gradient-to-br from-navy to-navy-dark p-3 text-white shadow-health-lg overflow-hidden border border-teal/30 space-y-3">
              
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-slate-700">
                <img
                  src={IMAGES.about}
                  alt={IMAGES.aboutAlt}
                  width="600"
                  height="450"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Badge Overlay */}
                <div className="absolute bottom-3 left-3 right-3 bg-navy-dark/85 backdrop-blur-md p-3 rounded-xl border border-gold/30 text-center">
                  <span className="text-xs font-bold text-gold uppercase tracking-wider block">Compassionate Senior & Post-Op Care</span>
                  <span className="text-[11px] text-slate-300">Dedicated Home Visit Nursing</span>
                </div>
              </div>

              {/* Bottom Quick Call & WhatsApp Buttons */}
              <div className="flex gap-2 p-2">
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="flex-1 py-2.5 px-3 bg-gold text-navy rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:bg-gold-light"
                >
                  <Phone className="w-3.5 h-3.5 fill-navy/20" /> Call {BUSINESS.phone}
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 bg-teal text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:bg-teal-dark"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                </a>
              </div>

            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-soft text-teal text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> About Our Service
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading leading-tight">
              Dedicated to Caring, Professional & Hygienic Nursing Visits
            </h2>

            <p className="text-base text-health-muted leading-relaxed">
              <strong>NAMASKAR HOME HEALTH CARE SERVICE</strong> provides dependable home nursing assistance for elderly patients, post-surgical recovery, routine vital checks, wound dressing, and IV setups. We understand that healing and recovery feel safest and most dignified in the warmth of your own home.
            </p>

            {/* 3 Core Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-health-bg border border-slate-200/80 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-navy text-white flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-sm font-bold text-navy">Professional</h3>
                <p className="text-xs text-health-muted">Focused nursing procedures performed with trained clinical discipline.</p>
              </div>

              <div className="p-4 rounded-2xl bg-health-bg border border-slate-200/80 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-teal text-white flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-bold text-navy">Hygienic</h3>
                <p className="text-xs text-health-muted">Sterile single-use supplies and strict infection-prevention protocols.</p>
              </div>

              <div className="p-4 rounded-2xl bg-health-bg border border-slate-200/80 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-navy text-white flex items-center justify-center font-bold">
                  <Heart className="w-5 h-5 text-teal-light" />
                </div>
                <h3 className="text-sm font-bold text-navy">Safe Patient Care</h3>
                <p className="text-xs text-health-muted">Comforting, respectful, and supportive interaction for every patient.</p>
              </div>
            </div>

            {/* 24/7 Commitment Callout */}
            <div className="p-5 rounded-2xl bg-navy text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-gold/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Available 24 Hours • 7 Days a Week</h3>
                  <p className="text-xs text-slate-300">Whether it's day, night, or weekends, we are ready to assist your family.</p>
                </div>
              </div>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gold text-navy font-bold text-xs text-center shadow-md hover:bg-gold-light"
              >
                Call {BUSINESS.phone}
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
