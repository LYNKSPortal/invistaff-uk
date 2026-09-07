import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-prose">
        <Reveal>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] text-forest-900">
            {title}
          </h1>
          <p className="mt-3 text-sm text-ink-soft">Last updated: {lastUpdated}</p>
          <div className="pretty prose-legal mt-8 space-y-6 text-base leading-relaxed text-ink-soft">
            {children}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
