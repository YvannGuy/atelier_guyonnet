import { homeFaqItems } from "@/lib/constants/home-faq";
import { siteConfig } from "@/lib/constants/site";

function siteOrigin(): string {
  return siteConfig.url.replace(/\/$/, "");
}

function absoluteUrl(path: string): string {
  const base = siteOrigin();
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

const businessId = () => `${siteOrigin()}/#business`;

const structuredServices: { idSuffix: string; name: string; serviceType: string }[] = [
  { idSuffix: "dressing", name: "Dressing sur mesure", serviceType: "Dressing sur mesure" },
  { idSuffix: "placard", name: "Placard intégré sur mesure", serviceType: "Placard intégré" },
  { idSuffix: "bibliotheque", name: "Bibliothèque sur mesure", serviceType: "Bibliothèque sur mesure" },
  { idSuffix: "meuble-tv", name: "Meuble TV et rangements intégrés", serviceType: "Meuble TV sur mesure" },
  { idSuffix: "rangement", name: "Rangement sur mesure", serviceType: "Rangement sur mesure" },
  {
    idSuffix: "petit-appartement",
    name: "Optimisation de petit appartement",
    serviceType: "Optimisation de petit appartement",
  },
];

/**
 * JSON-LD page d’accueil : entreprise de services, prestations typées, FAQ.
 * Ne garantit pas un extraît dans les moteurs ou IA — vise la compréhension machine.
 */
export function HomeJsonLd() {
  const url = siteOrigin();
  const og = absoluteUrl(siteConfig.defaultOgImage.path);

  const business: Record<string, unknown> = {
    "@type": "ProfessionalService",
    "@id": businessId(),
    name: siteConfig.name,
    description: siteConfig.description,
    url,
    image: og,
    email: siteConfig.contactEmail,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    areaServed: [
      { "@type": "City", name: "Paris" },
      { "@type": "AdministrativeArea", name: "Île-de-France" },
    ],
  };

  if (siteConfig.sameAs.length > 0) {
    business.sameAs = [...siteConfig.sameAs];
  }

  const graph: Record<string, unknown>[] = [
    business,
    ...structuredServices.map((s) => ({
      "@type": "Service",
      "@id": `${url}/#service-${s.idSuffix}`,
      name: s.name,
      serviceType: s.serviceType,
      provider: { "@id": businessId() },
      areaServed: [
        { "@type": "City", name: "Paris" },
        { "@type": "AdministrativeArea", name: "Île-de-France" },
      ],
    })),
    {
      "@type": "FAQPage",
      mainEntity: homeFaqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
