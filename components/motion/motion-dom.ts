import type gsap from "gsap";

import { ensureScrollTrigger } from "@/components/motion/gsap-client";

/** Élément réellement visible (pas masqué par un ancêtre, pas taille nulle). */
export function isElementVisible(el: HTMLElement): boolean {
  if (!el.isConnected) return false;

  let node: HTMLElement | null = el;
  while (node && node !== document.documentElement) {
    const style = window.getComputedStyle(node);
    if (style.display === "none" || style.visibility === "hidden") return false;
    node = node.parentElement;
  }

  const rect = el.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}

/** Attend le prochain frame layout avant d’initialiser ScrollTrigger. */
export function afterLayout(callback: () => void): () => void {
  let innerId = 0;
  const outerId = requestAnimationFrame(() => {
    innerId = requestAnimationFrame(callback);
  });
  return () => {
    cancelAnimationFrame(outerId);
    cancelAnimationFrame(innerId);
  };
}

function safeRevertContext(ctx: gsap.Context | null | undefined) {
  if (!ctx) return;
  try {
    ctx.revert();
  } catch {
    // ScrollTrigger peut être partiellement initialisé (Strict Mode / resize).
  }
}

type VisibleScrollScopeOptions = {
  /** Attendre un frame supplémentaire — évite les courses avec le cleanup Strict Mode. */
  deferFrame?: boolean;
};

/**
 * Monte une animation ScrollTrigger uniquement quand l’élément est visible,
 * la démonte si masqué (layouts mobile/desktop dupliqués), resync au resize.
 */
export function createVisibleScrollScope(
  getElement: () => HTMLElement | null,
  onMount: (gsapInstance: typeof gsap) => void,
  options: VisibleScrollScopeOptions = {},
): () => void {
  let cancelled = false;
  let ctx: gsap.Context | null = null;
  let observer: ResizeObserver | null = null;
  let pendingSyncId = 0;

  const revertContext = (immediate = false) => {
    const toRevert = ctx;
    ctx = null;
    if (!toRevert) return;

    if (immediate) {
      safeRevertContext(toRevert);
      return;
    }

    requestAnimationFrame(() => safeRevertContext(toRevert));
  };

  const mount = () => {
    const el = getElement();
    if (cancelled || !el || !isElementVisible(el) || ctx) return;

    const gsapInstance = ensureScrollTrigger();
    try {
      ctx = gsapInstance.context(() => {
        if (cancelled || !el.isConnected || !isElementVisible(el)) return;
        onMount(gsapInstance);
      }, el);
    } catch {
      revertContext(true);
    }
  };

  const sync = () => {
    if (cancelled) return;
    const el = getElement();
    if (!el || !isElementVisible(el)) {
      revertContext(true);
      return;
    }
    mount();
  };

  const scheduleSync = () => {
    cancelAnimationFrame(pendingSyncId);
    pendingSyncId = requestAnimationFrame(sync);
  };

  const runInitial = () => {
    if (cancelled) return;
    const el = getElement();
    if (!el) return;

    if (!observer && typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(scheduleSync);
      observer.observe(el);
    }

    sync();
  };

  const cancelAfterLayout = afterLayout(() => {
    if (options.deferFrame) {
      requestAnimationFrame(runInitial);
    } else {
      runInitial();
    }
  });

  window.addEventListener("resize", scheduleSync, { passive: true });

  return () => {
    cancelled = true;
    cancelAfterLayout();
    cancelAnimationFrame(pendingSyncId);
    window.removeEventListener("resize", scheduleSync);
    observer?.disconnect();
    observer = null;
    revertContext(false);
  };
}
