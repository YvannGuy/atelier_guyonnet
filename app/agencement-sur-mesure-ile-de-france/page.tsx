import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { AgencementIdfFaqItem } from "@/components/seo/AgencementSurMesureIleDeFranceJsonLd";
import { AgencementSurMesureIleDeFranceJsonLd } from "@/components/seo/AgencementSurMesureIleDeFranceJsonLd";
import { SEO_SERVICE_PAGES } from "@/lib/constants/seo-pages";
import { siteConfig } from "@/lib/constants/site";

const PAGE_PATH = "/agencement-sur-mesure-ile-de-france";
const PAGE_TITLE_ABSOLUTE = "Agencement sur mesure Île-de-France | Atelier Guyonnet";
const PAGE_DESCRIPTION =
  "Atelier Guyonnet conçoit des agencements sur mesure en Île-de-France : dressings, placards, rangements, bibliothèques, meubles TV et solutions gain de place.";

const ctaPrimaryClass =
  "inline-flex min-h-12 items-center justify-center rounded-sm bg-primary px-6 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-on-dark no-underline transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const ctaSecondaryClass =
  "inline-flex min-h-12 items-center justify-center rounded-sm border border-border bg-background px-6 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-foreground no-underline transition-colors hover:border-foreground/25 hover:bg-foreground/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/15 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const linkUnderline =
  "text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/35";

const pageDressing = SEO_SERVICE_PAGES.find((p) => p.slug === "dressing-sur-mesure-paris")!;
const pagePlacard = SEO_SERVICE_PAGES.find((p) => p.slug === "placard-sur-mesure-paris")!;
const pageRangement = SEO_SERVICE_PAGES.find((p) => p.slug === "rangement-sur-mesure-paris")!;
const pageBibliotheque = SEO_SERVICE_PAGES.find((p) => p.slug === "bibliotheque-sur-mesure-paris")!;
const pageMeubleTv = SEO_SERVICE_PAGES.find((p) => p.slug === "meuble-tv-sur-mesure-paris")!;
const pageOptimisation = SEO_SERVICE_PAGES.find((p) => p.slug === "optimisation-petit-appartement-paris")!;
const pageCuisine = SEO_SERVICE_PAGES.find((p) => p.slug === "cuisine-sur-mesure-paris")!;

const serviceOffers: {
  title: string;
  href: string;
  intro: string;
}[] = [
  {
    title: "Dressing sur mesure à Paris",
    href: pageDressing.canonicalPath,
    intro:
      "Garde-robe intégrée sur vos cotes et vos habitudes — utile à l’échelle du logement francilien où la chambre est souvent compacte.",
  },
  {
    title: "Placard sur mesure à Paris",
    href: pagePlacard.canonicalPath,
    intro:
      "Entrées, couloirs et renfoncements : transformer un linéaire muré en volume utile sans sacrifier la circulation.",
  },
  {
    title: "Rangement sur mesure à Paris",
    href: pageRangement.canonicalPath,
    intro:
      "Vision transversale des pièces : combinations ouvert/fermé, niches et meubles calés pour éviter l’empilement de modules inadaptés.",
  },
  {
    title: "Bibliothèque sur mesure à Paris",
    href: pageBibliotheque.canonicalPath,
    intro:
      "Structurer un mur pour livres, objets et caissons fermés avec un même langage de façade.",
  },
  {
    title: "Meuble TV sur mesure à Paris",
    href: pageMeubleTv.canonicalPath,
    intro:
      "Mur salon : intégration du multimédia, passages de câbles et volumes de rangement coordonnés.",
  },
  {
    title: "Optimisation de petit appartement à Paris",
    href: pageOptimisation.canonicalPath,
    intro:
      "Studios et deux-pièces : plan global pour gagner du linéaire utile sans surcharger visuellement l’ensemble.",
  },
  {
    title: "Cuisine sur mesure à Paris",
    href: pageCuisine.canonicalPath,
    intro:
      "Meubles bas et hauts, colonnes, façades et plan de travail : agencement menuiserie pour une cuisine plus rangée, sans rénovation technique complète.",
  },
];

