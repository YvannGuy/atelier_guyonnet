import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { ZoneLevalloisPerretFaqItem } from "@/components/seo/ZoneLevalloisPerretJsonLd";
import { ZoneLevalloisPerretJsonLd } from "@/components/seo/ZoneLevalloisPerretJsonLd";
import { SEO_SERVICE_PAGES, SEO_ZONE_PAGES } from "@/lib/constants/seo-pages";
import { siteConfig } from "@/lib/constants/site";

const zoneLevallois = SEO_ZONE_PAGES.find((z) => z.slug === "levallois-perret")!;
const zoneParis = SEO_ZONE_PAGES.find((z) => z.slug === "paris")!;
const zoneBoulogne = SEO_ZONE_PAGES.find((z) => z.slug === "boulogne-billancourt")!;
const zoneNeuilly = SEO_ZONE_PAGES.find((z) => z.slug === "neuilly-sur-seine")!;
const zoneIssy = SEO_ZONE_PAGES.find((z) => z.slug === "issy-les-moulineaux")!;
const zoneVincennes = SEO_ZONE_PAGES.find((z) => z.slug === "vincennes")!;

const PAGE_PATH = zoneLevallois.canonicalPath;
const PAGE_TITLE_ABSOLUTE = zoneLevallois.title;
const PAGE_DESCRIPTION = zoneLevallois.metaDescription;

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
      "Profondeur de penderie et part de modules fermés calées pour ne pas empiéter sur le passage : utile quand la chambre sert à la fois de repos et de garde-robe active.",
  },
  {
    title: "Placard sur mesure à Paris",
    href: pagePlacard.canonicalPath,
    intro:
      "Entrée ou encoignure : un placard en feuillure sur le mur évite un meuble qui dépasse dans le couloir tout en capter la hauteur sous plafond.",
  },
  {
    title: "Rangement sur mesure à Paris",
    href: pageRangement.canonicalPath,
    intro:
      "Quand plusieurs pièces manquent de linéaire, une lecture transversale évite trois meubles rapportés aux finitions différentes.",
  },
  {
    title: "Bibliothèque sur mesure à Paris",
    href: pageBibliotheque.canonicalPath,
    intro:
      "Structure d’un mur salon ou bureau : niches, portes et tablettes rythment le volume sans le fragmenter visuellement.",
  },
  {
    title: "Meuble TV sur mesure à Paris",
    href: pageMeubleTv.canonicalPath,
    intro:
      "Regrouper écran, box et quelques rangements dans un linéaire fixé au mur limite les câbles visibles et libère le sol.",
  },
  {
    title: "Optimisation de petit appartement à Paris",
    href: pageOptimisation.canonicalPath,
    intro:
      "Sur une empreinte réduite, le sur-mesure clarifie où ranger, où circuler et où laisser volontairement du vide.",
  },
];

const problemesFrequents: { title: string; description: string }[] = [
  {
    title: "Entrée étroite à structurer",
    description:
      "Peu de largeur au sol mais une hauteur exploitable : vestiaire intégré, banc dissimulé ou niche à chaussures peuvent coexister si la profondeur est calculée pour la porte d’entrée et le passage.",
  },
  {
    title: "Couloir ou dégagement mal exploité",
    description:
      "Un renfoncement ou un linéaire « trop fin » pour un meuble standard devient utile avec des caissons peu profonds et des portes qui ne mangent pas le passage au quotidien.",
  },
  {
    title: "Chambre avec rangement insuffisant",
    description:
      "Un seul placard ou pas de placard du tout : partitionner penderie, étagères et tiroirs sur vos cotes réelles évite l’empilement sur une chaise ou dans un coin.",
  },
  {
    title: "Salon à organiser autour d’un meuble TV",
    description:
      "Sans plan clair, la paroi télé accumule meubles bas et boîtiers : une composition murale intégrée recentre la pièce et donne un repérage clair pour chaque objet.",
  },
  {
    title: "Manque de rangements fermés pour garder un intérieur épuré",
    description:
      "Les surfaces dégagées passent souvent par des portes plutôt que par moins de possessions : le fermé choisi reste discret si les façades suivent le ton du salon ou de l’entrée.",
  },
  {
    title: "Meubles standards qui laissent des espaces perdus",
    description:
      "Joint vertical, vide entre plafond et caisson ou angle non utilisé : là où le catalogue s’arrête, le sur-mesure prolonge le linéaire jusqu’aux cotes réelles du mur.",
  },
];

