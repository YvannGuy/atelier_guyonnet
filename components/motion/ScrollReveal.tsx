"use client";

import { useLayoutEffect, useRef, type ElementType, type ReactNode } from "react";

import { ensureScrollTrigger } from "@/components/motion/gsap-client";
import { afterLayout, isElementVisible } from "@/components/motion/motion-dom";
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

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    const cancelAfterLayout = afterLayout(() => {
      const el = ref.current;
      if (cancelled || !el || !isElementVisible(el)) return;

      const gsapInstance = ensureScrollTrigger();
      ctx = gsapInstance.context(() => {
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
      }, el);
    });

    return () => {
      cancelled = true;
      cancelAfterLayout();
      ctx?.revert();
    };
  }, [reducedMotion]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
