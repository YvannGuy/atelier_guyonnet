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
  /** Titre SEO court pour la page d’accueil (suffixe layout : `· Atelier Guyonnet` non doublonné grâce au template). */
  defaultPageTitle: "Agencement sur mesure Paris & Île-de-France",
  locale: "fr_FR",
  /** URL canonique (production : définir NEXT_PUBLIC_SITE_URL sur Vercel). */
  url: rawSiteUrl,
  /** Contact public affiché (footer, JSON-LD) — aligner avec la boîte réelle. */
  contactEmail: "contact@atelierguyonnet.com",
  contactPhone: "+33666848976",
  /** Affichage lisible du téléphone (même numéro que `contactPhone`). */
  contactPhoneDisplay: "+33 6 66 84 89 76",
  /** Numéro WhatsApp (chiffres internationaux sans +) pour wa.me. */
  contactWhatsApp: "33666848976",
  /**
   * Profils sociaux à compléter quand existants (JSON-LD `sameAs`).
   * Laisser vide tant qu’aucune URL n’est publique.
   */
  sameAs: [] as readonly string[],
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
  /** Image Open Graph / Twitter par défaut (fichier local, non une photo de chantier). */
  defaultOgImage: {
    path: "/images/placeholders/hero.jpg" as const,
    width: 1200,
    height: 630,
    alt: "Intérieur sobre et lumineux — visuel d’ambiance pour Atelier Guyonnet, sans lien avec un chantier précis.",
  },
} as const;
