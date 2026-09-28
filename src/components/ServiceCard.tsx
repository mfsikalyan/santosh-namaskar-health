import React from 'react';
import { Bandage, Syringe, Activity, Clock, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { ServiceItem, BUSINESS } from '../config/siteConfig';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(`Hello Namaskar Care, I would like to inquire about ${service.title}.`)}`;

  const renderIcon = () => {
    switch (service.iconName) {
      case 'Bandage':
        return <Bandage className="w-5 h-5 text-teal" />;
      case 'Syringe':
        return <Syringe className="w-5 h-5 text-teal" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-teal" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-gold" />;
      default:
        return <Activity className="w-5 h-5 text-teal" />;
    }
  };

  return (
    <article className="group relative bg-white rounded-3xl overflow-hidden shadow-health hover:shadow-health-lg transition-all duration-300 border border-slate-100 flex flex-col justify-between hover:-translate-y-1">
      
      {/* Top Image Banner */}
      <div className="relative h-48 overflow-hidden bg-navy-dark">
        <img
          src={service.image}
          alt={service.imageAlt}
          width="800"
          height="600"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent"></div>

        {/* Floating Service Badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-extrabold text-navy shadow-md border border-slate-200">
          24/7 Home Nursing
        </div>

        {/* Icon Floating Badge */}
        <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white shadow-lg flex items-center justify-center">
          {renderIcon()}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-extrabold text-navy group-hover:text-teal transition-colors font-heading leading-snug">
            {service.title}
          </h3>
          <p className="text-xs text-health-muted leading-relaxed mt-1">
            {service.shortDesc}
          </p>

          {/* Quick Highlights list preview */}
          <ul className="space-y-1.5 pt-3">
            {service.whenRequested.slice(0, 2).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-teal mt-1.5 flex-shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Footer */}
        <div className="space-y-2.5 pt-4 border-t border-slate-100 mt-4">
          <button
            onClick={() => onSelect(service)}
            className="w-full flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-health-bg hover:bg-teal-soft text-navy font-bold text-xs transition-colors group/btn"
          >
            <span>View Details & Specs</span>
            <ChevronRight className="w-4 h-4 text-teal group-hover/btn:translate-x-1 transition-transform" />
          </button>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-gold/20 hover:bg-gold text-navy font-bold text-xs transition-colors border border-gold/40"
              aria-label={`Call for ${service.title}`}
            >
              <Phone className="w-3.5 h-3.5 text-navy fill-navy/20" /> Call
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-teal/15 hover:bg-teal text-teal hover:text-white font-bold text-xs transition-colors border border-teal/30"
              aria-label={`WhatsApp for ${service.title}`}
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

    </article>
  );
};
