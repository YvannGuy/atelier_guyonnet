type ServiceItem = {
  title: string;
  description: string;
  benefit: string;
};

const services: ServiceItem[] = [
  {
    title: "Dressing sur mesure",
    description:
      "Un rangement pensé pour vos vêtements, vos habitudes et les dimensions exactes de votre pièce.",
    benefit: "Une garde-robe lisible, des volumes calés sur votre quotidien et des finitions nettes.",
  },
  {
    title: "Placard intégré",
    description:
      "Transformez une entrée, un couloir ou un renfoncement en rangement propre, discret et parfaitement adapté.",
    benefit: "Un volume utile qui se fond dans l’architecture de votre appartement, sans effet « bloc ».",
  },
  {
    title: "Bibliothèque sur mesure",
    description:
      "Un mur optimisé pour accueillir livres, objets, rangements fermés et décoration avec élégance.",
    benefit: "Un ensemble cohérent qui structure la pièce tout en gardant une ligne visuelle sobre.",
  },
  {
    title: "Meuble TV / meuble mural",
    description:
      "Une solution intégrée pour organiser les câbles, les équipements et les rangements du salon.",
    benefit: "Un salon plus apaisé : l’essentiel est accessible, le reste disparaît proprement.",
  },
  {
    title: "Optimisation de studio",
    description:
      "Des solutions compactes pour structurer un petit appartement et gagner de la place au quotidien.",
    benefit: "Un agencement qui clarifie les fonctions — dormir, recevoir, travailler — dans un même volume.",
  },
  {
    title: "Rangements sous pente & recoins",
    description:
      "Chaque angle difficile devient une opportunité de rangement utile et bien intégré.",
    benefit: "Des zones oubliées converties en mètres linéaires réellement utilisables.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-t border-border bg-secondary/25 px-4 py-20 sm:px-6 md:py-28 lg:px-10"
    >
      <div className="mx-auto max-w-6xl lg:px-2">
        <div className="max-w-2xl">
          <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
            Offre
          </p>
          <h2
            id="services-heading"
            className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
          >
            Nos solutions sur mesure
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-muted md:text-lg">
            Des réponses sobres et durables pour les petits espaces : chaque projet fait l’objet
            d’une étude et d’une fabrication adaptée à votre pièce — pas à un module catalogue.
          </p>
        </div>

        <ul className="mt-14 grid min-w-0 list-none gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {services.map((item, index) => (
            <li key={item.title} className="min-w-0">
              <article className="flex h-full flex-col gap-4 rounded-md border border-border bg-background p-6 shadow-none transition-colors duration-200 hover:border-foreground/15 sm:p-7">
                <p className="font-sans text-[11px] font-medium tabular-nums tracking-[0.24em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-serif text-xl leading-snug text-foreground sm:text-[1.35rem]">
                  {item.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-muted md:text-base">
                  {item.description}
                </p>
                <p className="mt-auto border-t border-border pt-4 font-sans text-sm leading-relaxed text-foreground/95">
                  <span className="mb-1 block text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                    Pour vous
                  </span>
                  {item.benefit}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
