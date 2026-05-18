import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { ZoneIssyLesMoulineauxFaqItem } from "@/components/seo/ZoneIssyLesMoulineauxJsonLd";
import { ZoneIssyLesMoulineauxJsonLd } from "@/components/seo/ZoneIssyLesMoulineauxJsonLd";
import { SEO_SERVICE_PAGES, SEO_ZONE_PAGES } from "@/lib/constants/seo-pages";
import { siteConfig } from "@/lib/constants/site";

const zoneIssy = SEO_ZONE_PAGES.find((z) => z.slug === "issy-les-moulineaux")!;
const zoneParis = SEO_ZONE_PAGES.find((z) => z.slug === "paris")!;
const zoneBoulogne = SEO_ZONE_PAGES.find((z) => z.slug === "boulogne-billancourt")!;
const zoneNeuilly = SEO_ZONE_PAGES.find((z) => z.slug === "neuilly-sur-seine")!;
const zoneLevallois = SEO_ZONE_PAGES.find((z) => z.slug === "levallois-perret")!;
const zoneVincennes = SEO_ZONE_PAGES.find((z) => z.slug === "vincennes")!;

const PAGE_PATH = zoneIssy.canonicalPath;
const PAGE_TITLE_ABSOLUTE = zoneIssy.title;
const PAGE_DESCRIPTION = zoneIssy.metaDescription;

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
      "Chambres d’enfants ou suite parentale : caler penderie et tiroirs sur la niche ou le linéaire évite les angles morts quand plusieurs membres du foyer partagent le même placard.",
  },
  {
    title: "Placard sur mesure à Paris",
    href: pagePlacard.canonicalPath,
    intro:
      "Hall d’entrée ou renfoncement : un volume intégré accueille manteaux, chaussures et affaires quotidiennes tout en gardant une circulation claire pour les allers-retours.",
  },
  {
    title: "Rangement sur mesure à Paris",
    href: pageRangement.canonicalPath,
    intro:
      "Quand salon, chambres et bureau tirent sur le même linéaire de rangement, une lecture d’ensemble évite trois tonalités de façade et trois profondeurs différentes.",
  },
  {
    title: "Bibliothèque sur mesure à Paris",
    href: pageBibliotheque.canonicalPath,
    intro:
      "Mur de vie partagé : niches ouvertes pour livres et objets, portions fermées pour le bazar du quotidien — un seul dessin de meuble pour rythmer la pièce.",
  },
  {
    title: "Meuble TV sur mesure à Paris",
    href: pageMeubleTv.canonicalPath,
    intro:
      "Point central du salon familial : intégrer écran, box et quelques rangements dans une composition fixée au mur clarifie le mobilier autour de la lumière du séjour.",
  },
  {
    title: "Optimisation de petit appartement à Paris",
    href: pageOptimisation.canonicalPath,
    intro:
      "Plans compacts où plusieurs usages cohabitent : le sur-mesure redistribue le linéaire utile sans multiplier les meubles rapportés aux finitions disparates.",
  },
];

const problemesFrequents: { title: string; description: string }[] = [
  {
    title: "Entrée familiale à organiser",
    description:
      "Sacs, chaussures et dossiers arrivant en même temps : segmenter vestiaire, niche fermée et petit module ouvert permet à chacun de se déchausser sans encombrer le passage.",
  },
  {
    title: "Chambre avec rangement insuffisant",
    description:
      "Armoire trop étroite ou absence de placard : un linéaire sur mesure exploite la hauteur sous plafond et la largeur réelle du mur pour loger garde-robe et linge sans déporter le désordre au centre.",
  },
  {
    title: "Salon à structurer avec meuble TV ou bibliothèque",
    description:
      "La grande paroi de séjour devient vite un empilement hétérogène : une composition unique aligne média, livres et rangements fermés dans le même langage de façade.",
  },
  {
    title: "Coin bureau à intégrer proprement",
    description:
      "Télétravail ou suivi des devoirs : plan minimal, prises prévues et caissons au-dessus maintiennent un bureau « dans le mur » plutôt qu’une table isolée qui casse la lecture de la traversée.",
  },
  {
    title: "Besoin de rangements fermés pour garder un intérieur épuré",
    description:
      "Une famille active produit du mouvement d’objets : des portes discrètes, parfois sans poignée apparente, permettent de ranger sans encombrer les surfaces visibles.",
  },
  {
    title: "Meubles standards qui ne s’adaptent pas aux dimensions ou aux usages",
    description:
      "Écart sous plafond, angle non exploité ou profondeur de niche atypique : là où le catalogue impose des compromis, le sur-mesure prolonge le meuble jusqu’aux cotes réelles du support.",
  },
];

