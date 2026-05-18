import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { ZoneNeuillySurSeineFaqItem } from "@/components/seo/ZoneNeuillySurSeineJsonLd";
import { ZoneNeuillySurSeineJsonLd } from "@/components/seo/ZoneNeuillySurSeineJsonLd";
import { SEO_SERVICE_PAGES, SEO_ZONE_PAGES } from "@/lib/constants/seo-pages";
import { siteConfig } from "@/lib/constants/site";

const zoneNeuilly = SEO_ZONE_PAGES.find((z) => z.slug === "neuilly-sur-seine")!;
const zoneLevallois = SEO_ZONE_PAGES.find((z) => z.slug === "levallois-perret")!;
const zoneIssy = SEO_ZONE_PAGES.find((z) => z.slug === "issy-les-moulineaux")!;
const zoneVincennes = SEO_ZONE_PAGES.find((z) => z.slug === "vincennes")!;
const zoneParis = SEO_ZONE_PAGES.find((z) => z.slug === "paris")!;
const zoneBoulogne = SEO_ZONE_PAGES.find((z) => z.slug === "boulogne-billancourt")!;

const PAGE_PATH = zoneNeuilly.canonicalPath;
const PAGE_TITLE_ABSOLUTE = zoneNeuilly.title;
const PAGE_DESCRIPTION = zoneNeuilly.metaDescription;

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
      "Penderie et modules fermés calés sur la niche ou la pièce : des portes pleines ou vitrées peuvent préserver la sensation d’espace dans une chambre déjà soignée.",
  },
  {
    title: "Placard sur mesure à Paris",
    href: pagePlacard.canonicalPath,
    intro:
      "Hall d’entrée ou dégagement : un placard intégré reprend le même vocabulaire de façade que le reste du logement pour ne pas casser la continuité visuelle.",
  },
  {
    title: "Rangement sur mesure à Paris",
    href: pageRangement.canonicalPath,
    intro:
      "Quand plusieurs pièces manquent de linéaire, une lecture globale évite d’empiler des meubles aux finitions hétérogènes.",
  },
  {
    title: "Bibliothèque sur mesure à Paris",
    href: pageBibliotheque.canonicalPath,
    intro:
      "Mur structuré pour livres, objets et caissons fermés : le rythme des tablettes et des portes reste discret, lisible de près comme de loin.",
  },
  {
    title: "Meuble TV sur mesure à Paris",
    href: pageMeubleTv.canonicalPath,
    intro:
      "Salon : intégration du multimédia avec lignes sobres, passages techniques prévus et rangements qui ne concurrencent pas la lumière de la pièce.",
  },
  {
    title: "Optimisation de petit appartement à Paris",
    href: pageOptimisation.canonicalPath,
    intro:
      "Pour un pied-à-terre ou une surface contenu, le sur-mesure clarifie les fonctions sans encombrer visuellement l’ensemble.",
  },
];

const problemesFrequents: { title: string; description: string }[] = [
  {
    title: "Dressing ou placard à intégrer sans alourdir la chambre",
    description:
      "On souhaite du rangement tout en gardant une chambre aérée : profondeurs modérées, portes dans le ton des murs ou du parquet, poignées discrètes pour ne pas « charger » la perception de la pièce.",
  },
  {
    title: "Entrée à rendre plus fonctionnelle",
    description:
      "Vestes, chaussures et courrier demandent un premier meuble lisible ; le sur-mesure équilibre ouvert et fermé pour que l’espace d’accueil reste élégant dès la porte.",
  },
  {
    title: "Salon à structurer avec un meuble TV ou une bibliothèque",
    description:
      "Un seul linéaire peut accueillir média, livres et niches décoratives avec un dessin continu — plutôt qu’une juxtaposition de meubles de séries différentes.",
  },
  {
    title: "Bureau ou pièce secondaire à optimiser",
    description:
      "Télétravail ou espace lecteur : rangements hauts, plan de travail intégré ou bibliothèque-bureau composée pour garder une pièce calme et ordonnée.",
  },
  {
    title: "Besoin de rangements fermés et discrets",
    description:
      "L’objectif est d’effacer le bruit visuel : portes sans surépaisseur apparente, teintes proches des murs, joints de façade soignés après pose.",
  },
  {
    title: "Mobilier standard qui ne s’adapte ni aux dimensions ni aux finitions",
    description:
      "Écart au plafond, angles non droits ou envie de qualité de détail : le catalogue générique laisse trop souvent des compromis visibles une fois en place.",
  },
];

