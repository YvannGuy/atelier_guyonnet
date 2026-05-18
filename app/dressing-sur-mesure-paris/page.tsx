import type { Metadata } from "next";
import Link from "next/link";

import { DressingSurMesureParisJsonLd } from "@/components/seo/DressingSurMesureParisJsonLd";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { DressingParisFaqItem } from "@/components/seo/DressingSurMesureParisJsonLd";
import { siteConfig } from "@/lib/constants/site";

const PAGE_PATH = "/dressing-sur-mesure-paris";
const PAGE_TITLE_ABSOLUTE = "Dressing sur mesure Paris | Atelier Guyonnet";
const PAGE_DESCRIPTION =
  "Création de dressings sur mesure à Paris et en Île-de-France. Atelier Guyonnet conçoit des rangements intégrés adaptés à votre espace, vos usages et vos dimensions.";

const ctaPrimaryClass =
  "inline-flex min-h-12 items-center justify-center rounded-sm bg-primary px-6 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-on-dark no-underline transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const ctaSecondaryClass =
  "inline-flex min-h-12 items-center justify-center rounded-sm border border-border bg-background px-6 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-foreground no-underline transition-colors hover:border-foreground/25 hover:bg-foreground/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/15 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const dressingTypes: { title: string; description: string }[] = [
  {
    title: "Dressing toute hauteur",
    description:
      "Du sol au plafond, pour exploiter la hauteur disponible : penderies, étagères et tiroirs calés sur vos vêtements, chaussures et sacs, même lorsque les plafonds sont hauts ou irréguliers.",
  },
  {
    title: "Dressing sous pente",
    description:
      "Les combles et mansardes exigent des débits de façade et des profondeurs variables : le sur-mesure permet de suivre la pente tout en gardant des rangements utilisables au quotidien.",
  },
  {
    title: "Dressing d’angle",
    description:
      "Deux murs qui se rejoignent deviennent un volume cohérent : plateaux, modules d’angle et continuité visuelle évitent les « zones mortes » souvent laissées vides avec du standard.",
  },
  {
    title: "Dressing ouvert",
    description:
      "Portants apparents ou linéaires sans portes : utile lorsque l’espace de circulation est juste ou pour une chambre où la lisibilité des volumes prime — toujours pensé avec des finitions propres.",
  },
  {
    title: "Dressing fermé avec portes",
    description:
      "Façades pleines, battantes ou coulissantes selon le passage : idéal pour refermer le désordre, protéger du poussière ou harmoniser un mur face au lit dans une chambre compacte.",
  },
  {
    title: "Dressing intégré chambre ou couloir",
    description:
      "Le dressing peut prolonger un couloir, se fondre derrière une tête de lit ou occuper un renfoncement : l’objectif est de garder des circulations lisibles et une lecture architecturale nette.",
  },
];

const benefits: { title: string; text: string }[] = [
  {
    title: "Exploiter chaque centimètre utile",
    text: "Les cotes réelles — angles, plinthes, saillies — sont prises en compte dès la conception afin de ne pas perdre de linéaire là où le volume est déjà restreint.",
  },
  {
    title: "Adapter le rangement à vos usages",
    text: "Répartition penderie / tiroirs / étagères, hauteur des barres, profondeur des caissons : le projet s’aligne sur votre façon de ranger, pas sur un plan générique.",
  },
  {
    title: "Choisir les finitions avec discernement",
    text: "Matériaux, couleurs, poignées ou ouvertures sans poignée : les choix se font dans une fourchette cohérente avec le reste de l’appartement et le niveau de finition attendu.",
  },
  {
    title: "Un rendu intégré et durable",
    text: "L’enjeu est un ensemble stable, ajusté sur place, qui vieillit bien dans le temps — plutôt qu’un meuble rajouté qui décale les passages ou se désaligne visuellement.",
  },
];

const methodSteps: { title: string; description: string }[] = [
  {
    title: "Échange",
    description:
      "Premiers besoins, contraintes de la pièce, style souhaité et usages (couple, enfant, télétravail dans la même pièce…).",
  },
  {
    title: "Mesures",
    description: "Relevé précis des dimensions et des particularités du support — indispensable à Paris (murs, plafonds, angles).",
  },
  {
    title: "Proposition",
    description: "Plan d’ensemble, principes de rangement et devis structuré selon options de finition et complexité de pose.",
  },
  {
    title: "Fabrication",
    description: "Préparation des éléments en atelier, avec contrôle des assemblages avant intervention chez vous.",
  },
  {
    title: "Pose",
    description: "Installation, réglages et finitions sur place pour un résultat aligné avec ce qui a été validé ensemble.",
  },
];

