export const siteConfig = {
  name: "Invistaff",
  domain: "invistaff.co.uk",
  url: "https://invistaff.co.uk",
  tagline: "Invisible support, visible results.",
  description:
    "Invistaff finds where construction and trade businesses are losing money, pricing, debtors, suppliers and systems, and fixes the systems behind it.",
  founder: "Aalish Kissack",
  location: "Isle of Man",
  // Broader marketing-facing service area (footer, etc.) — kept separate
  // from `location` since the latter is used in legal/registration
  // contexts (jurisdiction, registered base) where only the Isle of Man
  // is accurate.
  serviceArea: "Isle of Man and the North West",
  email: "info@invistaff.com",
  // Inbox that receives new contact form submissions (separate from the
  // public-facing contact email shown to visitors).
  contactFormRecipient: "info@invistaff.com",
  phone: "07624 322669",
  phoneHref: "tel:+447624322669",
  hours: {
    weekday: "8am – 6pm, Monday to Friday",
    weekend: "Saturday & Sunday by appointment only",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/invistaff",
    instagram: "https://www.instagram.com/invistaff",
    facebook: "https://www.facebook.com/invistaff",
  },
  // TODO: replace with the real Calendly (or other) booking link.
  bookingUrl: "https://calendly.com/",
};

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export const footerLegalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
];
