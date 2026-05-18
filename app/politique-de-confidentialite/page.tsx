import Link from "next/link";
import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Traitement des données personnelles et respect de la vie privée — ${siteConfig.name}.`,
  alternates: { canonical: "/politique-de-confidentialite" },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="focus-visible:ring-foreground/25 font-serif text-base text-foreground no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {siteConfig.name}
          </Link>
          <Link
            href="/"
            className="focus-visible:ring-foreground/25 font-sans text-xs font-medium uppercase tracking-[0.14em] text-muted no-underline transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Accueil
          </Link>
        </div>
      </header>

      <main className="flex-1 bg-background px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <h1 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
            Politique de confidentialité
          </h1>
          <p className="mt-3 font-sans text-sm text-muted">
            Document indicatif — à adapter avec un conseil juridique si nécessaire. Dernière révision
            : 16 mai 2026.
          </p>

          <section className="mt-10 border-t border-border pt-10" aria-labelledby="pc-responsable">
            <h2 id="pc-responsable" className="font-serif text-xl text-foreground sm:text-2xl">
              Responsable du traitement
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-muted sm:text-base">
              Le responsable du traitement des données personnelles est l’éditeur du site{" "}
              <strong className="font-medium text-foreground">{siteConfig.name}</strong>, aux
              coordonnées juridiques à compléter (voir{" "}
              <Link
                href="/mentions-legales"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                mentions légales
              </Link>
              ).
            </p>
          </section>

          <section className="mt-10 border-t border-border pt-10" aria-labelledby="pc-donnees">
            <h2 id="pc-donnees" className="font-serif text-xl text-foreground sm:text-2xl">
              Données collectées
            </h2>
            <div className="mt-4 space-y-4 font-sans text-sm leading-relaxed text-muted sm:text-base">
              <p>
                <strong className="font-medium text-foreground">Navigation :</strong> ce site est
                conçu comme une vitrine statique. Aucun traqueur publicitaire ni tableau de bord
                analytique n’est intégré dans cette version du projet, sauf ajout ultérieur
                explicitement documenté.
              </p>
              <p>
                <strong className="font-medium text-foreground">Formulaire de devis :</strong> lorsque
                vous soumettez le formulaire « Parlez-nous de votre projet », les informations saisies
                (identité, coordonnées, type de projet, budget, délai, message, etc.) sont transmises par
                e-mail à l’éditeur via le prestataire technique <strong className="font-medium text-foreground">Resend</strong>.{" "}
                <strong className="font-medium text-foreground">
                  Aucune copie structurée n’est conservée dans une base de données sur ce site.
                </strong>{" "}
                Les pièces jointes / photos ne sont pas encore prises en charge par le formulaire.
              </p>
            </div>
          </section>

          <section className="mt-10 border-t border-border pt-10" aria-labelledby="pc-finalites">
            <h2 id="pc-finalites" className="font-serif text-xl text-foreground sm:text-2xl">
              Finalités et bases légales
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-muted sm:text-base">
              Le traitement de vos données transmises via le formulaire de devis a pour finalité de
              traiter votre demande et d’échanger avec vous en vue d’une éventuelle proposition (contact
              précontractuel). La base légale est, selon le contexte, l’exécution de mesures
              précontractuelles ou votre consentement implicite au moment de l’envoi du formulaire.
            </p>
          </section>

          <section className="mt-10 border-t border-border pt-10" aria-labelledby="pc-conservation">
            <h2 id="pc-conservation" className="font-serif text-xl text-foreground sm:text-2xl">
              Durée de conservation
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-muted sm:text-base">
              Les courriers électroniques reçus via le formulaire sont conservés le temps nécessaire au
              traitement de la demande, puis selon les obligations légales (ex. tenue d’une comptabilité)
              le cas échéant. Aucun délai unique ne s’applique sans contexte métier précis — adaptez ce
              paragraphe avec votre conseil si besoin.
            </p>
          </section>

          <section className="mt-10 border-t border-border pt-10" aria-labelledby="pc-destinataires">
            <h2 id="pc-destinataires" className="font-serif text-xl text-foreground sm:text-2xl">
              Destinataires et transferts
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-muted sm:text-base">
              Les données personnelles ne sont pas vendues. L’envoi des formulaires passe par le service
              <strong className="font-medium text-foreground"> Resend</strong> (transit et distribution des e-mails), sous-traitant dont la politique et la localisation des traitements sont précisées sur{" "}
              <a
                href="https://resend.com/legal"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                rel="noopener noreferrer"
              >
                resend.com/legal
              </a>
              . D’autres sous-traitants (hébergeur du site, etc.) peuvent s’ajouter : liste à tenir à
              jour par l’éditeur.
            </p>
          </section>

          <section className="mt-10 border-t border-border pt-10" aria-labelledby="pc-droits">
            <h2 id="pc-droits" className="font-serif text-xl text-foreground sm:text-2xl">
              Vos droits
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-muted sm:text-base">
              Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi « Informatique et Libertés »,
              vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition
              et de portabilité dans les conditions prévues par la loi. Vous pouvez également introduire
              une réclamation auprès de la CNIL (
              <a
                href="https://www.cnil.fr"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                rel="noopener noreferrer"
              >
                cnil.fr
              </a>
              ).
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-muted sm:text-base">
              Pour exercer vos droits, contactez :{" "}
              <a
                href="mailto:contact@atelierguyonnet.com"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                contact@atelierguyonnet.com
              </a>
              . Adresse postale : à compléter.
            </p>
          </section>

          <section className="mt-10 border-t border-border pt-10" aria-labelledby="pc-cookies">
            <h2 id="pc-cookies" className="font-serif text-xl text-foreground sm:text-2xl">
              Cookies et traceurs
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-muted sm:text-base">
              Cette version du site ne vise pas l’installation de cookies non essentiels. Toute évolution
              (mesure d’audience, intégration tierce, etc.) fera l’objet d’une information et, le cas
              échéant, du recueil du consentement préalable.
            </p>
          </section>

          <nav className="mt-12 border-t border-border pt-8 font-sans text-sm text-muted">
            <Link
              href="/mentions-legales"
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              Mentions légales
            </Link>
          </nav>
        </article>
      </main>

      <Footer />
    </>
  );
}
