import Link from "next/link";

import { MobileNav, type HeaderNavItem } from "@/components/layout/MobileNav";

const navItems: HeaderNavItem[] = [
  { href: "/", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#inspirations", label: "Inspirations" },
  { href: "#methode", label: "Méthode" },
  { href: "#apropos", label: "À propos" },
  { href: "#devis", label: "Devis" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-on-dark/10 bg-primary/35 backdrop-blur-md">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-20 sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="focus-visible:ring-on-dark/70 group relative z-10 flex max-w-[60%] shrink-0 flex-col gap-0.5 no-underline sm:max-w-[280px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary/30"
        >
          <span className="font-serif text-base leading-tight tracking-tight text-on-dark sm:text-lg">
            Atelier Guyonnet
          </span>
          <span className="font-sans text-[0.65rem] font-light uppercase leading-tight tracking-[0.22em] text-on-dark-muted/85 sm:text-xs">
            Agencement sur mesure
          </span>
        </Link>

        <nav
          aria-label="Principale"
          className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 lg:flex xl:gap-8"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-visible:ring-on-dark/70 whitespace-nowrap font-sans text-[11px] font-light uppercase tracking-[0.2em] text-on-dark/90 no-underline transition-colors hover:text-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary/30"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="relative z-10 flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="#devis"
            className="focus-visible:ring-on-dark/70 hidden rounded-full bg-primary px-4 py-2 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-on-dark no-underline transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary/30 sm:inline-flex sm:px-5"
          >
            Demander un devis
          </Link>
          <div className="lg:hidden">
            <MobileNav items={navItems} />
          </div>
        </div>
      </div>
    </header>
  );
}
