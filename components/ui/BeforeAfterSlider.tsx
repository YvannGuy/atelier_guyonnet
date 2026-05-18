"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";

import { ensureScrollTrigger } from "@/components/motion/gsap-client";
import { afterLayout, isElementVisible } from "@/components/motion/motion-dom";
import { MOTION } from "@/components/motion/motion-config";
import { prefersReducedMotion } from "@/components/motion/prefers-reduced-motion";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
  title?: string;
};

/**
 * Slider avant / après : poignée et ligne sur l’image, drag souris/tactile + clavier (input range masqué).
 */
export function BeforeAfterSlider({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
  title,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const draggingRef = useRef(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const pulsePlayedRef = useRef(false);
  const rangeId = useId();
  const clipRight = 100 - position;
  const reducedMotion = useReducedMotion();

  const setFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    if (width <= 0) return;
    const p = ((clientX - left) / width) * 100;
    setPosition(Math.round(Math.min(100, Math.max(0, p)) * 1000) / 1000);
  }, []);

  const onPointerDownFrame = (e: React.PointerEvent) => {
    frameRef.current?.setPointerCapture(e.pointerId);
    draggingRef.current = true;
    setFromClientX(e.clientX);
  };

  const onPointerMoveFrame = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    setFromClientX(e.clientX);
  };

  const endDrag = (e: React.PointerEvent) => {
    draggingRef.current = false;
    if (frameRef.current?.hasPointerCapture?.(e.pointerId)) {
      frameRef.current.releasePointerCapture(e.pointerId);
    }
  };

  const onLostPointerCapture = () => {
    draggingRef.current = false;
  };

  useEffect(() => {
    if (prefersReducedMotion() || reducedMotion || pulsePlayedRef.current) return;

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    const cancelAfterLayout = afterLayout(() => {
      const frame = frameRef.current;
      const handle = handleRef.current;
      if (cancelled || !frame || !handle || pulsePlayedRef.current || !isElementVisible(frame)) {
        return;
      }

      const gsapInstance = ensureScrollTrigger();
      ctx = gsapInstance.context(() => {
        gsapInstance
          .timeline({
            scrollTrigger: {
              trigger: frame,
              start: MOTION.scrollStart,
              once: true,
              invalidateOnRefresh: true,
              onEnter: () => {
                pulsePlayedRef.current = true;
              },
            },
          })
          .to(handle, {
            scale: 1.08,
            duration: MOTION.duration.pulse,
            ease: MOTION.easeSoft,
          })
          .to(handle, {
            scale: 1,
            duration: MOTION.duration.pulse,
            ease: MOTION.easeSoft,
          });
      }, frame);
    });

    return () => {
      cancelled = true;
      cancelAfterLayout();
      ctx?.revert();
    };
  }, [reducedMotion]);

  return (
    <div className="overflow-hidden rounded-md border border-border bg-background">
      <div
        ref={frameRef}
        className="relative aspect-16/11 min-h-[200px] w-full cursor-ew-resize touch-pan-y sm:aspect-16/10 sm:min-h-[240px] md:min-h-[280px]"
        role="group"
        aria-label={
          title
            ? `Comparer l’avant et l’après — ${title}`
            : "Comparer l’avant et l’après"
        }
        onPointerDown={onPointerDownFrame}
        onPointerMove={onPointerMoveFrame}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onLostPointerCapture={onLostPointerCapture}
      >
        <span className="sr-only">
          {beforeAlt} {afterAlt}
        </span>

        {/* Contrôle clavier : range invisible, hors flux visuel */}
        <input
          id={rangeId}
          type="range"
          min={0}
          max={100}
          step={1}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label="Comparer l’avant et l’après"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          tabIndex={0}
          className="sr-only"
        />

        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(min-width: 1024px) min(576px, 50vw), 100vw"
          className="pointer-events-none object-cover object-center"
          draggable={false}
          priority={false}
        />
        <div
          className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
          style={{ clipPath: `inset(0 ${clipRight}% 0 0)` }}
          aria-hidden
        >
          <Image
            src={afterSrc}
            alt=""
            fill
            sizes="(min-width: 1024px) min(576px, 50vw), 100vw"
            className="object-cover object-center"
            draggable={false}
            aria-hidden
          />
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-11 bg-linear-to-t from-primary/15 via-transparent to-transparent"
          aria-hidden
        />

        <div
          className="pointer-events-none absolute bottom-0 top-0 z-20 w-px bg-foreground/40 [box-shadow:1px_0_0_color-mix(in_srgb,var(--ag-background-light)_45%,transparent)]"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
          aria-hidden
        />

        <div
          ref={handleRef}
          className="absolute z-30 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize touch-none items-center justify-center rounded-full border border-border bg-background/95 shadow-md sm:h-12 sm:w-12"
          style={{ left: `${position}%`, top: "50%" }}
          aria-hidden
        >
          <span className="font-sans text-[11px] font-medium tabular-nums tracking-[0.12em] text-muted">
            ‹ ›
          </span>
        </div>

        <span className="pointer-events-none absolute left-3 top-3 z-20 rounded-sm border border-border/80 bg-background/90 px-2 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-foreground sm:left-4 sm:top-4">
          Avant
        </span>
        <span className="pointer-events-none absolute right-3 top-3 z-20 rounded-sm border border-border/80 bg-background/90 px-2 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-foreground sm:right-4 sm:top-4">
          Après
        </span>
      </div>
    </div>
  );
}
