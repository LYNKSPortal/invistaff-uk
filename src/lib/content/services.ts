import type { LucideIcon } from "lucide-react";
import { PhoneCall, SearchCheck, Wrench, Handshake } from "lucide-react";

export type ServiceStep = {
  slug: string;
  number: string;
  title: string;
  icon: LucideIcon;
  price: string;
  /** Normalised starting price in GBP, for structured data (0 = free). */
  priceFromGBP: number;
  summary: string;
  detail: string;
  included: string[];
};

export const serviceSteps: ServiceStep[] = [
  {
    slug: "money-leak-check",
    number: "01",
    title: "Money Leak Check",
    icon: PhoneCall,
    price: "Free",
    priceFromGBP: 0,
    summary:
      "A free 30-minute call to talk through where your business might be losing money.",
    detail:
      "A relaxed, no-obligation 30-minute conversation about your business, your numbers, and where things might be slipping. No pressure, no pitch, just a conversation to see whether there's a leak worth looking into properly.",
    included: [
      "30 minutes, by phone or video call",
      "A look at where money might be slipping through the cracks",
      "An honest view on whether a full audit is worth doing",
    ],
  },
  {
    slug: "profit-leak-audit",
    number: "02",
    title: "Profit Leak Audit",
    icon: SearchCheck,
    price: "From £750",
    priceFromGBP: 750,
    summary:
      "A fixed-scope review of your pricing, debtors, suppliers and systems, with a written report within 7 days.",
    detail:
      "A focused review of where money is leaking out of the business: pricing that hasn't moved, invoices sitting unpaid, supplier costs creeping up, and the systems (or lack of them) behind all three. You get a written report within 7 days, with a £ figure put on each leak found.",
    included: [
      "Fixed-scope review of pricing, debtors, suppliers and systems",
      "Written report delivered within 7 days",
      "A £ figure put on each leak identified",
      "Audit fee credited in full if you go ahead with an ongoing retainer",
    ],
  },
  {
    slug: "fix-projects",
    number: "03",
    title: "Fix Projects",
    icon: Wrench,
    price: "From £850",
    priceFromGBP: 850,
    summary: "Fixing the specific issues the audit found.",
    detail:
      "Once we know where the leaks are, we fix them: updating pricing, chasing down what's owed, sorting out supplier terms, and putting the systems in place so the same leak doesn't reopen once the project ends.",
    included: [
      "Fixing the specific issues identified in your audit",
      "Updated pricing, processes or systems, as needed",
      "Handover so the fix sticks after the project ends",
    ],
  },
  {
    slug: "operations-partner",
    number: "04",
    title: "Operations Partner",
    icon: Handshake,
    price: "£1,000/month",
    priceFromGBP: 1000,
    summary:
      "I run the systems, chase the money, and report the numbers back to you every month.",
    detail:
      "Ongoing support where I run the systems we've put in place, chase the money that's owed, report the numbers back to you regularly, and keep fixing issues as they come up, so profit keeps being protected rather than recovered once and lost again.",
    included: [
      "Running the systems put in place after the audit and fix",
      "Chasing outstanding invoices and payments",
      "Monthly reporting on the numbers that matter",
      "Ongoing fixes as new issues come up",
    ],
  },
];
