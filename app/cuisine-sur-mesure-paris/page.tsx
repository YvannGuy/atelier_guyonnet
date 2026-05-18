import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { CuisineParisFaqItem } from "@/components/seo/CuisineSurMesureParisJsonLd";
import { CuisineSurMesureParisJsonLd } from "@/components/seo/CuisineSurMesureParisJsonLd";
import { siteConfig } from "@/lib/constants/site";

const PAGE_PATH = "/cuisine-sur-mesure-paris";
const PAGE_TITLE_ABSOLUTE = "Cuisine sur mesure Paris | Atelier Guyonnet";
const PAGE_DESCRIPTION =
  "Meubles de cuisine sur mesure à Paris et en Île-de-France. Atelier Guyonnet conçoit rangements, façades, colonnes et plans de travail pour optimiser votre cuisine — agencement et menuiserie, pas rénovation complète.";

const ctaPrimaryClass =
  "inline-flex min-h-12 items-center justify-center rounded-sm bg-primary px-6 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-on-dark no-underline transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const ctaSecondaryClass =
  "inline-flex min-h-12 items-center justify-center rounded-sm border border-border bg-background px-6 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-foreground no-underline transition-colors hover:border-foreground/25 hover:bg-foreground/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/15 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const cuisineElements: { title: string; description: string }[] = [
  {
    title: "Meubles bas sur mesure",
    description:
      "Caissons calés sur la profondeur réelle de la pièce : tiroirs à pas utile, niches pour poubelle ou petit électroménager, sans laisser de bandeau mort entre le plan de travail et le sol.",
  },
  {
    title: "Meubles hauts et colonnes",
    description:
      "Jusqu’à la cote sous plafond ou en retrait selon votre hauteur de vue : colonnes étroites pour épices, conserves ou appareils, avec des portes qui s’alignent sur le linéaire bas.",
  },
  {
    title: "Façades et finitions",
    description:
      "Bois, laque, stratifié ou panneau mélaminé : le langage de façade peut reprendre le séjour ou marquer la cuisine comme pièce à part, avec poignées discrètes ou sans poignée apparente.",
  },
  {
    title: "Plan de travail intégré",
    description:
      "Découpe sur mesure pour les angles, les éviers existants ou les plans en L : l’objectif est une continuité propre entre meubles et surface de préparation, dans le périmètre menuiserie.",
  },
  {
    title: "Rangements intérieurs",
    description:
      "Tiroirs à hauteur de main, coulissants à bouteilles, étagères réglables, séparateurs : l’intérieur est pensé pour ce que vous rangez réellement, pas pour un module catalogue générique.",
  },
  {
    title: "Petite cuisine parisienne",
    description:
      "Profondeur réduite, coin repas intégré, meuble haut au-dessus du réfrigérateur, colonne gain de place : chaque centimètre compte lorsque la cuisine tient sur quelques mètres linéaires.",
  },
];

const optimizations: { title: string; text: string }[] = [
  {
    title: "Structurer les linéaires sans surcharger la pièce",
    text: "En appartement, une cuisine trop « bloc » étouffe le séjour ou le couloir. Le sur-mesure fractionne les volumes, joue sur les retraits et aligne les façades pour garder une lecture claire de l’espace.",
  },
  {
    title: "Ranger davantage dans la même emprise",
    text: "Colonnes pleine hauteur, tiroirs profonds calés sur vos ustensiles, meubles d’angle exploités : le mobilier capte la hauteur et les recoins que les kits standards laissent vides.",
  },
  {
    title: "Intégrer esthétiquement avec le reste du logement",
    text: "Même teinte de bois que la bibliothèque du salon, continuité de poignée, absence de socle apparent : la cuisine peut se fondre dans l’ensemble ou affirmer une ligne dédiée, sans effet « meuble rapporté ».",
  },
  {
    title: "Optimiser une cuisine existante sans tout refaire",
    text: "Remplacement de façades, ajout de colonnes, recomposition d’un linéaire : il est souvent possible d’améliorer rangement et harmonie en travaillant le mobilier, sans engager une rénovation technique complète.",
  },
];

