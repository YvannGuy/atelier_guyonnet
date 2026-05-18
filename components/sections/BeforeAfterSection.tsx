import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { BeforeAfterList } from "@/components/ui/BeforeAfterList";

export function BeforeAfterSection() {
  return (
    <section
      aria-labelledby="before-after-heading"
      className="border-t border-border bg-secondary/20 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
    >
      <div className="mx-auto max-w-6xl lg:px-2">
        <ScrollReveal className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
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
            Visualisez comment un mur vide, une entrée simple, une chambre mal exploitée ou un salon
            peu structuré peut devenir une solution de rangement sur mesure, pensée pour votre
            intérieur.
          </p>
          <p className="mt-4 font-sans text-sm leading-relaxed text-muted">
            Comparaison indicative — visuels d’inspiration générés. Les pièces « avant » et « après »
            ne sont pas identiques et ne représentent pas des projets Atelier Guyonnet.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <BeforeAfterList />
        </ScrollReveal>
      </div>
    </section>
  );
}
