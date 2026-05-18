import { siteConfig } from "@/lib/constants/site";

export type MeubleTvParisFaqItem = {
  question: string;
  answer: string;
};

type MeubleTvParisJsonLdProps = {
  faqItems: readonly MeubleTvParisFaqItem[];
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
 * JSON-LD — page service meuble TV Paris : fil d’Ariane, prestation, FAQ.
 */
export function MeubleTvSurMesureParisJsonLd({ faqItems }: MeubleTvParisJsonLdProps) {
  const pageUrl = absoluteUrl("/meuble-tv-sur-mesure-paris");
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
          name: "Meuble TV sur mesure à Paris",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Meuble TV sur mesure à Paris",
      serviceType: "Meuble TV et rangements sur mesure",
      description:
        "Conception de meubles TV muraux et intégrés à Paris et en Île-de-France : passage de câbles, équipements multimédia et rangements coordonnés au salon.",
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
