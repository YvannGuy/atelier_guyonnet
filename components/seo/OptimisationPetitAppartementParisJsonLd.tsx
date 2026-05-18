import { siteConfig } from "@/lib/constants/site";

export type OptimisationPetitAppartementParisFaqItem = {
  question: string;
  answer: string;
};

type OptimisationPetitAppartementParisJsonLdProps = {
  faqItems: readonly OptimisationPetitAppartementParisFaqItem[];
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
 * JSON-LD — page optimisation petit appartement Paris : fil d’Ariane, prestation, FAQ.
 */
export function OptimisationPetitAppartementParisJsonLd({
  faqItems,
}: OptimisationPetitAppartementParisJsonLdProps) {
  const pageUrl = absoluteUrl("/optimisation-petit-appartement-paris");
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
          name: "Optimisation petit appartement à Paris",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Optimisation de petit appartement à Paris",
      serviceType: "Optimisation d’appartement",
      description:
        "Études et réalisations sur mesure pour studios et petits appartements à Paris et en Île-de-France : rangements intégrés, mobilier coordonné et optimisation des volumes.",
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
