export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Aalish quickly identified the issues that were holding back our office operation and tailored solutions that actually fitted the way we work. She implemented a field management system that transformed our pipeline and saved us a significant amount of time. She's been responsive and informative throughout.",
    name: "Janine Trickett",
    role: "Director",
    company: "Solar Maintenance Services",
  },
  {
    quote:
      "Before Invistaff, I was overwhelmed, invoicing, bank reconciliations, quoting, organising staff, stock, site preparation and customer communications all fell to me. I was seriously considering employing somebody full-time. Invistaff has made an immeasurable difference, to the point where I can go on holiday without dreading what I'll come back to.",
    name: "Mark Duncan",
    role: "Director",
    company: "CEL Garage Doors",
  },
];
