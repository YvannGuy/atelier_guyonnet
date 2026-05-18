import { siteConfig } from "@/lib/constants/site";

export type CuisineParisFaqItem = {
  question: string;
  answer: string;
};

type CuisineParisJsonLdProps = {
  faqItems: readonly CuisineParisFaqItem[];
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
 * JSON-LD — page service cuisine Paris : fil d’Ariane, prestation, FAQ.
 */
export function CuisineSurMesureParisJsonLd({ faqItems }: CuisineParisJsonLdProps) {
  const pageUrl = absoluteUrl("/cuisine-sur-mesure-paris");
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
          name: "Cuisine sur mesure à Paris",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Cuisine sur mesure — agencement et mobilier à Paris",
      serviceType: "Cuisine sur mesure",
      description:
        "Conception et réalisation de meubles de cuisine sur mesure à Paris et en Île-de-France : rangements, façades, colonnes, meubles hauts et bas, plan de travail et optimisation de petites cuisines.",
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
