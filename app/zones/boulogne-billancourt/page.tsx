import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { ZoneBoulogneBillancourtFaqItem } from "@/components/seo/ZoneBoulogneBillancourtJsonLd";
import { ZoneBoulogneBillancourtJsonLd } from "@/components/seo/ZoneBoulogneBillancourtJsonLd";
import { SEO_SERVICE_PAGES, SEO_ZONE_PAGES } from "@/lib/constants/seo-pages";
import { siteConfig } from "@/lib/constants/site";

const zoneBoulogne = SEO_ZONE_PAGES.find((z) => z.slug === "boulogne-billancourt")!;
const zoneParis = SEO_ZONE_PAGES.find((z) => z.slug === "paris")!;
const zoneNeuilly = SEO_ZONE_PAGES.find((z) => z.slug === "neuilly-sur-seine")!;
const zoneLevallois = SEO_ZONE_PAGES.find((z) => z.slug === "levallois-perret")!;
const zoneIssy = SEO_ZONE_PAGES.find((z) => z.slug === "issy-les-moulineaux")!;
const zoneVincennes = SEO_ZONE_PAGES.find((z) => z.slug === "vincennes")!;

const PAGE_PATH = zoneBoulogne.canonicalPath;
const PAGE_TITLE_ABSOLUTE = zoneBoulogne.title;
const PAGE_DESCRIPTION = zoneBoulogne.metaDescription;

const ctaPrimaryClass =
  "inline-flex min-h-12 items-center justify-center rounded-sm bg-primary px-6 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-on-dark no-underline transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const ctaSecondaryClass =
  "inline-flex min-h-12 items-center justify-center rounded-sm border border-border bg-background px-6 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-foreground no-underline transition-colors hover:border-foreground/25 hover:bg-foreground/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/15 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const linkUnderline =
  "text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/35";

const HubLink = "/agencement-sur-mesure-ile-de-france";

const pageDressing = SEO_SERVICE_PAGES.find((p) => p.slug === "dressing-sur-mesure-paris")!;
const pagePlacard = SEO_SERVICE_PAGES.find((p) => p.slug === "placard-sur-mesure-paris")!;
const pageRangement = SEO_SERVICE_PAGES.find((p) => p.slug === "rangement-sur-mesure-paris")!;
const pageBibliotheque = SEO_SERVICE_PAGES.find((p) => p.slug === "bibliotheque-sur-mesure-paris")!;
const pageMeubleTv = SEO_SERVICE_PAGES.find((p) => p.slug === "meuble-tv-sur-mesure-paris")!;
const pageOptimisation = SEO_SERVICE_PAGES.find((p) => p.slug === "optimisation-petit-appartement-paris")!;

const servicesWithLinks: { title: string; href: string; intro: string }[] = [
  {
    title: "Dressing sur mesure à Paris",
    href: pageDressing.canonicalPath,
    intro:
      "Chambres et espaces dédiés : profondeur de penderie et modules fermés calés sur vos habitudes — applicable à Boulogne dès que les cotes et accès sont cadrés.",
  },
  {
    title: "Placard sur mesure à Paris",
    href: pagePlacard.canonicalPath,
    intro:
      "Entrée, dégagement ou renfoncement : un placard intégré reprend le linéaire du mur tout en gardant des ouvertures confortables pour la vie familiale.",
  },
  {
    title: "Rangement sur mesure à Paris",
    href: pageRangement.canonicalPath,
    intro:
      "Vision d’ensemble sur plusieurs pièces pour éviter l’effet « un meuble par problème » et garder des lignes de façade cohérentes.",
  },
  {
    title: "Bibliothèque sur mesure à Paris",
    href: pageBibliotheque.canonicalPath,
    intro:
      "Mur de lecture ou de vie : rythme entre niches, portes et étagères pour structurer un salon ou un bureau sans le surcharger.",
  },
  {
    title: "Meuble TV sur mesure à Paris",
    href: pageMeubleTv.canonicalPath,
    intro:
      "Point de convergence du salon : intégration du multimédia, passages discrets et volumes de rangement qui épousent le mur.",
  },
  {
    title: "Optimisation de petit appartement à Paris",
    href: pageOptimisation.canonicalPath,
    intro:
      "Lorsque la surface est contenue mais les usages multiples, un plan sur mesure clarifie circulation et stockage sans ajouter de mobilier rapporté inadapté.",
  },
];

