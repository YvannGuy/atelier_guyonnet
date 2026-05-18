import { siteConfig } from "@/lib/constants/site";

export type RangementParisFaqItem = {
  question: string;
  answer: string;
};

type RangementParisJsonLdProps = {
  faqItems: readonly RangementParisFaqItem[];
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
 * JSON-LD — page service rangement Paris : fil d’Ariane, prestation, FAQ.
 */
export function RangementSurMesureParisJsonLd({ faqItems }: RangementParisJsonLdProps) {
  const pageUrl = absoluteUrl("/rangement-sur-mesure-paris");
  const homeUrl = siteOrigin();

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
          name: "Rangement sur mesure à Paris",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Rangement sur mesure à Paris",
      serviceType: "Rangement sur mesure",
      description:
        "Solutions de rangement sur mesure à Paris et en Île-de-France : optimisation des espaces, meubles intégrés et volumes calés sur les usages du logement.",
      url: pageUrl,
      provider: { "@id": businessId() },
      areaServed: [
        { "@type": "City", name: "Paris" },
        { "@type": "AdministrativeArea", name: "Île-de-France" },
      ],
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