const methodSteps: { title: string; description: string }[] = [
  {
    title: "Premier échange sur le besoin",
    description:
      "Vous précisez les pièces concernées à Levallois (ou à proximité immédiate), le niveau d’usage et vos contraintes (horaires, accès immeuble). Nous indiquons si le dossier entre dans le périmètre atelier et comment poursuivre sans engagement.",
  },
  {
    title: "Analyse de l’espace et des zones à optimiser",
    description:
      "Circulation, angles, zones déjà occupées par chauffage ou tableau : on cartographie ce qui doit rester libre et ce qui peut accueillir du linéaire intégré — sans partir d’un plan « type petit appartement » générique.",
  },
  {
    title: "Prise de mesures si le projet est retenu",
    description:
      "Les cotes fines conditionnent la faisabilité et le prix : cette étape arrive lorsque vous souhaitez une proposition chiffrée exploitable.",
  },
  {
    title: "Proposition d’aménagement sur mesure",
    description:
      "Plans sommaires, choix de matériaux et devis détaillé : vous validez avant lancement fabrication ; le périmètre peut être ajusté si le budget impose des choix.",
  },
  {
    title: "Fabrication, pose et ajustements",
    description:
      "Après fabrication, pose sur site, calage et réglage des portes ou tiroirs : la phase chantier vise un rendu net sur des appuis parfois imparfaits, fréquents dans l’urbain dense.",
  },
];

const secteursProches = [
  "Louise Michel",
  "Anatole France",
  "Villiers",
  "Front de Seine",
  "Gare de Clichy-Levallois",
  "Paris 17e",
  "Neuilly-sur-Seine",
  "Clichy",
  "Courbevoie",
  "Asnières-sur-Seine",
] as const;

const zoneLevalloisFaq = [
  {
    question: "Intervenez-vous à Levallois-Perret ?",
    answer:
      "Les projets adressés à Levallois-Perret peuvent être étudiés comme ailleurs en petite couronne. La décision de charge, de délai et de faisabilité logistique vient après premier échange : il n’y a pas d’engagement implicite « oui partout, tout le temps ». Les modalités de déplacement éventuel sont explicitées à la suite de ce contact.",
  },
  {
    question: "Pouvez-vous optimiser un petit appartement à Levallois ?",
    answer:
      "Oui, tant que le dossier reste dans le champ menuiserie d’agencement : placards intégrés, dressings, bibliothèques murales, meuble TV et scénarios combinant plusieurs volumes pour clarifier circulation et stockage. La page « optimisation petit appartement » détaille l’approche ; le devis reste personnalisé après description de votre logement.",
  },
  {
    question: "Quels types de rangements réalisez-vous à Levallois-Perret ?",
    answer:
      "Dressings, placards intégrés, rangements sur mesure, bibliothèques, meubles TV muraux, combinaisons multi-usage lorsque plusieurs pièces sont traitées ensemble. Les fiches du site (intitulées Paris) décrivent ces prestations ; elles s’appliquent à Levallois une fois vos mesures et contraintes intégrées au dossier.",
  },
  {
    question: "Combien coûte un projet d’agencement sur mesure à Levallois-Perret ?",
    answer:
      "Le coût dépend des dimensions réellement fabriquées, des matériaux, des finitions, du temps de pose et des contraintes du support (angles, reprises, intégrations). Sans relevé ou sans parti validé, fixer un tarif unique serait arbitraire. Après votre message via le formulaire de l’accueil, un devis peut être établi ; vous restez libre d’arrêter sans frais cachés liés à cette page.",
  },
  {
    question: "Comment demander un devis pour un projet à Levallois-Perret ?",
    answer:
      "Utilisez la section Devis sur la page d’accueil : indiquez Levallois-Perret, le type de logement, les pièces visées et, si possible, photos ou cotes approximatives. Atelier Guyonnet revient vers vous ; toute suite éventuelle sur site est convenue après cet échange initial, conformément aux disponibilités atelier.",
  },
] as const satisfies readonly ZoneLevalloisPerretFaqItem[];

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

