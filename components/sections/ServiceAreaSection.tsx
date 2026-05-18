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

const interventionLevels = [
  {
    title: "Paris intra-muros",
    detail: "Déplacements pour prises de cote et suivis selon calendrier convenu.",
  },
  {
    title: "Petite couronne",
    detail: "Projets proches de Paris, avec organisation du rendez-vous à l’avance.",
  },
  {
    title: "Île-de-France selon projet",
    detail: "Étendue selon le type d’agencement, les délais et la charge de l’atelier.",
  },
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
          </div>

          <aside className="relative min-w-0 rounded-md border border-border bg-secondary/20 p-6 sm:p-8">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
              Déplacement sur rendez-vous
            </p>
            <div className="mt-4 space-y-3 font-sans text-sm leading-relaxed text-muted md:text-base">
              <p>
                <strong className="font-medium text-foreground">Paris</strong> comme point central
                pour organiser les rendez-vous et les allers-retours.
              </p>
              <p>
                L’intervention est ajustée selon la{" "}
                <strong className="font-medium text-foreground">nature du projet</strong> et le temps
                nécessaire sur place.
              </p>
              <p>
                <strong className="font-medium text-foreground">Priorité aux agencements sur mesure</strong>{" "}
                (dressing, placard intégré, bibliothèque, rangements).
              </p>
              <p className="text-foreground/90">
                Chaque déplacement est <strong className="font-medium">confirmé après un premier échange</strong>{" "}
                (besoin, localisation, créneaux).
              </p>
            </div>

            <ul className="mt-8 space-y-3 border-t border-border pt-8">
              {interventionLevels.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-2 h-px w-6 shrink-0 bg-border" aria-hidden />
                  <div>
                    <p className="font-sans text-sm font-medium text-foreground">{item.title}</p>
                    <p className="mt-1 font-sans text-xs leading-relaxed text-muted sm:text-sm">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <figure className="relative mt-8 overflow-hidden rounded-sm border border-border bg-background px-4 pb-6 pt-8 sm:px-6 sm:pt-10">
              <figcaption className="sr-only">
                Schéma stylisé : cercles concentriques autour de Paris, sans carte géographique réelle.
              </figcaption>
              <div className="relative mx-auto aspect-square max-w-[260px]">
                <div
                  className="absolute inset-0 rounded-full border border-border/40"
                  aria-hidden
                />
                <div
                  className="absolute inset-[14%] rounded-full border border-dashed border-border/60"
                  aria-hidden
                />
                <div
                  className="absolute inset-[28%] rounded-full border border-border/50"
                  aria-hidden
                />
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5">
                  <span
                    className="h-2 w-2 rounded-full border border-foreground/30 bg-foreground/85"
                    aria-hidden
                  />
                  <span className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-foreground">
                    Paris
                  </span>
                </div>
                <span
                  className="absolute left-[8%] top-[42%] font-sans text-[9px] uppercase tracking-[0.14em] text-muted sm:text-[10px]"
                  aria-hidden
                >
                  Petite couronne
                </span>
                <span
                  className="absolute right-[6%] top-[30%] max-w-[5.5rem] text-right font-sans text-[9px] uppercase leading-snug tracking-[0.12em] text-muted sm:text-[10px]"
                  aria-hidden
                >
                  IdF
                  <br />
                  selon projet
                </span>
                <span
                  className="absolute bottom-[12%] left-1/2 -translate-x-1/2 font-sans text-[9px] uppercase tracking-[0.14em] text-muted sm:text-[10px]"
                  aria-hidden
                >
                  Rayon indicatif
                </span>
              </div>
              <p className="mt-4 text-center font-sans text-[10px] uppercase tracking-[0.16em] text-muted">
                Schéma éditorial — pas de carte ni de géolocalisation
              </p>
            </figure>
          </aside>
        </div>
      </div>
    </section>
  );
}
