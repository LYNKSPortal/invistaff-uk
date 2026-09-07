import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { HeroVideoBackground } from "./HeroVideoBackground";

export function PageHero({
  eyebrow,
  title,
  description,
  playbackId,
  overlayOpacity,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  playbackId?: string;
  overlayOpacity?: number;
}) {
  return (
    <section className="relative overflow-hidden pt-52 pb-32 sm:pt-44 sm:pb-20">
      <HeroVideoBackground playbackId={playbackId} overlayOpacity={overlayOpacity} />
      <Container>
        <Reveal className="max-w-2xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-forest-deep-15 bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-forest-mid">
            {eyebrow}
          </p>
          <h1 className="balance text-[clamp(2.25rem,4.5vw,3.75rem)] font-normal leading-[1.1] text-forest-900">
            {title}
          </h1>
          {description && (
            <p className="pretty mt-6 text-lg leading-relaxed text-ink-soft">
              {description}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
