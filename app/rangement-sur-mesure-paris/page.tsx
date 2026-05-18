import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { RangementParisFaqItem } from "@/components/seo/RangementSurMesureParisJsonLd";
import { RangementSurMesureParisJsonLd } from "@/components/seo/RangementSurMesureParisJsonLd";
import { siteConfig } from "@/lib/constants/site";

const PAGE_PATH = "/rangement-sur-mesure-paris";
const PAGE_TITLE_ABSOLUTE = "Rangement sur mesure Paris | Atelier Guyonnet";
const PAGE_DESCRIPTION =
  "Création de rangements sur mesure à Paris et en Île-de-France. Atelier Guyonnet optimise entrées, couloirs, chambres, salons et espaces perdus avec des solutions intégrées.";

const ctaPrimaryClass =
  "inline-flex min-h-12 items-center justify-center rounded-sm bg-primary px-6 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-on-dark no-underline transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const ctaSecondaryClass =
  "inline-flex min-h-12 items-center justify-center rounded-sm border border-border bg-background px-6 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-foreground no-underline transition-colors hover:border-foreground/25 hover:bg-foreground/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/15 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const spaces: { title: string; description: string }[] = [
  {
    title: "Entrée",
    description:
      "Les premiers mètres carrés concentrent manteaux, clefs et chaussures : sans meuble calé sur le mur, l’espace devient vite un dépôt au passage. Un volume sur mesure redonne une lecture claire dès l’ouverture de la porte.",
  },
  {
    title: "Couloir",
    description:
      "Les circulations étroites gagnent pourtant du stockage si la profondeur et les ouvertures sont étudiées : linéaire haut, niche basse ou module fin le long d’une cloison — sans bloquer les va-et-vient du quotidien.",
  },
  {
    title: "Chambre",
    description:
      "Manque de placard intégré, lits qui empiètent sur les circulations, piles sur une commode : la chambre parisienne profite d’un agencement qui regroupe vêtements, linge et affaires personnelles en un seul ensemble cohérent.",
  },
  {
    title: "Salon",
    description:
      "Au-delà du meuble TV, le salon peut accueillir des rangements bas ou des colonnes dissimulées derrière un panneau : moins de caisses visibles, plus de surface utile pour jeux, outils ou archives domestiques.",
  },
  {
    title: "Sous-pente",
    description:
      "Volumes obliques souvent abandonnés : le sur-mesure suit la géométrie du toit pour créer des modules ouvrables où le meuble standard ne tiendrait pas sans laisser un vide inesthétique.",
  },
  {
    title: "Recoin ou alcôve",
    description:
      "Un angle rentrant ou une niche héritée du plan devient un bloc fonctionnel : étagères, tiroirs ou assise-coffre selon la largeur disponible — l’objectif est d’effacer l’effet « coin perdu ».",
  },
];

const solutions: { title: string; description: string }[] = [
  {
    title: "Linéaire placard intégré",
    description:
      "Une continuité de façade le long d’un mur pour absorber un maximum d’objets dans un seul geste graphique — la base d’un projet d’optimisation globale, combinée ou non à d’autres fonctions dans la pièce.",
  },
  {
    title: "Meuble bas sur mesure",
    description:
      "En dessous d’une fenêtre, derrière un canapé ou sous une poutre : un meuble ras de sol libère la hauteur sous plafond visuelle tout en offrant tiroirs ou volets pour le quotidien.",
  },
  {
    title: "Volume toute hauteur",
    description:
      "Du sol au plafond pour capter toute la hauteur utile : idéal lorsque le manque de surface au sol impose d’utiliser le vide vertical avec des modules hauts à faible profondeur ou des réserves saisonnières.",
  },
  {
    title: "Banc coffre",
    description:
      "Assise dans l’entrée, dans une chambre ou face à une cuisine ouverte : le banc coffre structure un point d’arrêt dans la pièce tout en avalant sacs, chaussures ou textiles — utile en studio comme en famille.",
  },
  {
    title: "Étagères intégrées",
    description:
      "Ouvertes sur tout ou partie du linéaire pour mélanger livres, paniers et objets à portée de main ; le rythme des tablettes est défini sur vos contenants réels, pas sur un pas de perçage catalogue.",
  },
  {
    title: "Rangement fermé et niches ouvertes",
    description:
      "Combiner portes pleines et zones dégagées sur un même mur : refermer le désordre tout en gardant quelques ouvertures pour l’usage quotidien ou l’esthétique — une réponse type « mur multifonction » dans les petits appartements.",
  },
];

