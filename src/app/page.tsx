import type { Metadata } from "next";
import { Clock, LayoutGrid, ClipboardCheck, TrendingUp } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { IndustryStrip } from "@/components/sections/IndustryStrip";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Testimonial } from "@/components/sections/Testimonial";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { IconBadge } from "@/components/ui/IconBadge";
import { Button } from "@/components/ui/Button";
import { servicePillars } from "@/lib/content/services";
import { testimonials } from "@/lib/content/testimonials";
import { beforeAfter } from "@/lib/content/industries";

export const metadata: Metadata = {
  title: "Operations & Administration Support for Trades Businesses",
  description:
    "Invistaff takes admin, systems and operational work off the plates of busy trades and construction business owners in the Isle of Man, without the commitment of a full-time hire.",
  alternates: { canonical: "/" },
};

const pillarIcons = {
  operations: LayoutGrid,
  administration: ClipboardCheck,
  growth: TrendingUp,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <IndustryStrip />

      {/* How we help */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="How we help"
            title="Three ways we take work off your plate"
            description="From hands-on admin to the systems behind it, we cover the ground between doing everything yourself and hiring a full-time member of staff."
            align="center"
            className="mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {servicePillars.map((pillar) => {
              const Icon = pillarIcons[pillar.id];
              return (
                <Reveal key={pillar.id} className="rounded-lg border border-forest-deep-10 bg-white p-8">
                  <IconBadge icon={Icon} size="lg" />
                  <h3 className="mt-6 font-serif text-2xl font-normal text-forest-900">
                    {pillar.title}
                  </h3>
                  <p className="pretty mt-3 text-sm leading-relaxed text-ink-soft">
                    {pillar.standfirst}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {pillar.services.slice(0, 4).map((service) => (
                      <li key={service.slug} className="text-sm text-ink-soft">
                        &middot; {service.title}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-10 text-center">
            <Button href="/services" variant="secondary" withArrow>
              Explore all services
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* Time back */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <IconBadge icon={Clock} size="lg" />
              <h2 className="balance mt-6 text-3xl font-normal leading-tight text-forest-900 sm:text-4xl">
                The real product is time.
              </h2>
              <p className="pretty mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                Every hour spent on admin is an hour not spent on-site, with
                your team, or winning the next job. Invistaff exists to give
                that time back, so you can focus on running and growing the
                business, and actually switch off in the evenings and at
                weekends.
              </p>
            </Reveal>
            <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "More time on-site and with your team",
                "More time to win and deliver new work",
                "More time to develop the business",
                "Evenings and weekends back",
              ].map((item) => (
                <StaggerItem
                  key={item}
                  className="rounded-lg border border-forest-deep-10 bg-stone p-5 text-sm font-medium text-forest-900"
                >
                  {item}
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Container>
      </section>

      {/* More than just admin */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="More than just admin"
            title="We don't just do the task, we ask why it takes so long"
            description="A virtual assistant works through your to-do list. Invistaff looks at why the list is so long in the first place, then improves the process so the same problem doesn't keep coming back."
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