export default function ZoneLevalloisPerretPage() {
  return (
    <>
      <ZoneLevalloisPerretJsonLd faqItems={zoneLevalloisFaq} />
      <Header />
      <main className="flex min-w-0 flex-1 flex-col">
        <section
          aria-labelledby="lev-hero-heading"
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
              <li className="text-foreground/90">Levallois-Perret</li>
            </ol>
          </nav>

          <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
            <span className="rounded-sm border border-border bg-background/80 px-3 py-1.5">
              Levallois-Perret
            </span>
          </p>
          <h1
            id="lev-hero-heading"
            className="mt-6 max-w-3xl font-serif text-3xl leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[2.5rem]"
          >
            {zoneLevallois.h1}
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
            Atelier Guyonnet conçoit des aménagements sur mesure pour optimiser les intérieurs à Levallois-Perret :
            dressings, placards intégrés, rangements, bibliothèques, meubles TV et solutions gain de place adaptées aux
            appartements urbains.
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
              Boulogne
            </Link>
            {" · "}
            <Link href={zoneNeuilly.canonicalPath} className={linkUnderline}>
              Neuilly
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
          aria-labelledby="lev-why-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-3xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
                Petite couronne
              </p>
              <h2
                id="lev-why-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Des rangements intégrés pour des intérieurs urbains mieux organisés
              </h2>
              <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                <p>
                  Levallois-Perret concentre des appartements où le mètre carré travaille dur : couloirs, entrées,
                  chambres et salons doivent souvent cumuler circulation, rangement et lumière naturelle. Un meuble
                  rapporté trop profond ou trop haut casse vite la lisibilité de la pièce.
                </p>
                <p>
                  Le <strong className="font-medium text-foreground">sur-mesure</strong> vise à loger le stockage dans
                  l’épaisseur du mur ou dans des niches identifiées, plutôt qu’à encombrer le centre du passage.
                  Dressing intégré, placard d’entrée, bibliothèque ou meuble TV : chaque élément est dimensionné sur vos
                  cotes, pas sur une moyenne de catalogue.
                </p>
                <p>
                  Atelier Guyonnet reste sur un registre artisanal honnête : pas de photos de chantiers inventées pour
                  garnir la page, pas de promesse de délai ou de prix sans relevé. Le contact via l’accueil ouvre un
                  dialogue sur la faisabilité réelle.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="lev-problems-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-2xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">Terrain</p>
              <h2
                id="lev-problems-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Problèmes fréquents dans les appartements levalloisiens
              </h2>
              <p className="mt-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                Situations typiques en étude — votre plan peut combiner plusieurs de ces points ou aucun tel quel.
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
          aria-labelledby="lev-services-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">Offre</p>
            <h2
              id="lev-services-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Services disponibles à Levallois-Perret
            </h2>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
              Les pages ci-dessous sont rédigées avec Paris comme référent technique ; elles décrivent des prestations
              réellement pilotables depuis l’atelier pour tout l’ouest parisien lorsque le dossier est complet.
            </p>
            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted md:text-[15px]">
              <strong className="font-medium text-foreground">
                Ces prestations peuvent être étudiées pour un projet à Levallois-Perret
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
          aria-labelledby="lev-nearby-heading"
          className="border-t border-border bg-secondary/10 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">Repères</p>
            <h2
              id="lev-nearby-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Levallois-Perret et secteurs proches
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 font-sans text-base leading-relaxed text-muted md:text-lg">
              <p>
                Atelier Guyonnet étudie les demandes à Levallois-Perret et dans les zones proches selon la nature du
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
          aria-labelledby="lev-method-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">Déroulé</p>
            <h2
              id="lev-method-heading"
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
          aria-labelledby="lev-faq-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">FAQ</p>
            <h2
              id="lev-faq-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Questions fréquentes — Levallois-Perret
            </h2>
            <ul className="mx-auto mt-12 max-w-3xl list-none space-y-3 lg:mx-0">
              {zoneLevalloisFaq.map((item) => (
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
          aria-labelledby="lev-useful-heading"
          className="border-t border-border bg-background px-4 py-16 sm:px-6 md:py-20 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <h2
              id="lev-useful-heading"
              className="font-serif text-xl tracking-tight text-foreground sm:text-2xl"
            >
              Services utiles
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted md:text-base">
              Fiches détaillées (savoir-faire transposable à Levallois après relevé) :
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
              <Link href={zoneIssy.canonicalPath} className={linkUnderline}>
                Issy-les-Moulineaux
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
          aria-labelledby="lev-cta-heading"
          className="border-t border-border bg-secondary/10 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl text-center lg:px-2 lg:text-left">
            <h2
              id="lev-cta-heading"
              className="font-serif text-2xl tracking-tight text-foreground sm:text-3xl"
            >
              Un projet à Levallois-Perret ?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted lg:mx-0 md:text-lg">
              Décrivez votre logement et vos priorités via le formulaire sur l’accueil : c’est le moyen le plus direct de
              solliciter un retour et, si le dossier va au bout, un devis sans montant « affiché au hasard » sur une page
              locale.
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
