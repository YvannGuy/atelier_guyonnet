import Link from "next/link";

const benefits = [
  "Analyse de votre espace",
  "Premières mesures et contraintes",
  "Piste d’aménagement personnalisée",
] as const;

export function LaunchOfferSection() {
  return (
    <section
      aria-labelledby="launch-offer-heading"
      className="border-t border-hero-warm/35 bg-linear-to-b from-hero-base to-primary px-4 py-20 sm:px-6 md:py-28 lg:px-10"
    >
      <div className="mx-auto max-w-6xl lg:px-2">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">
          <div className="flex min-w-0 flex-col justify-center">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-on-dark-muted">
              Lancement
            </p>
            <h2
              id="launch-offer-heading"
              className="mt-4 max-w-xl font-serif text-3xl leading-[1.15] tracking-tight text-on-dark sm:text-4xl"
            >
              Offre de lancement — Diagnostic rangement &amp; optimisation
            </h2>
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-on-dark-muted md:text-lg">
              Une visite à domicile pour comprendre votre besoin, observer les espaces disponibles,
              prendre les premières mesures et vous proposer une piste d’aménagement sur mesure.
            </p>

            <ul className="mt-10 space-y-4 border-t border-on-dark/15 pt-8">
              {benefits.map((label) => (
                <li
                  key={label}
                  className="flex gap-3 font-sans text-sm leading-snug text-on-dark md:text-base"
                >
                  <span className="mt-2 h-px w-8 shrink-0 bg-hero-warm/70" aria-hidden />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="flex min-w-0 flex-col justify-center">
            <div className="rounded-md border border-on-dark/18 bg-hero-mid/25 p-8 sm:p-10">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-on-dark-muted">
                Diagnostic à domicile
              </p>
              <p className="mt-6 font-sans text-sm leading-relaxed text-on-dark-muted sm:text-base">
                <span className="font-serif text-4xl tabular-nums tracking-tight text-on-dark sm:text-5xl">
                  99&nbsp;€
                </span>{" "}
                au lieu de{" "}
                <span className="line-through decoration-on-dark-muted/60">149&nbsp;€</span>
                , déductible si le projet est signé.
              </p>

              <div className="mt-6 h-px w-full bg-hero-warm/45" aria-hidden />

              <Link
                href="#devis"
                className="focus-visible:ring-on-dark/80 mt-8 inline-flex w-full items-center justify-center rounded-full bg-on-dark px-6 py-3.5 text-center font-sans text-xs font-medium uppercase tracking-[0.18em] text-primary no-underline transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:w-auto"
              >
                Réserver un diagnostic
              </Link>
              <p className="mt-4 font-sans text-[11px] leading-relaxed text-on-dark-muted/80">
                Prestation soumise à disponibilités — Paris &amp; Île-de-France.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
