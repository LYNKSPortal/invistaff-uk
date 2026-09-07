export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Book a free discovery call",
    description:
      "A relaxed, no-obligation conversation to talk about your business and what's currently taking up your time. You don't need to know exactly what you need, that's what this call is for.",
  },
  {
    number: "02",
    title: "Understand the problem",
    description:
      "We dig into where time is being lost, whether that's admin, communication, quoting, invoicing, or the systems (or lack of them) behind the scenes.",
  },
  {
    number: "03",
    title: "Identify the right support",
    description:
      "Based on what we've learned, we recommend the support that will actually make a difference, whether that's hands-on admin help, an operational review, or both.",
  },
  {
    number: "04",
    title: "Agree the scope",
    description:
      "We set out clearly what's included, how we'll work together, and what it will cost, so there are no surprises on either side.",
  },
  {
    number: "05",
    title: "Onboarding",
    description:
      "We get set up with access to the right systems and information, and take the time to understand how your business runs day to day.",
  },
  {
    number: "06",
    title: "Ongoing support / project delivery",
    description:
      "We get to work, handling the agreed admin, running the project, or both, keeping you updated without needing to be chased for progress.",
  },
  {
    number: "07",
    title: "Review and improve",
    description:
      "We check in on how things are working and adjust as your business changes, so the support you have continues to earn its place.",
  },
];
