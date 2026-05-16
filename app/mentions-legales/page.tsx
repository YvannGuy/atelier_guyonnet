import Link from "next/link";
import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Informations légales concernant le site ${siteConfig.name}.`,
};

export default function MentionsLegalesPage() {
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
            Mentions légales
          </h1>
          <p className="mt-3 font-sans text-sm text-muted">
            Document indicatif — informations à compléter par l’éditeur avant mise en production.
            Dernière révision : 16 mai 2026.
          </p>

          <section className="mt-10 border-t border-border pt-10" aria-labelledby="ml-editeur">
            <h2
              id="ml-editeur"
              className="font-serif text-xl text-foreground sm:text-2xl"
            >
              Éditeur du site
            </h2>
            <div className="mt-4 space-y-3 font-sans text-sm leading-relaxed text-muted sm:text-base">
              <p>
                <strong className="font-medium text-foreground">Raison sociale :</strong> À compléter
              </p>
              <p>
                <strong className="font-medium text-foreground">Statut juridique :</strong> À
                compléter (ex. entreprise individuelle, SARL, etc.)
              </p>
              <p>
                <strong className="font-medium text-foreground">Adresse du siège :</strong> À
                compléter
              </p>
              <p>
                <strong className="font-medium text-foreground">SIREN / SIRET (si applicable) :</strong>{" "}
                À compléter
              </p>
              <p>
                <strong className="font-medium text-foreground">RCS (si applicable) :</strong> À
                compléter
              </p>
              <p>
                <strong className="font-medium text-foreground">TVA intracommunautaire (si
                applicable) :</strong>{" "}
                À compléter
              </p>
              <p>
                <strong className="font-medium text-foreground">Contact :</strong>{" "}
                <a
                  href="mailto:contact@atelierguyonnet.com"
                  className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                >
                  contact@atelierguyonnet.com
                </a>{" "}
                — téléphone : à compléter
              </p>
            </div>
          </section>

          <section className="mt-10 border-t border-border pt-10" aria-labelledby="ml-directeur">
            <h2 id="ml-directeur" className="font-serif text-xl text-foreground sm:text-2xl">
              Directeur de la publication
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-muted sm:text-base">
              À compléter (nom et qualité de la personne physique responsable).
            </p>
          </section>

          <section className="mt-10 border-t border-border pt-10" aria-labelledby="ml-hebergeur">
            <h2 id="ml-hebergeur" className="font-serif text-xl text-foreground sm:text-2xl">
              Hébergement
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-muted sm:text-base">
              <strong className="font-medium text-foreground">Hébergeur :</strong> À compléter (nom,
              forme juridique, adresse et moyens de contact conformément à la réglementation en
              vigueur).
            </p>
          </section>

          <section className="mt-10 border-t border-border pt-10" aria-labelledby="ml-propriete">
            <h2 id="ml-propriete" className="font-serif text-xl text-foreground sm:text-2xl">
              Propriété intellectuelle
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-muted sm:text-base">
              L’ensemble du site (structure, textes, visuels, logo lorsqu’il est publié) est protégé
              par le droit de la propriété intellectuelle. Toute reproduction ou représentation non
              autorisée est interdite sauf mention expresse de l’éditeur.
            </p>
          </section>

          <nav className="mt-12 border-t border-border pt-8 font-sans text-sm text-muted">
            <Link
              href="/politique-de-confidentialite"
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              Politique de confidentialité
            </Link>
          </nav>
        </article>
      </main>

      <Footer />
    </>
  );
}
