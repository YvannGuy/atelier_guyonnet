import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { OptimisationPetitAppartementParisFaqItem } from "@/components/seo/OptimisationPetitAppartementParisJsonLd";
import { OptimisationPetitAppartementParisJsonLd } from "@/components/seo/OptimisationPetitAppartementParisJsonLd";
import { siteConfig } from "@/lib/constants/site";

const PAGE_PATH = "/optimisation-petit-appartement-paris";
const PAGE_TITLE_ABSOLUTE = "Optimisation petit appartement Paris | Atelier Guyonnet";
const PAGE_DESCRIPTION =
  "Solutions sur mesure pour optimiser un petit appartement à Paris : rangements intégrés, placards, meubles gain de place et aménagements pensés au centimètre près.";

const ctaPrimaryClass =
  "inline-flex min-h-12 items-center justify-center rounded-sm bg-primary px-6 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-on-dark no-underline transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const ctaSecondaryClass =
  "inline-flex min-h-12 items-center justify-center rounded-sm border border-border bg-background px-6 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-foreground no-underline transition-colors hover:border-foreground/25 hover:bg-foreground/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/15 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const linkUnderline =
  "text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/35";

const zones: { title: string; description: string }[] = [
  {
    title: "Entrée",
    description:
      "Les premiers mètres linéaires fixent le ton : sans assise-coffre ou module fin, chaussures et sacs envahissent le passage. Caler un volume sur les cotes réelles évite de bloquer l’ouverture de porte ou le dégagement vers le salon.",
  },
  {
    title: "Salon",
    description:
      "Mur TV, fenêtre basse et canapé se disputent souvent la même zone : l’optimisation vise un agencement qui regroupe technique, rangement quotidien et circulation sans empiler trois meubles de profondeurs différentes.",
  },
  {
    title: "Chambre",
    description:
      "Dans une alcôve ou une pièce réduite, la solution combine souvent tête de lit, penderie courte ou linéaire haut — l’objectif est de libérer le plancher tout en gardant les affaires personnelles à portée.",
  },
  {
    title: "Couloir",
    description:
      "Profondeur limitée mais hauteur disponible : un placard technique ou des colonnes peu saillantes peuvent capter du stockage sans gêner le flux vers cuisine ou chambre — à condition de composer sur mesure le pas des portes.",
  },
  {
    title: "Coin bureau",
    description:
      "Face à la télé ou dans une niche : un plateau étroit, tiroirs discrets ou volet refermable permet de replier le télétravail sans laisser un bureau comme obstacle permanent dans le passage.",
  },
  {
    title: "Sous-pente, alcôve ou recoin",
    description:
      "Angles ou géométrie de toit abandonnés par le mobilier standard : le sur-mesure épouse la forme pour éviter le vide inutile et les caisses au sol qui « finissent » un angle sans l’habiller proprement.",
  },
];

const solutions: { title: string; description: string }[] = [
  {
    title: "Placard intégré",
    description:
      "Un linéaire fermé le long d’un mur ou d’un renfoncement : il absorbe équipement saisonnier et stocks sans occuper le centre de la pièce — base fréquente d’un plan d’optimisation multi-pièces.",
  },
  {
    title: "Dressing compact",
    description:
      "Hauteur pleine sur faible tirage au sol ou niche transformée en mini garde-robe : pensé pour le logement étroit où chaque centimètre de tringle ou de tablette compte.",
  },
  {
    title: "Meuble TV avec rangements",
    description:
      "Concentrer écran, box et archives domestiques dans un même bloc : réduit le nombre de meubles rapportés et clarifie le mur principal sans refaire l’électricité du logement.",
  },
  {
    title: "Bibliothèque murale",
    description:
      "Structurer un pan de mur pour livres, paniers et objets : même lorsqu’il n’y a pas de vocation « bibliophile », le principe sert à verticaliser ce qui encombre les tables basses.",
  },
  {
    title: "Meuble multifonction",
    description:
      "Assise, rangement et équivalent table d’appoint dans un seul meuble calé : utile lorsque la pièce sert à plusieurs moments de la journée sans changer de surface au sol.",
  },
  {
    title: "Banc coffre ou rangement d’entrée",
    description:
      "Point d’arrêt pour enfiler chaussures et vider les poches, avec stockage dessous : petite pièce mais fort effet sur la sensation d’ordre dès l’entrée dans le studio.",
  },
];

