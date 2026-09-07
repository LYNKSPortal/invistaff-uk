import type { LucideIcon } from "lucide-react";
import { HardHat, Cpu, Truck, Building2, HeartPulse } from "lucide-react";

export type Industry = {
  label: string;
  icon: LucideIcon;
};

export const industries: Industry[] = [
  { label: "Construction", icon: HardHat },
  { label: "Technology", icon: Cpu },
  { label: "Logistics", icon: Truck },
  { label: "Property", icon: Building2 },
  { label: "Healthcare", icon: HeartPulse },
];

export type Value = {
  title: string;
  description: string;
};

export const values: Value[] = [
  {
    title: "Reliability",
    description:
      "Work gets done when we say it will, so you can depend on the support without having to check up on it.",
  },
  {
    title: "Confidentiality",
    description:
      "Your business information, customer details and systems are handled with care and kept strictly confidential.",
  },
  {
    title: "Efficiency",
    description:
      "We look for the simplest, most effective way to get things done, not the most complicated one.",
  },
  {
    title: "Transparency",
    description:
      "Clear communication about what's being done, what it costs, and how things are progressing, always.",
  },
  {
    title: "Flexibility",
    description:
      "Support that adapts as your business changes, rather than locking you into something rigid.",
  },
];

export type DelieveryOption = {
  title: string;
  description: string;
};

export const deliveryOptions: DelieveryOption[] = [
  {
    title: "One-off operational projects",
    description:
      "A defined piece of work, such as a process review or system set-up, delivered start to finish.",
  },
  {
    title: "Ongoing administrative support",
    description:
      "Regular, reliable help with the day-to-day admin, inbox, diary, quotes, invoicing and more.",
  },
  {
    title: "Ongoing operational support",
    description:
      "Continued input into how your business runs, refining processes and systems as things evolve.",
  },
  {
    title: "Retainer-based support",
    description:
      "A blend of administrative and operational support on a regular basis, tailored to your business.",
  },
];

export type BeforeAfter = {
  before: string;
  after: string;
};

export const beforeAfter: BeforeAfter[] = [
  { before: "Scattered processes", after: "Clear systems" },
  { before: "Late invoices", after: "Consistent invoicing" },
  { before: "Everything in the owner's head", after: "Documented SOPs" },
  { before: "Owner as the bottleneck", after: "A delegatable business" },
];
