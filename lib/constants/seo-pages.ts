/**
 * Inventaire des futures pages SEO (services + zones prioritaires).
 * Ne crée pas les routes : sert de source unique pour titres, intros et maillage futur.
 * Contenu distinct par entrée — éviter la duplication mot-à-mot entre villes.
 */

export type SeoServicePageConfig = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: readonly string[];
  shortIntro: string;
  serviceType: string;
  /** Chemin absolu sur le site (sans domaine). */
  canonicalPath: string;
};

export type SeoZonePageConfig = {
  slug: string;
  cityName: string;
  department: string;
  title: string;
  metaDescription: string;
  h1: string;
  localIntro: string;
  /** Communes voisines ou proches pour futures transitions / maillage (pas de pages auto-générées). */
  nearbyAreas: readonly string[];
  canonicalPath: string;
};

/** Pages services — publication ultérieure, une par une. */
export const SEO_SERVICE_PAGES: readonly SeoServicePageConfig[] = [
  {
    slug: "dressing-sur-mesure-paris",
    title: "Dressing sur mesure à Paris — Atelier Guyonnet",
    metaDescription:
      "Dressing sur mesure à Paris et en Île-de-France : étude, fabrication et agencement intégré pour optimiser votre pièce. Demande de devis sans engagement.",
    h1: "Dressing sur mesure à Paris et en Île-de-France",
    primaryKeyword: "dressing sur mesure Paris",
    secondaryKeywords: [
      "dressing sur mesure Île-de-France",
      "agencement dressing petit appartement",
    ],
    shortIntro:
      "Un dressing pensé pour vos cotes, vos habitudes de rangement et la lumière réelle de la pièce — du concept à la pose sur Paris et en grande couronne.",
    serviceType: "Dressing sur mesure",
    canonicalPath: "/dressing-sur-mesure-paris",
  },
  {
    slug: "placard-sur-mesure-paris",
    title: "Placard sur mesure à Paris — intégration & rangement",
    metaDescription:
      "Placard et placard intégré sur mesure à Paris : entrée, couloir, renfoncement. Solutions discrètes pour petits espaces. Devis sur étude personnalisée.",
    h1: "Placard sur mesure et placard intégré à Paris",
    primaryKeyword: "placard sur mesure Paris",
    secondaryKeywords: [
      "placard intégré Paris",
      "rangement entrée sur mesure",
    ],
    shortIntro:
      "Transformer un volume existant en rangement utile, avec façades et profondeurs adaptées au passage — idéal pour les entrées étroites et les cageots parisiens.",
    serviceType: "Placard intégré sur mesure",
    canonicalPath: "/placard-sur-mesure-paris",
  },
  {
    slug: "bibliotheque-sur-mesure-paris",
    title: "Bibliothèque sur mesure à Paris — mur & rangements",
    metaDescription:
      "Bibliothèque murale sur mesure à Paris : niches ouvertes, fermées, proportions étudiées pour votre salon ou bureau. Artisanat agencement sur mesure.",
    h1: "Bibliothèque sur mesure à Paris",
    primaryKeyword: "bibliothèque sur mesure Paris",
    secondaryKeywords: [
      "mur bibliothèque intégré",
      "rangement livres sur mesure",
    ],
    shortIntro:
      "Structurer un mur en dessinant le bon rythme entre rangements ouverts, portes discrètes et espaces d’exposition, pour un rendu durable et lisible.",
    serviceType: "Bibliothèque sur mesure",
    canonicalPath: "/bibliotheque-sur-mesure-paris",
  },
  {
    slug: "meuble-tv-sur-mesure-paris",
    title: "Meuble TV sur mesure à Paris — salon intégré",
    metaDescription:
      "Meuble TV et mur média sur mesure à Paris : câbles, équipements et rangements intégrés. Finitions sobres pour petits salons parisiens.",
    h1: "Meuble TV et rangements intégrés sur mesure",
    primaryKeyword: "meuble TV sur mesure Paris",
    secondaryKeywords: [
      "mur TV sur mesure",
      "rangement salon intégré",
    ],
    shortIntro:
      "Regrouper technique et rangement dans un ensemble calé au millimètre sur votre mur, pour un salon plus ordonné sans surcharger la composition.",
    serviceType: "Meuble TV et rangements sur mesure",
    canonicalPath: "/meuble-tv-sur-mesure-paris",
  },
  {
    slug: "rangement-sur-mesure-paris",
    title: "Rangement sur mesure à Paris — solutions intégrées",
    metaDescription:
      "Rangements sur mesure à Paris : dressings, placards, sous-pentes, recoins. Optimisation des petits espaces par l’atelier Guyonnet. Contact pour devis.",
    h1: "Rangement sur mesure à Paris et en Île-de-France",
    primaryKeyword: "rangement sur mesure Paris",
    secondaryKeywords: [
      "aménagement rangement sur mesure",
      "optimisation placard Paris",
    ],
    shortIntro:
      "Chaque mètre linéaire compte : nous consolidons les besoins réels (saisons, équipements, accès) avant de proposer une solution fabricable et tenable dans le temps.",
    serviceType: "Rangement sur mesure",
    canonicalPath: "/rangement-sur-mesure-paris",
  },
  {
    slug: "optimisation-petit-appartement-paris",
    title: "Optimisation petit appartement Paris — sur mesure",
    metaDescription:
      "Optimisation de petits appartements à Paris : agencement sur mesure, volumes multifonctions, rangements intégrés. Approche premium et locale.",
    h1: "Optimisation de petit appartement sur mesure",
    primaryKeyword: "optimisation petit appartement Paris",
    secondaryKeywords: [
      "aménagement studio Paris",
      "gain de place sur mesure",
    ],
    shortIntro:
      "Articuler les usages (recevoir, dormir, travailler) dans un seul périmètre exige des choix de profondeur et de lignes très précis — c’est le socle de nos études pour studios et deux-pièces.",
    serviceType: "Optimisation d’appartement",
    canonicalPath: "/optimisation-petit-appartement-paris",
  },
  {
    slug: "agencement-sur-mesure-ile-de-france",
    title: "Agencement sur mesure Île-de-France — Atelier Guyonnet",
    metaDescription:
      "Agencement sur mesure en Île-de-France : dressings, placards, bibliothèques, meubles intégrés. Atelier artisanal, déplacements selon projet. Paris centre.",
    h1: "Agencement sur mesure en Île-de-France",
    primaryKeyword: "agencement sur mesure Île-de-France",
    secondaryKeywords: [
      "menuiserie agencement IdF",
      "dressing sur mesure région parisienne",
    ],
    shortIntro:
      "Au-delà de Paris, les projets sont menés selon la charge de l’atelier et la logistique de chantier : la zone desservie s’étend en Île-de-France sur demande qualifiée.",
    serviceType: "Agencement intérieur sur mesure",
    canonicalPath: "/agencement-sur-mesure-ile-de-france",
  },
  {
    slug: "menuisier-agencement-paris",
    title: "Menuisier agencement Paris — sur mesure & intégration",
    metaDescription:
      "Menuiserie d’agencement sur mesure à Paris : meubles intégrés, dressings, bibliothèques. Travail artisanal, matériaux étudiés pour votre intérieur.",
    h1: "Menuisier agencement et sur mesure à Paris",
    primaryKeyword: "menuiserie agencement Paris",
    secondaryKeywords: [
      "fabrication sur mesure bois Paris",
      "placard intégré artisan",
    ],
    shortIntro:
      "L’agencement chez Atelier Guyonnet relie dessin, choix de panneaux et mise en œuvre : un interlocuteur unique du relevé de cotes à la livraison des volumes intégrés.",
    serviceType: "Menuiserie d’agencement",
    canonicalPath: "/menuisier-agencement-paris",
  },
] as const;

