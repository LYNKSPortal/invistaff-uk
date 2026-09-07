import { Quote } from "lucide-react";
import type { Testimonial as TestimonialType } from "@/lib/content/testimonials";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonial({
  testimonial,
  delay = 0,
}: {
  testimonial: TestimonialType;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <figure className="flex h-full flex-col rounded-lg border border-forest-deep-10 bg-white p-8 shadow-subtle">
        <Quote className="size-7 text-forest-mid" strokeWidth={1.4} aria-hidden="true" />
        <blockquote className="pretty mt-5 flex-1 text-base leading-relaxed text-ink-soft">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-6 border-t border-forest-deep-10 pt-4">
          <p className="font-serif text-lg text-forest-900">{testimonial.name}</p>
          <p className="text-sm text-ink-soft">
            {testimonial.role}, {testimonial.company}
          </p>
        </figcaption>
      </figure>
    </Reveal>
  );
}
