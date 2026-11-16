import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ResultsStrip } from "@/components/sections/ResultsStrip";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Testimonial } from "@/components/sections/Testimonial";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { IconBadge } from "@/components/ui/IconBadge";
import { Button } from "@/components/ui/Button";
import { TrendingUp } from "lucide-react";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { StaggerGroup } from "@/components/ui/Reveal";
import { serviceSteps } from "@/lib/content/services";
import { testimonials } from "@/lib/content/testimonials";
import { beforeAfter } from "@/lib/content/industries";

export const metadata: Metadata = {
  title: "Operational Audits for Construction & Trades Businesses",
  description:
    "Invistaff finds where construction and trade businesses are losing money, and fixes the systems behind it. Money Leak Checks, profit leak audits, fix projects and ongoing operations support.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ResultsStrip />

      {/* How we help */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="How we help"
            title="Four steps from leak to fixed"
            description="You don't need to know where the leak is before you call. We find it, put a figure on it, fix it, and keep it fixed."
            align="center"
            className="mb-14"
          />
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceSteps.map((step) => (
              <ServiceCard key={step.slug} step={step} />
            ))}
          </StaggerGroup>
          <Reveal className="mt-10 text-center">
            <Button href="/services" variant="secondary" withArrow>
              Explore all services
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* Turnover is vanity, profit is sanity */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal className="text-center">
              <div className="flex justify-center">
                <IconBadge icon={TrendingUp} size="lg" />
              </div>
              <h2 className="balance mt-6 text-3xl font-normal leading-tight text-forest-900 sm:text-4xl">
                Turnover is vanity, profit is sanity.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="pretty mt-6 space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              <p>
                Most businesses I work with aren&apos;t short of work.
                They&apos;re losing money in places nobody&apos;s had time to
                look: a price that hasn&apos;t moved in years, quotes nobody
                chases, invoices sitting unpaid, software nobody uses.
              </p>
              <p>
                I find those leaks, put a £ figure on each one, and fix the
                systems behind them. The time back comes too, but the money
                is why it&apos;s worth doing.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Before / after */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Where the money goes"
            title="We fix the leak, not just the symptom"
            description="Anyone can patch a problem once. We find why it's leaking and put a system in place so it stays fixed."
            className="mb-14"
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {beforeAfter.map((item, i) => (
              <Reveal
                key={item.before}
                delay={i * 0.06}
                className="rounded-lg border border-forest-deep-10 bg-white p-6"
              >
                <p className="text-sm text-ink-soft line-through">{item.before}</p>
                <p className="mt-2 font-serif text-lg text-forest-900">{item.after}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What clients say"
            title="Trusted by trades business owners"
            align="center"
            className="mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {testimonials.map((testimonial, i) => (
              <Testimonial key={testimonial.name} testimonial={testimonial} delay={i * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