const dressingParisFaq = [
  {
    question: "Combien coûte un dressing sur mesure à Paris ?",
    answer:
      "Le prix dépend de la surface habillée, de la profondeur des caissons, des matériaux, des finitions (façades, quincaillerie, éclairage) et de la complexité de pose (angles, reprises murales, contraintes d’accès). Aucun tarif unique n’est pertinent sans étude : après échange et mesures, Atelier Guyonnet vous adresse un devis détaillé, sans engagement de votre part à ce stade.",
  },
  {
    question: "Peut-on créer un dressing dans une petite chambre ?",
    answer:
      "Oui, souvent en privilégiant des profondeurs adaptées, des modules hauts, des portes coulissantes ou un linéaire ouvert selon le passage. La faisabilité se valide au cas par cas en fonction du plan et des ouvertures (fenêtre, radiateur, portes).",
  },
  {
    question: "Faites-vous des dressings sous pente ?",
    answer:
      "Oui. Les pentes de toiture ou les niveaux différents imposent des découpes et un découpage des modules ; le sur-mesure permet d’optimiser le volume tout en gardant des façades lisibles.",
  },
  {
    question: "Est-ce possible d’avoir un dressing fermé avec portes ?",
    answer:
      "Oui, en façade battante ou coulissante selon l’espace devant les modules. Le choix dépend du passage libre, de l’accès souhaité à chaque zone et du style d’ensemble de la chambre ou du couloir.",
  },
  {
    question: "Comment demander un devis pour un dressing sur mesure ?",
    answer:
      "Utilisez le formulaire sur la page d’accueil (section Devis) : indiquez votre ville, un moyen de contact et une description de votre pièce (photos utiles mais non obligatoires à ce jour). Une réponse est habituellement donnée sous 24 à 48h ouvrées pour préciser la suite.",
  },
] as const satisfies readonly DressingParisFaqItem[];

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

