import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Invistaff collects, uses and protects your information.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="4 November 2026">
      <p>
        This Privacy Policy explains how {siteConfig.name} collects, uses,
        stores and protects your personal data when you visit this website,
        get in touch with us, or engage us for administration and
        operational support services.
      </p>
      <p>
        {siteConfig.name} is committed to handling your personal data in
        line with the Isle of Man&apos;s data protection regime, the Data
        Protection Act 2018 and the GDPR and LED Implementing Regulations
        2018 (together, the &ldquo;Applied GDPR&rdquo;), which apply
        standards equivalent to the EU General Data Protection Regulation.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Who we are
      </h2>
      <p>
        {siteConfig.name} is operated by {siteConfig.founder} as a sole
        trader based in the {siteConfig.location}. For the purposes of data
        protection law, {siteConfig.founder} is the &ldquo;data
        controller&rdquo; responsible for your personal data. You can
        contact us at{" "}
        <a href={`mailto:${siteConfig.email}`} className="link-underline">
          {siteConfig.email}
        </a>{" "}
        with any questions about how your information is handled. As a sole
        trader, a separate Data Protection Officer has not been appointed;
        {" "}{siteConfig.founder} is the point of contact for all data
        protection matters.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Information we collect
      </h2>
      <p>We collect the following categories of personal data:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong>Enquiry and contact form data</strong> &mdash; when you use
          our contact form, we collect your name, business name, email
          address, phone number, and details you provide about your business
          and what you&apos;d like help with.
        </li>
        <li>
          <strong>Client data</strong> &mdash; if you engage us for support,
          we collect further information needed to deliver that support,
          such as details relating to your business operations, systems and
          correspondence. The specific data involved depends on the scope of
          work agreed with you.
        </li>
        <li>
          <strong>Technical and usage data</strong> &mdash; basic
          information about how this website is used, such as pages
          visited, and, where you consent via our cookie banner, analytics
          data. See our{" "}
          <a href="/cookie-policy" className="link-underline">
            Cookie Policy
          </a>{" "}
          for details.
        </li>
      </ul>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        How we use your information
      </h2>
      <p>We use your personal data to:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>respond to your enquiry and arrange a discovery call;</li>
        <li>
          provide, manage and improve the administration and operational
          support services you engage us for;
        </li>
        <li>
          communicate with you about your enquiry or ongoing engagement; and
        </li>
        <li>
          meet our own legal, accounting and regulatory obligations.
        </li>
      </ul>
      <p>
        We rely on the following lawful bases for processing: your consent
        (for example, for analytics or marketing cookies), the steps
        necessary to enter into or perform a contract with you, and our
        legitimate interests in responding to enquiries and operating this
        website. We do not sell your personal information, and we do not
        use it for automated decision-making or profiling.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Who we share your information with
      </h2>
      <p>
        We only share personal data with third parties where it is
        necessary to run this website or deliver our services, including:
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong>Resend</strong>, our email delivery provider, which
          processes contact form submissions in order to deliver them to our
          inbox;
        </li>
        <li>
          <strong>Vercel</strong>, our website hosting provider, which hosts
          this website and may process basic technical data as part of
          serving it; and
        </li>
        <li>
          any sub-contractor or software tool engaged as part of delivering
          agreed client work, where access is limited to what is genuinely
          needed.
        </li>
      </ul>
      <p>
        Where a service provider is based outside the Isle of Man, we take
        reasonable steps to ensure your data continues to be protected to a
        standard consistent with the Applied GDPR, including relying on
        providers that maintain their own appropriate safeguards (such as
        standard contractual clauses) for any international transfer of
        data.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        How long we keep your information
      </h2>
      <p>
        We keep enquiry data (such as contact form submissions that don&apos;t
        lead to an engagement) for as long as reasonably needed to respond to
        you and for a limited period afterwards, typically no longer than 12
        months, unless you ask us to delete it sooner. Where we engage with
        you as a client, we keep relevant records for the duration of the
        engagement and for a reasonable period afterwards to meet our legal,
        accounting and contractual obligations, after which it is securely
        deleted or anonymised.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Your rights
      </h2>
      <p>
        Under the Applied GDPR, you have the right to:
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>be informed about how your personal data is used;</li>
        <li>request access to the personal data we hold about you;</li>
        <li>request correction of inaccurate or incomplete data;</li>
        <li>
          request erasure of your data, in certain circumstances;
        </li>
        <li>
          request that we restrict or object to certain processing; and
        </li>
        <li>request a copy of your data in a portable format.</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a href={`mailto:${siteConfig.email}`} className="link-underline">
          {siteConfig.email}
        </a>
        . We will respond within one month, as required by law. These rights
        may be subject to certain exemptions and restrictions set out in the
        data protection legislation.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Confidentiality
      </h2>
      <p>
        Confidentiality is central to how we operate. Where appropriate, we
        can enter into a confidentiality agreement before beginning work, and
        we limit access to your systems and documents to what is genuinely
        needed to deliver the agreed support.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Keeping your information secure
      </h2>
      <p>
        We take reasonable technical and organisational measures to protect
        your personal data against unauthorised access, loss, misuse or
        alteration, including limiting who has access to information and
        using reputable, security-conscious third-party providers for
        hosting and email delivery.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Cookies
      </h2>
      <p>
        This website uses cookies. For full details of the cookies we use
        and how to manage your preferences, please see our{" "}
        <a href="/cookie-policy" className="link-underline">
          Cookie Policy
        </a>
        .
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Making a complaint
      </h2>
      <p>
        If you have concerns about how we&apos;ve handled your personal
        data, please contact us first at{" "}
        <a href={`mailto:${siteConfig.email}`} className="link-underline">
          {siteConfig.email}
        </a>{" "}
        so we can try to resolve it directly. You also have the right to
        lodge a complaint with the Isle of Man&apos;s supervisory authority:
      </p>
      <p>
        Isle of Man Information Commissioner
        <br />
        P.O. Box 69, Douglas, Isle of Man, IM99 1EQ
        <br />
        Telephone: +44 1624 693260
        <br />
        Email:{" "}
        <a href="mailto:ask@inforights.im" className="link-underline">
          ask@inforights.im
        </a>
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Changes to this policy
      </h2>
      <p>
        We may update this Privacy Policy from time to time to reflect
        changes in our practices or legal requirements. The &ldquo;last
        updated&rdquo; date at the top of this page shows when it was last
        revised.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Data protection registration
      </h2>
      <p>
        {siteConfig.name} is fully registered with the Isle of Man
        Information Commissioner under the Island&apos;s data protection
        regime, in both capacities in which we handle personal data: as a
        <strong> Controller</strong> (for the data we decide how and why to
        use, such as enquiry and contact form data) and as a
        <strong> Processor</strong> (for data we handle on behalf of clients
        as part of delivering administration and operational support
        services).
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Contact us
      </h2>
      <p>
        If you have questions about this policy or how your data is
        handled, please contact us at{" "}
        <a href={`mailto:${siteConfig.email}`} className="link-underline">
          {siteConfig.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
