import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { ZoneVincennesFaqItem } from "@/components/seo/ZoneVincennesJsonLd";
import { ZoneVincennesJsonLd } from "@/components/seo/ZoneVincennesJsonLd";
import { SEO_SERVICE_PAGES, SEO_ZONE_PAGES } from "@/lib/constants/seo-pages";
import { siteConfig } from "@/lib/constants/site";

const zoneVincennes = SEO_ZONE_PAGES.find((z) => z.slug === "vincennes")!;
const zoneParis = SEO_ZONE_PAGES.find((z) => z.slug === "paris")!;
const zoneBoulogne = SEO_ZONE_PAGES.find((z) => z.slug === "boulogne-billancourt")!;
const zoneNeuilly = SEO_ZONE_PAGES.find((z) => z.slug === "neuilly-sur-seine")!;
const zoneLevallois = SEO_ZONE_PAGES.find((z) => z.slug === "levallois-perret")!;
const zoneIssy = SEO_ZONE_PAGES.find((z) => z.slug === "issy-les-moulineaux")!;

const PAGE_PATH = zoneVincennes.canonicalPath;
const PAGE_TITLE_ABSOLUTE = zoneVincennes.title;
const PAGE_DESCRIPTION = zoneVincennes.metaDescription;

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
      "Chambre parentale ou pièce partagée : caler penderie et tiroirs sur la niche existante évite un meuble trop profond qui rétrécit visuellement la pièce.",
  },
  {
    title: "Placard sur mesure à Paris",
    href: pagePlacard.canonicalPath,
    intro:
      "Hall ou dégagement : un placard intégré reprend le ton des murs et libère le sol, utile quand l’entrée sert aussi de vestiaire pour toute la famille.",
  },
  {
    title: "Rangement sur mesure à Paris",
    href: pageRangement.canonicalPath,
    intro:
      "Lecture transversale des pièces de vie : un même langage de façade entre salon, couloir et chambre évite l’effet « meuble ajouté » pièce par pièce.",
  },
  {
    title: "Bibliothèque sur mesure à Paris",
    href: pageBibliotheque.canonicalPath,
    intro:
      "Mur de séjour structuré : niches ouvertes pour livres et objets, portions fermées pour le quotidien — une composition continue plutôt qu’une étagère isolée.",
  },
  {
    title: "Meuble TV sur mesure à Paris",
    href: pageMeubleTv.canonicalPath,
    intro:
      "Paroi salon : regrouper écran, rangements et passages techniques dans un linéaire fixé au mur recentre la pièce sans empiler les caissons au sol.",
  },
  {
    title: "Optimisation de petit appartement à Paris",
    href: pageOptimisation.canonicalPath,
    intro:
      "Surface contenue mais plusieurs usages : le sur-mesure clarifie où stocker, où circuler et où laisser volontairement du vide pour un intérieur plus apaisé.",
  },
];

const problemesFrequents: { title: string; description: string }[] = [
  {
    title: "Entrée à organiser avec un rangement discret",
    description:
      "Manteaux, chaussures et sacs s’accumulent dès le seuil : un linéaire intégré, peu profond et dans le ton du mur, structure l’accueil sans transformer le hall en débarras visible.",
  },
  {
    title: "Chambre qui manque de placard adapté",
    description:
      "Placard trop étroit, mal découpé ou absent : partitionner penderie, étagères et tiroirs sur vos cotes réelles évite l’empilement sur une commode ou dans un coin de la chambre.",
  },
  {
    title: "Salon à structurer avec un meuble TV ou une bibliothèque",
    description:
      "Sans parti clair, la paroi de vie devient hétérogène : une composition murale unique aligne média, livres et rangements fermés dans un même dessin de façade.",
  },
  {
    title: "Besoin de rangements fermés pour garder un intérieur apaisé",
    description:
      "Les surfaces dégagées passent souvent par des portes plutôt que par moins de possessions : le fermé reste discret si les façades suivent le ton déjà présent dans le salon ou l’entrée.",
  },
  {
    title: "Recoin ou mur inexploité",
    description:
      "Angle mort, renfoncement ou interstice entre deux ouvertures : là où un meuble catalogue ne tient pas, le sur-mesure prolonge le linéaire jusqu’aux cotes réelles du support.",
  },
  {
    title: "Meubles standards qui ne s’adaptent pas aux dimensions ou au style intérieur",
    description:
      "Écart sous plafond, profondeur atypique ou finitions qui jurent avec le parquet : le sur-mesure calibre dimensions et détails de façade pour une intégration plus naturelle.",
  },
];

