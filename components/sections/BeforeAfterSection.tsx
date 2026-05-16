import Image from "next/image";
import Link from "next/link";

import { placeholderImages } from "@/lib/constants/placeholder-images";

export function BeforeAfterSection() {
  return (
    <section
      aria-labelledby="before-after-heading"
      className="border-t border-border bg-secondary/20 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
    >
      <div className="mx-auto max-w-6xl lg:px-2">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
          <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
            Lecture
          </p>
          <h2
            id="before-after-heading"
            className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
          >
            De l’espace perdu au rangement intégré
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-muted md:text-lg">
            Visualisez comment un mur vide, un recoin ou une entrée encombrée peut devenir une
            solution de rangement sur mesure, pensée pour votre intérieur.
          </p>
          <p className="mt-4 font-sans text-sm leading-relaxed text-muted">
            Les clichés ci-contre sont une <strong className="font-medium text-foreground">mise en scène indicative</strong> à partir de photographies d’ambiance — pas la même pièce, pas un chantier Atelier Guyonnet.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-4xl sm:mt-16 lg:mt-20">
          <span
            className="pointer-events-none absolute -left-2 top-6 hidden h-px w-8 bg-border sm:block lg:-left-4"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute -right-2 top-6 hidden h-px w-8 bg-border sm:block lg:-right-4"
            aria-hidden
          />

          <div
            className="relative overflow-hidden rounded-md border border-border bg-background"
            role="region"
            aria-label="Illustration avant et après — synthèse visuelle d’inspiration, sans chantier réel affiché."
          >
            <div className="relative flex min-h-[260px] flex-col pb-12 sm:min-h-[300px] md:min-h-[340px] lg:min-h-[380px] lg:flex-row">
              <div className="relative flex min-h-[200px] flex-1 flex-col justify-between overflow-hidden border-b border-border p-5 sm:min-h-[240px] sm:p-6 lg:min-h-0 lg:border-r lg:border-b-0 lg:p-8">
                <Image
                  src={placeholderImages.beforeAfterAvant.publicPath}
                  alt={placeholderImages.beforeAfterAvant.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-linear-to-br from-background/88 via-background/65 to-secondary/50"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, transparent, transparent 6px, color-mix(in srgb, var(--ag-text-main) 12%, transparent) 6px, color-mix(in srgb, var(--ag-text-main) 12%, transparent) 7px)",
                  }}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute right-4 top-4 z-1 h-10 w-px bg-border sm:right-6 sm:top-6"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute right-4 top-4 z-1 h-px w-10 bg-border sm:right-6 sm:top-6"
                  aria-hidden
                />
                <span className="relative z-2 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-foreground">
                  Avant
                </span>
                <p className="relative z-2 mt-6 max-w-xs font-sans text-sm leading-relaxed text-foreground/90 lg:mt-auto">
                  Espace peu structuré · volumes difficiles à meubler · proposition encore ouverte.
                </p>
              </div>

              <div className="relative flex min-h-[200px] flex-1 flex-col justify-between overflow-hidden bg-linear-to-bl from-secondary/55 via-background to-secondary/35 p-5 sm:min-h-[240px] sm:p-6 lg:min-h-0 lg:p-8">
                <Image
                  src={placeholderImages.beforeAfterApres.publicPath}
                  alt={placeholderImages.beforeAfterApres.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-[center_40%]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-linear-to-tl from-background/82 via-secondary/40 to-background/55"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute left-5 top-1/2 z-1 hidden h-px w-12 -translate-y-1/2 border-t border-dashed border-border lg:left-8 lg:block"
                  aria-hidden
                />
                <span className="relative z-2 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-foreground">
                  Après
                </span>
                <p className="relative z-2 mt-6 max-w-xs font-sans text-sm leading-relaxed text-foreground/90 lg:mt-auto">
                  Rangement intégré, lignée claire et matériaux cohérents — schéma indicatif.
                </p>
              </div>
            </div>

            <div
              className="pointer-events-none absolute left-4 right-4 top-1/2 z-20 h-px -translate-y-1/2 bg-border lg:hidden"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-1/2 top-0 z-20 hidden w-px -translate-x-1/2 bg-border lg:block"
              aria-hidden
            />
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-on-dark/15 bg-hero-warm text-on-dark shadow-sm sm:h-12 sm:w-12 md:h-14 md:w-14">
              <span className="select-none font-sans text-xs font-medium tracking-[0.14em]" aria-hidden>
                ‹ ›
              </span>
            </div>

            <p className="pointer-events-none absolute bottom-3 left-1/2 z-10 max-w-[90%] -translate-x-1/2 text-center font-sans text-[10px] uppercase tracking-[0.18em] text-muted">
              Illustration d’ambiance — pas un avant/après réel
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-center lg:mt-12">
          <p className="font-sans text-sm text-muted">
            Exemple de transformation — visuel d’inspiration
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="#devis"
              className="focus-visible:ring-primary/40 inline-flex items-center justify-center rounded-sm border border-foreground px-6 py-3 font-sans text-xs font-medium uppercase tracking-[0.18em] text-foreground no-underline transition-colors hover:bg-foreground/4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Imaginer mon projet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