const methodSteps: { title: string; description: string }[] = [
  {
    title: "Observation de la cuisine",
    description:
      "Linéaires disponibles, ouvertures, hauteurs sous plafond, présence d’un plan de travail à conserver ou à remplacer : le relevé part de l’existant pour cadrer le périmètre menuiserie.",
  },
  {
    title: "Prise de mesures",
    description:
      "Cotes au millimètre sur les murs, les angles et les appareils déjà en place — essentiel lorsque les murs ne sont pas d’équerre ou que la profondeur varie d’un bout à l’autre.",
  },
  {
    title: "Organisation des rangements",
    description:
      "Répartition haut/bas, colonnes, tiroirs et zones ouvertes selon vos habitudes : cette étape fixe l’ergonomie du quotidien avant le choix des matériaux.",
  },
  {
    title: "Fabrication en atelier",
    description:
      "Découpe des caissons et des façades, préparation des plans de travail si prévus, contrôle des jeux de portes et tiroirs avant livraison.",
  },
  {
    title: "Pose et réglages",
    description:
      "Calage des meubles, ajustement des façades, finitions visibles : le résultat est vérifié sur place jusqu’au fonctionnement fluide des ouvrants.",
  },
];

const cuisineParisFaq = [
  {
    question: "Combien coûte une cuisine sur mesure à Paris ?",
    answer:
      "Le budget dépend du linéaire habillé, de la hauteur des meubles hauts, du nombre de colonnes et tiroirs, des matériaux (caissons, façades, plan de travail), de la quincaillerie et de la complexité de pose. Nous ne publions pas de grille tarifaire : après échange documenté ou visite, un devis détaillé vous est transmis, sans engagement avant acceptation.",
  },
  {
    question: "Peut-on optimiser une petite cuisine parisienne sans l’agrandir ?",
    answer:
      "Oui, en jouant sur des profondeurs adaptées, des meubles hauts jusqu’à la cote utile, des colonnes étroites et une organisation intérieure calée sur vos ustensiles. L’objectif est de gagner du rangement et de la lisibilité dans l’empreinte existante, pas de modifier les cloisons.",
  },
  {
    question: "Proposez-vous une rénovation complète de cuisine clé en main ?",
    answer:
      "Non. Atelier Guyonnet intervient sur l’agencement cuisine et le mobilier sur mesure : meubles bas et hauts, façades, colonnes, rangements et plan de travail dans notre périmètre menuiserie. Plomberie, électricité, gaz, démolition ou raccordements techniques relèvent d’autres corps de métier, que vous organisez séparément si besoin.",
  },
  {
    question: "Quelle différence entre une cuisine catalogue et une cuisine sur mesure ?",
    answer:
      "Les gammes catalogue imposent des modules à pas fixe : interstices perdus, hauteurs qui ne montent pas sous plafond, profondeurs inadaptées aux murs obliques. Le sur-mesure épouse vos cotes, répartit l’intérieur selon vos usages et harmonise les façades avec le reste de votre intérieur.",
  },
  {
    question: "Comment demander un devis pour un agencement cuisine ?",
    answer:
      "Sur la page d’accueil, section Devis : indiquez votre e-mail, votre ville en Paris ou Île-de-France, et décrivez votre cuisine (dimensions approximatives, points à améliorer, photos si possible). Réponse habituelle sous 24 à 48 h ouvrées pour affiner le projet et convenir d’une visite de mesure si nécessaire.",
  },
] as const satisfies readonly CuisineParisFaqItem[];

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