export default function DressingSurMesureParisPage() {
  return (
    <>
      <DressingSurMesureParisJsonLd faqItems={dressingParisFaq} />
      <Header />
      <main className="flex min-w-0 flex-1 flex-col">
        {/* Hero */}
        <section
          aria-labelledby="dressing-hero-heading"
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
              <li className="text-foreground/90">Dressing sur mesure</li>
            </ol>
          </nav>

          <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
            <span className="rounded-sm border border-border bg-background/80 px-3 py-1.5">
              Paris &amp; Île-de-France
            </span>
          </p>
          <h1
            id="dressing-hero-heading"
            className="mt-6 max-w-3xl font-serif text-3xl leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[2.5rem]"
          >
            Dressing sur mesure à Paris
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
            Atelier Guyonnet conçoit et réalise des dressings sur mesure pensés pour vos vêtements,
            vos habitudes et les dimensions exactes de votre intérieur à Paris et en Île-de-France.
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

        {/* Problème / besoin */}
        <section
          aria-labelledby="dressing-problem-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-3xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
                Contexte
              </p>
              <h2
                id="dressing-problem-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Un dressing pensé pour votre espace, pas l’inverse
              </h2>
              <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                <p>
                  Les dressings « tout venant » s’appuient sur des gabarits industriels : ils
                  s’adaptent rarement bien aux appartements parisiens, où murs et plafonds ne sont pas
                  toujours parfaitement d’équerre, où les chambres sont compactes et où chaque
                  renfoncement peut pourtant devenir du rangement utile.
                </p>
                <p>
                  Hauteur sous plafond, angles, passage vers une fenêtre ou une porte, besoin de
                  fermer ou au contraire d’ouvrir la volumétrie : autant de paramètres que le sur-mesure
                  intègre dès le dessin. Un bon dressing intégré à Paris s’apparente autant à un
                  agencement de placard qu’à une réponse sur mesure pour la chambre ou le couloir —
                  y compris lorsqu’il s’agit d’un simple linéaire bien pensé le long d’un mur.
                </p>
                <p>
                  Que vous recherchiez un dressing fermé avec portes, une composition ouverte ou un
                  mix des deux, la démarche reste la même : partir de votre pièce réelle, pas d’un
                  catalogue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types */}
        <section
          aria-labelledby="dressing-types-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-2xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
                Typologies
              </p>
              <h2
                id="dressing-types-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Des configurations adaptées à votre pièce
              </h2>
              <p className="mt-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                Chaque projet combine souvent plusieurs principes (hauteur, angle, ouverture). Voici
                les familles les plus fréquentes pour les appartements en petite et moyenne surface.
              </p>
            </div>
            <ul className="mt-14 grid list-none gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
              {dressingTypes.map((item) => (
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

        {/* Pourquoi sur-mesure */}
        <section
          aria-labelledby="dressing-why-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Sur mesure
            </p>
            <h2
              id="dressing-why-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Pourquoi faire appel à un atelier pour votre dressing
            </h2>
            <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:gap-10">
              {benefits.map((item, index) => (
                <li key={item.title} className="min-w-0 border-t border-border pt-8 first:border-t-0 first:pt-0 sm:border-t-0 sm:pt-0">
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

        {/* Méthode courte */}
        <section
          aria-labelledby="dressing-method-heading"
          className="border-t border-border bg-secondary/10 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Déroulé
            </p>
            <h2
              id="dressing-method-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Une méthode courte, du premier échange à la pose
            </h2>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
              Même logique que sur la page d’accueil, en version condensée — pour vous donner des
              repères avant de prendre contact.
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
              Plus de détail sur la méthode : voir aussi la section{" "}
              <Link
                href="/#methode"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/35"
              >
                Méthode
              </Link>{" "}
              sur l’accueil.
            </p>
          </div>
        </section>

        {/* Zone */}
        <section
          aria-labelledby="dressing-zone-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Zone
            </p>
            <h2
              id="dressing-zone-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Intervention à Paris et en Île-de-France
            </h2>
            <div className="mt-8 max-w-2xl space-y-4 font-sans text-base leading-relaxed text-muted md:text-lg">
              <p>
                Atelier Guyonnet intervient à <strong className="font-medium text-foreground">Paris</strong>{" "}
                et en <strong className="font-medium text-foreground">Île-de-France</strong>, selon la
                localisation, la nature du projet (dressing seul ou intégré dans un ensemble plus
                large) et les disponibilités de l’atelier.
              </p>
              <p>
                Chaque déplacement et créneau est confirmé après un premier échange — la carte
                indicative sur l’accueil donne un ordre d’idée de la zone, sans préjuger de la faisabilité
                logistique du vôtre.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          aria-labelledby="dressing-faq-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              FAQ
            </p>
            <h2
              id="dressing-faq-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Questions fréquentes — dressing sur mesure
            </h2>
            <ul className="mx-auto mt-12 max-w-3xl list-none space-y-3 lg:mx-0">
              {dressingParisFaq.map((item) => (
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

        {/* CTA + maillage */}
        <section
          aria-labelledby="dressing-cta-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl text-center lg:px-2 lg:text-left">
            <h2
              id="dressing-cta-heading"
              className="font-serif text-2xl tracking-tight text-foreground sm:text-3xl"
            >
              Passer du projet au plan concret
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted lg:mx-0 md:text-lg">
              Décrivez votre pièce, votre quartier et ce que vous souhaitez y ranger : nous revenons
              vers vous pour préciser la suite, sans engagement jusqu’à validation d’un devis.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start lg:gap-4">
              <Link href="/#devis" className={`${ctaPrimaryClass} w-full min-w-[200px] sm:w-auto`}>
                Demander un devis
              </Link>
              <Link href="/#services" className={`${ctaSecondaryClass} w-full min-w-[200px] sm:w-auto`}>
                Toutes les solutions
              </Link>
            </div>
            <p className="mx-auto mt-10 max-w-2xl font-sans text-sm leading-relaxed text-muted lg:mx-0">
              Découvrir aussi le site :{" "}
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
              . Des pages dédiées au placard et au rangement sur mesure à Paris sont prévues ; en
              attendant, le formulaire couvre l’ensemble des demandes d’agencement.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