const benefits: { title: string; text: string }[] = [
  {
    title: "Gagner de la place sans surcharger la pièce",
    text: "Le sur-mesure choisit la profondeur juste nécessaire, évite les meubles trop saillants et regroupe plusieurs fonctions dans un même linéaire au lieu d’empiler trois unités différentes.",
  },
  {
    title: "Caler le rangement sur les objets que vous utilisez vraiment",
    text: "Sacs cabas, matériel sportif, boîtes de rangement, jouets : les modules ne sont pas interchangeables à l’infini ; ils sont dimensionnés après inventaire raisonnable de ce qui doit rester accessible.",
  },
  {
    title: "Aligner le meuble sur la palette de votre intérieur",
    text: "Matériaux, absence de poignées apparentes, teinte des façades ou niche apparente : le rendu peut se faire discret au point de se confondre avec le mur, ou plus affirmé — mais toujours en cohérence avec le reste du logement.",
  },
  {
    title: "Viser un résultat plus durable qu’un meuble standard",
    text: "Un agencement d’atelier est réglé après pose, avec fixation adaptée aux supports parisiens souvent inégaux — ce qui limite les jeux de portes et les alignements qui se dégradent vite sur du mobilier non adapté.",
  },
];

const methodSteps: { title: string; description: string }[] = [
  {
    title: "Identifier les zones perdues",
    description:
      "Relevé visuel et mesure des linéaires inexploités : angles, parties hautes de mur, renfoncements derrière une porte ou sous un tableau électrique à préserver accessible.",
  },
  {
    title: "Comprendre vos habitudes",
    description:
      "Fréquence d’usage, nombre de personnes, objets encombrants ou saisonniers : la répartition tiroirs / étagères / penderie découle de ce diagnostic, pas d’un plan type.",
  },
  {
    title: "Définir les volumes utiles",
    description:
      "Profondeur, hauteur libre, largeur hors tout des portes : chaque cote utile est verrouillée avant fabrication pour éviter les réductions de contenance en cours de chantier.",
  },
  {
    title: "Concevoir une solution intégrée",
    description:
      "Plans, choix de matériaux, principe d’ouverture et devis structuré : vous validez une proposition unique à votre appartement, pas un assemblage de références catalogue.",
  },
  {
    title: "Poser et ajuster proprement",
    description:
      "Mise en place, calage, réglage des portes et finitions de vision : la dernière étape assure que le rendu correspond au dessin validé et tient dans le temps.",
  },
];

const rangementParisFaq = [
  {
    question: "Quel type de rangement sur mesure peut-on créer dans un petit appartement ?",
    answer:
      "On peut combiner meubles bas, colonnes hautes, bans coffres, niches ouvertes, linéaires fermés ou un mur mixte ouvert/fermé. Le bon parti dépend de votre plan : studio, deux-pièces en enfilade ou famille sur surface compacte. Atelier Guyonnet oriente la proposition vers ce qui est réellement fabricable et habitable dans votre métrique, pas vers une liste figée de modules.",
  },
  {
    question: "Le sur-mesure est-il utile pour une entrée ou un couloir ?",
    answer:
      "Très souvent oui, car ce sont des lieux où quelques centimètres de profondeur ou de largeur conditionnent le confort de circulation. Un meuble calé sur les côtes réelles évite les portes qui frottent, les angles vifs et les meubles « presque » à la bonne taille qui laissent des interstices inutilisables.",
  },
  {
    question: "Peut-on créer un rangement discret qui s’intègre au décor ?",
    answer:
      "Oui : façades sans poignée, même teinte que le mur adjacent, absence de socle apparent ou continuation d’une lignée de plinthes existante. Le niveau de discrétion se fixe en amont avec vous, selon que vous souhaitez faire disparaître le volume ou au contraire en faire un motif architectural.",
  },
  {
    question: "Combien coûte un rangement sur mesure à Paris ?",
    answer:
      "Le budget varie avec la surface habillée, la complexité du volume (angles, découpes, intégrations techniques), les matériaux, les finitions et le temps de pose. Aucun montant universel n’est crédiable sans étude : après échanges et mesures, un devis itemisé vous est proposé ; vous restez libre d’accepter ou de ne pas donner suite.",
  },
  {
    question: "Comment demander un devis pour un rangement sur mesure ?",
    answer:
      "Rendez-vous sur l’accueil dans la section Devis : formulaire avec coordonnées, ville et description du projet (pièces concernées, photos utiles). Réponse habituelle sous 24 à 48h ouvrées pour préciser la suite et, le cas échéant, planifier une visite ou un complément d’information.",
  },
] as const satisfies readonly RangementParisFaqItem[];

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

