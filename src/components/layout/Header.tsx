"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileNavigation } from "./MobileNavigation";

// Pages that render a full-bleed video hero behind their opening section.
// On these, the header floats transparently over the video instead of
// taking up its own space above it.
const VIDEO_HERO_PATHS = ["/", "/about", "/services", "/how-it-works", "/faqs"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const hasVideoHero = VIDEO_HERO_PATHS.includes(pathname ?? "");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${hasVideoHero ? "fixed" : "sticky"} inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-stone/85 shadow-subtle backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Container
        className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`link-underline text-sm font-medium transition-colors ${
                      active ? "text-forest-900" : "text-ink-soft hover:text-forest-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="md">
            Book a free discovery call
          </Button>
        </div>

        <MobileNavigation />
      </Container>
    </header>
  );
}
