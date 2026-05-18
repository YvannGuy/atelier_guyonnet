import { siteConfig } from "@/lib/constants/site";

export type ZoneParisFaqItem = {
  question: string;
  answer: string;
};

type ZoneParisJsonLdProps = {
  faqItems: readonly ZoneParisFaqItem[];
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
 * JSON-LD — page locale Paris (/zones/paris) : fil d’Ariane, prestation, FAQ.
 */
export function ZoneParisJsonLd({ faqItems }: ZoneParisJsonLdProps) {
  const pageUrl = absoluteUrl("/zones/paris");
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
          name: "Paris",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Agencement sur mesure à Paris",
      serviceType: "Agencement intérieur sur mesure",
      description:
        "Aménagements sur mesure pour appartements parisiens : dressings, placards intégrés, rangements, bibliothèques, meubles TV et optimisation de petits espaces — étude selon la configuration du logement.",
      url: pageUrl,
      provider: { "@id": businessId() },
      areaServed: {
        "@type": "City",
        name: "Paris",
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
