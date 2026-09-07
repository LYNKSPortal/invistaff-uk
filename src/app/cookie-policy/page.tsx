import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Invistaff uses cookies on this website.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" lastUpdated="This page is a placeholder pending legal review">
      <p>
        This Cookie Policy is a placeholder pending full legal review. It
        describes, in general terms, the categories of cookies this website
        may use.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Necessary cookies
      </h2>
      <p>
        These cookies are required for the website to function properly,
        such as remembering your cookie preferences. They cannot be switched
        off.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Analytics cookies
      </h2>
      <p>
        With your consent, we may use analytics cookies to understand how
        visitors use this website, so we can improve it. These are only set
        if you accept them via our cookie banner.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Marketing cookies
      </h2>
      <p>
        With your consent, we may in future use marketing cookies (for
        example, from Meta or Google) to measure the effectiveness of
        advertising. These are only set if you accept them via our cookie
        banner.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Managing your preferences
      </h2>
      <p>
        You can update your cookie preferences at any time using the cookie
        banner presented on this site, or by clearing your browser&apos;s
        stored data.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Contact us
      </h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${siteConfig.email}`} className="link-underline">
          {siteConfig.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
