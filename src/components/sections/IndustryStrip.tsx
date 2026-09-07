import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/lib/content/industries";

export function IndustryStrip() {
  return (
    <section className="border-y border-forest-deep-10 bg-white py-10">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-forest-mid sm:text-left">
            Trusted by businesses in
          </p>
        </Reveal>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:justify-start">
          {industries.map((industry, i) => (
            <Reveal key={industry.label} delay={i * 0.05} className="flex items-center gap-2.5">
              <industry.icon className="size-5 text-forest-deep" strokeWidth={1.6} aria-hidden="true" />
              <span className="text-sm font-medium text-ink-soft">{industry.label}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
