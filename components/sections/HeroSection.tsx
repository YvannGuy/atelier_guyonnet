import Image from "next/image";
import Link from "next/link";

import { HeroMotion } from "@/components/motion/HeroMotion";
import { placeholderImages } from "@/lib/constants/placeholder-images";

/** Contenu marketing — aligné brief ; sections ancres arriveront avec le reste de la page. */
const heroCopy = {
  badge: "Paris & Île-de-France",
  title: "Votre intérieur, pensé au centimètre près.",
  body:
    "Atelier Guyonnet conçoit et réalise des dressings, placards, bibliothèques et meubles intégrés sur mesure pour optimiser les petits espaces à Paris et en Île-de-France.",
  ctaPrimary: "Demander un devis",
  ctaSecondary: "Voir les inspirations",
  reassurance: [
    { label: "Étude personnalisée" },
    { label: "Solutions sur mesure" },
    { label: "Réponse sous 24 à 48h" },
  ] as const,
} as const;

/**
 * Photo de fond : fichier sous `public/images/placeholders/` (Unsplash importé localement).
 * Ambiance indicative — pas une photographie de chantier Atelier Guyonnet.
 * Remplacement : `lib/constants/placeholder-images.ts` ou bascule vers un fichier définitif.
 */
export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[85svh] flex-col overflow-hidden sm:min-h-dvh"
    >
      {/* Couche ambiance — non interactive */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-hero-base via-hero-mid to-hero-base"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_120%,var(--ag-hero-warm),transparent_55%)] opacity-90"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 z-0 motion-hero-bg" data-hero-bg>
        <Image
          src={placeholderImages.hero.publicPath}
          alt={placeholderImages.hero.alt}
          fill
          priority
          sizes="100vw"
          className="motion-hero-bg-image object-cover object-[center_35%] opacity-[0.52] mix-blend-soft-light sm:opacity-[0.46]"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-0 bg-linear-to-t from-primary/58 via-primary/28 to-primary/15"
        aria-hidden
      />

      {/* Repères type mesure */}
      <div
        className="pointer-events-none absolute left-4 top-24 z-1 hidden h-16 w-px bg-on-dark/20 sm:left-6 md:block lg:left-10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-4 top-24 z-1 hidden h-px w-10 bg-on-dark/20 sm:left-6 md:block lg:left-10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-32 right-4 z-1 hidden h-px w-10 bg-on-dark/20 sm:right-6 md:block lg:right-10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-32 right-4 z-1 hidden h-20 w-px bg-on-dark/20 sm:right-6 md:block lg:right-10"
        aria-hidden
      />

      <HeroMotion className="relative z-10 flex flex-1 flex-col justify-center px-4 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-32 md:px-10 lg:mx-auto lg:max-w-6xl lg:px-8">
        <div className="max-w-2xl">
          <p
            data-hero-badge
            className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-on-dark/90"
          >
            <span className="rounded-full border border-on-dark/35 bg-on-dark/5 px-3 py-1.5 backdrop-blur-[2px]">
              {heroCopy.badge}
            </span>
          </p>
          <h1
            id="hero-heading"
            data-hero-title
            className="mt-6 font-serif text-3xl leading-[1.15] tracking-tight text-on-dark sm:text-4xl md:text-5xl"
          >
            {heroCopy.title}
          </h1>
          <p
            data-hero-body
            className="mt-5 max-w-xl font-sans text-base leading-relaxed text-on-dark-muted md:text-lg"
          >
            {heroCopy.body}
          </p>

          <div
            data-hero-ctas
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Link
              href="#devis"
              className="focus-visible:ring-on-dark/80 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 py-3.5 text-center font-sans text-xs font-medium uppercase tracking-[0.18em] text-on-dark no-underline transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-hero-mid touch-manipulation"
            >
              {heroCopy.ctaPrimary}
            </Link>
            <Link
              href="#inspirations"
              className="focus-visible:ring-on-dark/80 inline-flex min-h-12 items-center justify-center rounded-full border border-on-dark/50 bg-transparent px-7 py-3.5 text-center font-sans text-xs font-medium uppercase tracking-[0.18em] text-on-dark no-underline transition-colors hover:border-on-dark hover:bg-on-dark/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-hero-mid touch-manipulation"
            >
              {heroCopy.ctaSecondary}
            </Link>
          </div>
        </div>

        <div className="mt-12 w-full max-w-4xl border-t border-on-dark/15 pt-8 sm:mt-16">
          <ul className="grid gap-6 sm:grid-cols-3 sm:gap-0">
            {heroCopy.reassurance.map((item, index) => (
              <li
                key={item.label}
                data-hero-reassurance-item
                className="relative font-sans text-[11px] font-light uppercase leading-snug tracking-[0.2em] text-on-dark/80 sm:border-l sm:border-on-dark/15 sm:px-6 first:sm:border-l-0 first:sm:pl-0"
              >
                <span className="text-on-dark-muted/90">
                  {String(index + 1).padStart(2, "0")}.{" "}
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </HeroMotion>
    </section>
  );
}
