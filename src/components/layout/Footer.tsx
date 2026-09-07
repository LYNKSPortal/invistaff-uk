import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { LinkedInIcon, InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";
import { siteConfig, navLinks, footerLegalLinks } from "@/lib/site";
import { servicePillars } from "@/lib/content/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-forest-deep-10 bg-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo height={38} />
            <p className="mt-4 max-w-xs font-serif text-lg italic text-forest-mid">
              {siteConfig.tagline}
            </p>
            <p className="pretty mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              Outsourced administration and operations support for busy trades
              and construction businesses, based in the Isle of Man.
            </p>
            <div className="mt-6 flex items-center gap-3">
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
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold text-forest-900">Navigate</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline text-sm text-ink-soft hover:text-forest-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services navigation">
            <h3 className="text-sm font-semibold text-forest-900">Services</h3>
            <ul className="mt-4 space-y-3">
              {servicePillars.map((pillar) => (
                <li key={pillar.id}>
                  <Link
                    href={`/services#${pillar.id}`}
                    className="link-underline text-sm text-ink-soft hover:text-forest-900"
                  >
                    {pillar.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold text-forest-900">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="link-underline inline-flex items-center gap-2 hover:text-forest-900"
                >
                  <Mail className="size-4 text-forest-deep" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="link-underline inline-flex items-center gap-2 hover:text-forest-900"
                >
                  <Phone className="size-4 text-forest-deep" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </li>
              <li className="pt-1">{siteConfig.hours.weekday}</li>
              <li>{siteConfig.hours.weekend}</li>
              <li className="pt-1">{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-forest-deep-10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-soft">
            &copy; {year} Invistaff. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLegalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="link-underline text-xs text-ink-soft hover:text-forest-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
