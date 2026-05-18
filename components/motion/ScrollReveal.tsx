"use client";

import { useLayoutEffect, useRef, type ElementType, type ReactNode } from "react";

import { createVisibleScrollScope } from "@/components/motion/motion-dom";
import { MOTION } from "@/components/motion/motion-config";
import { prefersReducedMotion } from "@/components/motion/prefers-reduced-motion";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

/**
 * Reveal vertical léger au scroll — opacity + y, une seule fois.
 */
export function ScrollReveal({ children, className, as: Tag = "div" }: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion() || reducedMotion) return;

    return createVisibleScrollScope(
      () => ref.current,
      (gsapInstance) => {
        const el = ref.current;
        if (!el) return;

        gsapInstance.from(el, {
          y: MOTION.offset.revealY,
          opacity: 0,
          duration: MOTION.duration.reveal,
          ease: MOTION.ease,
          scrollTrigger: {
            trigger: el,
            start: MOTION.scrollStart,
            once: true,
            invalidateOnRefresh: true,
          },
        });
      },
      { deferFrame: true },
    );
  }, [reducedMotion]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
