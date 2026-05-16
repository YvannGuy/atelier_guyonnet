const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/**
 * Constantes globales du site — utilisées par metadata, copy statique, Open Graph.
 * Ne pas y placer de secrets.
 */
export const siteConfig = {
  name: "Atelier Guyonnet",
  tagline: "Votre intérieur, pensé au centimètre près.",
  description:
    "Agencement sur mesure à Paris et en Île-de-France : dressings, placards intégrés, bibliothèques, meubles TV et rangements pour optimiser les petits espaces.",
  locale: "fr_FR",
  /** URL canonique (production : définir NEXT_PUBLIC_SITE_URL sur Vercel). */
  url: rawSiteUrl,
  keywords: [
    "agencement sur mesure",
    "dressing sur mesure",
    "placard intégré",
    "bibliothèque sur mesure",
    "rangement",
    "Paris",
    "Île-de-France",
  ],
  themeColorLight: "#f9f7f2",
  themeColorDark: "#000000",
} as const;
