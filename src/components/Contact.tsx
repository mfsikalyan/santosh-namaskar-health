import React, { useState } from 'react';
import { Phone, MessageCircle, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BUSINESS } from '../config/siteConfig';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: 'Wound Dressing & Post-Surgery Care',
    visitTime: 'As soon as possible (24/7 Urgent)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Format message to launch WhatsApp directly with form data!
    const waText = `Hello Namaskar Home Health Care Service, I submitted a request via website:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nRequirement: ${formData.requirement}\nPreferred Time: ${formData.visitTime}\nNotes: ${formData.message || 'N/A'}`;
    const directWaUrl = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(waText)}`;
    
    setTimeout(() => {
      window.open(directWaUrl, '_blank');
    }, 800);
  };

  const whatsappUrl = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Information & Direct Hotline Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-navy-dark text-xs font-bold uppercase tracking-wider border border-gold/30">
              <Clock className="w-3.5 h-3.5 text-gold-dark" /> Available 24 Hours • 7 Days a Week
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading leading-tight">
              Need Professional Nursing Care at Home?
            </h2>

            <p className="text-base text-health-muted leading-relaxed">
              Call or WhatsApp us to discuss your home healthcare requirement. We are ready to assist you around the clock.
            </p>

            {/* Direct Phone / WhatsApp Highlight Box */}
            <div className="bg-gradient-to-br from-navy to-navy-dark p-6 rounded-3xl text-white shadow-health-lg space-y-4 border border-teal/40">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center text-gold">
                  <Phone className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <span className="text-xs text-slate-300 uppercase font-semibold">24/7 Helpline</span>
                  <a href={`tel:${BUSINESS.phoneRaw}`} className="block text-2xl font-black text-gold hover:underline">
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>

              <p className="text-xs text-slate-200">
                Direct phone line & WhatsApp support for instant scheduling.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="py-3 px-4 rounded-xl bg-gold text-navy font-extrabold text-xs text-center shadow-md hover:bg-gold-light"
                >
                  Call Now
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-teal text-white font-extrabold text-xs text-center shadow-md hover:bg-teal-dark flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>

            {/* Guarantees */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-teal flex-shrink-0" />
                <span>Strict hygienic standards & single-use medical supplies</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                <span>Fast response for emergency and post-op care visits</span>
              </div>
            </div>

          </div>

          {/* Right Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-health-bg p-6 sm:p-8 rounded-3xl shadow-health border border-slate-200">
              <h3 className="text-xl font-bold text-navy font-heading mb-2">
                Request a Home Nursing Visit
              </h3>
              <p className="text-xs text-health-muted mb-6">
                Fill out the quick form below and our coordination team will call you back immediately.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-white rounded-2xl border border-teal/40 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-teal-soft text-teal mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-navy">Request Received!</h4>
                  <p className="text-xs text-health-muted">
                    Opening WhatsApp to connect directly with our care team... If WhatsApp doesn't open automatically, call us directly at <strong className="text-navy">{BUSINESS.phone}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 bg-navy text-white text-xs font-bold rounded-xl"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:border-teal focus:ring-2 focus:ring-teal/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 9827772983"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:border-teal focus:ring-2 focus:ring-teal/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy mb-1">
                        Patient Service Requirement *
                      </label>
                      <select
                        value={formData.requirement}
                        onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:border-teal focus:ring-2 focus:ring-teal/20"
                      >
                        <option value="Wound Dressing & Post-Surgery Care">Wound Dressing & Post-Surgery Care</option>
                        <option value="Injection, Saline & IV Drip Setup">Injection, Saline & IV Drip Setup</option>
                        <option value="Catheter Care & Daily Vitals Check">Catheter Care & Daily Vitals Check</option>
                        <option value="24/7 Emergency Nursing Visit">24/7 Emergency Nursing Visit</option>
                        <option value="Elderly Home Nursing Visit">Elderly Home Nursing Visit</option>
                        <option value="Other Home Healthcare Request">Other Home Healthcare Request</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy mb-1">
                        Preferred Visit Time
                      </label>
                      <select
                        value={formData.visitTime}
                        onChange={(e) => setFormData({ ...formData, visitTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:border-teal focus:ring-2 focus:ring-teal/20"
                      >
                        <option value="As soon as possible (24/7 Urgent)">As soon as possible (24/7 Urgent)</option>
                        <option value="Today Morning (8 AM - 12 PM)">Today Morning (8 AM - 12 PM)</option>
                        <option value="Today Afternoon (12 PM - 4 PM)">Today Afternoon (12 PM - 4 PM)</option>
                        <option value="Today Evening (4 PM - 8 PM)">Today Evening (4 PM - 8 PM)</option>
                        <option value="Schedule for Tomorrow">Schedule for Tomorrow</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy mb-1">
                      Patient Details / Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe the patient requirement..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:border-teal focus:ring-2 focus:ring-teal/20"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-teal hover:bg-teal-dark text-white font-extrabold text-sm shadow-teal-glow transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Request via WhatsApp & Call</span>
                  </button>

                  <p className="text-[11px] text-health-muted text-center pt-2">
                    🔒 <strong>Privacy Note:</strong> We respect your privacy. Contact details are strictly used to coordinate your home nursing visit.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
