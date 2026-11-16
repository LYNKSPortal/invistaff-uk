import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { values } from "@/lib/content/industries";
import { siteConfig, buildSocialMetadata } from "@/lib/site";

const description =
  "Invistaff was founded by Aalish Kissack after seeing first-hand how much money construction and trade businesses lose to disorganised systems. Here's the story behind it.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  ...buildSocialMetadata("About", description, "/about"),
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
            launched in 2026 after seeing, first-hand, how disorganised the
            operational side of a busy trades business can become.
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
                  Invistaff started inside a construction business where the
                  processes were all over the place. If someone went on
                  holiday, things fell apart within days. There was no
                  clear way to leave notes and no standard procedures, and
                  most of it still ran on paper. Stock ran out constantly.
                  That wasn&apos;t because nobody was trying. There was just
                  no system catching it before it cost us a job.
                </p>
                <p>
                  That&apos;s the part that stuck with me. It wasn&apos;t
                  just messy. It was expensive. Every missed reorder,
                  unchased quote and late invoice was money the business
                  had already earned and was letting go.
                </p>
                <p>
                  When I talked to other owners in construction, I heard
                  the same story every time: no documentation, nothing in
                  place when someone was off, and a business that only
                  worked because one person was holding it all in their
                  head. And underneath it, profit leaking out in places
                  nobody had time to look.
                </p>
                <p>
                  I&apos;ve been in construction since I was 16. I started
                  as an apprentice electrician, spent two years on site as
                  a fire alarm engineer, and have run operations in the
                  industry since. I know how a job looks from the van and
                  from the office, and where the money goes missing
                  between the two.
                </p>
                <p>
                  That&apos;s what {siteConfig.name} does. I find where a
                  business is losing money, put a figure on it, and build
                  the systems that stop it happening again. They&apos;re
                  the kind of systems that mean you can take a week off and
                  come back to a business that&apos;s still making money.
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
                <p>In construction since age 16, starting as an apprentice electrician</p>
                <p className="mt-1">2 years on-site as a fire alarm engineer</p>
                <p className="mt-1">Running operations in construction ever since</p>
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
