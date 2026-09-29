import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EmergencyBar } from './components/EmergencyBar';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { WhoWeServe } from './components/WhoWeServe';
import { TrustBrandSection } from './components/TrustBrandSection';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileActionBar } from './components/MobileActionBar';
import { ModalLegal } from './components/ModalLegal';
import { BUSINESS, LOCATION, SERVICES } from './config/siteConfig';

export function App() {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // LocalBusiness & MedicalBusiness JSON-LD Schema
  const businessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": `${BUSINESS.siteUrl}/#organization`,
        "name": BUSINESS.name,
        "url": BUSINESS.siteUrl,
        "logo": `${BUSINESS.siteUrl}/favicon.svg`,
        "image": `${BUSINESS.siteUrl}/assets/images/hero_nursing.jpg`,
        "description": BUSINESS.subTagline,
        "telephone": BUSINESS.phone,
        "email": LOCATION.email,
        "priceRange": "$$",
        "openingHours": "Mo-Su 00:00-23:59",
        "hasMap": LOCATION.googleMapsDirectUrl,
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": LOCATION.latitude,
          "longitude": LOCATION.longitude
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": BUSINESS.rating,
          "reviewCount": BUSINESS.reviewsCount
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": LOCATION.addressLine1,
          "addressLocality": LOCATION.city,
          "addressRegion": LOCATION.state,
          "postalCode": LOCATION.pincode,
          "addressCountry": LOCATION.country
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Bhubaneswar"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Odisha"
          }
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": BUSINESS.phone,
          "email": LOCATION.email,
          "contactType": "customer service",
          "availableLanguage": ["English", "Odia", "Hindi"],
          "hoursAvailable": "Mo-Su 00:00-23:59"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${BUSINESS.siteUrl}/#website`,
        "url": BUSINESS.siteUrl,
        "name": BUSINESS.name,
        "publisher": {
          "@id": `${BUSINESS.siteUrl}/#organization`
        }
      },
      ...SERVICES.map((s) => ({
        "@type": "Service",
        "name": s.title,
        "description": s.fullDesc,
        "provider": {
          "@id": `${BUSINESS.siteUrl}/#organization`
        },
        "serviceType": "Home Healthcare Nursing Care"
      }))
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-health-bg selection:bg-teal selection:text-white">
      {/* Comprehensive JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      {/* Header Navigation Bar */}
      <Navbar onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Emergency / Quick Contact Strip */}
        <EmergencyBar />

        {/* About Us Section */}
        <AboutUs />

        {/* Services Section */}
        <Services />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* How It Works 4-Step Process */}
        <HowItWorks />

        {/* Who We Serve */}
        <WhoWeServe />

        {/* Trust & Brand Section */}
        <TrustBrandSection />

        {/* Accordion FAQ */}
        <FAQ />

        {/* Contact Section & Form */}
        <Contact />

        {/* Pre-Footer Banner CTA */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Bottom Bar (Call Now | WhatsApp) */}
      <MobileActionBar />

      {/* Modal for Privacy & Terms */}
      <ModalLegal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default App;
