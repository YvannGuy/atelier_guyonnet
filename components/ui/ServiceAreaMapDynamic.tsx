"use client";

import dynamic from "next/dynamic";

const ServiceAreaMapClient = dynamic(
  () => import("@/components/ui/ServiceAreaMap").then((m) => m.ServiceAreaMap),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex min-h-[260px] items-center justify-center bg-background/90 font-sans text-xs text-muted md:min-h-[320px]"
        aria-hidden
      >
        Chargement de la carte…
      </div>
    ),
  },
);

/** Carte Leaflet chargée uniquement côté client (`ssr: false` interdit dans les Server Components). */
export function ServiceAreaMapDynamic() {
  return <ServiceAreaMapClient />;
}
