import { siteConfig } from "@/lib/constants/site";

export type ZoneLevalloisPerretFaqItem = {
  question: string;
  answer: string;
};

type ZoneLevalloisPerretJsonLdProps = {
  faqItems: readonly ZoneLevalloisPerretFaqItem[];
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
 * JSON-LD — page locale Levallois-Perret (/zones/levallois-perret) : fil d’Ariane, prestation, FAQ.
 */
export function ZoneLevalloisPerretJsonLd({ faqItems }: ZoneLevalloisPerretJsonLdProps) {
  const pageUrl = absoluteUrl("/zones/levallois-perret");
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
          name: "Levallois-Perret",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Agencement sur mesure à Levallois-Perret",
      serviceType: "Agencement intérieur sur mesure",
      description:
        "Aménagements sur mesure pour appartements et intérieurs à Levallois-Perret : dressings, placards intégrés, rangements, bibliothèques, meubles TV et optimisation d’espace — intégration discrète, étude selon la configuration du logement.",
      url: pageUrl,
      provider: { "@id": businessId() },
      areaServed: {
        "@type": "City",
        name: "Levallois-Perret",
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