const methodSteps: { title: string; description: string }[] = [
  {
    title: "Premier échange sur le projet",
    description:
      "Vous présentez votre logement à Neuilly (ou secteur proche), les pièces concernées et le niveau de finition attendu. Nous indiquons si la demande correspond au périmètre atelier et comment avancer sans engagement.",
  },
  {
    title: "Analyse de l’espace, du style et des contraintes",
    description:
      "Ambiance déjà présente (matériaux, couleurs, luminaires), circulation, équipements encastrés et zones à préserver : le parti architectural s’aligne sur votre intérieur actuel plutôt que sur une tendance générique.",
  },
  {
    title: "Prise de mesures si le projet est retenu",
    description:
      "Relevé précis des cotes et des niveaux : indispensable avant tout devis sérieux et avant lancement des panneaux en atelier.",
  },
  {
    title: "Proposition d’aménagement sur mesure",
    description:
      "Plans, choix de matériaux et de quincaillerie, devis détaillé : validation commune avant fabrication ; possibilité d’ajuster le périmètre selon votre budget.",
  },
  {
    title: "Fabrication, pose et ajustements",
    description:
      "Après fabrication, pose sur site, réglage des portes et tiroirs, finitions de vision : l’objectif est une intégration nette, sans jeu voyant ni raccords négligés.",
  },
];

const secteursProches = [
  "Sablons",
  "Pont de Neuilly",
  "Bagatelle",
  "Saussaye",
  "Île de la Jatte",
  "Porte Maillot",
  "Paris 16e",
  "Levallois-Perret",
  "Courbevoie",
  "Puteaux",
] as const;

const zoneNeuillyFaq = [
  {
    question: "Intervenez-vous à Neuilly-sur-Seine ?",
    answer:
      "Les dossiers situés à Neuilly peuvent être étudiés comme ceux d’autres communes franciliennes. La suite dépend du contenu du projet, des accès et du planning atelier : rien n’est garanti sans premier échange. Les modalités de déplacement éventuel sont précisées après ce contact, pas avant.",
  },
  {
    question: "Pouvez-vous créer un dressing ou une bibliothèque sur mesure à Neuilly ?",
    answer:
      "Oui — dressings, bibliothèques murales et combinaisons avec rangements fermés font partie des réalisations courantes. Les pages détaillées du site restent libellées « Paris » car elles décrivent les mêmes familles de prestations ; pour Neuilly, l’étude reprend vos mesures et le style de votre intérieur. Un devis personnalisé suit la description du besoin.",
  },
  {
    question: "Quels types d’aménagements réalisez-vous pour les appartements à Neuilly-sur-Seine ?",
    answer:
      "Placards et dressings intégrés, bibliothèques, meubles TV muraux, rangements sur mesure et scénarios d’optimisation lorsque plusieurs pièces sont concernées. Selon votre brief, une ou plusieurs de ces briques peuvent composer un même chantier avec un seul interlocuteur atelier.",
  },
  {
    question: "Combien coûte un projet d’agencement sur mesure à Neuilly-sur-Seine ?",
    answer:
      "Le montant dépend des linéaires fabriqués, des matériaux, des finitions, du temps de pose et des contraintes techniques (murs, intégrations, reprises). Sans relevé et sans parti validé, annoncer un chiffre fixe serait peu honnête. Après votre message via le formulaire de l’accueil, une proposition chiffrée peut être préparée ; vous décidez ensuite de la suite.",
  },
  {
    question: "Comment demander un devis pour un projet à Neuilly-sur-Seine ?",
    answer:
      "Rendez-vous sur la page d’accueil, rubrique Devis : indiquez Neuilly comme commune, décrivez les pièces et joignez si possible photos ou dimensions. Atelier Guyonnet revient vers vous pour la phase suivante ; la confirmation éventuelle d’un passage sur place intervient après cet échange initial.",
  },
] as const satisfies readonly ZoneNeuillySurSeineFaqItem[];

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

