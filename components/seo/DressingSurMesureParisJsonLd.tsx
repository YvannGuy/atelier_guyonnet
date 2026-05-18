import { siteConfig } from "@/lib/constants/site";

export type DressingParisFaqItem = {
  question: string;
  answer: string;
};

type DressingParisJsonLdProps = {
  faqItems: readonly DressingParisFaqItem[];
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
 * JSON-LD — page service dressing Paris : fil d’Ariane, prestation, FAQ.
 * Pas d’avis, de note, de prix chiffré ni d’adresse postale inventée.
 */
export function DressingSurMesureParisJsonLd({ faqItems }: DressingParisJsonLdProps) {
  const pageUrl = absoluteUrl("/dressing-sur-mesure-paris");
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
          name: "Dressing sur mesure à Paris",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Dressing sur mesure à Paris",
      serviceType: "Dressing sur mesure",
      description:
        "Conception et réalisation de dressings sur mesure à Paris et en Île-de-France, adaptés aux dimensions du logement et aux usages.",
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
