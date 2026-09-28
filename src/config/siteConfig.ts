export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'Bandage' | 'Syringe' | 'Activity' | 'Clock';
  image: string;
  imageAlt: string;
  whenRequested: string[];
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StepItem {
  step: number;
  title: string;
  description: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AudienceItem {
  title: string;
  description: string;
  badge: string;
  image: string;
  imageAlt: string;
}

export const BUSINESS = {
  name: "NAMASKAR HOME HEALTH CARE SERVICE",
  shortName: "Namaskar Care",
  tagline: "Professional • Hygienic • Safe Patient Care",
  subTagline: "Trusted nursing care delivered with professionalism, hygiene and compassion — right at your home.",
  phone: "+91 9827772983",
  phoneRaw: "+919827772983",
  whatsappNumber: "919827772983",
  whatsappMessage: "Hello Namaskar Home Health Care Service, I would like to know more about your home nursing services.",
  availability: "24 Hours • 7 Days a Week",
  availabilityShort: "24x7 Home Service",
  emergencyHeadline: "Need Home Nursing Care?",
  emergencySubhead: "Call or WhatsApp us now for prompt home healthcare assistance.",
  siteUrl: "https://namaskarhomehealthcare.com",
};

export const BRAND_COLORS = {
  navy: "#063B5A",
  royalBlue: "#063A78",
  teal: "#079B84",
  gold: "#E5B52B",
  softGray: "#F3F6F8",
  darkText: "#183247",
  white: "#FFFFFF",
};

export const IMAGES = {
  hero: "/assets/images/hero_nursing.jpg",
  heroAlt: "Compassionate female home nurse in blue uniform checking pulse of happy senior patient in a clean living room",
  about: "/assets/images/about_nursing.jpg",
  aboutAlt: "Professional female home nurse gently assisting an elderly woman walking safely with a walker at home",
  ogImage: "/assets/images/hero_nursing.jpg"
};

export const SERVICES: ServiceItem[] = [
  {
    id: "wound-dressing",
    title: "Wound Dressing & Post-Surgery Care",
    shortDesc: "Professional support for sterile wound dressing, suture care, and post-surgical nursing needs at home.",
    fullDesc: "Comprehensive home nursing support tailored for surgical recovery and wound management. Our trained nursing staff ensures aseptic technique, strict hygienic standards, and careful monitoring of healing progress in the comfort of your home environment.",
    iconName: "Bandage",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Professional sterile medical wound dressing equipment and bandaging supplies setup for home healthcare",
    whenRequested: [
      "Post-operation surgical wound care",
      "Sterile dressing changes for diabetic or chronic wounds",
      "Suture / staple inspection and wound monitoring",
      "Bed sore / pressure ulcer preventive care"
    ],
    features: [
      "Strict hygienic and sterile procedures",
      "Regular wound progress monitoring",
      "Comfort-focused patient assistance",
      "Adherence to physician discharge guidelines"
    ]
  },
  {
    id: "injection-iv-drip",
    title: "Injection, Saline & IV Drip Setup",
    shortDesc: "Safe home nursing support for physician-prescribed injections, IV fluid administration, and saline setups.",
    fullDesc: "Receive doctor-prescribed intramuscular or intravenous medications, saline drips, and IV therapy safely administered at home by experienced nursing professionals.",
    iconName: "Syringe",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Nurse preparing physician prescribed saline IV drip therapy in home setting",
    whenRequested: [
      "Physician-prescribed IV antibiotic or vitamin drips",
      "Saline hydration therapy for dehydration",
      "Subcutaneous or intramuscular injection administration",
      "IV cannula monitoring and maintenance"
    ],
    features: [
      "Strict prescription verification",
      "Single-use sterile medical supplies",
      "Vital monitoring prior to and during drip setup",
      "Gentle patient administration"
    ]
  },
  {
    id: "catheter-vitals-care",
    title: "Catheter Care & Daily Vitals Check",
    shortDesc: "Routine nursing assistance including catheter maintenance, hygiene care, and daily vital sign tracking.",
    fullDesc: "Continuous nursing support for catheter care, bag maintenance, hygiene routine, and regular tracking of vital signs like blood pressure, pulse rate, oxygen saturation (SpO2), and temperature.",
    iconName: "Activity",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Nurse measuring blood pressure and checking oxygen vitals for elderly patient at home",
    whenRequested: [
      "Foley catheter maintenance and hygienic care",
      "Routine daily or weekly vital sign logging for seniors",
      "Blood pressure and pulse monitoring",
      "Elderly bedridden patient hygiene monitoring"
    ],
    features: [
      "Prevents infection with sterile catheter protocol",
      "Detailed vital tracking record",
      "Assistance for bedridden or mobility-impaired patients",
      "Family update and progress communication"
    ]
  },
  {
    id: "emergency-nursing-visit",
    title: "24/7 Emergency Nursing Visit",
    shortDesc: "Urgent nursing visit support dispatched around the clock when immediate home-care assistance is required.",
    fullDesc: "Prompt home visit support for urgent non-critical nursing interventions, immediate dressing updates, IV replacement, or urgent vital checks available 24 hours a day, 7 days a week.",
    iconName: "Clock",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Professional healthcare nurse holding medical bag ready for emergency home nursing visit",
    whenRequested: [
      "Sudden need for urgent dressing replacement",
      "Urgent IV line maintenance or saline setup",
      "Late-night vital check or fever evaluation support",
      "Post-hospital discharge immediate assistance"
    ],
    features: [
      "24/7 dispatch readiness",
      "Fast response time to your location",
      "Equipped nursing support",
      "Direct phone and WhatsApp coordination"
    ]
  }
];

export const WHY_CHOOSE_US: FeatureItem[] = [
  {
    id: "pro-care",
    title: "Professional Care",
    description: "Focused nursing support delivered at home with empathy and medical discipline.",
    iconName: "Award"
  },
  {
    id: "hygienic",
    title: "Hygienic Approach",
    description: "Clean, sterilized, and safety-conscious procedures to ensure patient health and prevent infection.",
    iconName: "ShieldCheck"
  },
  {
    id: "convenient",
    title: "Convenient Home Visits",
    description: "Receive high-quality nursing assistance without the stress, risk, and fatigue of hospital travel.",
    iconName: "Home"
  },
  {
    id: "twenty-four-seven",
    title: "24/7 Availability",
    description: "Round-the-clock home service available 365 days a year for day, night, or weekend needs.",
    iconName: "Clock24"
  },
  {
    id: "patient-centered",
    title: "Patient-Centered Care",
    description: "Care programs designed around the individual patient's physical comfort, routine, and dignity.",
    iconName: "Heart"
  },
  {
    id: "easy-comm",
    title: "Easy Communication",
    description: "Direct instant line to our team via single-click Phone Call or WhatsApp.",
    iconName: "MessageCircle"
  }
];

export const HOW_IT_WORKS: StepItem[] = [
  {
    step: 1,
    title: "Contact Us",
    description: "Call or WhatsApp +91 9827772983 to reach our team immediately."
  },
  {
    step: 2,
    title: "Share Your Requirement",
    description: "Tell us about the nursing service, patient condition, or home-care support required."
  },
  {
    step: 3,
    title: "Discuss & Schedule Visit",
    description: "Coordinate the requested nursing service, visit timing, and specific care instructions."
  },
  {
    step: 4,
    title: "Receive Care at Home",
    description: "A qualified nursing professional visits your home to deliver safe, hygienic, and comforting care."
  }
];

export const WHO_WE_SERVE: AudienceItem[] = [
  {
    title: "Elderly Patients",
    description: "Senior citizens requiring regular vital checks, medication assistance, and compassionate home support.",
    badge: "Senior Care",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Elderly patient receiving compassionate home nursing assistance"
  },
  {
    title: "Post-Surgery Patients",
    description: "Individuals recovering at home after hospital discharge needing surgical wound care and IV setups.",
    badge: "Post-Op Care",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Patient recovering at home with post-surgery nursing support"
  },
  {
    title: "Chronic Wound Care",
    description: "Patients with diabetic ulcers, pressure sores, or surgical incisions needing sterile dressings.",
    badge: "Wound Nursing",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Clean sterile wound care dressing application"
  },
  {
    title: "Urgent Nursing Needs",
    description: "Families requiring immediate late-night or weekend nursing visits for IV or catheter care.",
    badge: "24/7 Support",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80",
    imageAlt: "24/7 emergency home nursing visit dispatch"
  },
  {
    title: "Mobility Impaired Patients",
    description: "Bedridden or limited mobility patients who find travelling to medical clinics challenging.",
    badge: "Home Bound",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Home care nursing for mobility impaired patient"
  },
  {
    title: "Routine Injection / Drip Support",
    description: "Patients prescribed multi-day IV antibiotic, hydration saline, or daily injection regimens.",
    badge: "IV Therapy",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Intravenous saline drip therapy at home"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you provide home nursing services?",
    answer: "Yes, Namaskar Home Health Care Service provides professional nursing support right at the patient's home based on the specific healthcare requirements."
  },
  {
    question: "Are home visits available 24/7?",
    answer: "Yes, our service is available 24 hours a day, 7 days a week, including weekends and emergency night visits."
  },
  {
    question: "How can I request a nursing visit?",
    answer: "You can simply call or WhatsApp us directly at +91 9827772983 to share your requirement and schedule a nurse visit."
  },
  {
    question: "Do you provide post-surgery care?",
    answer: "Yes, post-surgery nursing care—including surgical wound dressing, suture monitoring, and recovery assistance—is one of our primary services."
  },
  {
    question: "Do you provide wound dressing at home?",
    answer: "Yes, sterile wound dressing for surgical wounds, diabetic ulcers, and pressure sores is routinely conducted at home using strict hygienic protocols."
  },
  {
    question: "Can I contact you through WhatsApp?",
    answer: "Yes! Click any of the 'WhatsApp Us' buttons on our website to send an instant pre-filled inquiry message directly to our team at +91 9827772983."
  }
];

export const MEDICAL_DISCLAIMER = {
  title: "Medical Disclaimer",
  content: "Namaskar Home Health Care Service provides home nursing and healthcare support based on the services offered. The website does not replace medical diagnosis, emergency hospital care, or direct clinical treatment from a doctor. In case of a severe medical emergency, please contact an emergency medical service or visit the nearest hospital immediately."
};

export const LEGAL_TERMS = {
  privacyTitle: "Privacy Policy",
  privacyContent: [
    "At Namaskar Home Health Care Service, we prioritize the privacy and confidentiality of our patients and their family members.",
    "Information collected via our contact form (such as name, phone number, and care requirements) is strictly used to coordinate home nursing visits and deliver personalized patient care.",
    "We do not sell, rent, or share personal patient details with third-party advertisers or unauthorized entities.",
    "For any privacy inquiries or to update your contact preferences, please contact us at +91 9827772983."
  ],
  termsTitle: "Terms & Conditions",
  termsContent: [
    "By accessing this website or requesting home nursing services from Namaskar Home Health Care Service, you agree to the following terms:",
    "1. Services are delivered based on the patient's specific requests and physician recommendations where applicable.",
    "2. Home nursing visits are provided as supportive patient care and do not substitute for emergency hospital treatment.",
    "3. Patient family members are expected to provide a safe, accessible environment for the visiting nursing staff.",
    "4. Service scheduling is subject to staff availability and geographical coverage area."
  ]
};
