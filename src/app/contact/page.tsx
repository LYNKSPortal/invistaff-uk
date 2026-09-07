import type { Metadata } from "next";
import { Mail, Phone, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { LinkedInIcon, InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free, no-obligation discovery call with Invistaff. Call, email, or send a message and we'll get back to you.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-forest-mid">
              Contact
            </p>
            <h1 className="balance text-[clamp(2.25rem,4vw,3.25rem)] font-normal leading-[1.1] text-forest-900">
              Book a free, no-obligation discovery call.
            </h1>
            <p className="pretty mt-5 text-base leading-relaxed text-ink-soft">
              Tell us a little about your business and what&apos;s taking up
              your time. You don&apos;t need to know which service you need,
              that&apos;s what the call is for.
            </p>

            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="link-underline inline-flex items-center gap-3 text-forest-900"
                >
                  <Mail className="size-5 text-forest-deep" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="link-underline inline-flex items-center gap-3 text-forest-900"
                >
                  <Phone className="size-5 text-forest-deep" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-ink-soft">
                <Clock className="mt-0.5 size-5 shrink-0 text-forest-deep" aria-hidden="true" />
                <span>
                  {siteConfig.hours.weekday}
                  <br />
                  {siteConfig.hours.weekend}
                </span>
              </li>
            </ul>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Invistaff on LinkedIn"
                className="inline-flex size-10 items-center justify-center rounded-full border border-forest-900 text-forest-deep transition-colors hover:bg-forest-deep-6"
              >
                <LinkedInIcon />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Invistaff on Instagram"
                className="inline-flex size-10 items-center justify-center rounded-full border border-forest-900 text-forest-deep transition-colors hover:bg-forest-deep-6"
              >
                <InstagramIcon />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Invistaff on Facebook"
                className="inline-flex size-10 items-center justify-center rounded-full border border-forest-900 text-forest-deep transition-colors hover:bg-forest-deep-6"
              >
                <FacebookIcon />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-lg border border-forest-deep-10 bg-white p-6 sm:p-10">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
