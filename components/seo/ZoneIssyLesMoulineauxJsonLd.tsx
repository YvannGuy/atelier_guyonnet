import { siteConfig } from "@/lib/constants/site";

export type ZoneIssyLesMoulineauxFaqItem = {
  question: string;
  answer: string;
};

type ZoneIssyLesMoulineauxJsonLdProps = {
  faqItems: readonly ZoneIssyLesMoulineauxFaqItem[];
};

function siteOrigin(): string {
  return siteConfig.url.replace(/\/$/, "");
}

function absoluteUrl(path: string): string {
  const base = siteOrigin();
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

const businessId = () => `${siteOrigin()}/#business`;

/**
 * JSON-LD — page locale Issy-les-Moulineaux (/zones/issy-les-moulineaux) : fil d’Ariane, prestation, FAQ.
 */
export function ZoneIssyLesMoulineauxJsonLd({ faqItems }: ZoneIssyLesMoulineauxJsonLdProps) {
  const pageUrl = absoluteUrl("/zones/issy-les-moulineaux");
  const homeUrl = siteOrigin();
  const idfUrl = absoluteUrl("/agencement-sur-mesure-ile-de-france");

  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: homeUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Agencement sur mesure en Île-de-France",
          item: idfUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Issy-les-Moulineaux",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Agencement sur mesure à Issy-les-Moulineaux",
      serviceType: "Agencement intérieur sur mesure",
      description:
        "Aménagements sur mesure pour intérieurs à Issy-les-Moulineaux : dressings, placards intégrés, rangements, bibliothèques, meubles TV et optimisation d’espace — étude selon configuration du logement, usages et disponibilités atelier.",
      url: pageUrl,
      provider: { "@id": businessId() },
      areaServed: {
        "@type": "City",
        name: "Issy-les-Moulineaux",
        addressRegion: "Île-de-France",
        addressCountry: "FR",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
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
