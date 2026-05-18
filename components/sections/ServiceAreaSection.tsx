import { ServiceAreaMapDynamic } from "@/components/ui/ServiceAreaMapDynamic";

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

            <div
              className="relative mt-8 overflow-hidden rounded-md border border-border bg-background"
              role="region"
              aria-label="Carte indicative : Paris et île-de-France (OpenStreetMap)"
            >
              <div className="relative z-10 border-b border-border bg-secondary/25 px-4 py-3 sm:px-5">
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                  Zone d’intervention indicative
                </p>
                <p className="mt-1 font-sans text-[11px] leading-relaxed text-muted/90">
                  Cercle approximatif : les déplacements réels sont confirmés au cas par cas.
                </p>
              </div>
              <ServiceAreaMapDynamic />
              <p className="border-t border-border bg-secondary/10 px-4 py-3 text-center font-sans text-[11px] leading-relaxed text-muted sm:px-5">
                Zone indicative — les déplacements sont confirmés selon la localisation, la nature du
                projet et les disponibilités de l’atelier.
              </p>
              <p className="border-t border-border px-4 py-2 text-center font-sans text-[9px] uppercase tracking-[0.12em] text-muted/85 sm:px-5">
                Fonds de carte © contributeurs OpenStreetMap — attribution affichée sur la carte.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