const besoinsFrequents: { title: string; description: string }[] = [
  {
    title: "Gagner du rangement dans un petit appartement",
    description:
      "Lorsque les placards de série ne tiennent pas ou laissent des interstices, le sur-mesure capte la hauteur et les recoins pour libérer le centre de la pièce.",
  },
  {
    title: "Structurer une entrée ou un couloir",
    description:
      "Circulations étroites en région parisienne : un meuble calé sur la profondeur réelle évite les angles vifs et les portes qui accrochent.",
  },
  {
    title: "Créer un dressing adapté",
    description:
      "Niche, pièce dédiée ou partie de chambre : la penderie et les tablettes suivent votre garde-robe réelle, pas un pas de perçage catalogue.",
  },
  {
    title: "Exploiter un mur de salon",
    description:
      "Un seul plan de façade peut accueillir rangements fermés, niches et zone média — au lieu de trois meubles rapportés de largeurs différentes.",
  },
  {
    title: "Intégrer une bibliothèque ou un meuble TV",
    description:
      "Composer un linéaire cohérent pour livres, équipements et décor : même principe que deux pages détaillées du site, réunies dans une logique d’ensemble en IdF.",
  },
  {
    title: "Optimiser un studio ou un espace compact",
    description:
      "L’enjeu est souvent multifonction : dormir, recevoir, travailler dans le même volume — le mobilier intégré clarifie les rôles sans changer la surface au sol.",
  },
];

const benefits: { title: string; text: string }[] = [
  {
    title: "Exploiter les dimensions exactes de l’espace",
    text: "Les cotes réelles — plinthes, angles, parties hautes — conditionnent la faisabilité ; l’atelier part de ces mesures plutôt que d’un gabarit moyen de grande distribution.",
  },
  {
    title: "Adapter les rangements aux objets et habitudes",
    text: "Profondeur de tiroir, hauteur de casier, part de portes pleines : le contenu du quotidien drive la composition, pas l’inverse.",
  },
  {
    title: "Harmoniser l’aménagement avec le style intérieur",
    text: "Teintes, relief de façade et présence de poignées sont cadrés avec vous pour que l’ensemble prolonge le ton déjà présent dans le logement — du très discret au plus affirmé.",
  },
  {
    title: "Viser une solution plus durable qu’un meuble standard",
    text: "Fabrication menuisière, fixation adaptée aux supports et réglage après pose limitent les jeux et tassements que l’on voit vite sur du mobilier non calé au mur.",
  },
];

const methodSteps: { title: string; description: string }[] = [
  {
    title: "Comprendre l’espace et les usages",
    description:
      "Échanges sur le logement, pièces concernées, contraintes (fenêtres, radiateurs, tableau électrique) et habitudes : le cahier des charges sort de la vie réelle du foyer.",
  },
  {
    title: "Identifier les contraintes et zones perdues",
    description:
      "Relevé ou complément de cotes : angles, sous-pentes, entrées étroites ou volumes hauts inexploités — là où un module standard laisse du vide ou dépasse.",
  },
  {
    title: "Proposer une solution sur mesure",
    description:
      "Plans, choix de matériaux et devis structuré : vous validez un parti unique avant lancement atelier, avec possibilité de découper le chantier en lots si besoin.",
  },
  {
    title: "Préparer les éléments et finitions",
    description:
      "Usinage, assemblage partiel en atelier et contrôle des jeux : les pièces arrivent sur site prêtes pour une pose nette sur les irregularités habituelles des murs.",
  },
  {
    title: "Poser et ajuster proprement",
    description:
      "Installation, calage, réglage des façades et portes, finitions de vision : la phase chantier matérialise le dessin validé.",
  },
];

const departementsIdf = [
  "Paris",
  "Hauts-de-Seine",
  "Seine-Saint-Denis",
  "Val-de-Marne",
  "Yvelines",
  "Essonne",
  "Seine-et-Marne",
  "Val-d’Oise",
] as const;

