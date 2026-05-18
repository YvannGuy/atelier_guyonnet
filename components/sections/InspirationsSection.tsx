import Image from "next/image";

import { InspirationReveal } from "@/components/motion/InspirationReveal";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { placeholderImages } from "@/lib/constants/placeholder-images";

const disclaimerParagraphs = [
  "Ces visuels présentent des exemples de solutions que nous pouvons concevoir : dressing, placard intégré, bibliothèque, meuble TV, cuisine sur mesure ou rangement sur mesure.",
  "Chaque projet conçu dépend de votre espace, de vos mesures, de vos besoins et des matériaux choisis. Les visuels ci-dessous sont des illustrations d’inspiration — ils ne représentent pas des projets Atelier Guyonnet.",
] as const;

type InspirationItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  /** Détail matière / intention — lecture éditoriale, non contractuelle. */
  accentLine: string;
};

const inspirations: InspirationItem[] = [
  {
    title: "Dressing toute hauteur",
    description:
      "Une composition pensée pour exploiter toute la hauteur disponible et organiser vêtements, chaussures et accessoires.",
    imageSrc: placeholderImages.inspirationDressing.publicPath,
    imageAlt: placeholderImages.inspirationDressing.alt,
    accentLine: "Panneaux · profondeurs étudiées · rythme vertical",
  },
  {
    title: "Placard d’entrée intégré",
    description:
      "Une solution discrète pour structurer l’entrée, ranger manteaux, chaussures et objets du quotidien.",
    imageSrc: placeholderImages.inspirationPlacardEntree.publicPath,
    imageAlt: placeholderImages.inspirationPlacardEntree.alt,
    accentLine: "Façades sobres · volumes calés sur le passage",
  },
  {
    title: "Bibliothèque murale",
    description:
      "Un mur transformé en espace de rangement, de lecture et de décoration, avec niches ouvertes et fermées.",
    imageSrc: placeholderImages.inspirationBibliotheque.publicPath,
    imageAlt: placeholderImages.inspirationBibliotheque.alt,
    accentLine: "Ouvert & fermé · alternance de pleins et de vides",
  },
  {
    title: "Meuble TV avec rangements",
    description:
      "Un ensemble intégré pour dissimuler les câbles, organiser les équipements et équilibrer le salon.",
    imageSrc: placeholderImages.inspirationMeubleTv.publicPath,
    imageAlt: placeholderImages.inspirationMeubleTv.alt,
    accentLine: "Filière technique · lignée basse · équilibre du mur",
  },
  {
    title: "Cuisine sur mesure",
    description:
      "Une cuisine pensée pour gagner en rangement, structurer les volumes et créer un ensemble chaleureux, pratique et cohérent avec la pièce.",
    imageSrc: placeholderImages.inspirationCuisine.publicPath,
    imageAlt: placeholderImages.inspirationCuisine.alt,
    accentLine: "Rangements intégrés · colonnes · plan de travail",
  },
];

function InspirationFigure({
  item,
  layout,
}: {
  item: InspirationItem;
  layout: "wide" | "standard";
}) {
  const aspectClass =
    layout === "wide"
      ? "aspect-[16/11] sm:aspect-[16/10] lg:aspect-[21/9]"
      : "aspect-[4/5] sm:aspect-[3/4]";

  const sizes =
    layout === "wide"
      ? "(min-width: 1024px) min(1152px, 100vw), 100vw"
      : "(min-width: 1024px) min(576px, 50vw), 100vw";

  return (
    <figure
      data-inspiration-figure
      className={`relative overflow-hidden rounded-md border border-border bg-secondary/30 ${aspectClass}`}
    >
      <Image
        src={item.imageSrc}
        alt={item.imageAlt}
        fill
        sizes={sizes}
        className="object-cover object-center"
      />

      <div
        className="pointer-events-none absolute inset-0 z-1 bg-linear-to-t from-primary/35 via-secondary/15 to-background/25"
        aria-hidden
      />

      <span
        className="pointer-events-none absolute left-3 top-3 z-2 font-sans text-[10px] font-medium tabular-nums tracking-[0.22em] text-foreground/50 sm:left-4 sm:top-4"
        aria-hidden
      >
        —
      </span>
      <span
        className="pointer-events-none absolute bottom-10 left-3 z-2 h-8 w-px bg-border sm:left-4"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute bottom-10 left-3 z-2 h-px w-6 bg-border sm:left-4"
        aria-hidden
      />

      <figcaption
        data-inspiration-caption
        className="absolute inset-x-0 bottom-0 z-2 bg-linear-to-t from-primary/65 via-primary/20 to-transparent px-4 pb-4 pt-16 sm:px-5 sm:pb-5"
      >
        <p className="font-sans text-[10px] font-medium tracking-[0.14em] text-on-dark/90">
          Visuel d’inspiration
        </p>
        <p className="mt-1 font-sans text-[11px] leading-snug text-on-dark-muted/90">{item.accentLine}</p>
      </figcaption>
    </figure>
  );
}

export function InspirationsSection() {
  return (
    <section
      id="inspirations"
      aria-labelledby="inspirations-heading"
      className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
    >
      <div className="mx-auto max-w-6xl lg:px-2">
        <ScrollReveal className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
          <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
            Inspirations
          </p>
          <h2
            id="inspirations-heading"
            className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
          >
            Inspirations & solutions sur mesure
          </h2>
          <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-muted md:text-lg">
            {disclaimerParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-14 grid min-w-0 grid-cols-1 gap-8 sm:mt-16 lg:mt-20 lg:grid-cols-2 lg:gap-10">
          {inspirations.map((item, index) => {
            const layout = index === 0 ? "wide" : "standard";
            return (
              <InspirationReveal
                key={item.title}
                className={`min-w-0 ${layout === "wide" ? "lg:col-span-2" : ""}`}
              >
                <InspirationFigure item={item} layout={layout} />
                <div data-inspiration-copy className="mt-5 border-t border-border pt-5">
                  <h3 className="font-serif text-xl leading-snug text-foreground sm:text-[1.35rem]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-muted md:text-base">
                    {item.description}
                  </p>
                </div>
              </InspirationReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
