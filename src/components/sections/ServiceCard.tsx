import type { ServiceStep } from "@/lib/content/services";
import { IconBadge } from "@/components/ui/IconBadge";
import { StaggerItem } from "@/components/ui/Reveal";

export function ServiceCard({ step }: { step: ServiceStep }) {
  return (
    <StaggerItem className="group h-full rounded-lg border border-forest-deep-10 bg-white p-7 shadow-subtle transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="flex items-start justify-between gap-4">
        <IconBadge icon={step.icon} />
        <span className="font-serif text-3xl font-normal text-forest-deep-30">
          {step.number}
        </span>
      </div>
      <h3 className="mt-5 font-serif text-xl font-normal text-forest-900">
        {step.title}
      </h3>
      <p className="mt-1 text-sm font-semibold uppercase tracking-[0.1em] text-forest-mid">
        {step.price}
      </p>
      <p className="pretty mt-3 text-sm leading-relaxed text-ink-soft">
        {step.summary}
      </p>
    </StaggerItem>
  );
}