const benefits: { title: string; text: string }[] = [
  {
    title: "Exploiter les hauteurs et murs inutilisés",
    text: "Le volume utile ne se mesure pas qu’au sol : linéaires hauts, tiroirs sous banquette ou niches au-dessus d’une porte récupèrent du stockage là où un meuble catalogue ne tiendrait pas ou jurerait avec le plafond.",
  },
  {
    title: "Réduire l’encombrement visuel",
    text: "Moins de meubles dépareillés, moins de surfaces vitrées qui accumulent le désordre : un parti coordonné calme la lecture de la pièce, ce qui compte autant que le mètre carré brut dans un petit appartement parisien.",
  },
  {
    title: "Adapter les rangements aux objets réellement utilisés",
    text: "Profondeur de tiroir, hauteur de casier et part ouvert/fermé découlent de ce que vous manipulez chaque semaine — pas d’un plan type. On évite ainsi les rayons trop vides ou trop chargés qui rendent le quotidien pénible.",
  },
  {
    title: "Valoriser le logement avec un aménagement durable",
    text: "Un agencement posé et réglé sur site tient mieux dans le temps qu’une succession de meubles rapprochés. Pour un studio comme un deux-pièces, c’est aussi un critère de confort et de revente perçu.",
  },
];

const methodSteps: { title: string; description: string }[] = [
  {
    title: "Observer l’appartement dans son ensemble",
    description:
      "Parcours du jour, points de lumière, circulations obligées et zones de rangement actuel : la feuille de route sort d’un diagnostic global, pas d’une pièce isolée prise hors contexte.",
  },
  {
    title: "Identifier les zones perdues",
    description:
      "Renfoncements, parties hautes de mur, angles derrière une porte, volumes sous pente : on cartographie ce que le mobilier standard ne sait pas habiller avant de proposer une coupe sur mesure.",
  },
  {
    title: "Prioriser les besoins de rangement",
    description:
      "Saisonnier vs quotidien, encombrant vs discret, technique vs décoratif : un studio ne peut pas tout traiter au niveau maximal d’une grande surface — l’arbitrage avec vous fixe ce qui est fabricable en premier.",
  },
  {
    title: "Concevoir des solutions coordonnées",
    description:
      "Plans, choix de matériaux, enchaînement des ouvertures : les modules dialoguent entre eux (même lignée de façade, relief de poignées) pour éviter l’effet « puzzle d’achats séparés ».",
  },
  {
    title: "Installer et ajuster proprement",
    description:
      "Pose, calage, réglage des jeux et finitions de vision : la phase chantier verrouille le rendu promis sur les murs souvent imparfaits des immeubles parisiens.",
  },
];

const optimisationParisFaq = [
  {
    question: "Comment optimiser un petit appartement à Paris ?",
    answer:
      "On commence par l’usage réel : circulation, stockage, zones jour/nuit ou bureau dans le même volume. Ensuite, on identifie les linéaires abandonnés (hauteur, recoins, entrées) où un agencement sur mesure peut remplacer plusieurs petits meubles. Atelier Guyonnet propose des volumes intégrés coordonnés — placards, meubles bas, niches, banc coffre — sans engager une rénovation complète lorsque seul le mobilier est en cause.",
  },
  {
    question: "Le sur-mesure est-il adapté à un studio ?",
    answer:
      "Souvent oui, car le studio impose des cotes serrées et des fonctions multiples dans un seul périmètre. Le sur-mesure évite l’empilage de profondeurs inadaptées et permet de traiter les angles ou les parties hautes que les séries ne couvrent pas. La faisabilité dépend toutefois du support, du budget et des charges du chantier : c’est précisé après premiers échanges et, le cas échéant, visite ou complément de mesures.",
  },
  {
    question: "Peut-on combiner plusieurs rangements dans un même projet ?",
    answer:
      "Oui, et c’est même fréquent sur une optimisation globale : placard d’entrée, volume salon et coin nuit peuvent partager un même langage de façades ou être traités en deux temps selon l’urgence. L’important est de valider un ordre de priorité pour que fabrication et pose restent maîtrisées, avec un devis clair par lot si vous préférez étaler l’investissement.",
  },
  {
    question: "Combien coûte l’optimisation d’un petit appartement ?",
    answer:
      "Le coût dépend du nombre d’éléments fabriqués, de leur surface, des matériaux, des finitions, de l’intégration d’équipements (passage de fils, aération) et du temps de pose. Un studio entièrement habillé n’a pas le même budget qu’un unique placard ciblé. Sans cotes ni parti d’aménagement validé, aucun tarif fixe n’est honnête. Après description du projet, Atelier Guyonnet établit un devis détaillé ; vous restez libre d’accepter ou d’arrêter là.",
  },
  {
    question: "Comment demander un devis ou un diagnostic ?",
    answer:
      "Sur la page d’accueil, section Devis : le formulaire permet de décrire le type de logement (studio, deux-pièces…), les zones problématiques et vos priorités — première base pour un « diagnostic » écrit avant engagement. Vous pouvez joindre photos et dimensions approximatives. L’atelier vous répond pour préciser la suite, proposer un complément d’information ou convenir d’un échange complémentaire selon le projet.",
  },
] as const satisfies readonly OptimisationPetitAppartementParisFaqItem[];

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

