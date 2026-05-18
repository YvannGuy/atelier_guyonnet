import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { BibliothequeParisFaqItem } from "@/components/seo/BibliothequeSurMesureParisJsonLd";
import { BibliothequeSurMesureParisJsonLd } from "@/components/seo/BibliothequeSurMesureParisJsonLd";
import { siteConfig } from "@/lib/constants/site";

const PAGE_PATH = "/bibliotheque-sur-mesure-paris";
const PAGE_TITLE_ABSOLUTE = "Bibliothèque sur mesure Paris | Atelier Guyonnet";
const PAGE_DESCRIPTION =
  "Création de bibliothèques sur mesure à Paris et en Île-de-France. Atelier Guyonnet conçoit des bibliothèques murales, intégrées et fonctionnelles pour salons, bureaux et espaces perdus.";

const ctaPrimaryClass =
  "inline-flex min-h-12 items-center justify-center rounded-sm bg-primary px-6 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-on-dark no-underline transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const ctaSecondaryClass =
  "inline-flex min-h-12 items-center justify-center rounded-sm border border-border bg-background px-6 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-foreground no-underline transition-colors hover:border-foreground/25 hover:bg-foreground/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/15 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const linkUnderline =
  "text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/35";

const typesBibliotheque: { title: string; description: string }[] = [
  {
    title: "Bibliothèque murale toute hauteur",
    description:
      "Un mur habillé du plancher au plafond pour capter la hauteur utile : la façade s’aligne sur plinthes et angles réels, ce qui évite les interstices laissés par des éléments empilés achetés séparément.",
  },
  {
    title: "Bibliothèque avec niches ouvertes",
    description:
      "Des casiers dégagés pour livres, cadres ou objets que vous voulez voir : le pas des tablettes et leur profondeur se calent sur vos collections, pas sur un gabarit standard unique.",
  },
  {
    title: "Bibliothèque avec rangements fermés",
    description:
      "Portes pleines, tiroirs ou volets pour cacher archives, fournitures ou matériel de bureau : l’ensemble garde une même ligne graphique tout en mélangeant transparence et confidentialité.",
  },
  {
    title: "Bibliothèque intégrant un bureau",
    description:
      "Plan de travail encastré, niche pour un siège ou caisson sous un linéaire : le coin lecture ou télétravail devient partie d’un seul volume — pratique dans un salon parisien où chaque mètre compte.",
  },
  {
    title: "Bibliothèque salon avec meuble bas",
    description:
      "Une succession de caisses basses sous une partie du mur pour porter les volumes hauts ou rester seule en dessous d’une fenêtre : libère la vue tout en offrant rangements discrets pour jeux, linge ou vaisselle de pièce.",
  },
  {
    title: "Bibliothèque d’angle ou sous pente",
    description:
      "Volumes qui épousent un retour de mur ou la géométrie d’un rampant : là où les meubles rectangulaires laissent un vide disgracieux, l’atelier propose un assemblage sur cotes pour ne perdre aucun linéaire.",
  },
];

const benefits: { title: string; text: string }[] = [
  {
    title: "Structurer un mur sans perdre d’espace",
    text: "La bibliothèque devient la trame de la pièce : elle occupe la largeur disponible avec une profondeur maîtrisée, évite les meubles rapportés trop saillants et clarifie la circulation autour du canapé ou du bureau.",
  },
  {
    title: "Combiner rangement, décoration et usage quotidien",
    text: "Sur un même mur, vous alternez livres visibles, objets de caractère et zones refermées pour le désordre acceptable. Le résultat soutient votre quotidien sans transformer le salon en accumulation de petits meubles.",
  },
  {
    title: "Adapter les hauteurs aux livres, objets et équipements",
    text: "Grand format, BD, boîtes de rangement, ancien ordinateur fixe ou enceinte : les crémaillères ou tablettes fixes sont définies après un inventaire raisonné, pour éviter des rayons trop hauts ou trop bas.",
  },
  {
    title: "Obtenir un rendu intégré et durable",
    text: "Matériaux et finitions sont choisis en cohérence avec votre intérieur — du discret au plus affirmé. La fabrication menuisière et la pose ajustée limitent les jeux et décalages que l’on observe vite sur du mobilier standard mal adapté au mur.",
  },
];

