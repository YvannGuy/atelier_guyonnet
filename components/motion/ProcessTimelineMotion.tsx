"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

import { ensureScrollTrigger } from "@/components/motion/gsap-client";
import { MOTION } from "@/components/motion/motion-config";
import { prefersReducedMotion } from "@/components/motion/prefers-reduced-motion";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

type ProcessTimelineMotionProps = {
  children: ReactNode;
  className?: string;
  /** vertical | horizontal — orientation de la ligne timeline */
  variant?: "vertical" | "horizontal";
};

/**
 * Étapes méthode en séquence + ligne qui se révèle progressivement.
 */
export function ProcessTimelineMotion({
  children,
  className,
  variant = "vertical",
}: ProcessTimelineMotionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion() || reducedMotion || !ref.current) return;

    const gsap = ensureScrollTrigger();
    const root = ref.current;
    const line = root.querySelector<HTMLElement>("[data-process-line]");
    const steps = root.querySelectorAll<HTMLElement>("[data-process-step]");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: MOTION.scrollStart,
          once: true,
        },
        defaults: { ease: MOTION.ease },
      });

      if (line) {
        tl.from(line, {
          scaleY: variant === "vertical" ? 0 : 1,
          scaleX: variant === "horizontal" ? 0 : 1,
          transformOrigin: variant === "vertical" ? "top center" : "left center",
          duration: 0.9,
        });
      }

      if (steps.length) {
        tl.from(
          steps,
          {
            y: 16,
            opacity: 0,
            duration: 0.55,
            stagger: 0.12,
          },
          line ? "-=0.55" : 0,
        );
      }
    }, root);

    return () => ctx.revert();
  }, [reducedMotion, variant]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