const methodSteps: { title: string; description: string }[] = [
  {
    title: "Premier échange sur le besoin",
    description:
      "Vous décrivez votre logement à Vincennes (ou aux abords immédiats), les pièces visées et vos priorités de rangement. Nous indiquons si le dossier entre dans le périmètre atelier et comment avancer sans engagement immédiat.",
  },
  {
    title: "Analyse de l’espace et des contraintes",
    description:
      "Typologie du bien, circulation, style déjà en place, réservations techniques : cette lecture oriente où placer le linéaire intégré — sans partir d’un plan générique « appartement familial ».",
  },
  {
    title: "Prise de mesures si le projet est retenu",
    description:
      "Relevé précis des cotes et des niveaux : condition indispensable avant devis sérieux et avant lancement des panneaux en atelier.",
  },
  {
    title: "Proposition d’aménagement sur mesure",
    description:
      "Esquisses, choix de matériaux et devis détaillé : vous validez le périmètre avant fabrication, avec marge pour ajuster si le budget impose des arbitrages.",
  },
  {
    title: "Fabrication, pose et ajustements",
    description:
      "Après fabrication, pose sur site, réglage des portes et tiroirs, finitions convenues : l’objectif est une intégration nette dans un intérieur déjà habité, fréquent à l’est parisien.",
  },
];

const secteursProches = [
  "Centre-ville",
  "Bérault",
  "Diderot",
  "Domaine du Bois",
  "Saint-Mandé",
  "Montreuil",
  "Fontenay-sous-Bois",
  "Paris 12e",
  "Nogent-sur-Marne",
  "Joinville-le-Pont",
] as const;

const zoneVincennesFaq = [
  {
    question: "Intervenez-vous à Vincennes ?",
    answer:
      "Les projets adressés à Vincennes peuvent être étudiés comme ailleurs en Île-de-France : la suite dépend du contenu du chantier, des accès et des disponibilités atelier. Il n’y a pas d’acceptation automatique sans premier échange. Les modalités de déplacement éventuel sont précisées après ce contact, selon la localisation et la nature du projet.",
  },
  {
    question: "Pouvez-vous créer un dressing ou un placard sur mesure à Vincennes ?",
    answer:
      "Oui, lorsque le besoin relève du menuisier d’agencement : dressings intégrés, placards d’entrée ou de chambre, combinaisons avec bibliothèques ou meubles TV. Les fiches détaillées du site (intitulées Paris) décrivent ces prestations ; pour Vincennes, l’étude reprend vos mesures et contraintes locales. Un devis personnalisé suit la description du besoin.",
  },
  {
    question: "Quels types de rangements réalisez-vous pour les logements à Vincennes ?",
    answer:
      "Dressings, placards intégrés, rangements sur mesure, bibliothèques murales, meubles TV et scénarios d’optimisation lorsque plusieurs pièces sont concernées. Selon votre brief, une ou plusieurs de ces briques peuvent composer un même chantier avec un seul interlocuteur atelier.",
  },
  {
    question: "Combien coûte un projet d’agencement sur mesure à Vincennes ?",
    answer:
      "Le montant dépend des linéaires fabriqués, des matériaux, des finitions, du temps de pose et des contraintes du support (angles, reprises, intégrations). Sans relevé ou sans parti retenu, fixer un chiffre serait arbitraire. Après votre message via la section Devis de l’accueil, une proposition chiffrée peut être préparée ; vous restez libre d’arrêter sans frais liés à cette page.",
  },
  {
    question: "Comment demander un devis pour un projet à Vincennes ?",
    answer:
      "Utilisez le bloc Devis sur la page d’accueil : indiquez Vincennes, le type de logement, les pièces concernées et, si possible, photos ou dimensions approximatives. Atelier Guyonnet revient vers vous ; toute étape ultérieure sur site se discute après cet échange, en fonction des disponibilités atelier.",
  },
] as const satisfies readonly ZoneVincennesFaqItem[];

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

