import React, { useState } from 'react';
import { Sparkles, Phone, MessageCircle } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { ServiceModal } from './ServiceModal';
import { SERVICES, ServiceItem, BUSINESS } from '../config/siteConfig';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const whatsappUrl = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

  return (
    <section id="services" className="py-16 sm:py-24 bg-health-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-soft text-teal text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Our Services
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy font-heading">
            Professional Home Nursing Services
          </h2>

          <p className="text-base sm:text-lg text-health-muted leading-relaxed">
            Personalized nursing support delivered in the comfort, hygiene, and privacy of your home.
          </p>

          <div className="w-20 h-1 bg-gold mx-auto rounded-full mt-4"></div>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={(s) => setSelectedService(s)}
            />
          ))}
        </div>

        {/* Bottom Quick Callout */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-health border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-base font-extrabold text-navy">Need Custom or Urgent Home Nursing Visit?</h4>
            <p className="text-xs text-health-muted">Speak directly with our care coordination team available 24/7.</p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gold text-navy font-bold text-xs shadow-sm hover:bg-gold-light transition-all"
            >
              <Phone className="w-3.5 h-3.5 fill-navy/20" /> Call {BUSINESS.phone}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-teal text-white font-bold text-xs shadow-sm hover:bg-teal-dark transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Us
            </a>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};
