"use client";

import Link from "next/link";
import { useCallback, useRef, useState } from "react";

import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import {
  beforeAfterItems,
  type BeforeAfterItem,
} from "@/lib/constants/before-after-images";

const INITIAL_VISIBLE_COUNT = 2;
const EXAMPLES_ID = "before-after-examples";

function BeforeAfterEditorialRow({
  item,
  index,
}: {
  item: BeforeAfterItem;
  index: number;
}) {
  const imageFirst = index % 2 === 0;
  const numberLabel = String(index + 1).padStart(2, "0");

  const textBlock = (
    <div className="flex min-w-0 flex-col justify-center lg:px-2">
      <p
        className="font-sans text-[11px] font-medium tabular-nums tracking-[0.22em] text-muted"
        aria-hidden
      >
        {numberLabel}
      </p>
      <h3
        id={`before-after-${item.id}-title`}
        className="mt-3 font-serif text-2xl leading-snug tracking-tight text-foreground sm:text-[1.65rem]"
      >
        {item.title}
      </h3>
      <p className="mt-4 font-sans text-sm leading-relaxed text-muted md:text-base">
        {item.description}
      </p>
      <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
        {item.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex gap-3 font-sans text-sm leading-relaxed text-foreground/90"
          >
            <span className="mt-2 h-px w-3 shrink-0 bg-border" aria-hidden />
            {highlight}
          </li>
        ))}
      </ul>
      <p className="mt-6 font-sans text-xs leading-relaxed text-muted">
        Visuel d’inspiration — comparaison indicative, visuels générés.
      </p>
    </div>
  );

  const sliderBlock = (
    <div className="min-w-0">
      <BeforeAfterSlider
        beforeSrc={item.beforeSrc}
        beforeAlt={item.beforeAlt}
        afterSrc={item.afterSrc}
        afterAlt={item.afterAlt}
        title={item.title}
      />
    </div>
  );

  return (
    <article
      aria-labelledby={`before-after-${item.id}-title`}
      className={`grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:items-center lg:gap-x-12 lg:gap-y-0 xl:gap-x-16 ${
        index > 0 ? "border-t border-border pt-14 sm:pt-16 lg:pt-20" : ""
      }`}
    >
      {imageFirst ? (
        <>
          {sliderBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {sliderBlock}
        </>
      )}
    </article>
  );
}

export function BeforeAfterList() {
  const [showAll, setShowAll] = useState(false);
  const listTopRef = useRef<HTMLDivElement>(null);

  const visibleItems = showAll
    ? beforeAfterItems
    : beforeAfterItems.slice(0, INITIAL_VISIBLE_COUNT);

  const hasMore = beforeAfterItems.length > INITIAL_VISIBLE_COUNT;

  const toggleExpanded = useCallback(() => {
    setShowAll((prev) => {
      const next = !prev;
      if (!next) {
        requestAnimationFrame(() => {
          const prefersReduced =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

          listTopRef.current?.scrollIntoView({
            behavior: prefersReduced ? "auto" : "smooth",
            block: "start",
          });
        });
      }
      return next;
    });
  }, []);

  return (
    <div ref={listTopRef} className="scroll-mt-24">
      <div id={EXAMPLES_ID} className="mt-14 sm:mt-16 lg:mt-20">
        {visibleItems.map((item, index) => (
          <BeforeAfterEditorialRow key={item.id} item={item} index={index} />
        ))}
      </div>

      {hasMore ? (
        <div className="mx-auto mt-12 max-w-3xl border-t border-border pt-10 text-center lg:mt-14 lg:pt-12">
          <button
            type="button"
            onClick={toggleExpanded}
            aria-expanded={showAll}
            aria-controls={EXAMPLES_ID}
            className="inline-flex min-h-12 items-center justify-center rounded-sm border border-foreground bg-background px-6 py-3 font-sans text-xs font-medium uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-foreground/4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {showAll ? "Voir moins" : "Voir plus d’exemples"}
          </button>

          <p className="mt-5">
            <Link
              href="#devis"
              className={`font-sans text-xs uppercase tracking-[0.16em] no-underline transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                showAll
                  ? "inline-flex min-h-12 items-center justify-center rounded-sm border border-foreground px-6 py-3 font-medium text-foreground hover:bg-foreground/4"
                  : "text-muted underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-foreground/35"
              }`}
            >
              Imaginer mon projet
            </Link>
          </p>
        </div>
      ) : (
        <div className="mx-auto mt-14 max-w-3xl border-t border-border pt-10 text-center lg:mt-16 lg:pt-12">
          <Link
            href="#devis"
            className="inline-flex items-center justify-center rounded-sm border border-foreground px-6 py-3 font-sans text-xs font-medium uppercase tracking-[0.18em] text-foreground no-underline transition-colors hover:bg-foreground/4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Imaginer mon projet
          </Link>
        </div>
      )}
    </div>
  );
}
