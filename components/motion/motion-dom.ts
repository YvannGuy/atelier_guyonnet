/** Élément réellement visible (pas `display:none` / taille nulle). */
export function isElementVisible(el: HTMLElement): boolean {
  if (!el.isConnected) return false;

  const style = window.getComputedStyle(el);
  if (style.display === "none" || style.visibility === "hidden") return false;

  const rect = el.getBoundingClientRect();
  return rect.width > 0 || rect.height > 0;
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
