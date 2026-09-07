"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/lib/content/faqs";
import { Reveal } from "@/components/ui/Reveal";

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-forest-deep-10 border-y border-forest-deep-10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <Reveal key={item.question} delay={Math.min(index * 0.03, 0.3)}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-base font-medium text-forest-900 sm:text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  className={`size-5 shrink-0 text-forest-mid transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="grid transition-all duration-300 ease-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="overflow-hidden">
                <p className="pretty pb-6 pr-8 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
