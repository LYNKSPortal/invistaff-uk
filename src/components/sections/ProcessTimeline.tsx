import type { ProcessStep } from "@/lib/content/process";
import { Reveal } from "@/components/ui/Reveal";

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="relative">
      <div
        aria-hidden="true"
        className="absolute left-6 top-2 bottom-2 hidden w-px bg-forest-deep-15 sm:block"
      />
      {steps.map((step, i) => (
        <Reveal
          key={step.number}
          delay={i * 0.06}
          className="relative mb-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8 last:mb-0"
        >
          <li className="flex items-center gap-4 sm:contents">
            <span className="relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-forest-deep font-serif text-lg text-white">
              {step.number}
            </span>
            <div className="sm:pt-1.5">
              <h3 className="font-serif text-xl font-normal text-forest-900">
                {step.title}
              </h3>
              <p className="pretty mt-2 max-w-lg text-base leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
