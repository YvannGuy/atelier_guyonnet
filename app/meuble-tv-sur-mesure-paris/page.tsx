import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { MeubleTvParisFaqItem } from "@/components/seo/MeubleTvSurMesureParisJsonLd";
import { MeubleTvSurMesureParisJsonLd } from "@/components/seo/MeubleTvSurMesureParisJsonLd";
import { siteConfig } from "@/lib/constants/site";

const PAGE_PATH = "/meuble-tv-sur-mesure-paris";
const PAGE_TITLE_ABSOLUTE = "Meuble TV sur mesure Paris | Atelier Guyonnet";
const PAGE_DESCRIPTION =
  "Création de meubles TV sur mesure à Paris et en Île-de-France. Atelier Guyonnet conçoit des meubles TV intégrés, muraux et fonctionnels pour salons et espaces de vie.";

const ctaPrimaryClass =
  "inline-flex min-h-12 items-center justify-center rounded-sm bg-primary px-6 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-on-dark no-underline transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const ctaSecondaryClass =
  "inline-flex min-h-12 items-center justify-center rounded-sm border border-border bg-background px-6 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-foreground no-underline transition-colors hover:border-foreground/25 hover:bg-foreground/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/15 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const linkUnderline =
  "text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/35";

const typesMeubleTv: { title: string; description: string }[] = [
  {
    title: "Meuble TV mural intégré",
    description:
      "La façade habille le mur autour de l’écran : le téléviseur trouve son niveau et son dégagement précis, pendant que les zones latérales ou dessous absorbent décodeurs, consoles et câblage dans un volume coordonné.",
  },
  {
    title: "Meuble TV bas sur mesure",
    description:
      "Un banc long calé sur la largeur utile : idéal sous un écran fixé au mur pour garder la légèreté visuelle tout en logeant tiroirs, relevants ou niches pour les accessoires du salon.",
  },
  {
    title: "Meuble TV suspendu",
    description:
      "L’ensemble flotte au-dessus du sol libérant le passage et simplifiant le ménage : la fixation et la charge sont étudiées en amont, avec réserves pour passer et regrouper les fils derrière façade ou dans des caissons dédiés.",
  },
  {
    title: "Meuble TV avec rangements fermés",
    description:
      "Portes pleines ou tiroirs profonds pour dissimuler jeux, boîtiers ou documents : le mur média garde une lecture calme face au canapé, sans empilement visible sur les tablettes.",
  },
  {
    title: "Meuble TV avec niches décoratives",
    description:
      "Alternance de volumes ouverts pour lampes, livres ou objets et de casiers fermés pour le reste : le rythme est défini avec vous pour que la télévision ne soit pas le seul point d’accroche du mur.",
  },
  {
    title: "Meuble TV combiné avec bibliothèque ou étagères",
    description:
      "Un seul linéaire relie zone TV et rayonnage : même profondeur de façade, même vocabulaire de matière — pratique lorsque le salon est aussi espace de lecture ou d’exposition sur un pan de mur continu.",
  },
];

const benefits: { title: string; text: string }[] = [
  {
    title: "Dissimuler les câbles et équipements",
    text: "Goulottes internes, trappes de service ou caissons ventilés : le but est de regrouper alimentations et HDMI sans show permanent derrière le meuble, tout en gardant un accès raisonnable pour intervenir sur une box ou une console.",
  },
  {
    title: "Structurer le mur principal du salon",
    text: "Au lieu d’un meuble trop étroit ou trop profond pour la pièce, le mur est lu comme un plan unique : hauteur d’écran, lignes de façade et zones de rangement répondent à une même grille, ce qui équilibre l’ensemble face à la circulation.",
  },
  {
    title: "Ajouter du rangement sans alourdir la pièce",
    text: "Profondeur calée sur vos besoins réels — pas sur un catalogue — pour éviter le volume « caisse » qui mange la perspective. Les caisses fermées avalent ce qui encombre, les ouvertures restent utiles pour l’usage quotidien.",
  },
  {
    title: "Harmoniser le meuble avec le style intérieur",
    text: "Teinte des façades, absence ou présence de poignées, rapport à la plinthe ou au parquet : le meuble TV intégré prolonge votre palette existante. À Paris comme en Île-de-France, l’objectif est un rendu pensé comme un meuble d’atelier, pas un ajout générique.",
  },
];

