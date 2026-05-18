"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

import { createVisibleScrollScope } from "@/components/motion/motion-dom";
import { MOTION } from "@/components/motion/motion-config";
import { prefersReducedMotion } from "@/components/motion/prefers-reduced-motion";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

type InspirationRevealProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Reveal premium des cartes inspiration — masque vertical + texte en cascade.
 */
export function InspirationReveal({ children, className }: InspirationRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion() || reducedMotion) return;

    return createVisibleScrollScope(
      () => ref.current,
      (gsapInstance) => {
        const root = ref.current;
        if (!root) return;

        const figure = root.querySelector<HTMLElement>("[data-inspiration-figure]");
        const caption = root.querySelector<HTMLElement>("[data-inspiration-caption]");
        const copy = root.querySelector<HTMLElement>("[data-inspiration-copy]");

        const tl = gsapInstance.timeline({
          scrollTrigger: {
            trigger: root,
            start: MOTION.scrollStart,
            once: true,
            invalidateOnRefresh: true,
          },
          defaults: { ease: MOTION.ease },
        });

        if (figure) {
          tl.from(figure, {
            clipPath: "inset(0 0 100% 0)",
            opacity: 0.85,
            duration: 0.85,
          });
        }
        if (caption) {
          tl.from(
            caption,
            {
              y: 10,
              opacity: 0,
              duration: 0.45,
            },
            figure ? "-=0.25" : 0,
          );
        }
        if (copy) {
          tl.from(
            copy,
            {
              y: MOTION.offset.revealY,
              opacity: 0,
              duration: MOTION.duration.reveal,
            },
            "-=0.15",
          );
        }
      },
      { deferFrame: true },
    );
  }, [reducedMotion]);

  return (
    <article ref={ref} className={className}>
      {children}
    </article>
  );
}