export default function RangementSurMesureParisPage() {
  return (
    <>
      <RangementSurMesureParisJsonLd faqItems={rangementParisFaq} />
      <Header />
      <main className="flex min-w-0 flex-1 flex-col">
        <section
          aria-labelledby="rangement-hero-heading"
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
              <li className="text-foreground/90">Rangement sur mesure</li>
            </ol>
          </nav>

          <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
            <span className="rounded-sm border border-border bg-background/80 px-3 py-1.5">
              Paris &amp; Île-de-France
            </span>
          </p>
          <h1
            id="rangement-hero-heading"
            className="mt-6 max-w-3xl font-serif text-3xl leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[2.5rem]"
          >
            Rangement sur mesure à Paris
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
            Atelier Guyonnet conçoit des solutions de rangement sur mesure pour optimiser les petits
            appartements, structurer les espaces du quotidien et transformer les zones perdues en
            rangements utiles, discrets et durables.
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
          aria-labelledby="rangement-problem-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-3xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
                Enjeu
              </p>
              <h2
                id="rangement-problem-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Quand chaque espace peut devenir utile
              </h2>
              <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                <p>
                  À Paris, le manque de rangement ne vient pas toujours d’une surface trop petite : il
                  naît souvent d’espaces mal exploités — une entrée encombrée dès le seuil, une chambre
                  sans placard intégré, un mur vide entre deux fenêtres, un angle de pièce inutilisé, une
                  hauteur sous plafond ignorée ou une pente de toit qui décourage l’achat de meubles
                  standards.
                </p>
                <p>
                  Le <strong className="font-medium text-foreground">rangement sur mesure</strong>{" "}
                  déplace la question : au lieu d’ajouter un meuble générique, on cartographie les zones
                  où un volume peut se glisser sans nuire à la lumière ni aux circulations. L’approche
                  est celle d’un{" "}
                  <strong className="font-medium text-foreground">meuble de rangement sur mesure</strong>{" "}
                  intégré au logement — relevant autant de l’agencement que du menuiserie — pour un{" "}
                  <strong className="font-medium text-foreground">gain de place</strong> lisible au
                  quotidien.
                </p>
                <p>
                  Que vous visiez une optimisation complète d’un studio ou un renfort ciblé dans une
                  chambre, la démarche reste artisanale : partir des usages, puis des cotes réelles —
                  pas l’inverse.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="rangement-spaces-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-2xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
                Périmètre
              </p>
              <h2
                id="rangement-spaces-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Des pièces à traiter comme des systèmes
              </h2>
              <p className="mt-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                Chaque zone ci-dessous peut accueillir un ou plusieurs principes de rangement —
                seules ou combinées dans un même projet.
              </p>
            </div>
            <ul className="mt-14 grid list-none gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
              {spaces.map((item) => (
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
          aria-labelledby="rangement-solutions-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Leviers
            </p>
            <h2
              id="rangement-solutions-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Des solutions de rangement possibles, pensées ensemble
            </h2>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
              Ici, l’objectif n’est pas de refaire l’inventaire des typologies de placard : il s’agit
              d’une vision transversale d’{" "}
              <strong className="font-medium text-foreground">rangement intégré</strong>, que l’on
              assemble selon votre plan et vos priorités (quotidien, saisonnier, technique).
            </p>
            <ul className="mt-14 grid list-none gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
              {solutions.map((item) => (
                <li key={item.title} className="min-w-0">
                  <article className="flex h-full flex-col rounded-md border border-border bg-secondary/10 p-6 sm:p-7">
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
          aria-labelledby="rangement-why-heading"
          className="border-t border-border bg-secondary/10 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Sur mesure
            </p>
            <h2
              id="rangement-why-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Pourquoi choisir du rangement sur mesure à Paris
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
                  <p className="mt-2 font-sans text-sm leading-relaxed text-muted md:text-base">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="rangement-method-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Déroulé
            </p>
            <h2
              id="rangement-method-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Méthode courte, du constat à la pose
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
              Repères complémentaires :{" "}
              <Link
                href="/#methode"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/35"
              >
                méthode sur l’accueil
              </Link>
              ,{" "}
              <Link
                href="/#services"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/35"
              >
                catalogue des prestations
              </Link>
              .
            </p>
          </div>
        </section>

        <section
          aria-labelledby="rangement-zone-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Zone
            </p>
            <h2
              id="rangement-zone-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Paris et Île-de-France
            </h2>
            <div className="mt-8 max-w-2xl space-y-4 font-sans text-base leading-relaxed text-muted md:text-lg">
              <p>
                Atelier Guyonnet intervient à <strong className="font-medium text-foreground">Paris</strong>{" "}
                et en <strong className="font-medium text-foreground">Île-de-France</strong>, selon la
                localisation, l’ampleur du projet (ponctuel ou multi-pièces) et les disponibilités de
                l’atelier.
              </p>
              <p>
                Pour passer du constat à une proposition chiffrée, le plus direct reste le{" "}
                <Link
                  href="/#devis"
                  className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/35"
                >
                  formulaire de demande de devis
                </Link>{" "}
                sur la page d’accueil — première étape avant fixation d’un éventuel rendez-vous sur place.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="rangement-faq-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              FAQ
            </p>
            <h2
              id="rangement-faq-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Questions fréquentes — rangement sur mesure
            </h2>
            <ul className="mx-auto mt-12 max-w-3xl list-none space-y-3 lg:mx-0">
              {rangementParisFaq.map((item) => (
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
          aria-labelledby="rangement-related-heading"
          className="border-t border-border bg-secondary/10 px-4 py-16 sm:px-6 md:py-20 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <h2
              id="rangement-related-heading"
              className="font-serif text-xl tracking-tight text-foreground sm:text-2xl"
            >
              Autres solutions sur mesure
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted md:text-base">
              Besoin plus ciblé sur une garde-robe complète ? Voir{" "}
              <Link
                href="/dressing-sur-mesure-paris"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/35"
              >
                dressing sur mesure à Paris
              </Link>
              . Pour un volume fermé le long d’une entrée ou d’un couloir, la page{" "}
              <Link
                href="/placard-sur-mesure-paris"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/35"
              >
                placard sur mesure à Paris
              </Link>{" "}
              détaille un angle complémentaire. Retour à{" "}
              <Link href="/" className="text-foreground underline decoration-border underline-offset-4">
                l’accueil
              </Link>{" "}
              ou aux{" "}
              <Link
                href="/#services"
                className="text-foreground underline decoration-border underline-offset-4"
              >
                services
              </Link>
              .
            </p>
          </div>
        </section>

        <section
          aria-labelledby="rangement-cta-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl text-center lg:px-2 lg:text-left">
            <h2
              id="rangement-cta-heading"
              className="font-serif text-2xl tracking-tight text-foreground sm:text-3xl"
            >
              Donner une ossature claire à votre logement
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted lg:mx-0 md:text-lg">
              Décrivez les pièces à traiter et ce qui vous manque aujourd’hui : nous revenons vers vous
              pour cadrer la faisabilité avant tout engagement financier.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start lg:gap-4">
              <Link href="/#devis" className={`${ctaPrimaryClass} w-full min-w-[200px] sm:w-auto`}>
                Demander un devis
              </Link>
              <Link
                href="/#inspirations"
                className={`${ctaSecondaryClass} w-full min-w-[200px] sm:w-auto`}
              >
                Voir les inspirations
              </Link>
            </div>
            <p className="mx-auto mt-10 max-w-2xl font-sans text-sm leading-relaxed text-muted lg:mx-0">
              Liens utiles :{" "}
              <Link href="/" className="text-foreground underline decoration-border underline-offset-4">
                accueil
              </Link>
              ,{" "}
              <Link
                href="/#inspirations"
                className="text-foreground underline decoration-border underline-offset-4"
              >
                inspirations
              </Link>
              ,{" "}
              <Link
                href="/dressing-sur-mesure-paris"
                className="text-foreground underline decoration-border underline-offset-4"
              >
                dressing
              </Link>
              ,{" "}
              <Link
                href="/placard-sur-mesure-paris"
                className="text-foreground underline decoration-border underline-offset-4"
              >
                placard
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
