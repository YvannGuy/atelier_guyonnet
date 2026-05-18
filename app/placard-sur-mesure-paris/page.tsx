import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { PlacardParisFaqItem } from "@/components/seo/PlacardSurMesureParisJsonLd";
import { PlacardSurMesureParisJsonLd } from "@/components/seo/PlacardSurMesureParisJsonLd";
import { siteConfig } from "@/lib/constants/site";

const PAGE_PATH = "/placard-sur-mesure-paris";
const PAGE_TITLE_ABSOLUTE = "Placard sur mesure Paris | Atelier Guyonnet";
const PAGE_DESCRIPTION =
  "Création de placards sur mesure à Paris et en Île-de-France. Atelier Guyonnet transforme entrées, couloirs, renfoncements et murs perdus en rangements intégrés adaptés à votre intérieur.";

const ctaPrimaryClass =
  "inline-flex min-h-12 items-center justify-center rounded-sm bg-primary px-6 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-on-dark no-underline transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const ctaSecondaryClass =
  "inline-flex min-h-12 items-center justify-center rounded-sm border border-border bg-background px-6 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-foreground no-underline transition-colors hover:border-foreground/25 hover:bg-foreground/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/15 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const placardTypes: { title: string; description: string }[] = [
  {
    title: "Placard d’entrée",
    description:
      "Manteaux, chaussures, parapluies : tout trouve sa place dans un linéaire calé sur votre passage, sans empiéter sur le dégagement de la porte d’appartement ni sur l’ouverture des cloisons voisines.",
  },
  {
    title: "Placard de couloir",
    description:
      "Les couloirs souvent étroits gagnent en profondeur utile lorsque les caissons sont dimensionnés sur mesure : on évite les portes qui frôlent le mur d’en face et on garde une circulation nette.",
  },
  {
    title: "Placard mural toute hauteur",
    description:
      "Un mur entier devient un bloc fonctionnel jusqu’au plafond : niches hautes pour le peu fréquent, zones basses pour le quotidien — sans laisser un bandeau vide au sommet comme le ferait un meuble standard.",
  },
  {
    title: "Placard sous pente",
    description:
      "Combles ou volumes obliques : les façades suivent la géométrie réelle pour ne pas sacrifier du volume habitable tout en gardant des modules ouvrables confortablement.",
  },
  {
    title: "Placard à portes coulissantes",
    description:
      "Lorsque le passage devant le linéaire est limité, le coulissant libère le plan : deux ou trois vantaux selon la largeur disponible, avec un guidage propre et des finitions qui restent discrètes.",
  },
  {
    title: "Placard à portes battantes ou façades intégrées",
    description:
      "Ouverture classique ou habillage type « mur tapissé » : le placard peut disparaître visuellement derrière des façades lisses, en continuité avec le lambris, la peinture ou le bois du séjour.",
  },
];

const optimizations: { title: string; text: string }[] = [
  {
    title: "Valoriser un renfoncement ou un mur peu exploité",
    text: "Au lieu de combler avec des meubles empilés, un caisson unique habille l’aplomb du mur : finis les interstices inutilisables entre deux armoires de largeurs différentes.",
  },
  {
    title: "Absorber le bazar du quotidien",
    text: "Sacs, chaussures, paperasses ou matériel sportif : tout ce qui encombre le sol retrouve un module fermé, ce qui clarifie immédiatement la lecture de la pièce.",
  },
  {
    title: "Une entrée plus claire dès la porte",
    text: "Le premier regard sur votre intérieur n’est plus une accumulation d’objets : le placard structuré libère le plan et accueille les allers-retours du quotidien.",
  },
  {
    title: "Une ligne esthétique cohérente avec le reste du logement",
    text: "Nuance de matière, absence de poignée apparente, alignement avec les boiseries existantes : le placard sur mesure peut se faire discret ou affirmé, mais jamais « rapporté » sans lien avec votre décoration.",
  },
];

