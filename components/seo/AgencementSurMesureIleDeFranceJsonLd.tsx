import { siteConfig } from "@/lib/constants/site";

export type AgencementIdfFaqItem = {
  question: string;
  answer: string;
};

type AgencementIdfJsonLdProps = {
  faqItems: readonly AgencementIdfFaqItem[];
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
 * JSON-LD — page hub agencement Île-de-France : fil d’Ariane, prestation, FAQ.
 */
export function AgencementSurMesureIleDeFranceJsonLd({ faqItems }: AgencementIdfJsonLdProps) {
  const pageUrl = absoluteUrl("/agencement-sur-mesure-ile-de-france");
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
          name: "Agencement sur mesure en Île-de-France",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Agencement sur mesure en Île-de-France",
      serviceType: "Agencement intérieur sur mesure",
      description:
        "Conception et fabrication d’agencements sur mesure en Île-de-France : dressings, placards, rangements, bibliothèques, meubles TV et optimisation de petits espaces.",
      url: pageUrl,
      provider: { "@id": businessId() },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Île-de-France",
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