const methodSteps: { title: string; description: string }[] = [
  {
    title: "Comprendre le mur et la pièce",
    description:
      "Relevé des cotes, points d’alimentation, passages de portes, hauteur sous plafond et obstacles (retraits de plâtre, tableaux électriques à conserver accessibles) : le projet repose sur la réalité du support, pas sur une vue schématique.",
  },
  {
    title: "Définir les usages",
    description:
      "Salon pour recevoir, espace lecture, home office partiel ou chambre d’amis : la répartition ouvert / fermé et la présence d’un vrai plan de travail dérivent de ce que vous y ferez vraiment, semaine par semaine.",
  },
  {
    title: "Composer les volumes ouverts et fermés",
    description:
      "Esquisse des façades, rythme des niches, choix de poignées ou de découpes discrètes : vous validez une composition unique avant lancement fabrication, avec un devis structuré plutôt qu’une estimation floue.",
  },
  {
    title: "Préparer les éléments",
    description:
      "Découpe, assemblage en atelier, contrôle des aplombs et des jeux : chaque élément est préparé pour la pose sur site avec le minimum d’improvisation — essentiel lorsque le mur n’est pas parfaitement plan.",
  },
  {
    title: "Poser et ajuster les finitions",
    description:
      "Mise en place, calage, réglage des portes et tiroirs, reprise des joints de vision : la dernière phase verrouille le rendu promis et la tenue dans le temps du meuble bibliothèque intégré.",
  },
];

const bibliothequeParisFaq = [
  {
    question: "Combien coûte une bibliothèque sur mesure à Paris ?",
    answer:
      "Le budget dépend de la surface linéaire habillée, de la hauteur, du mélange ouvert/fermé, des matériaux et finitions, ainsi que des contraintes de pose (angles, reprises murales, intégrations techniques). Sans cotes et sans choix de principe validé, tout « prix type » serait arbitraire. Après description du projet et échanges, Atelier Guyonnet établit un devis détaillé ; vous restez libre d’accepter ou de ne pas donner suite.",
  },
  {
    question: "Peut-on créer une bibliothèque sur tout un mur ?",
    answer:
      "Souvent oui, lorsque le mur le permet structurellement et que l’on respecte circulations, ouvertures et éléments techniques à ne pas masquer. La bibliothèque murale toute hauteur est précisément conçue pour cela : elle occupe le linéaire disponible tout en évitant de « poser un bloc » qui tasse visuellement la pièce — la profondeur et le rythme des casiers sont ajustés au plan réel.",
  },
  {
    question: "Est-il possible d’intégrer des rangements fermés ?",
    answer:
      "Oui, et c’est même fréquent : portes battantes, tiroirs ou volets permettent de refermer ce que vous ne souhaitez pas exposer tout en gardant des niches ouvertes pour la décoration ou les livres du moment. La proportion se fixe avec vous selon vos habitudes — par exemple plus de fermé pour un salon traversé vs plus d’ouvert pour une pièce dédiée au bureau.",
  },
  {
    question: "Peut-on intégrer un bureau dans une bibliothèque ?",
    answer:
      "Oui : plan fixe, niche pour un siège repliable ou caissons sous un plateau étroit sont des solutions usuelles lorsque l’on télétravaille dans le salon. L’objectif est d’éviter un second meuble qui dispute la place au linéaire mural : le bureau devient une pièce du même assemblage, avec passages de câbles et hauteur de travail adaptés.",
  },
  {
    question: "Comment demander un devis pour une bibliothèque sur mesure ?",
    answer:
      "Rendez-vous sur la page d’accueil, section Devis : le formulaire permet d’indiquer vos coordonnées, votre ville et la nature du mur ou de la pièce. Joignez si possible une courte description (salon, bureau, sous-pente…) et les dimensions approximatives. Atelier Guyonnet revient vers vous pour préciser la suite et, le cas échéant, planifier un complément d’information ou une visite.",
  },
] as const satisfies readonly BibliothequeParisFaqItem[];

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

