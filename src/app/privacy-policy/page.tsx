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
    <LegalPage title="Privacy Policy" lastUpdated="This page is a placeholder pending legal review">
      <p>
        This Privacy Policy is a placeholder and is intended to be reviewed
        and finalised by a qualified legal professional before {siteConfig.name}{" "}
        goes live. It outlines, in general terms, the intended approach to
        handling personal data.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Who we are
      </h2>
      <p>
        {siteConfig.name} is operated as a sole trader based in the{" "}
        {siteConfig.location}. You can contact us at{" "}
        <a href={`mailto:${siteConfig.email}`} className="link-underline">
          {siteConfig.email}
        </a>{" "}
        with any questions about how your information is handled.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Information we collect
      </h2>
      <p>
        We collect information you provide directly to us, such as through
        our contact form (including your name, business name, email address,
        phone number and details about your business and enquiry), and basic
        technical information about how our website is used.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        How we use your information
      </h2>
      <p>
        We use the information you provide to respond to your enquiry, to
        arrange and deliver a discovery call, and, where you engage us, to
        provide administration and operational support services. We do not
        sell your personal information.
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
        Data protection compliance
      </h2>
      <p>
        We intend to handle personal data in a manner compliant with the
        Isle of Man Data Protection Act 2018. This policy will be updated
        with full detail, including data retention, your rights, and how to
        make a complaint, following legal review.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Cookies
      </h2>
      <p>
        For details on how we use cookies, please see our{" "}
        <a href="/cookie-policy" className="link-underline">
          Cookie Policy
        </a>
        .
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
