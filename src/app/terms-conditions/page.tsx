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
    <LegalPage title="Terms & Conditions" lastUpdated="This page is a placeholder pending legal review">
      <p>
        These Terms &amp; Conditions are a placeholder and are intended to
        be reviewed and finalised by a qualified legal professional before
        {" "}{siteConfig.name} goes live.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        About {siteConfig.name}
      </h2>
      <p>
        {siteConfig.name} is operated as a sole trader based in the{" "}
        {siteConfig.location}. No company registration number or VAT number
        applies at this time.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Services
      </h2>
      <p>
        Invistaff provides outsourced administration and operational support
        services. The specific scope, deliverables, pricing and terms for
        any engagement are agreed directly with the client before work
        begins, typically following a free discovery call.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Engagement terms
      </h2>
      <p>
        There is no fixed minimum contract. Support may be delivered as a
        one-off project or on an ongoing basis, and the specific terms,
        including notice periods for ending an engagement, are agreed as
        part of that engagement.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Website use
      </h2>
      <p>
        This website is provided for general information about Invistaff
        and its services. While we try to keep information accurate and up
        to date, we make no warranties about the completeness or accuracy of
        content on this site.
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