export default function CuisineSurMesureParisPage() {
  return (
    <>
      <CuisineSurMesureParisJsonLd faqItems={cuisineParisFaq} />
      <Header />
      <main className="flex min-w-0 flex-1 flex-col">
        <section
          aria-labelledby="cuisine-hero-heading"
          className="border-b border-border bg-linear-to-b from-secondary/35 via-background to-background px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 md:px-10 lg:mx-auto lg:max-w-6xl lg:px-8"
        >
          <nav aria-label="Fil d’Ariane" className="mb-8 font-sans text-[11px] text-muted">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link
                  href="/"
                  className="text-foreground/80 underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/35"
                >
                  Accueil
                </Link>
              </li>
              <li aria-hidden className="text-muted">
                /
              </li>
              <li className="text-foreground/90">Cuisine sur mesure</li>
            </ol>
          </nav>

          <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
            <span className="rounded-sm border border-border bg-background/80 px-3 py-1.5">
              Paris &amp; Île-de-France
            </span>
          </p>
          <h1
            id="cuisine-hero-heading"
            className="mt-6 max-w-3xl font-serif text-3xl leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[2.5rem]"
          >
            Cuisine sur mesure à Paris
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
            Atelier Guyonnet conçoit et réalise des meubles de cuisine sur mesure : rangements,
            façades, colonnes, meubles hauts et bas, plan de travail — pour une cuisine plus
            fonctionnelle et mieux intégrée à votre intérieur, dans un périmètre d’agencement et de
            menuiserie.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link href="/#devis" className={`${ctaPrimaryClass} justify-center sm:w-auto`}>
              Demander un devis
            </Link>
            <Link href="/#inspirations" className={`${ctaSecondaryClass} justify-center sm:w-auto`}>
              Voir les inspirations
            </Link>
          </div>
        </section>

        <section
          aria-labelledby="cuisine-problem-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-3xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
                Constat
              </p>
              <h2
                id="cuisine-problem-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Quand la cuisine manque de rangement et de cohérence
              </h2>
              <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                <p>
                  Dans les appartements parisiens, la cuisine est souvent compacte : quelques mètres
                  linéaires, un coin repas qui empiète sur le couloir, des meubles bas trop profonds
                  ou, à l’inverse, des modules catalogue qui laissent des interstices inutilisés sous
                  plafond. Le résultat : plans de travail encombrés, colonnes mal exploitées et
                  façades qui ne dialoguent pas avec le salon ou la salle à manger.
                </p>
                <p>
                  Une cuisine sur mesure ne signifie pas forcément tout démolir. C’est d’abord{" "}
                  <strong className="font-medium text-foreground">penser mobilier et agencement</strong>{" "}
                  : structurer les linéaires, caler les colonnes, harmoniser les façades et organiser
                  l’intérieur des caissons pour que chaque centimètre serve au quotidien.
                </p>
                <p>
                  Atelier Guyonnet intervient sur ce volet menuiserie — conception, fabrication et pose
                  des meubles — sans se positionner comme entreprise de rénovation technique complète.
                  L’objectif : une cuisine plus rangée, plus lisible et adaptée aux dimensions réelles
                  de votre espace.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="cuisine-elements-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-2xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
                Composants
              </p>
              <h2
                id="cuisine-elements-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Ce que couvre un agencement cuisine sur mesure
              </h2>
              <p className="mt-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                Meubles, façades, colonnes et surfaces de travail : les éléments ci-dessous
                correspondent au cœur de métier Atelier Guyonnet en{" "}
                <strong className="font-medium text-foreground">menuiserie d’agencement</strong>.
              </p>
            </div>
            <ul className="mt-14 grid list-none gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
              {cuisineElements.map((item) => (
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
          aria-labelledby="cuisine-opt-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Ce que le sur-mesure change
            </p>
            <h2
              id="cuisine-opt-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Ce qu’optimise un mobilier cuisine calé sur vos cotes
            </h2>
            <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:gap-10">
              {optimizations.map((item, index) => (
                <li
                  key={item.title}
                  className="min-w-0 border-t border-border pt-8 first:border-t-0 first:pt-0 sm:border-t-0 sm:pt-0"
                >
                  <p className="font-sans text-[11px] font-medium tabular-nums tracking-[0.22em] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-serif text-xl leading-snug text-foreground">{item.title}</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-muted md:text-base">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="cuisine-method-heading"
          className="border-t border-border bg-secondary/10 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Déroulé
            </p>
            <h2
              id="cuisine-method-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              De l’étude des linéaires au mobilier posé
            </h2>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
              Parcours synthétique pour un projet cuisine ; le détail du processus global reste
              disponible sur l’accueil.
            </p>
            <ol className="relative mt-12 space-y-8 border-l border-border pl-8 sm:mt-14 lg:max-w-2xl">
              {methodSteps.map((step, index) => (
                <li key={step.title} className="relative">
                  <span
                    className="absolute -left-8 top-0.5 flex w-6 -translate-x-px justify-center font-sans text-[11px] font-medium tabular-nums text-muted"
                    aria-hidden
                  >
                    {index + 1}.
                  </span>
                  <h3 className="font-serif text-lg leading-snug text-foreground sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-muted md:text-base">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-10 font-sans text-sm text-muted">
              En savoir plus :{" "}
              <Link
                href="/#methode"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/35"
              >
                méthode complète
              </Link>{" "}
              ·{" "}
              <Link
                href="/#services"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/35"
              >
                toutes les solutions
              </Link>
              .
            </p>
          </div>
        </section>

        <section
          aria-labelledby="cuisine-zone-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Zone
            </p>
            <h2
              id="cuisine-zone-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Cuisine sur mesure à Paris et en Île-de-France
            </h2>
            <div className="mt-8 max-w-2xl space-y-4 font-sans text-base leading-relaxed text-muted md:text-lg">
              <p>
                Atelier Guyonnet intervient à <strong className="font-medium text-foreground">Paris</strong>{" "}
                et en <strong className="font-medium text-foreground">Île-de-France</strong>, selon la
                localisation, l’ampleur du mobilier à concevoir et les disponibilités de l’atelier.
              </p>
              <p>
                Pour la zone indicative et les précisions sur les déplacements, reportez-vous à la{" "}
                <Link
                  href="/"
                  className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/35"
                >
                  page d’accueil
                </Link>
                {" "}— rubrique zone d’intervention. L’
                <Link
                  href="/agencement-sur-mesure-ile-de-france"
                  className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/35"
                >
                  hub agencement Île-de-France
                </Link>{" "}
                recense aussi les autres solutions sur mesure (dressing, placard, bibliothèque, etc.).
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="cuisine-faq-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              FAQ
            </p>
            <h2
              id="cuisine-faq-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Questions fréquentes — agencement cuisine
            </h2>
            <ul className="mx-auto mt-12 max-w-3xl list-none space-y-3 lg:mx-0">
              {cuisineParisFaq.map((item) => (
                <li key={item.question} className="min-w-0">
                  <details className="group rounded-md border border-border bg-background px-4 py-3 sm:px-5 sm:py-4 [&_summary::-webkit-details-marker]:hidden">
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
          aria-labelledby="cuisine-related-heading"
          className="border-t border-border bg-background px-4 py-16 sm:px-6 md:py-20 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <h2
              id="cuisine-related-heading"
              className="font-serif text-xl tracking-tight text-foreground sm:text-2xl"
            >
              Autres solutions sur mesure
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted md:text-base">
              Pour structurer le reste du logement, consultez la page{" "}
              <Link
                href="/rangement-sur-mesure-paris"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/35"
              >
                rangement sur mesure à Paris
              </Link>
              {" "}ou{" "}
              <Link
                href="/optimisation-petit-appartement-paris"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/35"
              >
                optimisation de petit appartement
              </Link>
              . Retrouvez l’ensemble des prestations sur{" "}
              <Link
                href="/"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/35"
              >
                l’accueil
              </Link>
              .
            </p>
          </div>
        </section>

        <section
          aria-labelledby="cuisine-cta-heading"
          className="border-t border-border bg-secondary/10 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl text-center lg:px-2 lg:text-left">
            <h2
              id="cuisine-cta-heading"
              className="font-serif text-2xl tracking-tight text-foreground sm:text-3xl"
            >
              Structurer votre cuisine avec un mobilier pensé pour vos cotes
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted lg:mx-0 md:text-lg">
              Décrivez votre espace, joignez si vous le souhaitez quelques photos ou cotes : nous vous
              répondons pour organiser la suite, jusqu’à un devis documenté.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start lg:gap-4">
              <Link href="/#devis" className={`${ctaPrimaryClass} w-full min-w-[200px] sm:w-auto`}>
                Demander un devis
              </Link>
              <Link href="/#inspirations" className={`${ctaSecondaryClass} w-full min-w-[200px] sm:w-auto`}>
                Voir les inspirations
              </Link>
            </div>
            <p className="mx-auto mt-10 max-w-2xl font-sans text-sm leading-relaxed text-muted lg:mx-0">
              Navigation :{" "}
              <Link href="/" className="text-foreground underline decoration-border underline-offset-4">
                accueil
              </Link>
              ,{" "}
              <Link
                href="/#services"
                className="text-foreground underline decoration-border underline-offset-4"
              >
                services
              </Link>
              ,{" "}
              <Link
                href="/placard-sur-mesure-paris"
                className="text-foreground underline decoration-border underline-offset-4"
              >
                placard sur mesure
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
