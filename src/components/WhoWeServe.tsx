import React from 'react';
import { Users, Heart, ArrowRight } from 'lucide-react';
import { WHO_WE_SERVE, BUSINESS } from '../config/siteConfig';

export const WhoWeServe: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-soft text-teal text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" /> Who We Serve
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy font-heading">
            Tailored Nursing Support for Every Situation
          </h2>

          <p className="text-base sm:text-lg text-health-muted leading-relaxed">
            Our home health care visits provide comfort and safety for diverse caregiving requirements.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHO_WE_SERVE.map((item, idx) => (
            <article
              key={idx}
              className="group rounded-3xl bg-health-bg hover:bg-white border border-slate-200/80 hover:border-teal/50 shadow-sm hover:shadow-health transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Image banner */}
              <div className="relative h-40 overflow-hidden bg-navy-dark">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent"></div>

                <div className="absolute top-3 left-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-navy/90 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase border border-white/20">
                    {item.badge}
                  </span>
                </div>

                <div className="absolute top-3 right-3 text-gold">
                  <Heart className="w-5 h-5 fill-gold/30" />
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-navy group-hover:text-teal transition-colors font-heading">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-health-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-navy">
                  <span>In-Home Nursing Support</span>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline flex items-center gap-1">
                    Inquire <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
