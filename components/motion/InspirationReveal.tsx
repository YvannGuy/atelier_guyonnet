"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

import { ensureScrollTrigger } from "@/components/motion/gsap-client";
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
    if (prefersReducedMotion() || reducedMotion || !ref.current) return;

    const gsap = ensureScrollTrigger();
    const root = ref.current;
    const figure = root.querySelector<HTMLElement>("[data-inspiration-figure]");
    const caption = root.querySelector<HTMLElement>("[data-inspiration-caption]");
    const copy = root.querySelector<HTMLElement>("[data-inspiration-copy]");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: MOTION.scrollStart,
          once: true,
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
    }, root);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <article ref={ref} className={className}>
      {children}
    </article>
  );
}
