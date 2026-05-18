import Link from "next/link";

import { siteConfig } from "@/lib/constants/site";

const quickLinks = [
  { href: "/", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#inspirations", label: "Inspirations" },
  { href: "#methode", label: "Méthode" },
  { href: "#apropos", label: "À propos" },
  { href: "#faq", label: "FAQ" },
  { href: "#devis", label: "Devis" },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-hero-warm/30 bg-primary text-on-dark">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="font-serif text-lg tracking-tight text-on-dark">{siteConfig.name}</p>
            <p className="mt-1 font-sans text-[0.65rem] font-light uppercase tracking-[0.22em] text-on-dark-muted">
              Agencement sur mesure
            </p>
            <p className="mt-4 max-w-xs font-serif text-base leading-snug text-on-dark-muted">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 font-sans text-xs uppercase tracking-[0.16em] text-on-dark-muted">
              Paris &amp; Île-de-France
            </p>
          </div>

          <nav aria-label="Liens rapides" className="lg:col-span-3">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-on-dark-muted">
              Liens rapides
            </p>
            <ul className="mt-4 space-y-3 font-sans text-sm text-on-dark">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-visible:ring-on-dark/80 inline-flex py-1 no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-on-dark-muted">
              Contact
            </p>
            <p className="mt-4 font-sans text-sm">
              <span className="block text-on-dark-muted">Email</span>
              <Link
                href={`mailto:${siteConfig.contactEmail}`}
                className="focus-visible:ring-on-dark/80 mt-1 inline-block text-on-dark no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                {siteConfig.contactEmail}
              </Link>
            </p>
            <p className="mt-4 font-sans text-sm">
              <span className="block text-on-dark-muted">Téléphone</span>
              <Link
                href={`tel:${siteConfig.contactPhone}`}
                className="focus-visible:ring-on-dark/80 mt-1 inline-block text-on-dark no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                {siteConfig.contactPhoneDisplay}
              </Link>
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-on-dark-muted">
              Informations
            </p>
            <ul className="mt-4 space-y-3 font-sans text-sm">
              <li>
                <Link
                  href="/mentions-legales"
                  className="focus-visible:ring-on-dark/80 text-on-dark no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-de-confidentialite"
                  className="focus-visible:ring-on-dark/80 text-on-dark no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-on-dark/15 pt-8 text-center font-sans text-xs text-on-dark-muted sm:text-left">
          © 2026 {siteConfig.name}. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
