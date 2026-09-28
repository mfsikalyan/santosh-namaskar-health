import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { FAQS, BUSINESS } from '../config/siteConfig';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappUrl = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

  // JSON-LD Schema Object for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-health-bg relative">
      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-soft text-teal text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading">
            Got Questions? We Have Answers.
          </h2>

          <p className="text-base text-health-muted leading-relaxed">
            Here are common questions families ask about our home nursing visits and care coordination.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none focus:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-navy font-heading">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-teal-soft text-teal transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180 bg-teal text-white' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-health-muted leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{faq.answer}</p>
                    {idx === 2 && (
                      <div className="mt-3 flex gap-2">
                        <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center gap-1 text-xs font-bold text-navy bg-gold px-3 py-1.5 rounded-lg">
                          <Phone className="w-3 h-3" /> Call {BUSINESS.phone}
                        </a>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-white bg-teal px-3 py-1.5 rounded-lg">
                          <MessageCircle className="w-3 h-3" /> WhatsApp
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Footer CTA */}
        <div className="mt-10 text-center bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3 shadow-sm">
          <h4 className="text-sm font-bold text-navy">Have a specific question not listed above?</h4>
          <p className="text-xs text-health-muted">Call or WhatsApp our team directly anytime.</p>
          <div className="flex items-center justify-center gap-3 pt-1">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-navy text-white rounded-xl text-xs font-bold hover:bg-navy-dark"
            >
              <Phone className="w-3.5 h-3.5 text-gold" /> {BUSINESS.phone}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-teal text-white rounded-xl text-xs font-bold hover:bg-teal-dark"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
