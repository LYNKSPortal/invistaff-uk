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
    <LegalPage title="Cookie Policy" lastUpdated="4 November 2026">
      <p>
        This Cookie Policy explains what cookies are, which ones this
        website uses, and how you can manage your preferences. It should be
        read alongside our{" "}
        <a href="/privacy-policy" className="link-underline">
          Privacy Policy
        </a>
        .
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        What are cookies?
      </h2>
      <p>
        Cookies are small text files placed on your device when you visit a
        website. They help the site function properly, remember your
        preferences, and, where you&apos;ve consented, understand how the
        site is used.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        How we ask for your consent
      </h2>
      <p>
        When you first visit this website, you&apos;ll see a cookie banner
        at the bottom of the screen. You can accept all cookies, reject all
        non-essential cookies, or manage your preferences by category. Only
        strictly necessary cookies are set before you make a choice.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Necessary cookies
      </h2>
      <p>
        These cookies are required for the website to function properly,
        such as remembering the cookie preferences you&apos;ve chosen. They
        don&apos;t require consent and can&apos;t be switched off, because
        the site wouldn&apos;t work properly without them.
      </p>

      <h2 className="font-serif text-xl font-normal text-forest-900">
        Analytics cookies
      </h2>
      <p>
        With your consent, we may use analytics cookies to understand how
        visitors use this website, such as which pages are viewed, so we can
        improve it over time. These are only set if you accept them via our
        cookie banner, and no analytics tool is activated without that
        consent.
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
        Managing or withdrawing your consent
      </h2>
      <p>
        You can change your cookie preferences at any time by clearing your
        browser&apos;s stored site data for this website and reloading the
        page, which will show the cookie banner again. Most browsers also
        let you block or delete cookies directly through their settings,
        though doing so may affect how parts of this website work.
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
