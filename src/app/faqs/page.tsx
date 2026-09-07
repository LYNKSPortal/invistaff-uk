import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { faqs } from "@/lib/content/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about how Invistaff works, what it costs, contracts, onboarding, confidentiality and cancellation.",
  alternates: { canonical: "/faqs" },
};

export default function FAQsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="FAQs"
        title="Questions, answered plainly."
        description="If there's something we haven't covered here, get in touch, the discovery call is exactly the place for it."
        playbackId="Opyjp00yGVq9xo202ARm9S00yHtw00ORMKlFpa3XWFNOZjU"
      />

      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <FAQAccordion items={faqs} />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
