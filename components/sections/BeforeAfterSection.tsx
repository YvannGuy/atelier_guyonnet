import Link from "next/link";

import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
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
            Les clichés ci-dessous sont une{" "}
            <strong className="font-medium text-foreground">mise en scène indicative</strong> à
            partir de photographies d’ambiance — pas la même pièce, pas un chantier Atelier Guyonnet.
          </p>
          <p className="mt-2 font-sans text-sm leading-relaxed text-muted">
            Ces visuels sont <strong className="font-medium text-foreground">indicatifs</strong> et ne
            représentent pas une réalisation effectuée par Atelier Guyonnet.
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

          <div className="relative">
            <BeforeAfterSlider
              beforeSrc={placeholderImages.beforeAfterAvant.publicPath}
              beforeAlt={placeholderImages.beforeAfterAvant.alt}
              afterSrc={placeholderImages.beforeAfterApres.publicPath}
              afterAlt={placeholderImages.beforeAfterApres.alt}
            />
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