export default function BibliothequeSurMesureParisPage() {
  return (
    <>
      <BibliothequeSurMesureParisJsonLd faqItems={bibliothequeParisFaq} />
      <Header />
      <main className="flex min-w-0 flex-1 flex-col">
        <section
          aria-labelledby="bibliotheque-hero-heading"
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
              <li className="text-foreground/90">Bibliothèque sur mesure</li>
            </ol>
          </nav>

          <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
            <span className="rounded-sm border border-border bg-background/80 px-3 py-1.5">
              Paris &amp; Île-de-France
            </span>
          </p>
          <h1
            id="bibliotheque-hero-heading"
            className="mt-6 max-w-3xl font-serif text-3xl leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[2.5rem]"
          >
            Bibliothèque sur mesure à Paris
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
            Atelier Guyonnet conçoit des bibliothèques sur mesure pour transformer un mur de salon,
            un bureau ou un espace inutilisé en aménagement élégant, fonctionnel et parfaitement intégré
            à votre intérieur.
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
          aria-labelledby="bibliotheque-intro-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-3xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
                Usage
              </p>
              <h2
                id="bibliotheque-intro-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Un mur qui devient un véritable espace de vie
              </h2>
              <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                <p>
                  Une <strong className="font-medium text-foreground">bibliothèque sur mesure</strong>{" "}
                  ne sert pas seulement à ranger des livres. Elle peut structurer un salon, dessiner un coin
                  lecture, encadrer un mur entier, intégrer des volumes fermés pour ce que vous préférez
                  garder discret, mettre en valeur des objets ou accueillir un petit bureau sans empiler des
                  meubles disparates.
                </p>
                <p>
                  Dans un appartement parisien, une{" "}
                  <strong className="font-medium text-foreground">bibliothèque murale intégrée</strong> permet
                  d’utiliser intelligemment le linéaire disponible : le projet dialogue avec la lumière, les
                  passages et le style déjà présents — qu’il s’agisse d’un ensemble très discret ou d’une
                  présence plus affirmée au service du quotidien (salon, bureau à domicile, pièce
                  multi-fonctions).
                </p>
                <p>
                  Atelier Guyonnet conçoit et fabrique ce type d’installation en menuiserie d’agencement, à{" "}
                  <strong className="font-medium text-foreground">Paris</strong> et en{" "}
                  <strong className="font-medium text-foreground">Île-de-France</strong>, selon la localisation,
                  la nature du projet et les disponibilités de l’atelier — avec un parti clair sur le mélange
                  niches ouvertes, rangements fermés et éventuel plan de travail.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="bibliotheque-types-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-2xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
                Typologies
              </p>
              <h2
                id="bibliotheque-types-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Types de bibliothèques possibles
              </h2>
              <p className="mt-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                Chaque configuration ci-dessous peut se combiner avec une autre sur un même linéaire —
                l’important est le rythme façades / niches, calé sur vos livres et objets réels.
              </p>
            </div>
            <ul className="mt-14 grid list-none gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
              {typesBibliotheque.map((item) => (
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
          aria-labelledby="bibliotheque-benefits-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Apports
            </p>
            <h2
              id="bibliotheque-benefits-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Ce qu’une bibliothèque sur mesure peut apporter
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
          aria-labelledby="bibliotheque-method-heading"
          className="border-t border-border bg-secondary/10 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Déroulé
            </p>
            <h2
              id="bibliotheque-method-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Méthode courte, du mur à la bibliothèque posée
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
              Pour le périmètre global de l’atelier :{" "}
              <Link href="/#services" className={linkUnderline}>
                nos prestations sur l’accueil
              </Link>
              ,{" "}
              <Link href="/#methode" className={linkUnderline}>
                notre approche en bref
              </Link>
              .
            </p>
          </div>
        </section>

        <section
          aria-labelledby="bibliotheque-zone-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Zone
            </p>
            <h2
              id="bibliotheque-zone-heading"
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
                Pour une première réponse et un devis structuré, utilisez le{" "}
                <Link href="/#devis" className={`${linkUnderline} font-medium`}>
                  formulaire de demande de devis
                </Link>{" "}
                sur la page d’accueil — idéal pour décrire le mur concerné, la pièce et vos contraintes.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="bibliotheque-faq-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              FAQ
            </p>
            <h2
              id="bibliotheque-faq-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Questions fréquentes — bibliothèque sur mesure
            </h2>
            <ul className="mx-auto mt-12 max-w-3xl list-none space-y-3 lg:mx-0">
              {bibliothequeParisFaq.map((item) => (
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
          aria-labelledby="bibliotheque-related-heading"
          className="border-t border-border bg-background px-4 py-16 sm:px-6 md:py-20 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <h2
              id="bibliotheque-related-heading"
              className="font-serif text-xl tracking-tight text-foreground sm:text-2xl"
            >
              Autres solutions sur mesure
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted md:text-base">
              Un besoin plus orienté garde-robe ou linéaire fermé ? Voir{" "}
              <Link href="/dressing-sur-mesure-paris" className={linkUnderline}>
                dressing sur mesure à Paris
              </Link>
              ,{" "}
              <Link href="/placard-sur-mesure-paris" className={linkUnderline}>
                placard sur mesure à Paris
              </Link>{" "}
              ou une vision transversale d’optimisation dans{" "}
              <Link href="/rangement-sur-mesure-paris" className={linkUnderline}>
                rangement sur mesure à Paris
              </Link>
              . Retour à{" "}
              <Link href="/" className={linkUnderline}>
                l’accueil
              </Link>
              , aux{" "}
              <Link href="/#services" className={linkUnderline}>
                services
              </Link>{" "}
              ou aux{" "}
              <Link href="/#inspirations" className={linkUnderline}>
                inspirations
              </Link>
              .
            </p>
          </div>
        </section>

        <section
          aria-labelledby="bibliotheque-cta-heading"
          className="border-t border-border bg-secondary/10 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl text-center lg:px-2 lg:text-left">
            <h2
              id="bibliotheque-cta-heading"
              className="font-serif text-2xl tracking-tight text-foreground sm:text-3xl"
            >
              Donner une ossature au mur qui vous manque
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted lg:mx-0 md:text-lg">
              Décrivez la pièce, la hauteur sous plafond et ce que vous souhaitez y ranger : nous
              revenons vers vous pour discuter faisabilité et prochaines étapes avant tout engagement.
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
              <Link href="/#inspirations" className={linkUnderline}>
                inspirations
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
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
