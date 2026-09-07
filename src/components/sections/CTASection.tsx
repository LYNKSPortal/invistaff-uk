import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Book a free, no-obligation discovery call.",
  description = "Tell us what's taking up your time. You don't need to know which service you need, we'll help you work that out.",
}: CTASectionProps) {
  return (
    <section className="bg-forest-deep py-20 sm:py-24">
      <Container className="text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="balance text-3xl font-normal leading-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="pretty mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
            {description}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg" withArrow variant="inverse">
              Book a free discovery call
            </Button>
            <Button href="/how-it-works" variant="ghost-inverse" size="lg">
              See how it works
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