const problemesFrequents: { title: string; description: string }[] = [
  {
    title: "Entrée qui manque de rangement",
    description:
      "Dès le seuil, vestes et chaussures demandent une profondeur et des portions ouvertes/fermées réfléchies — le sur-mesure évite le meuble qui bloque l’ouverture de la porte ou rétrécit visuellement le hall.",
  },
  {
    title: "Chambre avec placard insuffisant",
    description:
      "Un seul linéaire de placard ne suffit pas toujours aux familles : portes coulissantes, niche existante ou pièce attenante peuvent être réorganisés pour gagner du linéaire utile.",
  },
  {
    title: "Salon à structurer autour d’un meuble TV",
    description:
      "Sans parti clair, le mur télé devient un empilement de caissons et câbles visibles : une composition intégrée recentre le salon et libère le sol.",
  },
  {
    title: "Mur vide pouvant accueillir une bibliothèque",
    description:
      "Un grand linéaire nu appelle parfois une bibliothèque sur mesure pour équilibrer la pièce : livres rangés, objets mis en valeur, portions fermées pour le désordre du quotidien.",
  },
  {
    title: "Couloir ou dégagement mal exploité",
    description:
      "Les circulations secondaires accueillent souvent des rangements peu profonds mais très efficaces — à condition de caler portes, éclairage et réservations techniques.",
  },
  {
    title: "Besoin de rangements discrets pour un intérieur plus épuré",
    description:
      "Facades sans poignées apparentes, tons proches du mur ou modules encastrés : le discours est volontairement sobre pour laisser respirer l’espace.",
  },
];

const methodSteps: { title: string; description: string }[] = [
  {
    title: "Premier échange sur le projet",
    description:
      "Vous présentez le logement à Boulogne-Billancourt (ou secteur proche), les pièces visées et votre usage réel. Nous indiquons si la demande entre dans le périmètre atelier et comment poursuivre.",
  },
  {
    title: "Analyse de l’espace et des contraintes",
    description:
      "Typologie du bien, accès, réservations (électricité, plinthes, angles), style déjà en place : ces éléments orientent une proposition faisable, pas un simple croquis catalogue.",
  },
  {
    title: "Prise de mesures si le projet est retenu",
    description:
      "Les cotes fines sécurisent fabrication et pose. Cette étape arrive lorsque vous souhaitez aller vers une offre chiffrée et un planning réaliste.",
  },
  {
    title: "Proposition d’aménagement sur mesure",
    description:
      "Plans, matériaux, détail des ouvrages et devis : tout est validé avant lancement en atelier, avec possibilité d’ajuster le périmètre si le budget l’exige.",
  },
  {
    title: "Fabrication, pose et ajustements",
    description:
      "Après fabrication, l’équipe pose sur site, règle portes et façades, et termine les finitions de vision convenues avec vous.",
  },
];

const secteursProches = [
  "Boulogne Nord",
  "Boulogne Sud",
  "Billancourt",
  "Pont de Saint-Cloud",
  "Marcel Sembat",
  "Porte de Saint-Cloud",
  "Paris 16e",
  "Issy-les-Moulineaux",
  "Saint-Cloud",
  "Sèvres",
] as const;

