const microPoints = [
  "Recoins inexploités",
  "Meubles standards mal adaptés",
  "Rangements qui manquent au quotidien",
] as const;

export function ProblemSection() {
  return (
    <section
      aria-labelledby="problem-heading"
      className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
    >
      <div className="mx-auto max-w-6xl lg:px-2">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div className="max-w-xl">
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
              Constat
            </p>
            <h2
              id="problem-heading"
              className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              À Paris, chaque mètre carré compte.
            </h2>
          </div>

          <div className="max-w-xl lg:pt-1">
            <div className="space-y-6 font-sans text-base leading-relaxed text-muted md:text-lg">
              <p className="text-foreground/90">
                Les appartements parisiens offrent souvent des volumes précieux, mais pas toujours
                simples à vivre au quotidien : une entrée étroite, un renfoncement mal exploité, une
                chambre sans rangement vraiment pensé pour vous, des murs que les meubles « tout
                venant » peinent à épouser.
              </p>
              <p>
                Quand les profondeurs, les passages et les détails de finition ne sont pas pris en
                compte, ce sont des allers-retours, des portes qui gênent et du volume perdu. La
                bonne réponse n’est pas d’ajouter encore un meuble : c’est d’imaginer une solution
                sur mesure, calée sur votre pièce — au centimètre près — et sur votre façon d’habiter
                l’espace.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-14 border-t border-border pt-12 md:mt-20 md:pt-14">
          <ul className="grid gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-10">
            {microPoints.map((label, index) => (
              <li key={label} className="border-l border-border pl-5 sm:border-l-0 sm:border-t sm:border-border sm:pl-0 sm:pt-6">
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 font-serif text-lg leading-snug text-foreground">{label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
