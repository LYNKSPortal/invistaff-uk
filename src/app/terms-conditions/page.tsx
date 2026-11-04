import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms and conditions for using the Invistaff website and engaging our services.",
  alternates: { canonical: "/terms-conditions" },
};

export default function TermsConditionsPage() {
  return (
    <LegalPage title="Terms & Conditions" lastUpdated="4 November 2026">
      <p>
        These Terms &amp; Conditions govern your use of this website and,
        where you engage us, the provision of our services. By using this
        website or engaging {siteConfig.name}, you agree to these terms.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        About {siteConfig.name}
      </h2>
      <p>
        {siteConfig.name} is operated by {siteConfig.founder} as a sole
        trader based in the {siteConfig.location}. As a sole trader, no
        separate company registration number or VAT number applies at this
        time. These terms are governed by the laws of the{" "}
        {siteConfig.location}, and any dispute arising from them is subject
        to the exclusive jurisdiction of the Isle of Man courts.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Services
      </h2>
      <p>
        {siteConfig.name} provides outsourced administration and operational
        support services, as described on this website. The specific scope,
        deliverables, pricing and timescales for any engagement are agreed
        directly with the client in writing (including by email) before work
        begins, typically following a free discovery call. These terms apply
        alongside, and do not override, anything specifically agreed with a
        client as part of their engagement.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Engagement terms
      </h2>
      <p>
        There is no fixed minimum contract. Support may be delivered as a
        one-off project, on an ongoing administrative or operational basis,
        or as a retainer, depending on what&apos;s agreed. Pricing is
        tailored to the support required, with packages typically starting
        from £99; exact pricing, invoicing arrangements and any notice
        period for ending an ongoing engagement are set out when the scope
        of work is agreed, rather than fixed in advance for every client.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Client responsibilities
      </h2>
      <p>
        To deliver our services effectively, we may need timely access to
        certain information, systems or documents, and prompt responses to
        reasonable requests. Delays in providing access or information may
        affect our ability to deliver work within an agreed timescale.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Fees and payment
      </h2>
      <p>
        Fees for any engagement are agreed with the client before work
        begins and are set out in an invoice or written agreement.
        Invoices are payable within the timescale stated on the invoice,
        unless a different arrangement has been agreed in writing. We
        reserve the right to pause work on an engagement where payment is
        significantly overdue, having first given reasonable notice.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Confidentiality
      </h2>
      <p>
        We treat all client information as confidential and will not
        disclose it to third parties except where necessary to deliver the
        agreed services (for example, to a sub-contractor or software
        provider, with access limited to what&apos;s genuinely needed), where
        required by law, or with the client&apos;s consent. Further detail is
        set out in our{" "}
        <a href="/privacy-policy" className="link-underline">
          Privacy Policy
        </a>
        .
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Liability
      </h2>
      <p>
        We provide our services with reasonable care and skill. To the
        extent permitted by law, our liability for any loss or damage
        arising from our services is limited to the fees paid for the
        specific engagement giving rise to the claim, except where that
        limitation would be unlawful (for example, in relation to death or
        personal injury caused by negligence, or fraud). We&apos;re not
        liable for losses arising from inaccurate or incomplete information
        provided to us by a client, or from delays caused by circumstances
        outside our reasonable control.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Ending an engagement
      </h2>
      <p>
        Because there&apos;s no fixed minimum contract, arrangements are
        designed to be flexible. Either party may end an ongoing engagement
        by giving reasonable written notice, as agreed as part of that
        specific engagement. One-off projects conclude on completion and
        delivery of the agreed work. We&apos;ll always aim to hand over
        cleanly, including returning or securely deleting client
        information no longer needed once an engagement ends, in line with
        our{" "}
        <a href="/privacy-policy" className="link-underline">
          Privacy Policy
        </a>
        .
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Website use
      </h2>
      <p>
        This website is provided for general information about{" "}
        {siteConfig.name} and its services. While we try to keep information
        accurate and up to date, we make no warranties about the
        completeness or accuracy of content on this site, and nothing on
        this site constitutes professional, financial or legal advice.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Intellectual property
      </h2>
      <p>
        The content, design and branding of this website belong to{" "}
        {siteConfig.name} unless otherwise stated, and may not be
        reproduced without permission, other than for personal,
        non-commercial reference.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Changes to these terms
      </h2>
      <p>
        We may update these Terms &amp; Conditions from time to time. The
        &ldquo;last updated&rdquo; date at the top of this page shows when
        it was last revised. For an existing client engagement, any changes
        to these general terms won&apos;t affect the specific terms already
        agreed for that engagement.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Contact us
      </h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${siteConfig.email}`} className="link-underline">
          {siteConfig.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