/** Zones prioritaires — contenus locaux distincts (pas de copier-coller). */
export const SEO_ZONE_PAGES: readonly SeoZonePageConfig[] = [
  {
    slug: "paris",
    cityName: "Paris",
    department: "Paris (75)",
    title: "Agencement sur mesure à Paris — Atelier Guyonnet",
    metaDescription:
      "Dressing, placard, bibliothèque et rangements sur mesure à Paris. Atelier artisanal, prise de cotes et projets pour petits espaces. Devis sur contact.",
    h1: "Agencement sur mesure à Paris",
    localIntro:
      "Paris impose souvent des couloirs étroits, des plafonds atypiques et des contraintes d’accès : nos propositions intègrent ces limites dès l’étude, du centre historique aux quartiers en transformation.",
    nearbyAreas: ["Boulogne-Billancourt", "Neuilly-sur-Seine", "Levallois-Perret", "Vincennes"],
    canonicalPath: "/paris",
  },
  {
    slug: "boulogne-billancourt",
    cityName: "Boulogne-Billancourt",
    department: "Hauts-de-Seine (92)",
    title: "Agencement sur mesure Boulogne-Billancourt — Atelier Guyonnet",
    metaDescription:
      "Dressing et rangements sur mesure à Boulogne-Billancourt : appartements familiaux, duplex, optimisations de pièces. Devis et déplacements sur rendez-vous.",
    h1: "Agencement sur mesure à Boulogne-Billancourt",
    localIntro:
      "Les programmes récents comme les immeubles plus anciens autour de l’île Seguin appellent des volumes sur mesure : nous calons les meubles intégrés sur les linéaires réels et les trémies techniques du logement.",
    nearbyAreas: ["Paris", "Issy-les-Moulineaux", "Neuilly-sur-Seine"],
    canonicalPath: "/boulogne-billancourt",
  },
  {
    slug: "neuilly-sur-seine",
    cityName: "Neuilly-sur-Seine",
    department: "Hauts-de-Seine (92)",
    title: "Dressing sur mesure Neuilly-sur-Seine — Atelier Guyonnet",
    metaDescription:
      "Agencement et dressing sur mesure à Neuilly-sur-Seine. Finitions soignées, petits espaces et pièces à forte contrainte. Première prise de contact en ligne.",
    h1: "Agencement sur mesure à Neuilly-sur-Seine",
    localIntro:
      "Les plans rectilignes côtoient parfois des volumes compliqués en toiture ou en demi-niveaux : l’atelier affine les profondeurs de caissons pour garder des façades propres et des circulations confortables.",
    nearbyAreas: ["Levallois-Perret", "Courbevoie", "Paris"],
    canonicalPath: "/neuilly-sur-seine",
  },
  {
    slug: "levallois-perret",
    cityName: "Levallois-Perret",
    department: "Hauts-de-Seine (92)",
    title: "Rangements sur mesure Levallois-Perret — Atelier Guyonnet",
    metaDescription:
      "Placards, dressings et bibliothèques sur mesure à Levallois-Perret. Optimisation des surfaces compactes en petite couronne. Réponse sous 24 à 48h ouvrées.",
    h1: "Agencement sur mesure à Levallois-Perret",
    localIntro:
      "Sur des surfaces souvent optimisées au mètre carré, chaque centimètre de profondeur compte : nous évitons les gabarits trop profonds qui cassent la circulation tout en maximisant le rangement.",
    nearbyAreas: ["Neuilly-sur-Seine", "Courbevoie", "Paris"],
    canonicalPath: "/levallois-perret",
  },
  {
    slug: "issy-les-moulineaux",
    cityName: "Issy-les-Moulineaux",
    department: "Hauts-de-Seine (92)",
    title: "Agencement sur mesure Issy-les-Moulineaux — Atelier Guyonnet",
    metaDescription:
      "Meuble TV, dressing et rangements intégrés sur mesure à Issy-les-Moulineaux. Projets pour appartements neufs ou restructurés. Contact pour étude personnalisée.",
    h1: "Agencement sur mesure à Issy-les-Moulineaux",
    localIntro:
      "Les lots récents avec baies vitrées et gaines techniques demandent une coordination fine entre façade, électricité et caissons : nos plans tiennent compte de ces interfaces pour une pose sans surprise.",
    nearbyAreas: ["Boulogne-Billancourt", "Paris", "Vanves"],
    canonicalPath: "/issy-les-moulineaux",
  },
  {
    slug: "vincennes",
    cityName: "Vincennes",
    department: "Val-de-Marne (94)",
    title: "Placard et dressing sur mesure Vincennes — Atelier Guyonnet",
    metaDescription:
      "Agencement sur mesure à Vincennes : placards intégrés, dressings, bibliothèques. Val-de-Marne, approche artisanale. Demande de devis en ligne.",
    h1: "Agencement sur mesure à Vincennes",
    localIntro:
      "Entre maisons de ville et immeubles de standing, les configurations varient fortement : nous adaptons les linéaires et les seuils techniques aux volumes existants, y compris sous combles ou en sous-pente.",
    nearbyAreas: ["Saint-Mandé", "Montreuil", "Paris"],
    canonicalPath: "/vincennes",
  },
  {
    slug: "saint-mande",
    cityName: "Saint-Mandé",
    department: "Val-de-Marne (94)",
    title: "Rangement sur mesure Saint-Mandé — Atelier Guyonnet",
    metaDescription:
      "Rangements et dressings sur mesure à Saint-Mandé, au porte de Paris. Petites surfaces et pièces à optimiser. Atelier Guyonnet, IdF.",
    h1: "Agencement sur mesure à Saint-Mandé",
    localIntro:
      "La proximité immédiate de Paris attire des configurations compactes mais exigeantes en finition : nous priorisons des assemblages propres et des façades tenues dans la durée.",
    nearbyAreas: ["Vincennes", "Paris", "Montreuil"],
    canonicalPath: "/saint-mande",
  },
  {
    slug: "montreuil",
    cityName: "Montreuil",
    department: "Seine-Saint-Denis (93)",
    title: "Agencement sur mesure Montreuil — Atelier Guyonnet",
    metaDescription:
      "Dressing, placard et bibliothèque sur mesure à Montreuil. Accompagnement sur logements anciens ou rénovés. Devis et créneaux selon disponibilités.",
    h1: "Agencement sur mesure à Montreuil",
    localIntro:
      "Des typologies d’immeubles variées et des planchers parfois généreux en hauteur permettent des rangements hauts très efficaces — à condition de verrouiller l’accès, l’éclairage et l’usage au quotidien.",
    nearbyAreas: ["Paris", "Vincennes", "Saint-Denis"],
    canonicalPath: "/montreuil",
  },
  {
    slug: "saint-denis",
    cityName: "Saint-Denis",
    department: "Seine-Saint-Denis (93)",
    title: "Menuiserie agencement Saint-Denis — Atelier Guyonnet",
    metaDescription:
      "Rangements et agencement sur mesure pour Saint-Denis et la Plaine Saint-Denis : bureaux en résidence, appartements, volumes mixtes. Étude sur mesure.",
    h1: "Agencement sur mesure à Saint-Denis",
    localIntro:
      "Les projets peuvent mêler résidence principale et espace télétravail : nous concevons des linéaires qui clarifient ces usages sans sacrifier la cohérence esthétique de la pièce.",
    nearbyAreas: ["Montreuil", "Paris", "Nanterre"],
    canonicalPath: "/saint-denis",
  },
  {
    slug: "courbevoie",
    cityName: "Courbevoie",
    department: "Hauts-de-Seine (92)",
    title: "Dressing sur mesure Courbevoie — Atelier Guyonnet",
    metaDescription:
      "Dressing et placards sur mesure à Courbevoie, quartier La Défense et environs. Rangements intégrés pour appartements exigeants. Contact Atelier Guyonnet.",
    h1: "Agencement sur mesure à Courbevoie",
    localIntro:
      "Les flux entre bureaux et domicile structurent souvent les besoins de rangement : nous intégrons penderies, modules fermés et espaces dédiés sacs / chaussures pour simplifier les allers-retours.",
    nearbyAreas: ["Levallois-Perret", "Nanterre", "Neuilly-sur-Seine"],
    canonicalPath: "/courbevoie",
  },
  {
    slug: "nanterre",
    cityName: "Nanterre",
    department: "Hauts-de-Seine (92)",
    title: "Agencement sur mesure Nanterre — Atelier Guyonnet",
    metaDescription:
      "Bibliothèque, dressing et rangements sur mesure à Nanterre. Quartiers universitaires, résidences récentes ou restructurées. Devis personnalisé.",
    h1: "Agencement sur mesure à Nanterre",
    localIntro:
      "Les plateaux découpés en studettes ou colocations demandent parfois des volumes dupliqués mais distincts : nous posons des principes de modularité sans fragiliser la tenue des façades.",
    nearbyAreas: ["Courbevoie", "Rueil-Malmaison", "Saint-Denis"],
    canonicalPath: "/nanterre",
  },
  {
    slug: "creteil",
    cityName: "Créteil",
    department: "Val-de-Marne (94)",
    title: "Rangements sur mesure Créteil — Atelier Guyonnet",
    metaDescription:
      "Placards, dressings et meubles intégrés sur mesure à Créteil et Val-de-Marne. Optimisation des petits appartements et familles. Paris / IdF.",
    h1: "Agencement sur mesure à Créteil",
    localIntro:
      "Les projets familiaux augmentent les besoins de stockage saisonnier : nous anticipons volumes, aération et charges pour que le meuble reste utilisable après quelques années d’usage intensif.",
    nearbyAreas: ["Paris", "Saint-Mandé", "Alfortville"],
    canonicalPath: "/creteil",
  },
] as const;

/** Repères pour brancher le sitemap lorsque les routes existeront (hors build actuel). */
export function getFutureSeoPaths(): string[] {
  return [
    ...SEO_SERVICE_PAGES.map((p) => p.canonicalPath),
    ...SEO_ZONE_PAGES.map((p) => p.canonicalPath),
  ];
}
