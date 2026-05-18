import Link from "next/link";

import { homeFaqItems } from "@/lib/constants/home-faq";

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-border bg-background px-4 py-20 sm:px-6 md:py-28 lg:px-10"
    >
      <div className="mx-auto max-w-6xl lg:px-2">
        <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-2xl">
          <p className="font-sans text-[11px] font-light uppercase tracking-[0.28em] text-muted">
            Questions fréquentes
          </p>
          <h2
            id="faq-heading"
            className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl"
          >
            Ce qu’il faut savoir avant d’écrire
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-muted md:text-lg">
            Réponses factuelles sur la zone d’intervention, les types de projets et les visuels du
            site. Pour un devis ou une estimation, passez par le{" "}
            <Link
              href="#devis"
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/40"
            >
              formulaire de contact
            </Link>
            .
          </p>
        </div>

        <ul className="mx-auto mt-14 max-w-3xl list-none space-y-3 sm:mt-16 lg:mx-0 lg:max-w-2xl">
          {homeFaqItems.map((item) => (
            <li key={item.question} className="min-w-0">
              <details className="group rounded-md border border-border bg-secondary/10 px-4 py-3 sm:px-5 sm:py-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="cursor-pointer list-none font-sans text-sm font-medium text-foreground outline-none after:ml-2 after:inline-block after:transition-transform after:content-['+'] group-open:after:rotate-45 sm:text-base">
                  {item.question}
                </summary>
                <p className="mt-3 border-t border-border pt-3 font-sans text-sm leading-relaxed text-muted sm:text-[15px]">
                  {item.answer}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
