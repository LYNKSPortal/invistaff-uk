import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { values } from "@/lib/content/industries";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Invistaff",
  description:
    "Invistaff was founded by Aalish Kissack after seeing first-hand how disorganised the admin and operational side of trades businesses can become. Here's the story behind it.",
  alternates: { canonical: "/about" },
};

const qualifications = [
  "APM Project Management qualification",
  "GDPR training",
  "Level 3 Bookkeepers Certificate",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Invistaff"
        title="Built from time spent inside trades businesses, not just around them."
        description={
          <>
            Invistaff was founded by {siteConfig.founder} in the {siteConfig.location},
            launching in 2026 after seeing, first-hand, how disorganised the
            administrative side of a busy trades business can become.
          </>
        }
        playbackId="RlhiDjm7M602ZDIlpWBCPzY4kmwjvXg7jmumWEs5jslw"
        overlayOpacity={0.55}
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <Reveal>
              <h2 className="font-serif text-2xl font-normal text-forest-900 sm:text-3xl">
                The problem was bigger than one business
              </h2>
              <div className="pretty mt-5 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  The idea for Invistaff came from watching the administrative
                  and operational side of a garage door and gate company
                  become increasingly disorganised, invoices sent weeks
                  after jobs were finished, unpaid invoices going unchased,
                  customer communications slipping, and paperwork being done
                  late at night after a full day&apos;s work.
                </p>
                <p>
                  Conversations with other tradespeople made it clear this
                  wasn&apos;t a one-off. The same pattern kept showing up:
                  people who were excellent at their trade, but never had the
                  time, or the inclination, to spend their evenings on
                  emails, quotes, paperwork and systems.
                </p>
                <p>
                  {siteConfig.founder} brings around four years of operational
                  experience within the construction industry, alongside two
                  years working on-site around tradespeople, giving her an
                  understanding of both the practical and operational sides
                  of these businesses, not just the admin in isolation.
                </p>
                <p>
                  Invistaff was built to sit in the practical middle ground:
                  more capable and more invested than a task-by-task VA
                  service, without asking a business to commit to a
                  full-time employee before it&apos;s ready to.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="rounded-lg border border-forest-deep-10 bg-stone p-8">
              <h3 className="font-serif text-xl font-normal text-forest-900">
                Experience &amp; qualifications
              </h3>
              <ul className="mt-5 space-y-3">
                {qualifications.map((q) => (
                  <li key={q} className="flex gap-3 text-sm text-ink-soft">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-forest-mid" />
                    {q}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-forest-deep-15 pt-5 text-sm text-ink-soft">
                <p>~4 years of operational experience in construction</p>
                <p className="mt-1">~2 years on-site working around tradespeople</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we stand for"
            title="The values behind how we work"
            align="center"
            className="mb-14"
          />
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => (
              <StaggerItem
                key={value.title}
                className="rounded-lg border border-forest-deep-10 bg-white p-6"
              >
                <h3 className="font-serif text-lg font-normal text-forest-900">
                  {value.title}
                </h3>
                <p className="pretty mt-2 text-sm leading-relaxed text-ink-soft">
                  {value.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container className="max-w-prose">
          <Reveal>
            <h2 className="font-serif text-2xl font-normal text-forest-900 sm:text-3xl">
              Where Invistaff is heading
            </h2>
            <p className="pretty mt-5 text-base leading-relaxed text-ink-soft">
              The ambition is to grow Invistaff into a trusted outsourced
              business and operations partner for established trades
              businesses and SMEs, expanding the team and the range of
              specialist operational services over time, while keeping the
              same personal, practical approach that it started with.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
