"use client";

import Image from "next/image";
import { useId, useState } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
};

/**
 * Slider avant / après — `input type="range"` natif (souris, tactile, clavier).
 * Image « après » superposée avec découpe selon la position ; image « avant » en fond.
 */
export function BeforeAfterSlider({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const rangeId = useId();
  const clipRight = 100 - position;

  return (
    <div className="relative overflow-hidden rounded-md border border-border bg-background">
      <div
        className="relative aspect-16/11 min-h-[200px] w-full sm:aspect-16/10 sm:min-h-[240px] md:min-h-[280px]"
        role="region"
        aria-label="Comparaison avant et après. Visuels d’ambiance, pas un chantier réel."
      >
        <span className="sr-only">
          {beforeAlt} {afterAlt}
        </span>

        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(min-width: 896px) 56rem, 100vw"
          className="object-cover object-center"
          priority={false}
        />
        <div
          className="absolute inset-0 z-10 overflow-hidden"
          style={{ clipPath: `inset(0 ${clipRight}% 0 0)` }}
          aria-hidden
        >
          <Image
            src={afterSrc}
            alt=""
            fill
            sizes="(min-width: 896px) 56rem, 100vw"
            className="object-cover object-[center_40%]"
            aria-hidden
          />
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-11 bg-linear-to-t from-primary/15 via-transparent to-transparent"
          aria-hidden
        />

        <div
          className="pointer-events-none absolute bottom-0 top-0 z-20 w-px bg-foreground/30"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-1/2 z-20 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/95 shadow-sm sm:h-10 sm:w-10"
          style={{ left: `${position}%`, top: "50%" }}
          aria-hidden
        >
          <span className="font-sans text-[10px] font-medium tabular-nums tracking-[0.12em] text-muted">
            ‹›
          </span>
        </div>

        <span className="pointer-events-none absolute left-3 top-3 z-20 rounded-sm border border-border/80 bg-background/90 px-2 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-foreground sm:left-4 sm:top-4">
          Avant
        </span>
        <span className="pointer-events-none absolute right-3 top-3 z-20 rounded-sm border border-border/80 bg-background/90 px-2 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-foreground sm:right-4 sm:top-4">
          Après
        </span>

        <p className="pointer-events-none absolute bottom-3 left-1/2 z-20 max-w-[95%] -translate-x-1/2 px-2 text-center font-sans text-[10px] uppercase tracking-[0.18em] text-muted sm:bottom-4">
          Illustration d’ambiance — pas un avant/après réel
        </p>
      </div>

      <div className="border-t border-border bg-background px-4 py-3 sm:px-5">
        <label
          htmlFor={rangeId}
          className="mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-muted"
        >
          Comparer l’avant et l’après
        </label>
        <input
          id={rangeId}
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label="Comparer l’avant et l’après : ajuster pour révéler davantage la vue après."
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={position}
          className="quote-slider-range h-4 w-full cursor-ew-resize touch-manipulation"
        />
        <div className="mt-2 flex justify-between font-sans text-[10px] uppercase tracking-[0.16em] text-muted">
          <span>Plus « avant »</span>
          <span>Plus « après »</span>
        </div>
      </div>
    </div>
  );
}
