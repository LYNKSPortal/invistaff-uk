import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container className="text-center">
        <p className="font-serif text-6xl text-forest-deep-30">404</p>
        <h1 className="balance mt-4 text-3xl font-normal text-forest-900 sm:text-4xl">
          We can&apos;t find that page.
        </h1>
        <p className="pretty mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
          The page you&apos;re looking for may have moved or no longer
          exists. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" size="lg">
            Back to home
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
