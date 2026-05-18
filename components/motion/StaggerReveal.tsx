"use client";

import {
  useLayoutEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

import { ensureScrollTrigger } from "@/components/motion/gsap-client";
import { MOTION } from "@/components/motion/motion-config";
import { prefersReducedMotion } from "@/components/motion/prefers-reduced-motion";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

type StaggerRevealProps<T extends ElementType = "div"> = {
  children: ReactNode;
  className?: string;
  as?: T;
  itemSelector?: string;
  stagger?: number;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

/**
 * Stagger au scroll pour listes / grilles — sans rebond ni scale excessif.
 */
export function StaggerReveal<T extends ElementType = "div">({
  children,
  className,
  as,
  itemSelector = "[data-motion-item]",
  stagger = MOTION.duration.stagger,
  ...rest
}: StaggerRevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion() || reducedMotion || !ref.current) return;

    const gsap = ensureScrollTrigger();
    const root = ref.current;
    const items = root.querySelectorAll<HTMLElement>(itemSelector);
    if (!items.length) return;

    const ctx = gsap.context(() => {
      gsap.from(items, {
        y: MOTION.offset.revealY,
        opacity: 0,
        duration: MOTION.duration.reveal,
        ease: MOTION.ease,
        stagger,
        scrollTrigger: {
          trigger: root,
          start: MOTION.scrollStart,
          once: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, [reducedMotion, itemSelector, stagger]);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