const zoneBoulogneFaq = [
  {
    question: "Intervenez-vous à Boulogne-Billancourt ?",
    answer:
      "Oui, les projets situés à Boulogne-Billancourt peuvent être étudiés comme d’autres villes d’Île-de-France : la faisabilité dépend du contenu du chantier, des accès et des disponibilités atelier. Rien n’est promis « automatiquement » : après premier échange, nous confirmons si le déplacement et le calendrier sont cohérents avec votre demande.",
  },
  {
    question: "Pouvez-vous créer un dressing ou un placard sur mesure à Boulogne-Billancourt ?",
    answer:
      "Dressings et placards intégrés font partie du cœur métier. Les pages détaillées du site (libellées Paris car le référentiel technique est le même) expliquent les approches ; pour Boulogne, l’étude reprend vos cotes locales et la configuration du logement. Un devis personnalisé suit la description du besoin.",
  },
  {
    question: "Quels types de rangements réalisez-vous pour les appartements à Boulogne ?",
    answer:
      "Rangements intégrés, dressings, bibliothèques murales, meubles TV, combinaisons multi-usages et plans d’optimisation lorsque plusieurs pièces sont concernées. Selon votre dossier, une ou plusieurs prestations peuvent être regroupées dans une même commande atelier.",
  },
  {
    question: "Combien coûte un projet d’agencement sur mesure à Boulogne-Billancourt ?",
    answer:
      "Le budget varie avec la surface agencée, les matériaux, les finitions, le nombre d’éléments fabriqués, la complexité de pose et les contraintes du support mural. Sans relevé ou sans parti validé, fixer un prix serait peu sérieux. Après votre message via le formulaire d’accueil, une proposition chiffrée peut être établie ; vous restez libre d’arrêter là.",
  },
  {
    question: "Comment demander un devis pour un projet à Boulogne-Billancourt ?",
    answer:
      "Utilisez la section Devis sur la page d’accueil : indiquez la commune, le type de logement, les pièces concernées et, si possible, des dimensions ou photos. Atelier Guyonnet revient vers vous ; la confirmation éventuelle d’un passage à Boulogne a lieu après ce premier contact, pas avant.",
  },
] as const satisfies readonly ZoneBoulogneBillancourtFaqItem[];

export const metadata: Metadata = {
  title: {
    absolute: PAGE_TITLE_ABSOLUTE,
  },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: new URL(PAGE_PATH, siteConfig.url).toString(),
    siteName: siteConfig.name,
    title: PAGE_TITLE_ABSOLUTE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: siteConfig.defaultOgImage.path,
        width: siteConfig.defaultOgImage.width,
        height: siteConfig.defaultOgImage.height,
        alt: siteConfig.defaultOgImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE_ABSOLUTE,
    description: PAGE_DESCRIPTION,
    images: [siteConfig.defaultOgImage.path],
  },
};