const methodSteps: { title: string; description: string }[] = [
  {
    title: "Observation de l’espace",
    description:
      "Passage, ouvrants, tableaux électriques, plinthes : tout ce qui influe sur l’implantation du meuble est noté avant de dessiner le volume.",
  },
  {
    title: "Prise de mesures",
    description:
      "Relevés au millimètre près sur les appuis, les angles et les hauteurs — crucial lorsque les murs ne sont pas parfaitement rectilignes.",
  },
  {
    title: "Choix des usages et des ouvertures",
    description:
      "Quels objets ranger, quelle profondeur de tiroirs ou d’étagères, portes battantes ou coulissantes : ces décisions fixent l’ergonomie du placard intégré.",
  },
  {
    title: "Préparation du meuble",
    description:
      "Découpe et assemblage en atelier, contrôle des jeux de portes et des équipements avant livraison sur chantier.",
  },
  {
    title: "Pose et ajustements",
    description:
      "Calage, fixation, réglages de façades et finitions : le résultat est vérifié sur place jusqu’au fonctionnement fluide des ouvrants.",
  },
];

const placardParisFaq = [
  {
    question: "Combien coûte un placard sur mesure à Paris ?",
    answer:
      "Le coût dépend de la largeur et de la hauteur habillées, de la profondeur retenue, des matériaux (caissons, façades), du type d’ouvertures (battant, coulissant, sans poignée apparente), de la quincaillerie et de la complexité de pose (reprises, découpes, intégration technique). Nous ne communiquons pas de grille publique : après visite des lieux ou échange documenté, un devis détaillé vous est transmis, sans engagement avant acceptation.",
  },
  {
    question: "Peut-on créer un placard dans une entrée étroite ?",
    answer:
      "Souvent oui, en réduisant la profondeur, en optant pour des portes coulissantes ou en fractionnant le volume en deux modules selon le flux de passage. La faisabilité précise dépend de la largeur libre une fois la porte d’entrée ouverte et des codes de sécurité ou de copropriété le cas échéant.",
  },
  {
    question: "Quelle différence entre un placard standard et un placard sur mesure ?",
    answer:
      "Un modèle standard impose des modules à pas fixe : il laisse souvent des ressauts, des bandeaux vides sous plafond ou des profondeurs inadaptées au couloir. Le sur-mesure épouse votre appui mural, monte jusqu’à la cote utile et répartit l’intérieur selon ce que vous rangez réellement.",
  },
  {
    question: "Peut-on intégrer des portes coulissantes ?",
    answer:
      "Oui, lorsque la largeur disponible devant le placard est limitée ou pour éviter le chevauchement de deux vantaux battants. Le choix du système (rail apparent ou encastré) et du nombre de vantaux est étudié en fonction du linéaire et du style souhaité.",
  },
  {
    question: "Comment demander un devis pour un placard intégré ?",
    answer:
      "Rendez-vous sur la page d’accueil, section Devis : indiquez votre adresse e-mail, votre ville en Île-de-France ou Paris, et décrivez l’emplacement (entrée, couloir, chambre…). Vous recevez habituellement une réponse sous 24 à 48h ouvrées pour affiner le projet et, si besoin, convenir d’une visite de mesure.",
  },
] as const satisfies readonly PlacardParisFaqItem[];

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

