/**
 * Comparaisons avant / après — visuels d’inspiration générés.
 * Ne jamais présenter comme des réalisations ou chantiers Atelier Guyonnet.
 */
export const beforeAfterItems = [
  {
    id: "bibliotheque",
    title: "Bibliothèque murale",
    description:
      "Transformer un mur vide en espace de rangement, de lecture et de décoration avec niches ouvertes et rangements fermés.",
    highlights: [
      "Alternance de niches ouvertes et modules fermés",
      "Éclairage intégré pour mettre en valeur les objets",
      "Ligne basse pour rangements discrets",
    ],
    beforeSrc: "/images/before-after/bibliotheque-avant.jpg",
    afterSrc: "/images/inspirations/bibliotheque.jpg",
    beforeAlt:
      "Visuel d’inspiration avant aménagement — mur de salon simple avant création d’une bibliothèque sur mesure",
    afterAlt:
      "Visuel d’inspiration après aménagement — bibliothèque murale sur mesure avec niches ouvertes, rangements fermés et éclairage intégré",
  },
  {
    id: "dressing",
    title: "Dressing toute hauteur",
    description:
      "Exploiter toute la hauteur disponible pour organiser vêtements, chaussures et accessoires du quotidien.",
    highlights: [
      "Hauteur maximale exploitée sur toute la paroi",
      "Penderies, tiroirs et étagères dédiés",
      "Rangement chaussures et accessoires intégré",
    ],
    beforeSrc: "/images/before-after/dressing-avant.jpg",
    afterSrc: "/images/inspirations/dressing.jpg",
    beforeAlt:
      "Visuel d’inspiration avant aménagement — chambre avec rangements standards et portant ouvert",
    afterAlt:
      "Visuel d’inspiration après aménagement — dressing toute hauteur sur mesure avec penderies, tiroirs, étagères et rangements chaussures",
  },
  {
    id: "meuble-tv",
    title: "Meuble TV avec rangements",
    description:
      "Structurer le mur du salon, dissimuler les câbles et intégrer des rangements fermés et niches décoratives.",
    highlights: [
      "Passages de câbles discrets derrière les façades",
      "Rangements fermés pour équipements et objets",
      "Ligne basse et niches pour équilibrer le mur",
    ],
    beforeSrc: "/images/before-after/meuble-tv-avant.jpg",
    afterSrc: "/images/inspirations/meuble-tv.jpg",
    beforeAlt:
      "Visuel d’inspiration avant aménagement — salon avec meuble TV standard et mur peu exploité",
    afterAlt:
      "Visuel d’inspiration après aménagement — meuble TV sur mesure avec rangements intégrés, niches décoratives et passages discrets pour les câbles",
  },
  {
    id: "placard-entree",
    title: "Placard d’entrée intégré",
    description:
      "Transformer une entrée simple en rangement discret pour manteaux, chaussures et objets du quotidien.",
    highlights: [
      "Penderie et assise intégrées au passage",
      "Rangement chaussures calé sur l’entrée",
      "Façades sobres pour un volume discret",
    ],
    beforeSrc: "/images/before-after/placard-entree-avant.jpg",
    afterSrc: "/images/inspirations/placard-entree.jpg",
    beforeAlt:
      "Visuel d’inspiration avant aménagement — entrée avec banc, patères et rangement limité",
    afterAlt:
      "Visuel d’inspiration après aménagement — placard d’entrée intégré sur mesure avec penderie, assise, rangements chaussures et niches",
  },
  {
    id: "cuisine",
    title: "Cuisine sur mesure",
    description:
      "Transformer une cuisine standard ou peu optimisée en espace plus fonctionnel, chaleureux et mieux intégré.",
    highlights: [
      "Rangements hauts et bas mieux structurés",
      "Colonnes et niches intégrées",
      "Plan de travail plus fluide",
      "Finitions sobres et chaleureuses",
    ],
    beforeSrc: "/images/before-after/cuisine-avant.png",
    afterSrc: "/images/inspirations/cuisine.jpg",
    beforeAlt:
      "Visuel d’inspiration avant aménagement — cuisine parisienne ancienne avec rangements standards et espace peu optimisé",
    afterAlt:
      "Visuel d’inspiration après aménagement — cuisine sur mesure avec rangements intégrés, colonnes, bois chaud et finitions sobres",
  },
] as const;

export type BeforeAfterItem = (typeof beforeAfterItems)[number];
