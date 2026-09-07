"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroVideoBackground } from "./HeroVideoBackground";

export function Hero() {
  return (
    <section className="relative min-h-[560px] overflow-hidden pt-48 pb-32 sm:min-h-[680px] sm:pt-56 sm:pb-40">
      <HeroVideoBackground />

      <Container>
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 hidden items-center gap-2 rounded-full border border-forest-deep-15 bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-forest-mid sm:inline-flex"
          >
            Operations &amp; administration support &middot; Isle of Man
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="balance text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal leading-[1.05] text-forest-900"
          >
            Your business shouldn&apos;t follow you home.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="pretty mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
          >
            Invistaff takes the admin, systems and operational work off your
            plate, so you can get back to running the business, and get your
            evenings and weekends back too. No full-time hire required.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/contact" size="lg" withArrow>
              Book a free discovery call
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Explore how we help
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-6 text-sm text-ink-soft"
          >
            Free, no-obligation call. You don&apos;t need to know what you need
            &mdash; that&apos;s what the conversation is for.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