const agencementIdfFaq = [
  {
    question: "Qu’est-ce qu’un agencement sur mesure ?",
    answer:
      "Il s’agit de concevoir et de fabriquer des volumes de rangement ou de mobilier intégré calés sur votre espace, vos usages et vos finitions — plutôt que d’assembler des éléments de série. Atelier Guyonnet travaille comme menuisier d’agencement : dressings, placards, bibliothèques, meubles TV, plans d’optimisation pour petits appartements, avec étude préalable et pose ajustée.",
  },
  {
    question: "Intervenez-vous dans toute l’Île-de-France ?",
    answer:
      "L’activité couvre Paris et les départements d’Île-de-France selon la localisation du projet, sa taille et la disponibilité de l’atelier. Il n’y a pas d’engagement automatique « partout, tout le temps » : la faisabilité logistique est vérifiée après premier échange. Les déplacements sont confirmés après ce contact, selon la nature du projet et la localisation.",
  },
  {
    question: "Quels types d’aménagements pouvez-vous concevoir ?",
    answer:
      "Les prestations détaillées en ligne couvrent notamment le dressing, le placard intégré, le rangement sur mesure, la bibliothèque murale, le meuble TV intégré et l’optimisation de petit appartement ou studio. Plusieurs de ces briques peuvent être combinées dans un même projet lorsque le budget et le planning le permettent.",
  },
  {
    question: "Combien coûte un projet d’agencement sur mesure ?",
    answer:
      "Le montant dépend du nombre d’éléments fabriqués, des dimensions, des matériaux, des finitions, du temps de pose et des contraintes techniques (angles, intégrations, reprises murales). Sans cotes ni parti validé, aucun prix fixe n’est sérieux. Après description du besoin, un devis itemisé vous est proposé ; vous restez libre de ne pas donner suite.",
  },
  {
    question: "Comment demander un devis pour un projet en Île-de-France ?",
    answer:
      "Rendez-vous sur la page d’accueil, section Devis : le formulaire permet d’indiquer votre commune, le type de logement et les pièces concernées. Plus votre message est précis (photos, dimensions approximatives), plus la réponse peut être ciblée. Atelier Guyonnet revient vers vous pour la suite et, si nécessaire, pour convenir d’un complément d’information avant de confirmer un déplacement.",
  },
] as const satisfies readonly AgencementIdfFaqItem[];

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

