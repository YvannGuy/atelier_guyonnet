import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { ZoneParisFaqItem } from "@/components/seo/ZoneParisJsonLd";
import { ZoneParisJsonLd } from "@/components/seo/ZoneParisJsonLd";
import { SEO_SERVICE_PAGES, SEO_ZONE_PAGES } from "@/lib/constants/seo-pages";
import { siteConfig } from "@/lib/constants/site";

const zoneParis = SEO_ZONE_PAGES.find((z) => z.slug === "paris")!;
const zoneBoulogneBillancourt = SEO_ZONE_PAGES.find((z) => z.slug === "boulogne-billancourt")!;
const zoneNeuillySurSeine = SEO_ZONE_PAGES.find((z) => z.slug === "neuilly-sur-seine")!;
const zoneLevalloisPerret = SEO_ZONE_PAGES.find((z) => z.slug === "levallois-perret")!;
const zoneIssyLesMoulineaux = SEO_ZONE_PAGES.find((z) => z.slug === "issy-les-moulineaux")!;
const zoneVincennes = SEO_ZONE_PAGES.find((z) => z.slug === "vincennes")!;

const PAGE_PATH = zoneParis.canonicalPath;
const PAGE_TITLE_ABSOLUTE = zoneParis.title;
const PAGE_DESCRIPTION = zoneParis.metaDescription;

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

const servicesParis: { title: string; href: string; intro: string }[] = [
  {
    title: "Dressing sur mesure à Paris",
    href: pageDressing.canonicalPath,
    intro:
      "Volumes de garde-robe calés sur la niche ou la pièce : utile quand la chambre est étroite et que chaque centimètre de profondeur compte.",
  },
  {
    title: "Placard sur mesure à Paris",
    href: pagePlacard.canonicalPath,
    intro:
      "Entrées et couloirs : transformer un linéaire existant en rangement discret, sans bloquer la porte ou le passage.",
  },
  {
    title: "Rangement sur mesure à Paris",
    href: pageRangement.canonicalPath,
    intro:
      "Une lecture transversale de plusieurs pièces pour éviter l’empilement de petits meubles rapportés.",
  },
  {
    title: "Bibliothèque sur mesure à Paris",
    href: pageBibliotheque.canonicalPath,
    intro:
      "Donner une structure claire à un mur : livres, objets et portes pleines dans une même composition.",
  },
  {
    title: "Meuble TV sur mesure à Paris",
    href: pageMeubleTv.canonicalPath,
    intro:
      "Salon : regrouper écran, câbles et rangements dans un ensemble fixé au mur, adapté au gabarit réel de la pièce.",
  },
  {
    title: "Optimisation de petit appartement à Paris",
    href: pageOptimisation.canonicalPath,
    intro:
      "Studios et deux-pièces : organiser les fonctions (dormir, recevoir, travailler) avec du mobilier pensé sur mesure.",
  },
];

const problemesFrequents: { title: string; description: string }[] = [
  {
    title: "Manque de rangement dans l’entrée",
    description:
      "Manteaux, chaussures et sacs s’entassent faute de profondeur adaptée : un volume intégré reprend la cote du mur sans empiéter sur le passage.",
  },
  {
    title: "Chambre sans placard adapté",
    description:
      "Portes coulissantes impossible ou niche irrégulière : le sur-mesure épouse plinthes et angles plutôt que de laisser un vide ou un meuble qui dépasse.",
  },
  {
    title: "Mur de salon mal exploité",
    description:
      "Le linéaire peut accueillir rangements fermés et zones ouvertes dans une seule façade, au lieu de trois meubles de largeurs différentes.",
  },
  {
    title: "Couloir ou renfoncement inutilisé",
    description:
      "Les recoins parfois jugés « trop étroits » deviennent utiles lorsque la profondeur et l’ouverture des portes sont pensées pour la circulation réelle.",
  },
  {
    title: "Studio difficile à organiser",
    description:
      "Même surface au sol, plusieurs usages : la composition intégrée clarifie les zones sans multiplier les pièces rapportées.",
  },
  {
    title: "Meubles standards mal adaptés aux dimensions",
    description:
      "Portes qui frottent, interstices visibles ou hauteur sous plafond bizarre : le catalogue générique peine là où le logement est irrégulier.",
  },
];

const methodSteps: { title: string; description: string }[] = [
  {
    title: "Premier échange sur le projet",
    description:
      "Vous décrivez le logement, les pièces concernées et vos priorités. Atelier Guyonnet précise la faisabilité et les prochaines étapes sans engagement.",
  },
  {
    title: "Analyse de l’espace et des contraintes",
    description:
      "Accès cage d’escalier, murs porteurs apparents, hauteurs, équipements existants : le parti tient compte du réel parisien, pas d’un plan type.",
  },
  {
    title: "Prise de mesures si le projet est retenu",
    description:
      "Les cotes fines conditionnent la fabrication. Elles interviennent lorsque les deux parties décident d’aller vers une proposition chiffrée.",
  },
  {
    title: "Proposition d’aménagement sur mesure",
    description:
      "Plans, choix de matériaux et devis détaillé : vous validez avant lancement atelier. Pas de tarif unique sans cette étape.",
  },
  {
    title: "Fabrication, pose et ajustements",
    description:
      "Usinage, installation sur site et réglages de façades : le chantier matérialise le dessin validé, avec finitions de vision soignées.",
  },
];

