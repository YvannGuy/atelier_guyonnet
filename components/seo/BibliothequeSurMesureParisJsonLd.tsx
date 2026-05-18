import { siteConfig } from "@/lib/constants/site";

export type BibliothequeParisFaqItem = {
  question: string;
  answer: string;
};

type BibliothequeParisJsonLdProps = {
  faqItems: readonly BibliothequeParisFaqItem[];
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
 * JSON-LD — page service bibliothèque Paris : fil d’Ariane, prestation, FAQ.
 */
export function BibliothequeSurMesureParisJsonLd({ faqItems }: BibliothequeParisJsonLdProps) {
  const pageUrl = absoluteUrl("/bibliotheque-sur-mesure-paris");
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
          name: "Bibliothèque sur mesure à Paris",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Bibliothèque sur mesure à Paris",
      serviceType: "Bibliothèque sur mesure",
      description:
        "Conception et réalisation de bibliothèques murales et intégrées à Paris et en Île-de-France : niches ouvertes, rangements fermés, espace bureau et volumes adaptés au mur.",
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
