import React from 'react';
import { Phone, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS, BUSINESS } from '../config/siteConfig';

export const HowItWorks: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-health-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-soft text-teal text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Simple 4-Step Process
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy font-heading">
            How to Request Home Nursing Care
          </h2>

          <p className="text-base sm:text-lg text-health-muted leading-relaxed">
            Arranging a professional home nursing visit is fast, straightforward, and available 24/7.
          </p>
        </div>

        {/* Timeline Grid: Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          {/* Connecting Line behind steps (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-navy via-teal to-gold -translate-y-6 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {HOW_IT_WORKS.map((stepItem) => (
              <div
                key={stepItem.step}
                className="bg-white rounded-3xl p-6 shadow-health border border-slate-200/80 flex flex-col justify-between hover:border-teal transition-all duration-300 relative"
              >
                {/* Step Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-navy to-navy-dark text-white font-extrabold text-lg flex items-center justify-center shadow-md">
                    0{stepItem.step}
                  </div>
                  <span className="text-[10px] font-extrabold tracking-widest text-teal uppercase bg-teal-soft px-2.5 py-1 rounded-full">
                    Step {stepItem.step}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <h3 className="text-lg font-extrabold text-navy font-heading">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-health-muted leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                {stepItem.step === 1 && (
                  <div className="pt-2">
                    <a
                      href={`tel:${BUSINESS.phoneRaw}`}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-gold-dark hover:underline"
                    >
                      <Phone className="w-3.5 h-3.5" /> {BUSINESS.phone}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gold text-navy font-extrabold text-sm shadow-gold-glow hover:bg-gold-light transition-all"
          >
            <Phone className="w-4 h-4 fill-navy/20" />
            <span>Call Now to Request Visit</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-teal text-white font-extrabold text-sm shadow-teal-glow hover:bg-teal-dark transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Message on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
