import Image from "next/image";

import { placeholderImages } from "@/lib/constants/placeholder-images";

const trustPoints = [
  "Travail sur mesure",
  "Finitions soignées",
  "Intervention à domicile sur rendez-vous",
] as const;

export function AboutSection() {
  return (
    <section
      id="apropos"
      aria-labelledby="about-heading"
      className="border-t border-border bg-secondary/20 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
    >
      <div className="mx-auto max-w-6xl lg:px-2">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">
          <div className="order-1 flex min-w-0 flex-col justify-center lg:order-2">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              À propos
            </p>
            <h2
              id="about-heading"
              className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              Un savoir-faire artisanal au service de votre intérieur
            </h2>
            <div className="mt-6 space-y-5 font-sans text-base leading-relaxed text-muted md:text-lg">
              <p className="text-foreground/90">
                Atelier Guyonnet est porté par un artisan menuisier / ébéniste expérimenté, capable
                de transformer une idée, un plan ou un espace difficile en solution concrète, solide
                et bien finie.
              </p>
              <p>
                Chaque projet est abordé avec le même soin : comprendre l’usage réel, respecter les
                contraintes de l’espace, choisir des solutions adaptées et réaliser une pose propre.
              </p>
            </div>

            <ul className="mt-10 space-y-4 border-t border-border pt-8">
              {trustPoints.map((label) => (
                <li
                  key={label}
                  className="flex gap-3 font-sans text-sm leading-snug text-foreground md:text-base"
                >
                  <span
                    className="mt-2 h-px w-8 shrink-0 bg-border"
                    aria-hidden
                  />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="order-2 min-w-0 lg:order-1">
            <figure className="relative overflow-hidden rounded-md border border-border bg-background">
              <div className="relative aspect-4/5 sm:aspect-5/6 lg:min-h-112">
                <Image
                  src={placeholderImages.aboutAtelierDetail.publicPath}
                  alt={placeholderImages.aboutAtelierDetail.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-primary/45 via-transparent to-secondary/20"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.14]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, transparent, transparent 32px, color-mix(in srgb, var(--ag-text-main) 10%, transparent) 32px, color-mix(in srgb, var(--ag-text-main) 10%, transparent) 33px)",
                  }}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute left-6 top-6 h-10 w-px bg-border"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute left-6 top-6 h-px w-10 bg-border"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute bottom-12 right-8 h-px w-16 bg-border"
                  aria-hidden
                />
              </div>
              <figcaption className="relative z-10 bg-linear-to-t from-primary/55 to-transparent px-5 pb-5 pt-12 sm:px-6 sm:pb-6 sm:pt-14">
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-foreground">
                  Ambiance atelier — illustration
                </p>
                <p className="mt-2 font-sans text-sm leading-relaxed text-muted">
                  Détail d’outils et de matière : visuel générique d’inspiration, sans identifier
                  une personne ni représenter l’atelier réel.
                </p>
              </figcaption>
            </figure>
          </aside>
        </div>
      </div>
    </section>
  );
}
