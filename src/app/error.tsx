"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container className="text-center">
        <h1 className="balance text-3xl font-normal text-forest-900 sm:text-4xl">
          Something went wrong.
        </h1>
        <p className="pretty mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
          We&apos;re sorry, an unexpected error occurred. Please try again,
          or get in touch if the problem continues.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button type="button" size="lg" onClick={() => reset()}>
            Try again
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
