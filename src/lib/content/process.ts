export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Book a free Money Leak Check",
    description:
      "A relaxed, no-obligation 30-minute call to talk about your business and where money might be slipping. You don't need to know where the leak is, that's what this call is for.",
  },
  {
    number: "02",
    title: "Understand the problem",
    description:
      "We dig into where money is being lost, whether that's pricing, unpaid invoices, supplier costs, or the systems (or lack of them) behind the scenes.",
  },
  {
    number: "03",
    title: "Scope the Profit Leak Audit",
    description:
      "If there's something worth digging into, we agree a fixed scope for a Profit Leak Audit covering the areas most likely to be costing you money.",
  },
  {
    number: "04",
    title: "Deliver the audit, with a £ figure attached",
    description:
      "Within 7 days you get a written report putting a £ figure on each leak found, so you can see exactly what it's costing and what's worth fixing first.",
  },
  {
    number: "05",
    title: "Fix the issues found",
    description:
      "We agree which leaks to fix and get to work: updating pricing, chasing down what's owed, sorting out supplier terms, and putting the systems in place behind them.",
  },
  {
    number: "06",
    title: "Keep it fixed, or hand it back",
    description:
      "Some clients want ongoing support as an Operations Partner, running the systems and chasing the money month to month. Others just want the fix handed back to them, cleanly documented.",
  },
  {
    number: "07",
    title: "Review and improve",
    description:
      "We check in on how the fixes are holding up and adjust as your business changes, so profit stays protected rather than leaking out again.",
  },
];
