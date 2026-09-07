import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { servicePillars } from "@/lib/content/services";
import { deliveryOptions } from "@/lib/content/industries";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Operations support, administration support and growth support for trades and construction businesses, covering process reviews, SOPs, inbox and diary management, quoting, invoicing, credit control, CRM and more.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Support that flexes to what your business actually needs."
        description="Every business is different, so support is built around yours rather than forced into a fixed package. Here's the full range of what we can help with, organised into three areas."
      />

      {servicePillars.map((pillar, index) => (
        <section
          key={pillar.id}
          id={pillar.id}
          className={`py-16 sm:py-20 ${index % 2 === 1 ? "bg-white" : ""}`}
        >
          <Container>
            <SectionHeading
              eyebrow={`0${index + 1}`}
              title={pillar.title}
              description={pillar.standfirst}
              className="mb-12"
            />
            <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pillar.services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </StaggerGroup>
          </Container>
        </section>
      ))}

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Flexible delivery"
            title="Support arranged the way that suits your business"
            description="Whether you need a one-off project or ongoing help, support is tailored around what you actually need, not a rigid package."
            align="center"
            className="mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deliveryOptions.map((option, i) => (
              <Reveal
                key={option.title}
                delay={i * 0.06}
                className="rounded-lg border border-forest-deep-10 bg-white p-6"
              >
                <h3 className="font-serif text-lg font-normal text-forest-900">
                  {option.title}
                </h3>
                <p className="pretty mt-2 text-sm leading-relaxed text-ink-soft">
                  {option.description}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-12 max-w-xl text-center">
            <p className="text-base text-ink-soft">
              Pricing is tailored to the support you need, with packages from{" "}
              <span className="font-semibold text-forest-900">£99</span>.
              We&apos;ll agree the scope and cost together on your discovery
              call.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
