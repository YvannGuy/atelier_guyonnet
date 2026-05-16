const zones = [
  "Paris",
  "Hauts-de-Seine",
  "Seine-Saint-Denis",
  "Val-de-Marne",
  "Yvelines",
  "Essonne",
  "Seine-et-Marne",
  "Val-d’Oise",
] as const;

export function ServiceAreaSection() {
  return (
    <section
      aria-labelledby="service-area-heading"
      className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
    >
      <div className="mx-auto max-w-6xl lg:px-2">
        <div className="grid min-w-0 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="min-w-0">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Zone d’intervention
            </p>
            <h2
              id="service-area-heading"
              className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Intervention à Paris &amp; en Île-de-France
            </h2>
            <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-muted md:text-lg">
              Atelier Guyonnet intervient à domicile sur rendez-vous pour les projets de dressing sur
              mesure, placard intégré, bibliothèque, meuble TV et rangement sur mesure à Paris et en
              Île-de-France.
            </p>

            <div className="mt-10 flex flex-wrap gap-2 sm:gap-3">
              {zones.map((label) => (
                <span
                  key={label}
                  className="inline-flex border border-border bg-secondary/15 px-3 py-1.5 font-sans text-xs uppercase tracking-[0.14em] text-foreground sm:text-[13px]"
                >
                  {label}
                </span>
              ))}
            </div>

            <p className="mt-8 max-w-xl font-sans text-sm leading-relaxed text-muted">
              Les déplacements sont confirmés selon la localisation, la nature du projet et les
              disponibilités de l’atelier.
            </p>
          </div>

          <aside className="relative min-w-0 rounded-md border border-border bg-secondary/20 p-6 sm:p-8">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
              Repérage indicatif
            </p>
            <div className="relative mt-6 aspect-4/3 overflow-hidden rounded-sm border border-border bg-background">
              <div
                className="absolute inset-0 bg-linear-to-br from-secondary/50 via-background to-secondary/30"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-6 rounded-sm border border-dashed border-border"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2 bg-border"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute left-8 right-8 top-1/2 h-px -translate-y-1/2 bg-border"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute left-1/3 top-1/3 h-2 w-2 rounded-full border border-hero-warm bg-secondary/40"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute right-1/4 bottom-1/3 h-2 w-2 rounded-full border border-foreground/25 bg-background"
                aria-hidden
              />
              <p className="absolute bottom-3 left-4 font-sans text-[10px] uppercase tracking-[0.16em] text-muted">
                Schéma non géolocalisé
              </p>
            </div>
            <p className="mt-4 font-sans text-xs leading-relaxed text-muted">
              Illustration abstraite — pas de carte réelle ni de données de navigation.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