export default function AgencementSurMesureIleDeFrancePage() {
  return (
    <>
      <AgencementSurMesureIleDeFranceJsonLd faqItems={agencementIdfFaq} />
      <Header />
      <main className="flex min-w-0 flex-1 flex-col">
        <section
          aria-labelledby="idf-hero-heading"
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
              <li className="text-foreground/90">Agencement Île-de-France</li>
            </ol>
          </nav>

          <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
            <span className="rounded-sm border border-border bg-background/80 px-3 py-1.5">
              Paris &amp; Île-de-France
            </span>
          </p>
          <h1
            id="idf-hero-heading"
            className="mt-6 max-w-3xl font-serif text-3xl leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[2.5rem]"
          >
            Agencement sur mesure en Île-de-France
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
            Atelier Guyonnet conçoit des aménagements sur mesure pour optimiser les intérieurs en Île-de-France :
            dressings, placards intégrés, rangements, bibliothèques, meubles TV et solutions gain de place adaptées
            à chaque espace.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link href="/#devis" className={`${ctaPrimaryClass} justify-center sm:w-auto`}>
              Demander un devis
            </Link>
            <Link href="/#services" className={`${ctaSecondaryClass} justify-center sm:w-auto`}>
              Voir les services
            </Link>
          </div>
        </section>

        <section
          aria-labelledby="idf-intro-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-3xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
                Approche
              </p>
              <h2
                id="idf-intro-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Un intérieur pensé autour de vos usages
              </h2>
              <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                <p>
                  L’<strong className="font-medium text-foreground">agencement intérieur sur mesure</strong> ne se
                  réduit pas à « poser un meuble » : il s’agit de comprendre la géométrie du logement, les trajets du
                  quotidien, les zones mal exploitées et les objets qui doivent rester à portée — pour proposer des
                  volumes <strong className="font-medium text-foreground">cohérents entre eux</strong>.
                </p>
                <p>
                  En <strong className="font-medium text-foreground">Île-de-France</strong>, les surfaces compactes
                  et les circulations exigeantes rendent ce travail de cadrage d’autant plus utile qu’un{" "}
                  <strong className="font-medium text-foreground">mobilier sur mesure</strong> peut remplacer une
                  succession de meubles achetables mais mal dimensionnés. Atelier Guyonnet intervient comme artisan
                  d’<strong className="font-medium text-foreground">aménagement intérieur sur mesure</strong>,
                  avec une prise en charge du projet jusqu’à la pose réglée.
                </p>
                <p>
                  Chaque proposition reste ancrée dans le faisable : matériaux, délais d’atelier et logistique de
                  chantier sont explicités avant engagement financier — sans portfolio ni prix inventés.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="idf-besoins-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-2xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
                Territoire
              </p>
              <h2
                id="idf-besoins-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Les besoins les plus fréquents en Île-de-France
              </h2>
              <p className="mt-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                Demandes typiques lorsque l’on optimise un{" "}
                <strong className="font-medium text-foreground">appartement en Île-de-France</strong> — la combinaison
                réelle dépend de votre plan et de vos priorités.
              </p>
            </div>
            <ul className="mt-14 grid list-none gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
              {besoinsFrequents.map((item) => (
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
          aria-labelledby="idf-solutions-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Offre
            </p>
            <h2
              id="idf-solutions-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Les solutions Atelier Guyonnet
            </h2>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
              Chaque lien mène à une page détaillée — pour approfondir un type de prestation tout en gardant le même
              interlocuteur atelier sur l’ensemble du projet.
            </p>
            <ul className="mt-14 grid list-none gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
              {serviceOffers.map((item) => (
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
                        Lire la page dédiée
                      </Link>
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="idf-why-heading"
          className="border-t border-border bg-secondary/10 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Sur mesure
            </p>
            <h2
              id="idf-why-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Pourquoi choisir un agencement sur mesure
            </h2>
            <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:gap-10">
              {benefits.map((item, index) => (
                <li
                  key={item.title}
                  className="min-w-0 border-t border-border pt-8 first:border-t-0 first:pt-0 sm:border-t-0 sm:pt-0"
                >
                  <p className="font-sans text-[11px] font-medium tabular-nums tracking-[0.22em] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-serif text-xl leading-snug text-foreground">{item.title}</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-muted md:text-base">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="idf-zone-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Zone
            </p>
            <h2
              id="idf-zone-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Zone d’intervention en Île-de-France
            </h2>
            <div className="mt-8 max-w-2xl space-y-5 font-sans text-base leading-relaxed text-muted md:text-lg">
              <p>
                Atelier Guyonnet intervient à <strong className="font-medium text-foreground">Paris</strong> et en{" "}
                <strong className="font-medium text-foreground">Île-de-France</strong> selon la localisation, la
                nature du projet et les disponibilités de l’atelier. Pages locales :{" "}
                <Link href="/zones/paris" className={`${linkUnderline} font-medium`}>
                  agencement sur mesure à Paris
                </Link>
                {" · "}
                <Link href="/zones/boulogne-billancourt" className={`${linkUnderline} font-medium`}>
                  agencement sur mesure à Boulogne-Billancourt
                </Link>
                {" · "}
                <Link href="/zones/neuilly-sur-seine" className={`${linkUnderline} font-medium`}>
                  agencement sur mesure à Neuilly-sur-Seine
                </Link>
                {" · "}
                <Link href="/zones/levallois-perret" className={`${linkUnderline} font-medium`}>
                  agencement sur mesure à Levallois-Perret
                </Link>
                {" · "}
                <Link href="/zones/issy-les-moulineaux" className={`${linkUnderline} font-medium`}>
                  agencement sur mesure à Issy-les-Moulineaux
                </Link>
                {" · "}
                <Link href="/zones/vincennes" className={`${linkUnderline} font-medium`}>
                  agencement sur mesure à Vincennes
                </Link>
                .
              </p>
              <p className="font-sans text-sm text-muted md:text-base">
                Départements concernés par les demandes récurrentes :{" "}
                {departementsIdf.map((d, i) => (
                  <span key={d}>
                    {d}
                    {i < departementsIdf.length - 1 ? " · " : ""}
                  </span>
                ))}
              </p>
              <p className="rounded-md border border-border bg-secondary/10 p-4 font-sans text-sm leading-relaxed text-muted md:text-[15px]">
                Les déplacements sont confirmés après un premier échange, selon la nature du projet et la
                localisation — sans promesse d’intervention systématique sur l’ensemble du territoire au même rythme.
              </p>
              <p>
                Pour lancer un projet :{" "}
                <Link href="/#devis" className={`${linkUnderline} font-medium`}>
                  formulaire de devis sur l’accueil
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="idf-method-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Déroulé
            </p>
            <h2
              id="idf-method-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Méthode de travail courte
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
            <p className="mt-10 font-sans text-sm text-muted">
              Approche détaillée également sur l’accueil :{" "}
              <Link href="/#methode" className={linkUnderline}>
                notre méthode
              </Link>
              .
            </p>
          </div>
        </section>

        <section
          aria-labelledby="idf-faq-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              FAQ
            </p>
            <h2
              id="idf-faq-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Questions fréquentes — agencement en Île-de-France
            </h2>
            <ul className="mx-auto mt-12 max-w-3xl list-none space-y-3 lg:mx-0">
              {agencementIdfFaq.map((item) => (
                <li key={item.question} className="min-w-0">
                  <details className="group rounded-md border border-border bg-secondary/10 p-4 sm:p-5 [&_summary::-webkit-details-marker]:hidden">
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
          aria-labelledby="idf-pages-heading"
          className="border-t border-border bg-secondary/10 px-4 py-16 sm:px-6 md:py-20 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <h2
              id="idf-pages-heading"
              className="font-serif text-xl tracking-tight text-foreground sm:text-2xl"
            >
              Pages services
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted md:text-base">
              Accès direct aux fiches détaillées (même périmètre sur-mesure, angles de rédaction spécifiques) :
            </p>
            <ul className="mt-8 grid list-none gap-2 sm:grid-cols-2 lg:max-w-3xl">
              {serviceOffers.map((item) => (
                <li key={item.href}>
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
              <Link href="/#services" className={linkUnderline}>
                Aperçu des services
              </Link>
              {" · "}
              <Link href="/#inspirations" className={linkUnderline}>
                Inspirations
              </Link>
            </p>
          </div>
        </section>

        <section
          aria-labelledby="idf-cta-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl text-center lg:px-2 lg:text-left">
            <h2
              id="idf-cta-heading"
              className="font-serif text-2xl tracking-tight text-foreground sm:text-3xl"
            >
              Un projet d’agencement en Île-de-France ?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted lg:mx-0 md:text-lg">
              Décrivez votre logement et les pièces à traiter : nous revenons vers vous pour la suite et, le cas
              échéant, les modalités de déplacement après ce premier échange.
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
              Liens :{" "}
              <Link href="/" className={linkUnderline}>
                accueil
              </Link>
              ,{" "}
              <Link href="/#inspirations" className={linkUnderline}>
                inspirations
              </Link>
              ,{" "}
              <Link href={pageDressing.canonicalPath} className={linkUnderline}>
                dressing
              </Link>
              ,{" "}
              <Link href={pagePlacard.canonicalPath} className={linkUnderline}>
                placard
              </Link>
              ,{" "}
              <Link href={pageRangement.canonicalPath} className={linkUnderline}>
                rangement
              </Link>
              ,{" "}
              <Link href={pageBibliotheque.canonicalPath} className={linkUnderline}>
                bibliothèque
              </Link>
              ,{" "}
              <Link href={pageMeubleTv.canonicalPath} className={linkUnderline}>
                meuble TV
              </Link>
              ,{" "}
              <Link href={pageOptimisation.canonicalPath} className={linkUnderline}>
                optimisation petit appartement
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