const methodSteps: { title: string; description: string }[] = [
  {
    title: "Premier échange sur le besoin",
    description:
      "Vous décrivez votre logement à Issy (ou le secteur visé aux abords), les pièces concernées, le rythme du foyer et les contraintes (accès, horaires). Nous indiquons si l’atelier peut prendre le dossier et comment poursuivre sans engagement immédiat.",
  },
  {
    title: "Analyse de l’espace et des usages",
    description:
      "Circulation entre entrée, chambres et salon, emplacement d’un bureau, besoin de fermé vs ouvert : cette lecture guide où placer le linéaire — sans partir d’un plan « famille type » générique.",
  },
  {
    title: "Prise de mesures si le projet est retenu",
    description:
      "Relevé précis avant devis : cotes, niveaux et réservations techniques conditionnent fabrication et coût ; cette étape arrive lorsque vous souhaitez une proposition chiffrée.",
  },
  {
    title: "Proposition d’aménagement sur mesure",
    description:
      "Esquisses, choix de matériaux et devis détaillé : vous validez le périmètre avant lancement en atelier, avec marge pour ajuster si le budget impose des arbitrages.",
  },
  {
    title: "Fabrication, pose et ajustements",
    description:
      "Après fabrication, pose sur site, réglage des portes et tiroirs, finitions convenues : l’objectif est un rendu stable dans un logement parfois déjà habité, sans surprise sur les jeux de façade.",
  },
];

const secteursProches = [
  "Corentin Celton",
  "Mairie d’Issy",
  "Val de Seine",
  "Les Épinettes",
  "Fort d’Issy",
  "Paris 15e",
  "Boulogne-Billancourt",
  "Vanves",
  "Meudon",
  "Clamart",
] as const;

const zoneIssyFaq = [
  {
    question: "Intervenez-vous à Issy-les-Moulineaux ?",
    answer:
      "Les projets adressés à Issy-les-Moulineaux peuvent être étudiés comme ailleurs en petite couronne : la suite dépend du contenu du chantier, des accès et des disponibilités atelier. Il n’y a pas d’acceptation automatique sans premier échange. Les modalités de déplacement éventuel sont précisées après ce contact, selon la localisation et la nature du projet.",
  },
  {
    question: "Pouvez-vous optimiser un appartement familial à Issy ?",
    answer:
      "Oui, lorsque le besoin relève du menuisier d’agencement : placards intégrés, dressings, bibliothèques murales, meubles TV, rangements composés pour plusieurs pièces. La fiche « optimisation petit appartement » décrit une approche transposable aux volumes isséens ; le devis reste personnalisé après description de votre logement et de vos priorités.",
  },
  {
    question: "Quels types de rangements réalisez-vous à Issy-les-Moulineaux ?",
    answer:
      "Dressings, placards intégrés, rangements sur mesure, bibliothèques, meubles TV muraux et combinaisons multi-usage lorsque plusieurs espaces sont traités ensemble. Les pages détaillées du site (intitulées Paris) décrivent ces familles de prestations ; le dossier Issy reprend vos mesures, contraintes et usages réels.",
  },
  {
    question: "Combien coûte un projet d’agencement sur mesure à Issy-les-Moulineaux ?",
    answer:
      "Le coût dépend des linéaires fabriqués, des matériaux, des finitions, du temps de pose et des contraintes du support (angles, reprises, intégrations). Sans relevé ou sans parti retenu, fixer un montant serait arbitraire. Après votre message via la section Devis de l’accueil, une proposition chiffrée peut être préparée ; vous restez libre d’arrêter sans frais liés à cette page.",
  },
  {
    question: "Comment demander un devis pour un projet à Issy-les-Moulineaux ?",
    answer:
      "Utilisez le bloc Devis sur la page d’accueil : indiquez Issy-les-Moulineaux, le type de logement, les pièces concernées et, si possible, photos ou dimensions approximatives. Atelier Guyonnet revient vers vous ; toute étape ultérieure sur site se discute après cet échange, en fonction des disponibilités atelier.",
  },
] as const satisfies readonly ZoneIssyLesMoulineauxFaqItem[];

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

