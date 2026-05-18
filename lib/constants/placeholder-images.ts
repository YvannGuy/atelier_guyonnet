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
    publicPath: "/images/placeholders/inspiration-dressing.jpg",
    alt: "Visuel d’inspiration — composition de dressings et armoires sur mesure (illustration, pas une réalisation Atelier Guyonnet).",
    role: "Inspirations — carte « Dressing toute hauteur »",
  },
  inspirationPlacardEntree: {
    key: "inspirationPlacardEntree",
    publicPath: "/images/placeholders/inspiration-placard-entree.jpg",
    alt: "Visuel d’inspiration — couloir clair et perspective intérieure pour un placard d’entrée intégré (illustration).",
    role: "Inspirations — carte « Placard d’entrée intégré »",
  },
  inspirationBibliotheque: {
    key: "inspirationBibliotheque",
    publicPath: "/images/placeholders/inspiration-bibliotheque.jpg",
    alt: "Visuel d’inspiration — rayonnages et livres pour une bibliothèque murale sur mesure (illustration).",
    role: "Inspirations — carte « Bibliothèque murale »",
  },
  inspirationMeubleTv: {
    key: "inspirationMeubleTv",
    publicPath: "/images/placeholders/inspiration-meuble-tv.jpg",
    alt: "Visuel d’inspiration — salon avec meuble TV et rangements intégrés (illustration, pas une réalisation atelier).",
    role: "Inspirations — carte « Meuble TV avec rangements »",
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
