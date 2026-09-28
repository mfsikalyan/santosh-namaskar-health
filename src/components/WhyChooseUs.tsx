import React from 'react';
import { Award, ShieldCheck, Home, Clock, Heart, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS } from '../config/siteConfig';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-teal" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-teal" />;
      case 'Home':
        return <Home className="w-6 h-6 text-teal" />;
      case 'Clock24':
        return <Clock className="w-6 h-6 text-gold" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-teal" />;
      case 'MessageCircle':
        return <MessageCircle className="w-6 h-6 text-teal" />;
      default:
        return <Sparkles className="w-6 h-6 text-teal" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-navy-dark text-xs font-bold uppercase tracking-wider border border-gold/30">
            <CheckCircle2 className="w-3.5 h-3.5 text-gold-dark" /> Why Choose Namaskar
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy font-heading">
            Care You Can Trust at Home
          </h2>

          <p className="text-base sm:text-lg text-health-muted leading-relaxed">
            We bridge the gap between hospital care and home comfort with medical discipline, hygienic procedures, and genuine compassion.
          </p>
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-health-bg hover:bg-white border border-slate-200/80 hover:border-teal/40 shadow-sm hover:shadow-health transition-all duration-300 group space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-teal-soft flex items-center justify-center border border-slate-200 shadow-sm transition-colors">
                {getIcon(item.iconName)}
              </div>

              <h3 className="text-lg font-bold text-navy group-hover:text-teal transition-colors font-heading">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-health-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-navy via-navy-royal to-navy text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-health-lg border border-gold/30">
          <div className="space-y-1">
            <h4 className="text-lg sm:text-xl font-bold font-heading text-white">
              Looking for Immediate Home Nursing Assistance?
            </h4>
            <p className="text-xs sm:text-sm text-slate-200">
              Our line is open 24 hours a day, 7 days a week. Speak directly with us now.
            </p>
          </div>

          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="px-6 py-3 rounded-2xl bg-gold hover:bg-gold-light text-navy font-extrabold text-sm shadow-gold-glow flex items-center gap-2 flex-shrink-0 transition-all hover:scale-105"
          >
            Call {BUSINESS.phone}
          </a>
        </div>

      </div>
    </section>
  );
};
