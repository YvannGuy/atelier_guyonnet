/**
 * Visuels temporaires (Unsplash), stockés localement sous `public/images/placeholders/`.
 *
 * À remplacer par de vrais médias Atelier Guyonnet (atelier, inspirations, chantiers avec accord)
 * dès qu’ils sont disponibles. Ne jamais présenter ces fichiers comme des réalisations clients.
 *
 * Licences Unsplash : usage autorisé ; crédit photographe recommandé sur support marketing —
 * voir `public/images/README.md` (section placeholders) pour les liens de provenance.
 */
export const placeholderImages = {
  hero: {
    key: "hero",
    /** Chemin servi depuis `public/` */
    publicPath: "/images/placeholders/hero.jpg",
    alt: "Visuel d’inspiration — intérieur lumineux et épuré avec mobilier chaleureux (ambiance, pas une réalisation Atelier Guyonnet).",
    role: "Hero — image d’ambiance plein fond",
  },
  inspirationDressing: {
    key: "inspirationDressing",
    publicPath: "/images/inspirations/dressing.jpg",
    alt: "Visuel d’inspiration — dressing toute hauteur avec rangements ouverts, tiroirs intégrés et penderies (illustration, pas une réalisation Atelier Guyonnet).",
    role: "Inspirations — carte « Dressing toute hauteur »",
  },
  inspirationPlacardEntree: {
    key: "inspirationPlacardEntree",
    publicPath: "/images/inspirations/placard-entree.jpg",
    alt: "Visuel d’inspiration — placard d’entrée intégré avec portes sobres, banquette et rangements en bois clair (illustration, pas une réalisation Atelier Guyonnet).",
    role: "Inspirations — carte « Placard d’entrée intégré »",
  },
  inspirationBibliotheque: {
    key: "inspirationBibliotheque",
    publicPath: "/images/inspirations/bibliotheque.jpg",
    alt: "Visuel d’inspiration — bibliothèque murale sur mesure en bois clair, niches éclairées et rangements fermés (illustration, pas une réalisation Atelier Guyonnet).",
    role: "Inspirations — carte « Bibliothèque murale »",
  },
  inspirationMeubleTv: {
    key: "inspirationMeubleTv",
    publicPath: "/images/inspirations/meuble-tv.jpg",
    alt: "Visuel d’inspiration — meuble TV intégré avec rangements, niche éclairée et ligne basse en bois (illustration, pas une réalisation Atelier Guyonnet).",
    role: "Inspirations — carte « Meuble TV avec rangements »",
  },
  inspirationCuisine: {
    key: "inspirationCuisine",
    publicPath: "/images/inspirations/cuisine.jpg",
    alt: "Visuel d’inspiration — cuisine sur mesure avec rangements intégrés, colonnes, bois chaud et finitions sobres",
    role: "Inspirations — carte « Cuisine sur mesure »",
  },
  beforeAfterAvant: {
    key: "beforeAfterAvant",
    publicPath: "/images/placeholders/before-after-avant.jpg",
    alt: "Espace intérieur nu et peu meublé — exemple illustratif de « avant », sans chantier réel.",
    role: "Before / After — panneau « Avant »",
  },
  beforeAfterApres: {
    key: "beforeAfterApres",
    publicPath: "/images/placeholders/before-after-apres.jpg",
    alt: "Séjour aménagé avec mobilier et literie — exemple illustratif de « après », sans chantier réel.",
    role: "Before / After — panneau « Après »",
  },
  aboutAtelierDetail: {
    key: "aboutAtelierDetail",
    publicPath: "/images/placeholders/about-atelier-detail.jpg",
    alt: "Plan de travail d’atelier avec outils de traçage — ambiance artisanale générique, sans portrait identifiable.",
    role: "À propos — détail atelier (illustration)",
  },
} as const;