export default function PlacardSurMesureParisPage() {
  return (
    <>
      <PlacardSurMesureParisJsonLd faqItems={placardParisFaq} />
      <Header />
      <main className="flex min-w-0 flex-1 flex-col">
        <section
          aria-labelledby="placard-hero-heading"
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
              <li className="text-foreground/90">Placard sur mesure</li>
            </ol>
          </nav>

          <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
            <span className="rounded-sm border border-border bg-background/80 px-3 py-1.5">
              Paris &amp; Île-de-France
            </span>
          </p>
          <h1
            id="placard-hero-heading"
            className="mt-6 max-w-3xl font-serif text-3xl leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[2.5rem]"
          >
            Placard sur mesure à Paris
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
            Atelier Guyonnet conçoit et réalise des placards intégrés sur mesure pour transformer une
            entrée, un couloir, un renfoncement ou un mur inutilisé en rangement propre, discret et
            parfaitement adapté.
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
          aria-labelledby="placard-problem-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-3xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
                Constat
              </p>
              <h2
                id="placard-problem-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Transformer un espace perdu en rangement utile
              </h2>
              <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                <p>
                  Dans de nombreux appartements parisiens, l’entrée reste un couloir technique, le mur
                  du fond du séjour ne sert qu’à accrocher quelques cadres, et les renfoncements hérités
                  de la cage d’escalier deviennent des débarras improvisés. Un placard acheté en kit
                  ou un meuble « standard » laisse souvent des angles morts, ne monte pas jusqu’à la
                  hauteur sous plafond utile, ou repousse visuellement le passage.
                </p>
                <p>
                  Le placard sur mesure, lui, est dessiné sur l’empreinte réelle du mur : il
                  réconcilie profondeur de rangement et confort de circulation, en façade discrète ou
                  affirmée selon votre intérieur. Il devient un{" "}
                  <strong className="font-medium text-foreground">rangement intégré</strong> — utile
                  pour les manteaux comme pour le linge de rechange dans une chambre étroite — sans
                  casser l’harmonie des matériaux déjà présents dans le logement.
                </p>
                <p>
                  Penser placard, c’est souvent penser{" "}
                  <strong className="font-medium text-foreground">menuiserie d’agencement</strong> :
                  un seul interlocuteur pour la conception, la fabrication et la pose, ce qui limite les
                  approximations quand les cotes sont serrées.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="placard-types-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-2xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
                Typologies
              </p>
              <h2
                id="placard-types-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Des placards pensés pour chaque situation
              </h2>
              <p className="mt-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                D’un <strong className="font-medium text-foreground">placard mural</strong> linéaire
                à un volume d’angle, les configurations ci-dessous couvrent les demandes les plus
                fréquentes en petites surfaces en région parisienne.
              </p>
            </div>
            <ul className="mt-14 grid list-none gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
              {placardTypes.map((item) => (
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
          aria-labelledby="placard-opt-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Ce que le sur-mesure change
            </p>
            <h2
              id="placard-opt-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Ce que peut optimiser un placard intégré à Paris
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
          aria-labelledby="placard-method-heading"
          className="border-t border-border bg-secondary/10 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Déroulé
            </p>
            <h2
              id="placard-method-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              De l’observation du lieu au placard posé
            </h2>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
              Parcours volontairement synthétisé pour les projets de placard intégré ; le détail du
              processus global reste disponible sur l’accueil.
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
          aria-labelledby="placard-zone-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Zone
            </p>
            <h2
              id="placard-zone-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Placard sur mesure à Paris et en Île-de-France
            </h2>
            <div className="mt-8 max-w-2xl space-y-4 font-sans text-base leading-relaxed text-muted md:text-lg">
              <p>
                Atelier Guyonnet intervient à <strong className="font-medium text-foreground">Paris</strong>{" "}
                et en <strong className="font-medium text-foreground">Île-de-France</strong>, en fonction de
                la localisation, du type de chantier (simple placard mural ou ensemble plus vaste) et
                des disponibilités de l’atelier.
              </p>
              <p>
                Pour visualiser la zone indicative et les précisions sur les déplacements, reportez-vous
                à la{" "}
                <Link
                  href="/"
                  className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/35"
                >
                  page d’accueil
                </Link>
                {" "}— rubrique zone d’intervention et carte. L’
                <Link
                  href="/#services"
                  className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/35"
                >
                  offre complète
                </Link>{" "}
                liste aussi les autres agencements sur mesure (dressing, bibliothèque, etc.).
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="placard-faq-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              FAQ
            </p>
            <h2
              id="placard-faq-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Questions fréquentes — placard intégré
            </h2>
            <ul className="mx-auto mt-12 max-w-3xl list-none space-y-3 lg:mx-0">
              {placardParisFaq.map((item) => (
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
          aria-labelledby="placard-related-heading"
          className="border-t border-border bg-background px-4 py-16 sm:px-6 md:py-20 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <h2
              id="placard-related-heading"
              className="font-serif text-xl tracking-tight text-foreground sm:text-2xl"
            >
              Autres solutions sur mesure
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted md:text-base">
              Pour un volume davantage orienté garde-robe et penderie, consultez la page{" "}
              <Link
                href="/dressing-sur-mesure-paris"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/35"
              >
                dressing sur mesure à Paris
              </Link>
              . Retrouvez l’ensemble des prestations et le formulaire sur{" "}
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
          aria-labelledby="placard-cta-heading"
          className="border-t border-border bg-secondary/10 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl text-center lg:px-2 lg:text-left">
            <h2
              id="placard-cta-heading"
              className="font-serif text-2xl tracking-tight text-foreground sm:text-3xl"
            >
              Donner une destination claire à votre mur ou votre couloir
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted lg:mx-0 md:text-lg">
              Décrivez votre pièce, joignez si vous le souhaitez quelques cotes ou photos : nous vous
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
                href="/dressing-sur-mesure-paris"
                className="text-foreground underline decoration-border underline-offset-4"
              >
                dressing sur mesure
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
