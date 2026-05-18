import Link from "next/link";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerReveal } from "@/components/motion/StaggerReveal";
import { SEO_SERVICE_PAGES, SEO_ZONE_PAGES } from "@/lib/constants/seo-pages";

type ServiceItem = {
  title: string;
  description: string;
  benefit: string;
  href?: string;
  tier: "featured" | "secondary";
};

const services: ServiceItem[] = [
  {
    title: "Dressing sur mesure",
    description:
      "Un rangement pensé pour vos vêtements, vos habitudes et les dimensions exactes de votre pièce.",
    benefit: "Une garde-robe lisible, des volumes calés sur votre quotidien et des finitions nettes.",
    href: "/dressing-sur-mesure-paris",
    tier: "featured",
  },
  {
    title: "Placard intégré",
    description:
      "Transformez une entrée, un couloir ou un renfoncement en rangement propre, discret et parfaitement adapté.",
    benefit: "Un volume utile qui se fond dans l’architecture de votre appartement, sans effet « bloc ».",
    href: "/placard-sur-mesure-paris",
    tier: "featured",
  },
  {
    title: "Rangement sur mesure",
    description:
      "Des linéaires intégrés pour structurer entrées, chambres, salons et recoins — ouvert, fermé ou mixte selon vos usages.",
    benefit: "Chaque mètre linéaire travaillé pour éviter l’empilement de modules inadaptés.",
    href: "/rangement-sur-mesure-paris",
    tier: "secondary",
  },
  {
    title: "Bibliothèque murale",
    description:
      "Un mur optimisé pour accueillir livres, objets, rangements fermés et décoration avec élégance.",
    benefit: "Un ensemble cohérent qui structure la pièce tout en gardant une ligne visuelle sobre.",
    href: "/bibliotheque-sur-mesure-paris",
    tier: "secondary",
  },
  {
    title: "Meuble TV avec rangements",
    description:
      "Une solution intégrée pour organiser les câbles, les équipements et les rangements du salon.",
    benefit: "Un salon plus apaisé : l’essentiel est accessible, le reste disparaît proprement.",
    href: "/meuble-tv-sur-mesure-paris",
    tier: "secondary",
  },
  {
    title: "Cuisine sur mesure",
    description:
      "Des meubles de cuisine pensés pour optimiser les rangements, intégrer les colonnes, structurer le plan de travail et créer un ensemble cohérent avec votre intérieur.",
    benefit:
      "Une cuisine plus fonctionnelle, mieux rangée et adaptée aux dimensions réelles de votre espace.",
    href: "/cuisine-sur-mesure-paris",
    tier: "secondary",
  },
  {
    title: "Optimisation petit appartement",
    description:
      "Des solutions compactes pour structurer un petit appartement et gagner de la place au quotidien.",
    benefit: "Un agencement qui clarifie les fonctions — dormir, recevoir, travailler — dans un même volume.",
    href: "/optimisation-petit-appartement-paris",
    tier: "secondary",
  },
];

const featuredServices = services.filter((item) => item.tier === "featured");
const secondaryServices = services.filter((item) => item.tier === "secondary");

const linkClass =
  "font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/40";

const pageLinkClass =
  "font-sans text-xs font-medium uppercase tracking-[0.16em] text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/35";

const pageDressing = SEO_SERVICE_PAGES.find((p) => p.slug === "dressing-sur-mesure-paris")!;
const pagePlacard = SEO_SERVICE_PAGES.find((p) => p.slug === "placard-sur-mesure-paris")!;
const pageRangement = SEO_SERVICE_PAGES.find((p) => p.slug === "rangement-sur-mesure-paris")!;
const pageBibliotheque = SEO_SERVICE_PAGES.find((p) => p.slug === "bibliotheque-sur-mesure-paris")!;
const pageMeubleTv = SEO_SERVICE_PAGES.find((p) => p.slug === "meuble-tv-sur-mesure-paris")!;
const pageOptimisation = SEO_SERVICE_PAGES.find((p) => p.slug === "optimisation-petit-appartement-paris")!;
const pageCuisine = SEO_SERVICE_PAGES.find((p) => p.slug === "cuisine-sur-mesure-paris")!;
const pageAgencementIdf = SEO_SERVICE_PAGES.find((p) => p.slug === "agencement-sur-mesure-ile-de-france")!;

const localZoneSlugs = [
  "paris",
  "boulogne-billancourt",
  "neuilly-sur-seine",
  "levallois-perret",
  "issy-les-moulineaux",
  "vincennes",
] as const;

const localZonePages = localZoneSlugs.map(
  (slug) => SEO_ZONE_PAGES.find((page) => page.slug === slug)!,
);

