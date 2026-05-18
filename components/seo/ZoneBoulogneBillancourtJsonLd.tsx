import { siteConfig } from "@/lib/constants/site";

export type ZoneBoulogneBillancourtFaqItem = {
  question: string;
  answer: string;
};

type ZoneBoulogneBillancourtJsonLdProps = {
  faqItems: readonly ZoneBoulogneBillancourtFaqItem[];
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
 * JSON-LD — page locale Boulogne-Billancourt (/zones/boulogne-billancourt) : fil d’Ariane, prestation, FAQ.
 */
export function ZoneBoulogneBillancourtJsonLd({ faqItems }: ZoneBoulogneBillancourtJsonLdProps) {
  const pageUrl = absoluteUrl("/zones/boulogne-billancourt");
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
          name: "Boulogne-Billancourt",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Agencement sur mesure à Boulogne-Billancourt",
      serviceType: "Agencement intérieur sur mesure",
      description:
        "Aménagements sur mesure pour intérieurs à Boulogne-Billancourt et environs : dressings, placards intégrés, rangements, bibliothèques, meubles TV et optimisation d’espace — étude selon la configuration du logement.",
      url: pageUrl,
      provider: { "@id": businessId() },
      areaServed: {
        "@type": "City",
        name: "Boulogne-Billancourt",
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
