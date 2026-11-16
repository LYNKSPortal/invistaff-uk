import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { IconBadge } from "@/components/ui/IconBadge";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { serviceSteps } from "@/lib/content/services";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Money Leak Check, Profit Leak Audit, Fix Projects and Operations Partner — four steps that find where construction and trade businesses are losing money and fix the systems behind it.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Four steps, each one priced upfront."
        description="You don't need to know which step you need before you call. The Money Leak Check works that out, and everything after it is scoped and priced before you commit to anything."
      />

      {serviceSteps.map((step, index) => (
        <section
          key={step.slug}
          id={step.slug}
          className={`scroll-mt-28 py-16 sm:py-20 ${index % 2 === 1 ? "bg-white" : ""}`}
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
              <Reveal>
                <div className="flex items-center gap-4">
                  <IconBadge icon={step.icon} size="lg" />
                  <span className="font-serif text-4xl font-normal text-forest-deep-30">
                    {step.number}
                  </span>
                </div>
                <h2 className="mt-6 font-serif text-2xl font-normal text-forest-900 sm:text-3xl">
                  {step.title}
                </h2>
                <p className="mt-2 text-lg font-semibold text-forest-mid">
                  {step.price}
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="pretty text-base leading-relaxed text-ink-soft sm:text-lg">
                  {step.detail}
                </p>
                <ul className="mt-6 space-y-3">
                  {step.included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink-soft sm:text-base">
                      <Check
                        className="mt-0.5 size-5 shrink-0 text-forest-mid"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                {step.slug === "money-leak-check" && (
                  <Button
                    href={siteConfig.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    withArrow
                    className="mt-8"
                  >
                    Book a free Money Leak Check
                  </Button>
                )}
              </Reveal>
            </div>
          </Container>
        </section>
      ))}

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-xl text-center">
            <p className="text-base text-ink-soft sm:text-lg">
              Start with a free Money Leak Check. If there&apos;s something
              worth digging into, we&apos;ll agree the scope and price for
              the next step together, with nothing committed upfront.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
