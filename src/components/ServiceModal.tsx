import React from 'react';
import { X, CheckCircle, AlertCircle, Phone, MessageCircle, Clock, Shield } from 'lucide-react';
import { ServiceItem, BUSINESS } from '../config/siteConfig';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const whatsappUrl = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(`Hello Namaskar Home Health Care Service, I would like to request information regarding ${service.title}.`)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner with Photography overlay */}
        <div className="relative h-44 sm:h-52 bg-navy-dark overflow-hidden flex-shrink-0">
          <img
            src={service.image}
            alt={service.imageAlt}
            width="800"
            height="600"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-transparent"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gold/20 text-gold text-[11px] font-bold uppercase tracking-wider border border-gold/40">
              <Clock className="w-3.5 h-3.5" /> 24x7 Home Nursing Service
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold font-heading leading-tight pr-6">
              {service.title}
            </h3>
            <p className="text-xs text-slate-300 font-medium">
              Namaskar Home Health Care Service • Doorstep Assistance
            </p>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-health-text">
          {/* Main Description */}
          <div>
            <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">Service Overview</h4>
            <p className="text-sm text-health-muted leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* When Requested */}
          <div className="bg-health-bg p-4 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-bold text-navy uppercase tracking-wider flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-teal" /> When This Service May Be Requested:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {service.whenRequested.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal mt-1.5 flex-shrink-0"></span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-teal" /> Service Protocol & Safety Standards:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-teal-soft/50 text-navy font-medium">
                  <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Standard Medical Disclaimer in Modal */}
          <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Medical Note:</strong> Services are provided according to the patient's individual care requirements and physician recommendations.
            </p>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          <div className="text-center sm:text-left text-xs text-navy font-semibold">
            Direct Helpline: <strong className="text-teal font-extrabold">{BUSINESS.phone}</strong>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gold text-navy font-extrabold text-xs shadow-md hover:bg-gold-light transition-all"
            >
              <Phone className="w-3.5 h-3.5 fill-navy/20" /> Call Now
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-teal text-white font-extrabold text-xs shadow-md hover:bg-teal-dark transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
