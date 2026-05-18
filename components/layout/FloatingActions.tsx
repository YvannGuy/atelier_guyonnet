"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";

import { siteConfig } from "@/lib/constants/site";

const SCROLL_THRESHOLD = 320;
const WA_POPUP_DISMISS_KEY = "ag-wa-popup-dismissed";
const WA_POPUP_CHANGE_EVENT = "ag-wa-popup-change";

const whatsAppUrl = `https://wa.me/${siteConfig.contactWhatsApp}?text=${encodeURIComponent(
  "Bonjour, je souhaite des informations sur vos services d'agencement sur mesure.",
)}`;

function subscribeWaPopup(onStoreChange: () => void) {
  window.addEventListener(WA_POPUP_CHANGE_EVENT, onStoreChange);
  return () => window.removeEventListener(WA_POPUP_CHANGE_EVENT, onStoreChange);
}

function getWaPopupDismissedSnapshot() {
  return sessionStorage.getItem(WA_POPUP_DISMISS_KEY) === "1";
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ArrowUpIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </svg>
  );
}

/**
 * Boutons flottants globaux : WhatsApp (bas gauche) + retour en haut (bas droite).
 */
export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const waPopupDismissed = useSyncExternalStore(
    subscribeWaPopup,
    getWaPopupDismissedSnapshot,
    () => false,
  );

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  }, []);

  const dismissWaPopup = useCallback(() => {
    sessionStorage.setItem(WA_POPUP_DISMISS_KEY, "1");
    window.dispatchEvent(new Event(WA_POPUP_CHANGE_EVENT));
  }, []);

  const showWaPopup = !waPopupDismissed;

  return (
    <>
      {/* WhatsApp — bas gauche */}
      <div
        className="pointer-events-none fixed bottom-5 left-4 z-50 flex flex-col items-start gap-3 sm:bottom-6 sm:left-6"
        aria-live="polite"
      >
        {showWaPopup ? (
          <div className="pointer-events-auto relative max-w-64 rounded-md border border-border bg-background px-3.5 py-3 shadow-lg sm:max-w-72">
            <button
              type="button"
              onClick={dismissWaPopup}
              className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-sm font-sans text-sm leading-none text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Fermer le message"
            >
              ×
            </button>
            <p className="pr-5 font-sans text-xs leading-relaxed text-foreground sm:text-sm">
              Contactez nos conseillers pour plus d&apos;informations
            </p>
            <span
              className="absolute -bottom-1.5 left-5 h-3 w-3 rotate-45 border-b border-r border-border bg-background"
              aria-hidden
            />
          </div>
        ) : null}

        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-whatsapp text-on-dark shadow-lg transition hover:scale-105 hover:bg-whatsapp-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-14 sm:w-14"
          aria-label="Contacter Atelier Guyonnet sur WhatsApp"
        >
          <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
        </a>
      </div>

      {/* Retour en haut — bas droite */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Remonter en haut de la page"
        className={`fixed bottom-5 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-sm border border-border bg-background text-foreground shadow-lg transition hover:border-foreground/20 hover:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:bottom-6 sm:right-6 sm:h-12 sm:w-12 ${
          showScrollTop
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <ArrowUpIcon className="h-5 w-5" />
      </button>
    </>
  );
}