export default function OptimisationPetitAppartementParisPage() {
  return (
    <>
      <OptimisationPetitAppartementParisJsonLd faqItems={optimisationParisFaq} />
      <Header />
      <main className="flex min-w-0 flex-1 flex-col">
        <section
          aria-labelledby="optim-hero-heading"
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
              <li className="text-foreground/90">Optimisation petit appartement</li>
            </ol>
          </nav>

          <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
            <span className="rounded-sm border border-border bg-background/80 px-3 py-1.5">
              Paris &amp; Île-de-France
            </span>
          </p>
          <h1
            id="optim-hero-heading"
            className="mt-6 max-w-3xl font-serif text-3xl leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[2.5rem]"
          >
            Optimisation de petit appartement à Paris
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
            Atelier Guyonnet conçoit des solutions sur mesure pour optimiser les petits appartements et studios
            parisiens : rangements intégrés, meubles gain de place, placards, bibliothèques et aménagements pensés au
            centimètre près.
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
          aria-labelledby="optim-intro-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-3xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
                Enjeu
              </p>
              <h2
                id="optim-intro-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Quand chaque mètre carré doit être utile
              </h2>
              <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                <p>
                  Dans un <strong className="font-medium text-foreground">studio</strong> ou un{" "}
                  <strong className="font-medium text-foreground">petit appartement</strong> à Paris, la
                  gêne vient souvent moins du seul manque de surface que de l’usage incomplet des parois :
                  murs bas non meublés, hauteur sous plafond ignorée, angle de pièce transformé en dépôt,
                  entrée ou couloir sans module calé sur les cotes réelles.
                </p>
                <p>
                  L’<strong className="font-medium text-foreground">aménagement sur mesure</strong> recadre
                  le projet : au lieu d’empiler des unités achetées séparément, on enchaîne des volumes
                  pensés pour vos circulations et vos objets du quotidien. C’est une approche de{" "}
                  <strong className="font-medium text-foreground">gain de place</strong> par l’intégration
                  — avec un rendu d’atelier, pas une promesse de surface miraculeuse.
                </p>
                <p>
                  Atelier Guyonnet intervient comme{" "}
                  <strong className="font-medium text-foreground">menuisier agencement</strong> sur ces
                  petits espaces en <strong className="font-medium text-foreground">Île-de-France</strong>{" "}
                  : la réponse peut combiner plusieurs principes (placard, niche, meuble bas…) sans
                  équivalent à une rénovation lourde lorsque seule la fonction rangement doit progresser.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="optim-zones-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-2xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
                Périmètre
              </p>
              <h2
                id="optim-zones-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Zones à optimiser dans un petit appartement
              </h2>
              <p className="mt-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                Le même logement peut combiner plusieurs zones ci-dessous dans un seul projet ou en phases,
                selon votre budget et vos priorités.
              </p>
            </div>
            <ul className="mt-14 grid list-none gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
              {zones.map((item) => (
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
          aria-labelledby="optim-solutions-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Leviers
            </p>
            <h2
              id="optim-solutions-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Solutions sur mesure possibles
            </h2>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
              Les exemples ci-dessous illustrent comment l’optimisation assemble plusieurs briques — sans se
              confondre avec une rénovation complète lorsque seules les enveloppes de rangement sont à traiter.
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
          aria-labelledby="optim-why-heading"
          className="border-t border-border bg-secondary/10 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Sur mesure
            </p>
            <h2
              id="optim-why-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Pourquoi le sur-mesure change vraiment un petit espace
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
          aria-labelledby="optim-method-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Déroulé
            </p>
            <h2
              id="optim-method-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Méthode courte, de l’ensemble au détail posé
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
              Compléments :{" "}
              <Link href="/#services" className={linkUnderline}>
                nos prestations
              </Link>
              ,{" "}
              <Link href="/#methode" className={linkUnderline}>
                la méthode sur l’accueil
              </Link>
              .
            </p>
          </div>
        </section>

        <section
          aria-labelledby="optim-zone-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Zone
            </p>
            <h2
              id="optim-zone-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Paris et Île-de-France
            </h2>
            <div className="mt-8 max-w-2xl space-y-4 font-sans text-base leading-relaxed text-muted md:text-lg">
              <p>
                Atelier Guyonnet intervient à <strong className="font-medium text-foreground">Paris</strong>{" "}
                et en <strong className="font-medium text-foreground">Île-de-France</strong> selon la
                localisation, la nature du projet et les disponibilités de l’atelier.
              </p>
              <p>
                Pour lancer une première analyse écrite et un devis sur mesure, utilisez le{" "}
                <Link href="/#devis" className={`${linkUnderline} font-medium`}>
                  formulaire de demande de devis
                </Link>{" "}
                sur la page d’accueil en décrivant votre logement et vos objectifs.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="optim-faq-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              FAQ
            </p>
            <h2
              id="optim-faq-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Questions fréquentes — optimisation petit appartement
            </h2>
            <ul className="mx-auto mt-12 max-w-3xl list-none space-y-3 lg:mx-0">
              {optimisationParisFaq.map((item) => (
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
          aria-labelledby="optim-related-heading"
          className="border-t border-border bg-secondary/10 px-4 py-16 sm:px-6 md:py-20 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <h2
              id="optim-related-heading"
              className="font-serif text-xl tracking-tight text-foreground sm:text-2xl"
            >
              Autres solutions sur mesure
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted md:text-base">
              Approche transversale des volumes :{" "}
              <Link href="/rangement-sur-mesure-paris" className={linkUnderline}>
                rangement sur mesure à Paris
              </Link>
              . Pour un linéaire fermé ou une entrée :{" "}
              <Link href="/placard-sur-mesure-paris" className={linkUnderline}>
                placard sur mesure
              </Link>
              . Mur média :{" "}
              <Link href="/meuble-tv-sur-mesure-paris" className={linkUnderline}>
                meuble TV sur mesure
              </Link>
              . Mur livres / exposition :{" "}
              <Link href="/bibliotheque-sur-mesure-paris" className={linkUnderline}>
                bibliothèque sur mesure
              </Link>
              . Retour{" "}
              <Link href="/" className={linkUnderline}>
                accueil
              </Link>
              ,{" "}
              <Link href="/#services" className={linkUnderline}>
                services
              </Link>
              ,{" "}
              <Link href="/#inspirations" className={linkUnderline}>
                inspirations
              </Link>
              .
            </p>
          </div>
        </section>

        <section
          aria-labelledby="optim-cta-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl text-center lg:px-2 lg:text-left">
            <h2
              id="optim-cta-heading"
              className="font-serif text-2xl tracking-tight text-foreground sm:text-3xl"
            >
              Donner de la clarté à votre petit appartement
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted lg:mx-0 md:text-lg">
              Décrivez votre logement et ce qui vous bloque au quotidien : nous revenons vers vous pour cadrer
              la faisabilité et la suite du projet avant tout engagement financier.
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
              <Link href="/" className={linkUnderline}>
                accueil
              </Link>
              ,{" "}
              <Link href="/dressing-sur-mesure-paris" className={linkUnderline}>
                dressing
              </Link>
              ,{" "}
              <Link href="/placard-sur-mesure-paris" className={linkUnderline}>
                placard
              </Link>
              ,{" "}
              <Link href="/rangement-sur-mesure-paris" className={linkUnderline}>
                rangement
              </Link>
              ,{" "}
              <Link href="/bibliotheque-sur-mesure-paris" className={linkUnderline}>
                bibliothèque
              </Link>
              ,{" "}
              <Link href="/meuble-tv-sur-mesure-paris" className={linkUnderline}>
                meuble TV
              </Link>
              ,{" "}
              <Link href="/#inspirations" className={linkUnderline}>
                inspirations
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
