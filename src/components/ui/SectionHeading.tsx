import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-forest-mid">
          {eyebrow}
        </p>
      )}
      <h2 className="balance text-3xl font-normal leading-[1.15] text-forest-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="pretty mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
