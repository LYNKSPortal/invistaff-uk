import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { results } from "@/lib/content/results";

export function ResultsStrip() {
  return (
    <section className="border-y border-forest-deep-10 bg-white py-10">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-center">
          {results.map((result, i) => (
            <Reveal key={result.label} delay={i * 0.06} className="max-w-[12rem]">
              <p className="font-serif text-3xl font-normal text-forest-900 sm:text-4xl">
                {result.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.1em] text-ink-soft">
                {result.label}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
