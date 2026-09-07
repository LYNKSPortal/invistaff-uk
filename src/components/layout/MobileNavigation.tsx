"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- close menu when route changes
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex size-11 items-center justify-center rounded-full text-forest-900 transition-colors hover:bg-forest-deep-10"
      >
        {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[64px] z-40 h-[calc(100vh-64px)] overflow-y-auto bg-stone px-6 pb-10 pt-6 shadow-lifted sm:px-8"
          >
            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href} className="border-b border-forest-deep-10">
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={`block py-4 text-lg font-medium ${
                          active ? "text-forest-900" : "text-ink-soft"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <Button href="/contact" size="lg" className="mt-8 w-full">
              Book a free discovery call
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