const methodSteps: { title: string; description: string }[] = [
  {
    title: "Observer le mur et les usages du salon",
    description:
      "Relevé des cotes, repérage des prises et arrivées, distance d’assise au mur et passage vers les fenêtres : le projet part de la vie réelle dans la pièce, pas seulement de la taille du téléviseur.",
  },
  {
    title: "Définir les équipements à intégrer",
    description:
      "Nombre de boîtiers, barre de son, console de jeu, disque dur ou imprimante : chaque élément conditionne ventilation, profondeur de niche et accessibilité. On fixe ensemble ce qui doit rester visible ou manipulable souvent.",
  },
  {
    title: "Composer les rangements et passages de câbles",
    description:
      "Plans d’ensemble ouvert/fermé, emplacement des trappes, principe de fixation murale ou au sol : la composition est validée avant fabrication avec un devis structuré, afin d’éviter les compromis de dernière minute sur le chantier.",
  },
  {
    title: "Préparer les éléments et finitions",
    description:
      "Usinage en atelier, contrôle des jeux de portes et tiroirs, préparation des parties qui recevront chevilles ou consoles de fixation : chaque pièce arrive sur site prête pour un montage propre sur un mur parfois imparfait.",
  },
  {
    title: "Poser et ajuster l’ensemble",
    description:
      "Installation, calage, réglage des façades, test de confort sur les ouvertures et reprise des finitions de vision : la dernière étape assure que l’usage quotidien (branchements, rangements) reste fluide après la livraison.",
  },
];

const meubleTvParisFaq = [
  {
    question: "Combien coûte un meuble TV sur mesure à Paris ?",
    answer:
      "Le prix dépend de la longueur habillée, de la hauteur, du type de fixation, des matériaux et finitions, du nombre de modules ouverts ou fermés, et du temps nécessaire pour intégrer correctement équipements et passages de câbles. Sans mesures ni parti validé, aucun chiffre fixe n’est sérieux. Après échanges, Atelier Guyonnet propose un devis détaillé ; vous décidez ensuite d’avancer ou non.",
  },
  {
    question: "Peut-on cacher les câbles dans un meuble TV sur mesure ?",
    answer:
      "Oui, c’est souvent une des demandes principales : réserves, goulotte intégrée ou retour de caisson permettent de descendre les fils derrière le mobilier plutôt que le long du mur. Il faut néanmoins respecter ce qui doit rester accessible (box à ventiler, rallonge) et les consignes de vos appareils — le principe est fixé avant fabrication.",
  },
  {
    question: "Est-il possible d’intégrer des rangements fermés ?",
    answer:
      "Oui : portes, tiroirs profonds ou caissons à volet referment ce qui crée du bruit visuel — jeux, chargeurs, papiers — tout en laissant des niches ouvertes pour l’usage quotidien ou la décoration. Le dosage se fait avec vous selon la taille du salon et votre sensibilité au désordre apparent.",
  },
  {
    question: "Peut-on combiner meuble TV et bibliothèque ?",
    answer:
      "Oui, lorsque le mur s’y prête : un même linéaire peut enchaîner zone écran, casiers fermés et rayonnage pour livres ou objets, avec un rythme de façades cohérent. Cela évite deux meubles de styles ou profondeurs différentes côte à côte. Pour une vision déjà dédiée au livre et au mur complet, la page dédiée à la bibliothèque détaille aussi des approches voisines.",
  },
  {
    question: "Comment demander un devis pour un meuble TV sur mesure ?",
    answer:
      "Sur la page d’accueil, section Devis : indiquez la ville, les dimensions approximatives du mur et la liste des équipements à loger. Une photo du mur et une courte description du salon accélèrent la compréhension du projet. Atelier Guyonnet vous répond pour préciser la suite et, si besoin, convenir d’un complément d’information.",
  },
] as const satisfies readonly MeubleTvParisFaqItem[];

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