export default function ZoneNeuillySurSeinePage() {
  return (
    <>
      <ZoneNeuillySurSeineJsonLd faqItems={zoneNeuillyFaq} />
      <Header />
      <main className="flex min-w-0 flex-1 flex-col">
        <section
          aria-labelledby="neuilly-hero-heading"
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
              <li className="text-foreground/90">Neuilly-sur-Seine</li>
            </ol>
          </nav>

          <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
            <span className="rounded-sm border border-border bg-background/80 px-3 py-1.5">
              Neuilly-sur-Seine
            </span>
          </p>
          <h1
            id="neuilly-hero-heading"
            className="mt-6 max-w-3xl font-serif text-3xl leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[2.5rem]"
          >
            {zoneNeuilly.h1}
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
            Atelier Guyonnet conçoit des aménagements sur mesure pour optimiser les intérieurs à Neuilly-sur-Seine :
            dressings, placards intégrés, rangements, bibliothèques, meubles TV et solutions gain de place pensées avec
            soin.
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
              Vue Île-de-France
            </Link>
            {" · "}
            <Link href={zoneParis.canonicalPath} className={linkUnderline}>
              Paris intra-muros
            </Link>
            {" · "}
            <Link href={zoneBoulogne.canonicalPath} className={linkUnderline}>
              Boulogne-Billancourt
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
          aria-labelledby="neuilly-why-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-3xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
                Hauts-de-Seine
              </p>
              <h2
                id="neuilly-why-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Des aménagements discrets pour des intérieurs soignés
              </h2>
              <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                <p>
                  À Neuilly-sur-Seine, les projets d’intérieur associent souvent exigence de rangement et recherche
                  d’élégance : un dressing bien intégré, une bibliothèque murale calée au millimètre, un meuble TV aux
                  lignes sobres ou une entrée clarifiée par un placard sur mesure. Le défi est d’être utile sans bruyance
                  visuelle.
                </p>
                <p>
                  Le <strong className="font-medium text-foreground">sur-mesure</strong> permet d’ajuster chaque élément
                  aux dimensions réelles du logement, au style déjà en place (bois, laque mate, façades sans poignée…) et
                  aux usages du foyer — chambres, salons, bureaux ou espaces de transition. L’ambition reste artisanale :
                  assemblages propres, intégration discrète, pas d’effet « meuble ajouté » mal calé.
                </p>
                <p>
                  Atelier Guyonnet ne surcharge pas ses promesses : pas de galerie de chantiers inventée, pas de prix
                  annoncé sans cahier des charges. L’étape de contact sur l’accueil ouvre un dialogue factuel sur la
                  faisabilité et le budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="neuilly-problems-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-2xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">Situations</p>
              <h2
                id="neuilly-problems-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Problèmes fréquents dans les intérieurs de Neuilly
              </h2>
              <p className="mt-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                Exemples croisés lors d’études — votre configuration reste propre à votre logement.
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
          aria-labelledby="neuilly-services-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">Prestations</p>
            <h2
              id="neuilly-services-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Services disponibles à Neuilly-sur-Seine
            </h2>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
              Les fiches détaillées ci-dessous utilisent le référentiel Paris comme base technique ; elles décrivent des
              prestations réellement réalisables sur l’ensemble de l’Île-de-France lorsque le dossier est complet.
            </p>
            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted md:text-[15px]">
              <strong className="font-medium text-foreground">
                Ces prestations peuvent être étudiées pour un projet à Neuilly-sur-Seine
              </strong>{" "}
              selon la configuration du logement, la nature du besoin et les disponibilités de l’atelier.
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
                        Ouvrir la fiche
                      </Link>
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="neuilly-nearby-heading"
          className="border-t border-border bg-secondary/10 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">Proximité</p>
            <h2
              id="neuilly-nearby-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Neuilly-sur-Seine et secteurs proches
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 font-sans text-base leading-relaxed text-muted md:text-lg">
              <p>
                Atelier Guyonnet étudie les demandes à Neuilly-sur-Seine et dans les zones proches selon la nature du
                projet, l’accessibilité, les disponibilités de l’atelier et les informations transmises lors du premier
                échange. Les repères ci-dessous servent de vocabulaire commun dans votre message initial.
              </p>
              <p className="rounded-md border border-border bg-background p-4 font-sans text-sm leading-relaxed text-muted md:text-[15px]">
                Les déplacements sont confirmés après un premier échange selon la localisation et la nature du projet.
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
          aria-labelledby="neuilly-method-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">Déroulé</p>
            <h2
              id="neuilly-method-heading"
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
          aria-labelledby="neuilly-faq-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">FAQ</p>
            <h2
              id="neuilly-faq-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Questions fréquentes — Neuilly-sur-Seine
            </h2>
            <ul className="mx-auto mt-12 max-w-3xl list-none space-y-3 lg:mx-0">
              {zoneNeuillyFaq.map((item) => (
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
          aria-labelledby="neuilly-useful-heading"
          className="border-t border-border bg-background px-4 py-16 sm:px-6 md:py-20 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <h2
              id="neuilly-useful-heading"
              className="font-serif text-xl tracking-tight text-foreground sm:text-2xl"
            >
              Services utiles
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted md:text-base">
              Fiches techniques détaillées (même savoir-faire applicable sur Neuilly une fois le relevé validé) :
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
              <Link href={zoneBoulogne.canonicalPath} className={linkUnderline}>
                Zone Boulogne-Billancourt
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
          aria-labelledby="neuilly-cta-heading"
          className="border-t border-border bg-secondary/10 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl text-center lg:px-2 lg:text-left">
            <h2
              id="neuilly-cta-heading"
              className="font-serif text-2xl tracking-tight text-foreground sm:text-3xl"
            >
              Un projet à Neuilly-sur-Seine ?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted lg:mx-0 md:text-lg">
              Le formulaire sur la page d’accueil reste le passage le plus simple pour décrire votre intérieur et
              solliciter un retour : de là découlent précisions, éventuel complément d’information et, le cas échéant,
              proposition chiffrée — sans engagement ni tarif fictif affiché en ligne.
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
              <Link href={zoneBoulogne.canonicalPath} className={linkUnderline}>
                Boulogne
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