export default function ZoneBoulogneBillancourtPage() {
  return (
    <>
      <ZoneBoulogneBillancourtJsonLd faqItems={zoneBoulogneFaq} />
      <Header />
      <main className="flex min-w-0 flex-1 flex-col">
        <section
          aria-labelledby="boul-hero-heading"
          className="border-b border-border bg-linear-to-b from-secondary/35 via-background to-background px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 md:px-10 lg:mx-auto lg:max-w-6xl lg:px-8"
        >
          <nav aria-label="Fil d’Ariane" className="mb-8 font-sans text-[11px] text-muted">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/" className={`${linkUnderline} text-foreground/80`}>
                  Accueil
                </Link>
              </li>
              <li aria-hidden className="text-muted">
                /
              </li>
              <li>
                <Link href={HubLink} className={`${linkUnderline} text-foreground/80`}>
                  Île-de-France
                </Link>
              </li>
              <li aria-hidden className="text-muted">
                /
              </li>
              <li className="text-foreground/90">Boulogne-Billancourt</li>
            </ol>
          </nav>

          <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
            <span className="rounded-sm border border-border bg-background/80 px-3 py-1.5">
              Boulogne-Billancourt
            </span>
          </p>
          <h1
            id="boul-hero-heading"
            className="mt-6 max-w-3xl font-serif text-3xl leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[2.5rem]"
          >
            {zoneBoulogne.h1}
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
            Atelier Guyonnet conçoit des aménagements sur mesure pour optimiser les intérieurs à Boulogne-Billancourt :
            dressings, placards intégrés, rangements, bibliothèques, meubles TV et solutions gain de place adaptées à
            chaque espace.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link href="/#devis" className={`${ctaPrimaryClass} justify-center sm:w-auto`}>
              Demander un devis
            </Link>
            <Link href="/#services" className={`${ctaSecondaryClass} justify-center sm:w-auto`}>
              Voir les services
            </Link>
          </div>
          <p className="mt-8 font-sans text-sm text-muted">
            <Link href={HubLink} className={linkUnderline}>
              Agencement sur mesure en Île-de-France
            </Link>
            {" · "}
            <Link href={zoneParis.canonicalPath} className={linkUnderline}>
              Page Paris intra-muros
            </Link>
            {" · "}
            <Link href={zoneNeuilly.canonicalPath} className={linkUnderline}>
              Neuilly-sur-Seine
            </Link>
            {" · "}
            <Link href={zoneLevallois.canonicalPath} className={linkUnderline}>
              Levallois-Perret
            </Link>
            {" · "}
            <Link href={zoneIssy.canonicalPath} className={linkUnderline}>
              Issy-les-Moulineaux
            </Link>
            {" · "}
            <Link href={zoneVincennes.canonicalPath} className={linkUnderline}>
              Vincennes
            </Link>
            .
          </p>
        </section>

        <section
          aria-labelledby="boul-why-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-3xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
                Hauts-de-Seine
              </p>
              <h2
                id="boul-why-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Des intérieurs à optimiser entre confort, rangement et élégance
              </h2>
              <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                <p>
                  Boulogne-Billancourt mêle programmes récents, immeubles de caractère et maisons de ville : les
                  attentes vont souvent vers des pièces de vie claires, des chambres bien rangées et des entrées
                  fonctionnelles pour toute la famille.
                </p>
                <p>
                  Le <strong className="font-medium text-foreground">sur-mesure</strong> sert ici à aligner surfaces,
                  circulation et esthétique : un linéaire de placard prend la bonne profondeur, une bibliothèque calée sur
                  le mur évite l’effet « meuble flottant », un meuble TV regroupe techniques et rangements sans disperser
                  le regard.
                </p>
                <p>
                  Atelier Guyonnet travaille comme{" "}
                  <strong className="font-medium text-foreground">menuisier d’agencement</strong> : étude, choix de
                  matériaux, fabrication et pose. Pas de promesse irréaliste sur les délais ou les prix sans cahier des
                  charges, et pas de portfolio factice pour illustrer la page.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="boul-problems-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-2xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
                Constat
              </p>
              <h2
                id="boul-problems-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Problèmes fréquents dans les logements de Boulogne-Billancourt
              </h2>
              <p className="mt-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                Exemples recoupés en phase d’étude — votre projet reste unique.
              </p>
            </div>
            <ul className="mt-14 grid list-none gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
              {problemesFrequents.map((item) => (
                <li key={item.title} className="min-w-0">
                  <article className="flex h-full flex-col rounded-md border border-border bg-background p-6 sm:p-7">
                    <h3 className="font-serif text-xl leading-snug text-foreground">{item.title}</h3>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-muted md:text-[15px]">
                      {item.description}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="boul-services-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">Prestations</p>
            <h2
              id="boul-services-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Services disponibles à Boulogne-Billancourt
            </h2>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
              Les fiches ci-dessous sont rédigées autour d’exemples parisiens mais décrivent les mêmes savoir-faire —
              elles s’appliquent à Boulogne-Billancourt lorsque les mesures et contraintes du logement sont intégrées au
              dossier.
            </p>
            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted md:text-[15px]">
              <strong className="font-medium text-foreground">
                Ces prestations peuvent être étudiées pour un projet à Boulogne-Billancourt
              </strong>{" "}
              selon la configuration du logement, les accès et le calendrier atelier — sans création d’URL « Boulogne »
              distinctes pour chaque type de meuble.
            </p>
            <ul className="mt-14 grid list-none gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
              {servicesWithLinks.map((item) => (
                <li key={item.href} className="min-w-0">
                  <article className="flex h-full flex-col rounded-md border border-border bg-secondary/10 p-6 sm:p-7">
                    <h3 className="font-serif text-xl leading-snug text-foreground">
                      <Link
                        href={item.href}
                        className="text-foreground no-underline transition-colors hover:underline hover:decoration-foreground/35 hover:underline-offset-4"
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <p className="mt-3 grow font-sans text-sm leading-relaxed text-muted md:text-[15px]">
                      {item.intro}
                    </p>
                    <p className="mt-6 border-t border-border pt-4">
                      <Link href={item.href} className={`${linkUnderline} font-sans text-sm font-medium`}>
                        Lire la fiche
                      </Link>
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="boul-nearby-heading"
          className="border-t border-border bg-secondary/10 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">Quartiers</p>
            <h2
              id="boul-nearby-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Boulogne-Billancourt et secteurs proches
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 font-sans text-base leading-relaxed text-muted md:text-lg">
              <p>
                Atelier Guyonnet étudie les demandes à Boulogne-Billancourt et dans les zones proches selon la nature du
                projet, l’accessibilité, les disponibilités de l’atelier et les informations transmises lors du premier
                échange. Les repères ci-dessous aident à situer le chantier dans la conversation initiale — sans liste
                contraignante de rues ou d’immeubles.
              </p>
              <p className="rounded-md border border-border bg-background p-4 font-sans text-sm leading-relaxed text-muted md:text-[15px]">
                Les déplacements sont confirmés après un premier échange, selon la localisation et la nature du projet.
              </p>
            </div>
            <ul className="mt-10 flex list-none flex-wrap gap-2">
              {secteursProches.map((label) => (
                <li key={label}>
                  <span className="inline-block rounded-sm border border-border bg-background px-3 py-1.5 font-sans text-xs text-foreground/90 md:text-[13px]">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="boul-method-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">Déroulé</p>
            <h2
              id="boul-method-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Méthode de travail locale
            </h2>
            <ol className="relative mt-12 space-y-8 border-l border-border pl-8 sm:mt-14 lg:max-w-2xl">
              {methodSteps.map((step, index) => (
                <li key={step.title} className="relative">
                  <span
                    className="absolute -left-8 top-0.5 flex w-6 -translate-x-px justify-center font-sans text-[11px] font-medium tabular-nums text-muted"
                    aria-hidden
                  >
                    {index + 1}.
                  </span>
                  <h3 className="font-serif text-lg leading-snug text-foreground sm:text-xl">{step.title}</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-muted md:text-base">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          aria-labelledby="boul-faq-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">FAQ</p>
            <h2
              id="boul-faq-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Questions fréquentes — Boulogne-Billancourt
            </h2>
            <ul className="mx-auto mt-12 max-w-3xl list-none space-y-3 lg:mx-0">
              {zoneBoulogneFaq.map((item) => (
                <li key={item.question} className="min-w-0">
                  <details className="group rounded-md border border-border bg-background p-4 sm:p-5 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="cursor-pointer list-none font-sans text-sm font-medium text-foreground outline-none after:ml-2 after:inline-block after:transition-transform after:content-['+'] group-open:after:rotate-45 sm:text-base">
                      {item.question}
                    </summary>
                    <p className="mt-3 border-t border-border pt-3 font-sans text-sm leading-relaxed text-muted sm:text-[15px]">
                      {item.answer}
                    </p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="boul-useful-heading"
          className="border-t border-border bg-background px-4 py-16 sm:px-6 md:py-20 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <h2
              id="boul-useful-heading"
              className="font-serif text-xl tracking-tight text-foreground sm:text-2xl"
            >
              Services utiles
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted md:text-base">
              Accès aux pages détaillées (référentiel technique commun à l’ensemble des projets franciliens) :
            </p>
            <ul className="mt-8 grid list-none gap-2 sm:grid-cols-2 lg:max-w-3xl">
              {servicesWithLinks.map((item) => (
                <li key={`${item.href}-useful`}>
                  <Link href={item.href} className={`${linkUnderline} font-sans text-sm md:text-[15px]`}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-sans text-sm text-muted">
              <Link href="/" className={linkUnderline}>
                Accueil
              </Link>
              {" · "}
              <Link href={HubLink} className={linkUnderline}>
                Agencement Île-de-France
              </Link>
              {" · "}
              <Link href={zoneParis.canonicalPath} className={linkUnderline}>
                Zone Paris
              </Link>
              {" · "}
              <Link href={zoneNeuilly.canonicalPath} className={linkUnderline}>
                Zone Neuilly-sur-Seine
              </Link>
              {" · "}
              <Link href={zoneLevallois.canonicalPath} className={linkUnderline}>
                Zone Levallois-Perret
              </Link>
              {" · "}
              <Link href={zoneIssy.canonicalPath} className={linkUnderline}>
                Zone Issy-les-Moulineaux
              </Link>
              {" · "}
              <Link href={zoneVincennes.canonicalPath} className={linkUnderline}>
                Zone Vincennes
              </Link>
              {" · "}
              <Link href="/#services" className={linkUnderline}>
                Aperçu des services
              </Link>
              {" · "}
              <Link href="/#devis" className={linkUnderline}>
                Demande de devis
              </Link>
            </p>
          </div>
        </section>

        <section
          aria-labelledby="boul-cta-heading"
          className="border-t border-border bg-secondary/10 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl text-center lg:px-2 lg:text-left">
            <h2
              id="boul-cta-heading"
              className="font-serif text-2xl tracking-tight text-foreground sm:text-3xl"
            >
              Un projet à Boulogne-Billancourt ?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted lg:mx-0 md:text-lg">
              Le formulaire sur l’accueil permet de décrire votre logement et de demander un retour : c’est l’étape la
              plus simple pour engager un premier échange honnête sur faisabilité, délais et devis — sans prix inventé
              dans une page web.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start lg:gap-4">
              <Link href="/#devis" className={`${ctaPrimaryClass} w-full min-w-[200px] sm:w-auto`}>
                Demander un devis
              </Link>
              <Link href="/#services" className={`${ctaSecondaryClass} w-full min-w-[200px] sm:w-auto`}>
                Voir les services
              </Link>
            </div>
            <p className="mx-auto mt-10 max-w-2xl font-sans text-sm leading-relaxed text-muted lg:mx-0">
              <Link href="/" className={linkUnderline}>
                Accueil
              </Link>
              {" · "}
              <Link href={HubLink} className={linkUnderline}>
                IdF
              </Link>
              {" · "}
              <Link href={zoneParis.canonicalPath} className={linkUnderline}>
                Paris
              </Link>
              {" · "}
              <Link href={zoneNeuilly.canonicalPath} className={linkUnderline}>
                Neuilly
              </Link>
              {" · "}
              <Link href={zoneLevallois.canonicalPath} className={linkUnderline}>
                Levallois
              </Link>
              {" · "}
              <Link href={zoneIssy.canonicalPath} className={linkUnderline}>
                Issy
              </Link>
              {" · "}
              <Link href={zoneVincennes.canonicalPath} className={linkUnderline}>
                Vincennes
              </Link>
              {" · "}
              <Link href={pageDressing.canonicalPath} className={linkUnderline}>
                Dressing
              </Link>
              {" · "}
              <Link href={pagePlacard.canonicalPath} className={linkUnderline}>
                Placard
              </Link>
              {" · "}
              <Link href={pageRangement.canonicalPath} className={linkUnderline}>
                Rangement
              </Link>
              {" · "}
              <Link href={pageBibliotheque.canonicalPath} className={linkUnderline}>
                Bibliothèque
              </Link>
              {" · "}
              <Link href={pageMeubleTv.canonicalPath} className={linkUnderline}>
                Meuble TV
              </Link>
              {" · "}
              <Link href={pageOptimisation.canonicalPath} className={linkUnderline}>
                Optimisation petit appartement
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
