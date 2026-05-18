import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ProcessTimelineMotion } from "@/components/motion/ProcessTimelineMotion";

type ProcessStep = {
  title: string;
  description: string;
};

const intro =
  "Chaque projet commence par une écoute attentive de vos besoins, puis avance étape par étape : mesures, proposition, fabrication et pose. L’objectif est de créer une solution adaptée à votre intérieur, sans approximation.";

const desktopStepItemClass =
  "group relative flex min-w-0 flex-col rounded-sm border border-transparent px-3 py-4 pt-2 transition-[background-color,border-color] duration-300 ease-out hover:border-border hover:bg-secondary/10 motion-reduce:transition-none";

const steps: ProcessStep[] = [
  {
    title: "Échange sur votre besoin",
    description:
      "Comprendre votre espace, vos habitudes, vos contraintes et le type de rangement souhaité.",
  },
  {
    title: "Prise de mesures",
    description:
      "Relever précisément les dimensions pour concevoir une solution adaptée au centimètre près.",
  },
  {
    title: "Proposition de solution",
    description:
      "Présenter une idée claire, les matériaux possibles, les finitions et un devis structuré.",
  },
  {
    title: "Fabrication / préparation",
    description:
      "Préparer les éléments avec soin, en anticipant la pose, les ajustements et les détails pratiques.",
  },
  {
    title: "Pose et finitions",
    description:
      "Installer proprement, ajuster sur place et vérifier que le rendu final est fonctionnel et harmonieux.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="methode"
      aria-labelledby="process-heading"
      className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
    >
      <div className="mx-auto max-w-6xl lg:px-2">
        <ScrollReveal className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
          <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
            Méthode
          </p>
          <h2
            id="process-heading"
            className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
          >
            Une méthode simple, précise et rassurante
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-muted md:text-lg">{intro}</p>
        </ScrollReveal>

        {/* Mobile & tablette — timeline verticale */}
        <ProcessTimelineMotion
          variant="vertical"
          className="relative mt-14 sm:mt-16 lg:hidden"
        >
          <span
            data-process-line
            className="absolute bottom-2 left-[0.45rem] top-2 w-px bg-border sm:left-2"
            aria-hidden
          />
          <ol className="relative space-y-10">
            {steps.map((step, index) => (
              <li key={step.title} data-process-step className="relative pl-8 sm:pl-10">
                <span
                  className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-sm border border-border bg-background font-sans text-[11px] font-medium tabular-nums tracking-wide text-muted sm:left-0.5"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl leading-snug text-foreground">{step.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-muted md:text-base">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </ProcessTimelineMotion>

        {/* Desktop — frise horizontale */}
        <ProcessTimelineMotion variant="horizontal" className="relative mt-16 hidden lg:mt-20 lg:block">
          <div
            data-process-line
            className="pointer-events-none absolute left-0 right-0 top-17 h-px bg-border"
            aria-hidden
          />

          <ol className="grid grid-cols-5 gap-4 xl:gap-6">
            {steps.map((step, index) => (
              <li key={step.title} data-process-step className={desktopStepItemClass}>
                <span
                  className="font-sans text-[11px] font-medium tabular-nums tracking-[0.22em] text-muted transition-colors duration-300 ease-out group-hover:text-foreground motion-reduce:transition-none"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="relative mt-6" aria-hidden>
                  <div className="h-3 w-px bg-border transition-[height,background-color] duration-300 ease-out group-hover:h-6 group-hover:bg-foreground/70 motion-reduce:transition-none motion-reduce:group-hover:h-3" />
                  <span className="pointer-events-none absolute top-0 left-0 h-px w-0 bg-border transition-[width,background-color] duration-300 ease-out group-hover:w-5 group-hover:bg-foreground/40 motion-reduce:transition-none motion-reduce:group-hover:w-0" />
                </div>
                <h3 className="mt-4 font-serif text-base leading-snug text-foreground transition-transform duration-300 ease-out group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 xl:text-lg">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted transition-colors duration-300 ease-out group-hover:text-foreground/80 motion-reduce:transition-none">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </ProcessTimelineMotion>
      </div>
    </section>
  );
}
