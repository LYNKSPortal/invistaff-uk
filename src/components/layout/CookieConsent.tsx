"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const STORAGE_KEY = "invistaff-cookie-consent";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing with browser storage on mount
    if (!stored) setVisible(true);
  }, []);

  const save = (consent: Consent) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    setVisible(false);
  };

  const acceptAll = () => save({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () => save({ necessary: true, analytics: false, marketing: false });
  const savePreferences = () => save({ necessary: true, analytics, marketing });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Cookie preferences"
          aria-modal="false"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-4 z-[90] mx-auto max-w-xl rounded-2xl border border-forest-deep-15 bg-white p-6 shadow-lifted sm:inset-x-auto sm:right-6 sm:bottom-6"
        >
          <p className="text-sm leading-relaxed text-ink-soft">
            We use cookies to run this site and, with your consent, to understand
            how it&apos;s used. Read our{" "}
            <Link href="/cookie-policy" className="link-underline text-forest-900">
              Cookie Policy
            </Link>{" "}
            for details.
          </p>

          {preferencesOpen && (
            <div className="mt-4 space-y-3 border-t border-forest-deep-10 pt-4">
              <label className="flex items-center justify-between gap-4 text-sm text-ink-soft">
                <span>Necessary (always on)</span>
                <input type="checkbox" checked disabled className="size-4 accent-forest-deep" />
              </label>
              <label className="flex items-center justify-between gap-4 text-sm text-ink-soft">
                <span>Analytics</span>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="size-4 accent-forest-deep"
                />
              </label>
              <label className="flex items-center justify-between gap-4 text-sm text-ink-soft">
                <span>Marketing</span>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="size-4 accent-forest-deep"
                />
              </label>
            </div>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button size="md" onClick={acceptAll}>
              Accept all
            </Button>
            <Button variant="secondary" size="md" onClick={rejectAll}>
              Reject all
            </Button>
            {preferencesOpen ? (
              <Button variant="ghost" size="md" onClick={savePreferences}>
                Save preferences
              </Button>
            ) : (
              <Button variant="ghost" size="md" onClick={() => setPreferencesOpen(true)}>
                Manage preferences
              </Button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