function ServiceCard({
  item,
  index,
  variant,
}: {
  item: ServiceItem;
  index: number;
  variant: "featured" | "secondary" | "scroll";
}) {
  const numberLabel = String(index + 1).padStart(2, "0");
  const isFeatured = variant === "featured" || (variant === "scroll" && item.tier === "featured");

  const titleClass = isFeatured
    ? "font-serif text-2xl leading-snug text-foreground sm:text-[1.65rem]"
    : "font-serif text-xl leading-snug text-foreground sm:text-[1.35rem]";

  const paddingClass = isFeatured ? "p-7 sm:p-8 lg:p-9" : "p-6 sm:p-7";

  return (
    <article
      className={`flex h-full flex-col rounded-md border border-border bg-background transition-colors duration-200 hover:border-foreground/15 ${paddingClass} ${
        isFeatured ? "lg:min-h-[320px]" : ""
      }`}
    >
      <p className="font-sans text-[11px] font-medium tabular-nums tracking-[0.24em] text-muted">
        {numberLabel}
      </p>
      <h3 className={`mt-4 ${titleClass}`}>
        {item.href ? (
          <Link
            href={item.href}
            className="text-foreground no-underline transition-colors hover:underline hover:decoration-foreground/35 hover:underline-offset-4"
          >
            {item.title}
          </Link>
        ) : (
          item.title
        )}
      </h3>
      <p className="mt-3 font-sans text-sm leading-relaxed text-muted md:text-base">
        {item.description}
      </p>
      <p className="mt-auto border-t border-border pt-4 font-sans text-sm leading-relaxed text-foreground/95">
        <span className="mb-1 block text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
          Pour vous
        </span>
        {item.benefit}
      </p>
      {item.href ? (
        <p className="mt-5">
          <Link href={item.href} className={pageLinkClass}>
            Voir la page
          </Link>
        </p>
      ) : null}
    </article>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-t border-border bg-secondary/25 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
    >
      <div className="mx-auto max-w-6xl lg:px-2">
        <ScrollReveal className="max-w-2xl">
          <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
            Offre
          </p>
          <h2
            id="services-heading"
            className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
          >
            Nos solutions sur mesure
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-muted md:text-lg">
            Des réponses sobres et durables pour les petits espaces : chaque projet fait l’objet
            d’une étude et d’une fabrication adaptée à votre pièce — pas à un module catalogue.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-10 max-w-2xl font-sans text-sm leading-relaxed text-muted md:text-base">
          Pages dédiées :{" "}
          <Link href={pageDressing.canonicalPath} className={linkClass}>
            Dressing sur mesure à Paris
          </Link>
          ,{" "}
          <Link href={pagePlacard.canonicalPath} className={linkClass}>
            Placard sur mesure à Paris
          </Link>
          ,{" "}
          <Link href={pageRangement.canonicalPath} className={linkClass}>
            Rangement sur mesure à Paris
          </Link>
          ,{" "}
          <Link href={pageBibliotheque.canonicalPath} className={linkClass}>
            Bibliothèque sur mesure à Paris
          </Link>
          ,{" "}
          <Link href={pageMeubleTv.canonicalPath} className={linkClass}>
            Meuble TV sur mesure à Paris
          </Link>
          ,{" "}
          <Link href={pageOptimisation.canonicalPath} className={linkClass}>
            Optimisation petit appartement à Paris
          </Link>
          ,{" "}
          <Link href={pageCuisine.canonicalPath} className={linkClass}>
            Cuisine sur mesure à Paris
          </Link>
          . Vue d’ensemble régionale :{" "}
          <Link href={pageAgencementIdf.canonicalPath} className={linkClass}>
            agencement sur mesure en Île-de-France
          </Link>
          . Pages locales :{" "}
          {localZonePages.map((zone, index) => (
            <span key={zone.slug}>
              {index > 0 && (index === localZonePages.length - 1 ? " et " : ", ")}
              <Link href={zone.canonicalPath} className={linkClass}>
                {zone.cityName}
              </Link>
            </span>
          ))}
          . Pour un premier échange, utilisez le{" "}
          <Link href="#devis" className={linkClass}>
            formulaire de devis
          </Link>
          .
        </ScrollReveal>

        {/* Mobile — scroll horizontal natif */}
        <div className="mt-14 lg:hidden">
          <p className="mb-4 font-sans text-[11px] font-light uppercase tracking-[0.22em] text-muted">
            Parcourir les solutions
          </p>
          <StaggerReveal
            as="ul"
            className="-mx-4 flex list-none snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-3 scrollbar-none [&::-webkit-scrollbar]:hidden"
            aria-label="Solutions sur mesure"
            stagger={0.08}
          >
            {services.map((item, index) => (
              <li
                key={item.title}
                data-motion-item
                className="w-[min(88vw,22rem)] shrink-0 snap-start sm:w-[min(72vw,24rem)]"
              >
                <ServiceCard item={item} index={index} variant="scroll" />
              </li>
            ))}
          </StaggerReveal>
        </div>

        {/* Desktop — hiérarchie éditoriale */}
        <div className="mt-14 hidden lg:block lg:mt-20">
          <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
            Solutions principales
          </p>
          <StaggerReveal as="ul" className="mt-8 grid list-none grid-cols-2 gap-6" stagger={0.12}>
            {featuredServices.map((item) => {
              const index = services.findIndex((s) => s.title === item.title);
              return (
                <li key={item.title} data-motion-item className="min-w-0">
                  <ServiceCard item={item} index={index} variant="featured" />
                </li>
              );
            })}
          </StaggerReveal>

          <div className="mt-16 border-t border-border pt-14">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Autres aménagements
            </p>
            <StaggerReveal
              as="ul"
              className="mt-8 grid list-none grid-cols-2 gap-5 xl:grid-cols-3"
              stagger={0.08}
            >
              {secondaryServices.map((item) => {
                const index = services.findIndex((s) => s.title === item.title);
                return (
                  <li key={item.title} data-motion-item className="min-w-0">
                    <ServiceCard item={item} index={index} variant="secondary" />
                  </li>
                );
              })}
            </StaggerReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
