const QUERY = "(prefers-reduced-motion: reduce)";

/** Lecture synchrone — à appeler dans useLayoutEffect avant toute animation GSAP. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(QUERY).matches;
}

export const REDUCED_MOTION_QUERY = QUERY;
