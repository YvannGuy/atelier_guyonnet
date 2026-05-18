"use client";

import { useActionState, useEffect, useRef } from "react";

import Link from "next/link";

import { submitQuoteRequest, type QuoteFormState } from "@/app/actions/submit-quote";
import { QUOTE_BUDGETS, QUOTE_DELAYS, QUOTE_PROJECT_TYPES } from "@/lib/constants/quote-form";
import { siteConfig } from "@/lib/constants/site";

const initialFormState: QuoteFormState = { status: "idle" };

const hintList = [
  "le type de meuble ou rangement souhaité ;",
  "les dimensions approximatives ;",
  "la pièce concernée ;",
  "les contraintes de l’espace ;",
  "votre délai idéal.",
] as const;

const fieldClass =
  "min-w-0 max-w-full rounded-sm border border-border bg-background px-3 py-2.5 font-sans text-sm text-foreground shadow-none outline-none transition-[color,box-shadow] placeholder:text-muted/80 focus-visible:border-foreground/25 focus-visible:ring-2 focus-visible:ring-foreground/10 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const statusBoxBase =
  "rounded-sm border px-4 py-3 font-sans text-sm leading-relaxed";

/**
 * Formulaire de demande de devis — envoi via Resend (Server Action `submitQuoteRequest`).
 * Clé `RESEND_API_KEY` requise côté serveur. Les pièces jointes ne sont pas encore prises en charge.
 */
export function QuoteFormSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(submitQuoteRequest, initialFormState);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <section
      id="devis"
      aria-labelledby="quote-form-heading"
      className="border-t border-border bg-secondary/25 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
    >
      <div className="mx-auto max-w-6xl lg:px-2">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
          <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
            Contact
          </p>
          <h2
            id="quote-form-heading"
            className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
          >
            Parlez-nous de votre projet
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-muted md:text-lg">
            Vous avez un dressing, un placard, une bibliothèque, un meuble TV ou un rangement sur
            mesure en tête ? Décrivez votre besoin, votre espace et vos contraintes. Nous vous
            répondrons sous 24 à 48h ouvrées.
          </p>
        </div>

        <div className="mt-14 grid min-w-0 gap-14 lg:mt-16 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="min-w-0 space-y-10">
            <div className="rounded-md border border-border bg-background p-6 sm:p-8">
              <h3 className="font-serif text-xl text-foreground sm:text-2xl">
                Ce que vous pouvez préciser
              </h3>
              <ul className="mt-5 list-none space-y-3 font-sans text-sm leading-relaxed text-muted md:text-base">
                {hintList.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-px w-6 shrink-0 bg-border" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-md border border-border bg-background p-6 sm:p-8">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                Étude personnalisée
              </p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-muted md:text-base">
                Chaque demande est étudiée selon votre espace, vos mesures, vos besoins et les
                matériaux envisagés.
              </p>
            </div>

            <div className="rounded-md border border-border bg-background p-6 sm:p-8">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                Coordonnées
              </p>
              <p className="mt-3 font-sans text-sm text-foreground">
                <span className="block text-muted">Email</span>
                <Link
                  href="mailto:contact@atelierguyonnet.com"
                  className="focus-visible:ring-primary/30 mt-1 inline-block font-medium text-foreground no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  contact@atelierguyonnet.com
                </Link>
              </p>
              <p className="mt-4 font-sans text-sm text-foreground">
                <span className="block text-muted">Téléphone</span>
                <span className="mt-1 block font-medium text-muted">À compléter</span>
              </p>
              <p className="mt-4 font-sans text-xs leading-relaxed text-muted">
                Référence : {siteConfig.name} — {siteConfig.tagline}
              </p>
            </div>
          </div>

          <div className="min-w-0 rounded-md border border-border bg-background p-6 sm:p-8">
            <div className="mb-6 space-y-3" aria-live="polite">
              {state.status === "success" ? (
                <p
                  role="status"
                  className={`${statusBoxBase} border-border bg-secondary/30 text-foreground`}
                >
                  Votre demande a bien été envoyée. Nous vous répondrons sous 24 à 48h ouvrées.
                </p>
              ) : null}
              {state.status === "error" ? (
                <p
                  role="alert"
                  className={`${statusBoxBase} border-foreground/20 bg-background text-foreground`}
                >
                  {state.message}
                </p>
              ) : null}
            </div>

            <form ref={formRef} className="space-y-6" action={formAction}>
              <div>
                <label htmlFor="quote-nom" className="mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                  Nom
                </label>
                <input
                  id="quote-nom"
                  name="nom"
                  type="text"
                  autoComplete="name"
                  required
                  disabled={isPending}
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="quote-email" className="mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                  Email
                </label>
                <input
                  id="quote-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  disabled={isPending}
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="quote-tel" className="mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                  Téléphone
                </label>
                <input
                  id="quote-tel"
                  name="telephone"
                  type="tel"
                  autoComplete="tel"
                  required
                  disabled={isPending}
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="quote-ville" className="mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                  Ville
                </label>
                <input
                  id="quote-ville"
                  name="ville"
                  type="text"
                  autoComplete="address-level2"
                  placeholder="Paris, Boulogne-Billancourt, Saint-Denis…"
                  disabled={isPending}
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="quote-type" className="mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                  Type de projet
                </label>
                <select id="quote-type" name="typeProjet" required className={fieldClass} defaultValue="" disabled={isPending}>
                  <option value="" disabled>
                    Sélectionner une option
                  </option>
                  {QUOTE_PROJECT_TYPES.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="quote-dimensions" className="mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                  Dimensions approximatives
                </label>
                <input
                  id="quote-dimensions"
                  name="dimensions"
                  type="text"
                  placeholder="ex. largeur 240 cm, hauteur 250 cm"
                  disabled={isPending}
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="quote-budget" className="mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                  Budget estimé
                </label>
                <select id="quote-budget" name="budget" required className={fieldClass} defaultValue="" disabled={isPending}>
                  <option value="" disabled>
                    Sélectionner une fourchette
                  </option>
                  {QUOTE_BUDGETS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="quote-delai" className="mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                  Délai souhaité
                </label>
                <select id="quote-delai" name="delai" required className={fieldClass} defaultValue="" disabled={isPending}>
                  <option value="" disabled>
                    Sélectionner une option
                  </option>
                  {QUOTE_DELAYS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="quote-message" className="mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                  Message
                </label>
                <textarea
                  id="quote-message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Décrivez votre espace, votre besoin, les contraintes, les matériaux souhaités…"
                  disabled={isPending}
                  className={`${fieldClass} min-h-36 resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="focus-visible:ring-primary/30 min-h-12 w-full touch-manipulation rounded-sm bg-primary px-6 py-4 font-sans text-xs font-medium uppercase tracking-[0.18em] text-on-dark transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isPending ? "Envoi en cours…" : "Envoyer ma\u00A0demande"}
              </button>

              <p className="font-sans text-xs leading-relaxed text-muted">
                Réponse sous 24 à 48h ouvrées. Votre demande sera étudiée avec attention.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
