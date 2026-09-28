import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { LEGAL_TERMS, BUSINESS } from '../config/siteConfig';

interface ModalLegalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const ModalLegal: React.FC<ModalLegalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? LEGAL_TERMS.privacyTitle : LEGAL_TERMS.termsTitle;
  const content = isPrivacy ? LEGAL_TERMS.privacyContent : LEGAL_TERMS.termsContent;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-navy text-white p-5 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            {isPrivacy ? <ShieldCheck className="w-5 h-5 text-gold" /> : <FileText className="w-5 h-5 text-teal-light" />}
            <h3 className="text-lg font-bold font-heading">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs text-health-muted leading-relaxed flex-1">
          {content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
          <p className="pt-2 text-[11px] text-slate-400 font-medium">
            Contact us for any questions regarding this policy: {BUSINESS.phone}
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end flex-shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-navy text-white rounded-xl font-bold text-xs hover:bg-navy-dark"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