export default function ZoneIssyLesMoulineauxPage() {
  return (
    <>
      <ZoneIssyLesMoulineauxJsonLd faqItems={zoneIssyFaq} />
      <Header />
      <main className="flex min-w-0 flex-1 flex-col">
        <section
          aria-labelledby="issy-hero-heading"
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
              <li className="text-foreground/90">Issy-les-Moulineaux</li>
            </ol>
          </nav>

          <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
            <span className="rounded-sm border border-border bg-background/80 px-3 py-1.5">Issy-les-Moulineaux</span>
          </p>
          <h1
            id="issy-hero-heading"
            className="mt-6 max-w-3xl font-serif text-3xl leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[2.5rem]"
          >
            {zoneIssy.h1}
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
            Atelier Guyonnet conçoit des aménagements sur mesure pour optimiser les intérieurs à Issy-les-Moulineaux :
            dressings, placards intégrés, rangements, bibliothèques, meubles TV et solutions gain de place adaptées aux
            appartements modernes et familiaux.
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
            <Link href={zoneVincennes.canonicalPath} className={linkUnderline}>
              Vincennes
            </Link>
            .
          </p>
        </section>

        <section
          aria-labelledby="issy-why-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-3xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
                Hauts-de-Seine
              </p>
              <h2
                id="issy-why-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Des aménagements pratiques pour des intérieurs modernes
              </h2>
              <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                <p>
                  À Issy-les-Moulineaux, beaucoup de logements mélangent volumes récents, pièces à vivre lumineuses et
                  besoins de rangement qui montent vite dès que le foyer s’étoffe : entrée à structurer, chambres à
                  décharger, salon à harmoniser, parfois un bureau à loger sans couper la traversée.
                </p>
                <p>
                  Le <strong className="font-medium text-foreground">sur-mesure</strong> propose des solutions propres et
                  intégrées — placard d’entrée, linéaire de bibliothèque, meuble TV calé au mur, dressing en niche — pour
                  que le rangement puisse disparaître visuellement tout en restant accessible au quotidien. Chaque module
                  est pensé sur la configuration réelle du logement, pas sur une fourchette « standard ».
                </p>
                <p>
                  Atelier Guyonnet reste sur un ton artisanal : pas de chantiers illustrés à la va-vite, pas de tarif
                  miracle sur une page locale. Le contact via l’accueil sert à valider ensemble si le projet tient la
                  route avant tout engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="issy-problems-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-2xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">Situations</p>
              <h2
                id="issy-problems-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Problèmes fréquents dans les logements isséens
              </h2>
              <p className="mt-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                Croisements observés en étude — votre dossier peut en combiner plusieurs ou présenter une autre géométrie.
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
          aria-labelledby="issy-services-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">Offre</p>
            <h2
              id="issy-services-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Services disponibles à Issy-les-Moulineaux
            </h2>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
              Les fiches ci-dessous portent « Paris » comme référence technique ; elles décrivent des prestations
              pilotables depuis l’atelier lorsque le dossier (mesures, accès, matériaux) est complet.
            </p>
            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted md:text-[15px]">
              <strong className="font-medium text-foreground">
                Ces prestations peuvent être étudiées pour un projet à Issy-les-Moulineaux
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
          aria-labelledby="issy-nearby-heading"
          className="border-t border-border bg-secondary/10 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">Repères</p>
            <h2
              id="issy-nearby-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Issy-les-Moulineaux et secteurs proches
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 font-sans text-base leading-relaxed text-muted md:text-lg">
              <p>
                Atelier Guyonnet étudie les demandes à Issy-les-Moulineaux et dans les zones proches selon la nature du
                projet, l’accessibilité, les disponibilités de l’atelier et les informations transmises lors du premier
                échange.
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
          aria-labelledby="issy-method-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">Déroulé</p>
            <h2
              id="issy-method-heading"
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
          aria-labelledby="issy-faq-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">FAQ</p>
            <h2
              id="issy-faq-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Questions fréquentes — Issy-les-Moulineaux
            </h2>
            <ul className="mx-auto mt-12 max-w-3xl list-none space-y-3 lg:mx-0">
              {zoneIssyFaq.map((item) => (
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
          aria-labelledby="issy-useful-heading"
          className="border-t border-border bg-background px-4 py-16 sm:px-6 md:py-20 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <h2 id="issy-useful-heading" className="font-serif text-xl tracking-tight text-foreground sm:text-2xl">
              Services utiles
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted md:text-base">
              Fiches détaillées — savoir-faire transposable après relevé à Issy et en proche banlieue :
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
              <Link href={zoneVincennes.canonicalPath} className={linkUnderline}>
                Vincennes
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
          aria-labelledby="issy-cta-heading"
          className="border-t border-border bg-secondary/10 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl text-center lg:px-2 lg:text-left">
            <h2 id="issy-cta-heading" className="font-serif text-2xl tracking-tight text-foreground sm:text-3xl">
              Un projet à Issy-les-Moulineaux ?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted lg:mx-0 md:text-lg">
              Le formulaire sur l’accueil permet de décrire votre intérieur et de solliciter un retour : c’est le canal le
              plus direct pour un premier échange prudent sur faisabilité, délais et devis — sans montant affiché au hasard
              sur une page locale.
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