const arrondissements = [
  "Paris 1er",
  "Paris 2e",
  "Paris 3e",
  "Paris 4e",
  "Paris 5e",
  "Paris 6e",
  "Paris 7e",
  "Paris 8e",
  "Paris 9e",
  "Paris 10e",
  "Paris 11e",
  "Paris 12e",
  "Paris 13e",
  "Paris 14e",
  "Paris 15e",
  "Paris 16e",
  "Paris 17e",
  "Paris 18e",
  "Paris 19e",
  "Paris 20e",
] as const;

const zoneParisFaq = [
  {
    question: "Intervenez-vous dans tous les arrondissements de Paris ?",
    answer:
      "Les demandes sont étudiées pour l’ensemble de Paris intra-muros, mais chaque projet est confirmé après premier échange : accessibilité, ampleur des travaux et disponibilités atelier peuvent varier. Aucune promesse d’intervention systématique quartier par quartier sans cette validation.",
  },
  {
    question: "Pouvez-vous optimiser un petit appartement parisien ?",
    answer:
      "Oui, c’est un volet récurrent : studios, deux-pièces et volumes avec niches se prêtent à des rangements intégrés et à une composition sur mesure. La page dédiée « optimisation de petit appartement » détaille l’approche ; le devis reste personnalisé selon vos cotes et objectifs.",
  },
  {
    question: "Quels types de rangements réalisez-vous à Paris ?",
    answer:
      "Dressings, placards intégrés, rangements sur mesure, bibliothèques murales, meubles TV et plans combinant plusieurs de ces éléments, en fonction du logement. Chaque type est développé sur une page service distincte du site.",
  },
  {
    question: "Combien coûte un projet d’agencement sur mesure à Paris ?",
    answer:
      "Le coût dépend des dimensions, des matériaux, des finitions, du nombre d’éléments fabriqués, du temps de pose et des contraintes techniques (murs, passages, intégrations). Sans relevé ou parti validé, un prix fixe serait arbitraire. Un devis itemisé est établi après description du besoin ; vous restez libre de ne pas donner suite.",
  },
  {
    question: "Comment demander un devis pour un projet à Paris ?",
    answer:
      "Rendez-vous sur la page d’accueil et la section Devis : le formulaire permet d’indiquer votre arrondissement ou quartier, le type de logement et les pièces concernées. Plus votre message est précis, plus la réponse peut être ciblée ; la suite du processus est précisée après ce premier contact.",
  },
] as const satisfies readonly ZoneParisFaqItem[];

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

