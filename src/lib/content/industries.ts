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

export type BeforeAfter = {
  before: string;
  after: string;
};

export const beforeAfter: BeforeAfter[] = [
  { before: "A price that hasn't moved in years", after: "Pricing reviewed and corrected" },
  { before: "Quotes nobody chases", after: "Follow-up that closes the loop" },
  { before: "Invoices sitting unpaid", after: "Money chased and collected" },
  { before: "Software nobody uses", after: "Systems your team actually uses" },
];
