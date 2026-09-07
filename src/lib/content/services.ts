import type { LucideIcon } from "lucide-react";
import {
  SearchCheck,
  ClipboardList,
  FileText,
  Settings2,
  RefreshCw,
  Gauge,
  Inbox,
  CalendarClock,
  MessageSquare,
  FileSignature,
  Receipt,
  BadgePoundSterling,
  ClipboardCheck,
  Users,
  UserPlus,
  Handshake,
  PhoneCall,
  ListTree,
  BarChart3,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  detail: string;
};

export type ServicePillar = {
  id: "operations" | "administration" | "growth";
  title: string;
  standfirst: string;
  services: Service[];
};

export const servicePillars: ServicePillar[] = [
  {
    id: "operations",
    title: "Operations Support",
    standfirst:
      "Understanding why the admin exists in the first place, then improving it, so the same problems don't keep coming back.",
    services: [
      {
        slug: "process-reviews",
        title: "Process Reviews",
        icon: SearchCheck,
        summary:
          "A close look at how work currently gets done, and where it breaks down.",
        detail:
          "We assess existing workflows for unnecessary steps, bottlenecks, duplication, poor communication and over-reliance on one person, so you can see exactly where time and consistency are being lost.",
      },
      {
        slug: "operational-audits",
        title: "Operational Audits",
        icon: ClipboardList,
        summary:
          "A broader review of your systems, admin and day-to-day workflows.",
        detail:
          "A wider health check across your systems, processes, administration and workflows, giving you a clear, honest picture of what's working, what isn't, and where to focus first.",
      },
      {
        slug: "sop-creation",
        title: "SOP Creation",
        icon: FileText,
        summary:
          "Recurring tasks written down properly, so they don't live in one person's head.",
        detail:
          "We document how recurring tasks should be done, standardising the work, reducing reliance on individual knowledge, and making delegation, consistency and onboarding far easier.",
      },
      {
        slug: "system-implementation",
        title: "System Implementation",
        icon: Settings2,
        summary:
          "Choosing and setting up the right tools, and making sure they actually get used.",
        detail:
          "We help you review and select the right systems, build the workflows around them, and support your team through adoption so new tools genuinely get used, not abandoned.",
      },
      {
        slug: "change-management",
        title: "Change Management",
        icon: RefreshCw,
        summary: "Helping new ways of working stick, in a small, busy team.",
        detail:
          "New processes only work if people actually follow them. We help introduce change in a way that fits how your team already works, so it sticks in practice, not just on paper.",
      },
      {
        slug: "process-improvement",
        title: "Process Improvement",
        icon: Gauge,
        summary: "Making the workflows you already have quicker and simpler.",
        detail:
          "Once we understand how things currently run, we streamline them, removing unnecessary steps and friction so the same work takes less time and less effort.",
      },
    ],
  },
  {
    id: "administration",
    title: "Administration Support",
    standfirst:
      "The day-to-day admin that pulls you away from the tools, the site and your team, handled properly, consistently, and on time.",
    services: [
      {
        slug: "inbox-management",
        title: "Inbox Management",
        icon: Inbox,
        summary: "A clear inbox, without you being the one clearing it.",
        detail:
          "We keep your inbox under control, responding, flagging and organising so nothing important gets missed and you're not scrolling through emails at 9pm.",
      },
      {
        slug: "diary-coordination",
        title: "Diary Coordination",
        icon: CalendarClock,
        summary: "Appointments, site visits and jobs, organised properly.",
        detail:
          "We manage your diary so your days are planned sensibly, appointments don't clash, and you're not the one juggling calls to work out where you need to be.",
      },
      {
        slug: "customer-communications",
        title: "Customer Communications",
        icon: MessageSquare,
        summary: "Timely, professional replies that keep customers informed.",
        detail:
          "From initial enquiries to job updates, we handle customer communications so people hear back promptly and professionally, even when you're on-site all day.",
      },
      {
        slug: "quotations",
        title: "Quotations",
        icon: FileSignature,
        summary: "Quotes sent out promptly, while the job is still fresh.",
        detail:
          "We help get quotes prepared and sent quickly and consistently, so you're not losing work simply because a quote went out two weeks too late.",
      },
      {
        slug: "invoicing",
        title: "Invoicing",
        icon: Receipt,
        summary: "Invoices raised on time, every time.",
        detail:
          "We take care of raising and sending invoices promptly after work is completed, so cash flow doesn't suffer just because invoicing kept slipping down the list.",
      },
      {
        slug: "credit-control",
        title: "Credit Control",
        icon: BadgePoundSterling,
        summary: "Outstanding invoices chased, without the awkward conversations.",
        detail:
          "Chasing payment is a job most owners dislike or avoid. We act as a professional buffer, following up on outstanding invoices consistently to help protect your cash flow.",
      },
      {
        slug: "general-admin",
        title: "General Administrative Support",
        icon: ClipboardCheck,
        summary: "The smaller admin jobs that quietly take up your evenings.",
        detail:
          "Filing, data entry, document preparation and the other small but necessary admin tasks that add up, taken off your plate so they stop eating into your evenings and weekends.",
      },
    ],
  },
  {
    id: "growth",
    title: "Growth Support",
    standfirst:
      "Keeping track of customers and opportunities properly, so good leads and repeat work don't slip through the cracks.",
    services: [
      {
        slug: "crm-management",
        title: "CRM Management",
        icon: Users,
        summary: "Your customer and job information kept in one organised place.",
        detail:
          "We keep your CRM accurate and up to date, so customer details, job history and communications are organised and easy to find, not scattered across notebooks and inboxes.",
      },
      {
        slug: "client-onboarding",
        title: "Client Onboarding",
        icon: UserPlus,
        summary: "A consistent, professional start for every new customer.",
        detail:
          "We help set up a clear, repeatable onboarding process so every new client gets the same professional experience, without you having to think it through from scratch each time.",
      },
      {
        slug: "sales-support",
        title: "Sales Support",
        icon: Handshake,
        summary: "The admin around sales, handled so opportunities aren't lost.",
        detail:
          "From preparing information to coordinating next steps, we support the sales process so enquiries are followed up promptly and opportunities aren't left to go cold.",
      },
      {
        slug: "customer-follow-up",
        title: "Customer Follow-Up",
        icon: PhoneCall,
        summary: "Following up after the job, so repeat work isn't left to chance.",
        detail:
          "We help make sure customers are followed up with after work is completed, supporting repeat business, reviews and referrals that might otherwise be forgotten.",
      },
      {
        slug: "pipeline-management",
        title: "Pipeline Management",
        icon: ListTree,
        summary: "A clear view of what's quoted, won, and coming up.",
        detail:
          "We help keep your pipeline organised and visible, so you know what's been quoted, what's confirmed, and what needs chasing, rather than it living in your head.",
      },
      {
        slug: "reporting-insights",
        title: "Reporting & Insights",
        icon: BarChart3,
        summary: "A clearer picture of how the business is actually running.",
        detail:
          "We put together straightforward reporting on the areas that matter to you, giving you visibility over the business without having to pull the information together yourself.",
      },
    ],
  },
];

export const allServices: Service[] = servicePillars.flatMap((p) => p.services);
