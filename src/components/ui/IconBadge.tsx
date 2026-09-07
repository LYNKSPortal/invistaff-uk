import type { LucideIcon } from "lucide-react";

type IconBadgeProps = {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: { wrap: "size-9", icon: "size-4" },
  md: { wrap: "size-12", icon: "size-5" },
  lg: { wrap: "size-16", icon: "size-7" },
};

export function IconBadge({ icon: Icon, size = "md", className = "" }: IconBadgeProps) {
  const s = sizes[size];
  return (
    <span
      className={`inline-flex ${s.wrap} shrink-0 items-center justify-center rounded-full bg-forest-deep-10 text-forest-deep ${className}`}
    >
      <Icon className={s.icon} strokeWidth={1.6} aria-hidden="true" />
    </span>
  );
}