export default function ZoneParisPage() {
  return (
    <>
      <ZoneParisJsonLd faqItems={zoneParisFaq} />
      <Header />
      <main className="flex min-w-0 flex-1 flex-col">
        <section
          aria-labelledby="paris-hero-heading"
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
              <li className="text-foreground/90">Paris</li>
            </ol>
          </nav>

          <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
            <span className="rounded-sm border border-border bg-background/80 px-3 py-1.5">Paris</span>
          </p>
          <h1
            id="paris-hero-heading"
            className="mt-6 max-w-3xl font-serif text-3xl leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[2.5rem]"
          >
            {zoneParis.h1}
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
            Atelier Guyonnet conçoit des aménagements sur mesure pour optimiser les appartements parisiens : dressings,
            placards intégrés, rangements, bibliothèques, meubles TV et solutions gain de place pensées au centimètre
            près.
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
            Vue d’ensemble régionale :{" "}
            <Link href={HubLink} className={linkUnderline}>
              agencement sur mesure en Île-de-France
            </Link>
            .
          </p>
        </section>

        <section
          aria-labelledby="paris-why-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-3xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">Paris</p>
              <h2
                id="paris-why-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                À Paris, l’espace se gagne souvent au centimètre près
              </h2>
              <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                <p>
                  Les appartements parisiens jouent rarement la carte des volumes généreux : surfaces contenues, entrées
                  étroites, parfois des hauteurs sous plafond atypiques ou des murs qui ne sont jamais « tout à fait
                  droits ». Le mobilier de série se retrouve vite en retrait des angles, laisse des interstices ou
                  bloque une circulation déjà serrée.
                </p>
                <p>
                  Un <strong className="font-medium text-foreground">agencement sur mesure</strong> façon atelier part
                  de ces contraintes : chambres compactes, longs couloirs, renfoncements, studios où plusieurs usages
                  cohabitent. L’objectif n’est pas d’ajouter du décor superflu, mais de proposer des rangements
                  discrets, lisibles et tenables dans le temps — avec des finitions en phase avec votre intérieur.
                </p>
                <p>
                  Atelier Guyonnet accompagne ce type de projets avec la prudence d’un artisan : pas de promesse de
                  délai ou de prix sans cahier des charges, pas de photos de chantier inventées pour illustrer la page.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="paris-problems-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-2xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">Contraintes</p>
              <h2
                id="paris-problems-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Problèmes fréquents dans les appartements parisiens
              </h2>
              <p className="mt-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                Des situations croisées en étude de projet — la combinaison réelle dépend de votre plan et de vos
                priorités.
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
          aria-labelledby="paris-services-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">Prestations</p>
            <h2
              id="paris-services-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Services disponibles à Paris
            </h2>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
              Chaque lien ouvre une fiche détaillée sur le type de réalisation ; vous gardez un interlocuteur unique pour
              un projet qui combine plusieurs lots.
            </p>
            <ul className="mt-14 grid list-none gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
              {servicesParis.map((item) => (
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
                        Voir la page
                      </Link>
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="paris-districts-heading"
          className="border-t border-border bg-secondary/10 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">Périmètre</p>
            <h2
              id="paris-districts-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Intervention dans Paris intra-muros
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 font-sans text-base leading-relaxed text-muted md:text-lg">
              <p>
                Atelier Guyonnet étudie les demandes à Paris selon la nature du projet, les contraintes d’accès, les
                disponibilités de l’atelier et les informations transmises lors du premier échange.
              </p>
              <p className="rounded-md border border-border bg-background p-4 font-sans text-sm leading-relaxed text-muted md:text-[15px]">
                Les déplacements sont confirmés après un premier échange, selon la localisation et la nature du projet —
                sans engagement implicite d’intervention sur l’ensemble des chantiers au même rythme.
              </p>
            </div>
            <div className="mt-10">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
                Arrondissements
              </p>
              <ul className="mt-4 flex list-none flex-wrap gap-2">
                {arrondissements.map((label) => (
                  <li key={label}>
                    <span className="inline-block rounded-sm border border-border bg-background px-3 py-1.5 font-sans text-xs text-foreground/90 md:text-[13px]">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 max-w-3xl border-t border-border pt-10">
              <h3 className="font-serif text-xl leading-snug tracking-tight text-foreground sm:text-2xl">
                Autres zones étudiées
              </h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-muted md:text-[15px]">
                Hors Paris intra-muros, voir les pages locales déjà publiées :{" "}
                <Link href={zoneBoulogneBillancourt.canonicalPath} className={linkUnderline}>
                  Boulogne-Billancourt
                </Link>
                {" · "}
                <Link href={zoneNeuillySurSeine.canonicalPath} className={linkUnderline}>
                  Neuilly-sur-Seine
                </Link>
                {" · "}
                <Link href={zoneLevalloisPerret.canonicalPath} className={linkUnderline}>
                  Levallois-Perret
                </Link>
                {" · "}
                <Link href={zoneIssyLesMoulineaux.canonicalPath} className={linkUnderline}>
                  Issy-les-Moulineaux
                </Link>
                {" · "}
                <Link href={zoneVincennes.canonicalPath} className={linkUnderline}>
                  Vincennes
                </Link>
                . D’autres villes suivront au fil du calendrier — sans lien vers des URLs encore absentes.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="paris-method-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">Déroulé</p>
            <h2
              id="paris-method-heading"
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
          aria-labelledby="paris-faq-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">FAQ</p>
            <h2
              id="paris-faq-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Questions fréquentes — Paris
            </h2>
            <ul className="mx-auto mt-12 max-w-3xl list-none space-y-3 lg:mx-0">
              {zoneParisFaq.map((item) => (
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
          aria-labelledby="paris-useful-heading"
          className="border-t border-border bg-background px-4 py-16 sm:px-6 md:py-20 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <h2
              id="paris-useful-heading"
              className="font-serif text-xl tracking-tight text-foreground sm:text-2xl"
            >
              Services utiles
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted md:text-base">
              Fiches détaillées pour approfondir chaque type d’aménagement :
            </p>
            <ul className="mt-8 grid list-none gap-2 sm:grid-cols-2 lg:max-w-3xl">
              {servicesParis.map((item) => (
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
          aria-labelledby="paris-cta-heading"
          className="border-t border-border bg-secondary/10 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl text-center lg:px-2 lg:text-left">
            <h2
              id="paris-cta-heading"
              className="font-serif text-2xl tracking-tight text-foreground sm:text-3xl"
            >
              Un projet à Paris ?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted lg:mx-0 md:text-lg">
              Décrivez votre logement et les pièces concernées : la suite du processus et, le cas échéant, la
              confirmation d’un déplacement sont précisées après ce premier échange — sans tarif inventé ni engagement
              forcé.
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
                Agencement Île-de-France
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
