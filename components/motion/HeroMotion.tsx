"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

import { ensureScrollTrigger } from "@/components/motion/gsap-client";
import { MOTION } from "@/components/motion/motion-config";
import { prefersReducedMotion } from "@/components/motion/prefers-reduced-motion";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

type HeroMotionProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Timeline d’entrée hero — badge → titre → texte → CTA → réassurances.
 * Le fond image utilise une animation CSS légère (pas de blocage LCP).
 */
export function HeroMotion({ children, className }: HeroMotionProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion() || reducedMotion || !rootRef.current) return;

    const gsap = ensureScrollTrigger();
    const root = rootRef.current;
    const badge = root.querySelector<HTMLElement>("[data-hero-badge]");
    const title = root.querySelector<HTMLElement>("[data-hero-title]");
    const body = root.querySelector<HTMLElement>("[data-hero-body]");
    const ctas = root.querySelector<HTMLElement>("[data-hero-ctas]");
    const reassurance = root.querySelectorAll<HTMLElement>("[data-hero-reassurance-item]");

    const ctx = gsap.context(() => {
      const targets = [badge, title, body, ctas].filter(Boolean);
      gsap.set(targets, { autoAlpha: 0, y: MOTION.offset.heroY });
      if (reassurance.length) {
        gsap.set(reassurance, { autoAlpha: 0, y: 12 });
      }

      const tl = gsap.timeline({ defaults: { ease: MOTION.ease, duration: MOTION.duration.hero } });

      if (badge) {
        tl.to(badge, { autoAlpha: 1, y: 0, duration: 0.5 });
      }
      if (title) {
        tl.to(title, { autoAlpha: 1, y: 0, duration: 0.65 }, badge ? "-=0.25" : 0);
      }
      if (body) {
        tl.to(body, { autoAlpha: 1, y: 0, duration: 0.55 }, "-=0.35");
      }
      if (ctas) {
        tl.to(ctas, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.3");
      }
      if (reassurance.length) {
        tl.to(
          reassurance,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            stagger: MOTION.duration.stagger,
          },
          "-=0.2",
        );
      }
    }, root);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  );
}
