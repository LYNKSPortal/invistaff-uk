import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTASection } from "@/components/sections/CTASection";
import { processSteps } from "@/lib/content/process";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From a free discovery call through to ongoing support, here's the seven-step process behind working with Invistaff.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A simple, low-pressure way to start."
        description="You don't need to arrive knowing exactly what you need. The process is designed to work that out together, then get you properly supported."
        playbackId="AMta6q7GEqB72ftVszPsnXt5n2abachYGuTBZDEHVx00"
        overlayOpacity={0.55}
      />

      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <ProcessTimeline steps={processSteps} />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
