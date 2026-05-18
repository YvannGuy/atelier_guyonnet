"use client";

import { useLayoutEffect, useState } from "react";

import { prefersReducedMotion, REDUCED_MOTION_QUERY } from "@/components/motion/prefers-reduced-motion";

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => prefersReducedMotion());

  useLayoutEffect(() => {
    const media = window.matchMedia(REDUCED_MOTION_QUERY);
    const update = () => setReduced(media.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}
