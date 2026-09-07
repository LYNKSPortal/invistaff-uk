import type { Service } from "@/lib/content/services";
import { IconBadge } from "@/components/ui/IconBadge";
import { StaggerItem } from "@/components/ui/Reveal";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <StaggerItem className="group h-full rounded-lg border border-forest-deep-10 bg-white p-7 shadow-subtle transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <IconBadge icon={service.icon} />
      <h3 className="mt-5 font-serif text-xl font-normal text-forest-900">
        {service.title}
      </h3>
      <p className="pretty mt-2 text-sm leading-relaxed text-ink-soft">
        {service.detail}
      </p>
    </StaggerItem>
  );
}
