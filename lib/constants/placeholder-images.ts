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
    alt: "Intérieur lumineux et épuré avec mobilier chaleureux — ambiance d’inspiration, non liée à un chantier précis.",
    role: "Hero — image d’ambiance plein fond",
  },
  inspirationDressing: {
    key: "inspirationDressing",
    publicPath: "/images/placeholders/inspiration-dressing.jpg",
    alt: "Composition d’armoires et rangements à portes — inspiration pour dressing sur mesure.",
    role: "Inspirations — carte « Dressing toute hauteur »",
  },
  inspirationPlacardEntree: {
    key: "inspirationPlacardEntree",
    publicPath: "/images/placeholders/inspiration-placard-entree.jpg",
    alt: "Couloir intérieur clair avec perspective sur pièce annexe — inspiration pour placard d’entrée intégré.",
    role: "Inspirations — carte « Placard d’entrée intégré »",
  },
  inspirationBibliotheque: {
    key: "inspirationBibliotheque",
    publicPath: "/images/placeholders/inspiration-bibliotheque.jpg",
    alt: "Rayonnages et livres dans un espace de lecture — inspiration pour bibliothèque murale.",
    role: "Inspirations — carte « Bibliothèque murale »",
  },
  inspirationMeubleTv: {
    key: "inspirationMeubleTv",
    publicPath: "/images/placeholders/inspiration-meuble-tv.jpg",
    alt: "Salon avec canapé cuir et mur soigné — inspiration pour meuble TV et rangements intégrés.",
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