export default function MeubleTvSurMesureParisPage() {
  return (
    <>
      <MeubleTvSurMesureParisJsonLd faqItems={meubleTvParisFaq} />
      <Header />
      <main className="flex min-w-0 flex-1 flex-col">
        <section
          aria-labelledby="meuble-tv-hero-heading"
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
              <li className="text-foreground/90">Meuble TV sur mesure</li>
            </ol>
          </nav>

          <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
            <span className="rounded-sm border border-border bg-background/80 px-3 py-1.5">
              Paris &amp; Île-de-France
            </span>
          </p>
          <h1
            id="meuble-tv-hero-heading"
            className="mt-6 max-w-3xl font-serif text-3xl leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[2.5rem]"
          >
            Meuble TV sur mesure à Paris
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
            Atelier Guyonnet conçoit des meubles TV sur mesure pour structurer votre salon, organiser
            vos équipements, dissimuler les câbles et créer un ensemble intégré, élégant et fonctionnel.
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
          aria-labelledby="meuble-tv-intro-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-3xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
                Salon
              </p>
              <h2
                id="meuble-tv-intro-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Un salon plus propre, plus harmonieux, mieux organisé
              </h2>
              <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                <p>
                  Un meuble acheté « tout fait » laisse souvent les{" "}
                  <strong className="font-medium text-foreground">câbles</strong> apparents, dépasse
                  visuellement du mur ou offre une largeur mal calée sur votre linéaire : le mur du
                  salon perd en lisibilité alors que c’est souvent le point vers lequel se tourne la pièce.
                </p>
                <p>
                  Un <strong className="font-medium text-foreground">meuble TV sur mesure</strong>{" "}
                  repart du support réel : prises, dimensions du mur, taille d’écran et liste des appareils
                  à ranger. Les équipements trouvent leur niche ou leur caisson, les fils sont traités dans
                  le volume mobilier tant que la ventilation et l’accès restent sûrs, et l’ensemble donne
                  une lecture unique du mur — mural, bas, suspendu ou linéaire sur toute la largeur utile.
                </p>
                <p>
                  En <strong className="font-medium text-foreground">Île-de-France</strong>, Atelier
                  Guyonnet aborde cette prestation comme du vrai travail de menuiserie : fabrication et
                  pose ajustées, sans promesse de montant fixe avant étude — le devis suit vos choix de
                  matériaux, d’intégration technique et de finitions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="meuble-tv-types-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <div className="max-w-2xl">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
                Typologies
              </p>
              <h2
                id="meuble-tv-types-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Types de meubles TV possibles
              </h2>
              <p className="mt-5 font-sans text-base leading-relaxed text-muted md:text-lg">
                La bonne combinaison dépend de votre mur, du type d’écran (pied, support, fixation murale)
                et du nombre de boîtiers à loger au quotidien.
              </p>
            </div>
            <ul className="mt-14 grid list-none gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
              {typesMeubleTv.map((item) => (
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
          aria-labelledby="meuble-tv-benefits-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Apports
            </p>
            <h2
              id="meuble-tv-benefits-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Ce qu’un meuble TV sur mesure peut apporter
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
          aria-labelledby="meuble-tv-method-heading"
          className="border-t border-border bg-secondary/10 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Déroulé
            </p>
            <h2
              id="meuble-tv-method-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Méthode courte, du constat salon à la pose
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
              Sur l’accueil :{" "}
              <Link href="/#services" className={linkUnderline}>
                panorama des prestations
              </Link>
              ,{" "}
              <Link href="/#methode" className={linkUnderline}>
                esprit de la méthode
              </Link>
              .
            </p>
          </div>
        </section>

        <section
          aria-labelledby="meuble-tv-zone-heading"
          className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Zone
            </p>
            <h2
              id="meuble-tv-zone-heading"
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
                Pour lancer une étude et recevoir une proposition chiffrée, le plus simple est le{" "}
                <Link href="/#devis" className={`${linkUnderline} font-medium`}>
                  formulaire de demande de devis
                </Link>{" "}
                sur la page d’accueil — en précisant la largeur du mur et vos appareils.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="meuble-tv-faq-heading"
          className="border-t border-border bg-secondary/15 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              FAQ
            </p>
            <h2
              id="meuble-tv-faq-heading"
              className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Questions fréquentes — meuble TV sur mesure
            </h2>
            <ul className="mx-auto mt-12 max-w-3xl list-none space-y-3 lg:mx-0">
              {meubleTvParisFaq.map((item) => (
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
          aria-labelledby="meuble-tv-related-heading"
          className="border-t border-border bg-background px-4 py-16 sm:px-6 md:py-20 lg:px-10"
        >
          <div className="mx-auto max-w-6xl lg:px-2">
            <h2
              id="meuble-tv-related-heading"
              className="font-serif text-xl tracking-tight text-foreground sm:text-2xl"
            >
              Autres solutions sur mesure
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted md:text-base">
              Pour un mur davantage orienté livres et rayonnage, voir{" "}
              <Link href="/bibliotheque-sur-mesure-paris" className={linkUnderline}>
                bibliothèque sur mesure à Paris
              </Link>
              . Une approche plus globale des volumes :{" "}
              <Link href="/rangement-sur-mesure-paris" className={linkUnderline}>
                rangement sur mesure
              </Link>
              . Pour un linéaire fermé d’entrée ou de couloir :{" "}
              <Link href="/placard-sur-mesure-paris" className={linkUnderline}>
                placard sur mesure
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
          aria-labelledby="meuble-tv-cta-heading"
          className="border-t border-border bg-secondary/10 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-6xl text-center lg:px-2 lg:text-left">
            <h2
              id="meuble-tv-cta-heading"
              className="font-serif text-2xl tracking-tight text-foreground sm:text-3xl"
            >
              Clarifier le mur de votre salon
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted lg:mx-0 md:text-lg">
              Partagez la configuration du mur et de vos équipements : nous revenons vers vous pour
              discuter faisabilité et calendrier avant tout engagement financier.
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