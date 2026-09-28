import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Clock } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS } from '../config/siteConfig';

interface NavbarProps {
  onOpenLegal?: (type: 'privacy' | 'terms') => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const whatsappUrl = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-health border-b border-slate-200/80 py-2.5'
          : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-3.5'
      }`}
    >
      {/* Top micro announcement bar */}
      <div className="bg-navy text-white text-xs py-1 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-teal-light animate-ping"></span>
            <span className="font-medium text-slate-200 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gold" /> {BUSINESS.availability} Home Nursing Visits
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-medium text-slate-300">
            <span>Professional • Hygienic • Safe Care</span>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="text-gold hover:underline font-bold flex items-center gap-1"
            >
              <Phone className="w-3 h-3" /> {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="focus:outline-none focus:ring-2 focus:ring-gold rounded-lg p-1">
            <Logo variant="horizontal" lightBg={true} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-health-text hover:text-teal transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-teal hover:bg-teal-dark rounded-xl shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-navy bg-gold hover:bg-gold-light rounded-xl shadow-gold-glow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 border border-gold-dark/20"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4 text-navy fill-navy/20 animate-pulse" />
              <span>Call: {BUSINESS.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="sm:hidden flex items-center justify-center p-2 rounded-lg bg-gold text-navy font-bold text-xs shadow-sm"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4 fill-navy/20" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-navy hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2 pt-2 border-t border-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-navy hover:bg-teal-soft hover:text-teal transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold text-navy font-bold text-sm shadow-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="w-4 h-4" /> Call Now: {BUSINESS.phone}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal text-white font-bold text-sm shadow-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us (+91 9827772983)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