export default function ZoneVincennesPage() {
  return (
    <>
      <ZoneVincennesJsonLd faqItems={zoneVincennesFaq} />
      <Header />
      <main className="flex min-w-0 flex-1 flex-col">
        <section
          aria-labelledby="vinc-hero-heading"
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
              <li className="text-foreground/90">Vincennes</li>
            </ol>
          </nav>

          <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
            <span className="rounded-sm border border-border bg-background/80 px-3 py-1.5">Vincennes</span>
          </p>
          <h1
            id="vinc-hero-heading"
            className="mt-6 max-w-3xl font-serif text-3xl leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[2.5rem]"
          >
            {zoneVincennes.h1}
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
            Atelier Guyonnet conçoit des aménagements sur mesure pour optimiser les intérieurs à Vincennes : dressings,
            placards intégrés, rangements, bibliothèques, meubles TV et solutions gain de place adaptées aux appartements
            et espaces familiaux.
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
              Île-de-France
            </Link>
            {" · "}
            <Link href={zoneParis.canonicalPath} className={linkUnderline}>
              Paris
            </Link>
            {" · "}
            <Link href={zoneBoulogne.canonicalPath} className={linkUnderline}>
              Boulogne-Billancourt
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
            .
          </p>
        </section>

        <section
          aria-labelledby="vinc-why-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-3xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
                Val-de-Marne
              </p>
              <h2
                id="vinc-why-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Des solutions intégrées pour un intérieur plus fluide
              </h2>
              <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                <p>
                  À Vincennes, les logements mêlent souvent appartements familiaux, surfaces parfois compactes et pièces
                  de vie à clarifier : entrée, chambres, salon et recoins demandent des rangements qui restent discrets
                  au quotidien — surtout lorsque la vie s’organise entre Paris Est et la proche banlieue.
                </p>
                <p>
                  Le <strong className="font-medium text-foreground">sur-mesure</strong> exploite les murs, les
                  dégagements et les volumes existants pour loger le stockage sans alourdir l’ensemble. Dressing intégré,
                  placard d’entrée, bibliothèque murale ou meuble TV : chaque élément est dimensionné sur vos cotes et
                  votre style intérieur, pas sur une moyenne de catalogue.
                </p>
                <p>
                  Atelier Guyonnet reste sur un registre artisanal honnête : pas de photos de chantiers inventées, pas
                  de tarif affiché sans relevé. Le contact via l’accueil ouvre un dialogue factuel sur la faisabilité
                  réelle de votre projet à Vincennes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="vinc-problems-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-2xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">Constats</p>
              <h2
                id="vinc-problems-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Problèmes fréquents dans les logements vincennois
              </h2>
              <p className="mt-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                Situations croisées en étude — votre configuration peut en combiner plusieurs ou présenter une autre
                géométrie.
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
          aria-labelledby="vinc-services-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">Offre</p>
            <h2
              id="vinc-services-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Services disponibles à Vincennes
            </h2>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
              Les fiches ci-dessous portent « Paris » comme référence technique ; elles décrivent des prestations
              pilotables depuis l’atelier lorsque le dossier (mesures, accès, matériaux) est complet.
            </p>
            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted md:text-[15px]">
              <strong className="font-medium text-foreground">
                Ces prestations peuvent être étudiées pour un projet à Vincennes
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
                        Consulter la fiche
                      </Link>
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="vinc-nearby-heading"
          className="border-t border-border bg-secondary/10 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">Repères</p>
            <h2
              id="vinc-nearby-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Vincennes et secteurs proches
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 font-sans text-base leading-relaxed text-muted md:text-lg">
              <p>
                Atelier Guyonnet étudie les demandes à Vincennes et dans les zones proches selon la nature du projet,
                l’accessibilité, les disponibilités de l’atelier et les informations transmises lors du premier échange.
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
          aria-labelledby="vinc-method-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">Déroulé</p>
            <h2
              id="vinc-method-heading"
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
                  <p className="mt-2 font-sans text-sm leading-relaxed text-muted md:text-base">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          aria-labelledby="vinc-faq-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">FAQ</p>
            <h2
              id="vinc-faq-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Questions fréquentes — Vincennes
            </h2>
            <ul className="mx-auto mt-12 max-w-3xl list-none space-y-3 lg:mx-0">
              {zoneVincennesFaq.map((item) => (
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
          aria-labelledby="vinc-useful-heading"
          className="border-t border-border bg-background px-4 py-16 sm:px-6 md:py-20 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <h2 id="vinc-useful-heading" className="font-serif text-xl tracking-tight text-foreground sm:text-2xl">
              Services utiles
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted md:text-base">
              Fiches détaillées — savoir-faire transposable à Vincennes après relevé :
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
                Boulogne-Billancourt
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
          aria-labelledby="vinc-cta-heading"
          className="border-t border-border bg-secondary/10 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl text-center lg:px-2 lg:text-left">
            <h2 id="vinc-cta-heading" className="font-serif text-2xl tracking-tight text-foreground sm:text-3xl">
              Un projet à Vincennes ?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted lg:mx-0 md:text-lg">
              Le formulaire sur l’accueil permet de décrire votre intérieur et de solliciter un retour : c’est le canal
              le plus direct pour un premier échange prudent sur faisabilité, délais et devis — sans montant affiché au
              hasard sur une page locale.
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
