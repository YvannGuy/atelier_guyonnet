"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

export type HeaderNavItem = {
  href: string;
  label: string;
};

type MobileNavProps = {
  items: HeaderNavItem[];
};

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <div className="flex">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
        onClick={() => setOpen((v) => !v)}
        className="focus-visible:ring-on-dark/60 inline-flex h-11 w-11 items-center justify-center rounded-sm text-on-dark transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary/30"
      >
        <span className="sr-only">Menu</span>
        <span
          aria-hidden
          className="relative block h-3 w-5"
        >
          <span
            className={`absolute left-0 top-0 block h-px w-full origin-center bg-on-dark transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
          />
          <span
            className={`absolute left-0 top-1.5 block h-px w-full bg-on-dark transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute left-0 top-3 block h-px w-full origin-center bg-on-dark transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
          />
        </span>
      </button>

      {open ? (
        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation principale"
          className="fixed inset-0 z-60 flex flex-col bg-hero-base/97 px-6 pb-10 pt-24 backdrop-blur-sm"
        >
          <nav
            aria-label="Principale — mobile"
            className="flex flex-1 flex-col gap-1"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-visible:ring-on-dark/60 block rounded-sm px-1 py-4 font-sans text-sm font-light uppercase tracking-[0.2em] text-on-dark no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary/30"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#devis"
              onClick={() => setOpen(false)}
              className="focus-visible:ring-on-dark/60 mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 font-sans text-xs font-medium uppercase tracking-[0.18em] text-on-dark no-underline transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary/30"
            >
              Demander un devis
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
