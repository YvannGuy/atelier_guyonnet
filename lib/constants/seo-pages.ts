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
    title: "Dressing sur mesure Paris | Atelier Guyonnet",
    metaDescription:
      "Création de dressings sur mesure à Paris et en Île-de-France. Atelier Guyonnet conçoit des rangements intégrés adaptés à votre espace, vos usages et vos dimensions.",
    h1: "Dressing sur mesure à Paris",
    primaryKeyword: "dressing sur mesure Paris",
    secondaryKeywords: [
      "dressing sur mesure Île-de-France",
      "dressing intégré Paris",
      "rangement chambre sur mesure",
      "menuisier dressing Paris",
      "placard dressing sur mesure",
    ],
    shortIntro:
      "Un dressing pensé pour vos cotes, vos habitudes de rangement et la lumière réelle de la pièce — du concept à la pose sur Paris et en grande couronne.",
    serviceType: "Dressing sur mesure",
    canonicalPath: "/dressing-sur-mesure-paris",
  },
  {
    slug: "placard-sur-mesure-paris",
    title: "Placard sur mesure Paris | Atelier Guyonnet",
    metaDescription:
      "Création de placards sur mesure à Paris et en Île-de-France. Atelier Guyonnet transforme entrées, couloirs, renfoncements et murs perdus en rangements intégrés adaptés à votre intérieur.",
    h1: "Placard sur mesure à Paris",
    primaryKeyword: "placard sur mesure Paris",
    secondaryKeywords: [
      "placard intégré Paris",
      "placard d’entrée sur mesure",
      "placard couloir sur mesure",
      "placard mural Paris",
      "rangement intégré Paris",
      "menuisier placard Paris",
      "placard sur mesure Île-de-France",
    ],
    shortIntro:
      "Transformer un volume existant en rangement utile, avec façades et profondeurs adaptées au passage — idéal pour les entrées étroites et les cageots parisiens.",
    serviceType: "Placard intégré sur mesure",
    canonicalPath: "/placard-sur-mesure-paris",
  },
  {
    slug: "bibliotheque-sur-mesure-paris",
    title: "Bibliothèque sur mesure Paris | Atelier Guyonnet",
    metaDescription:
      "Création de bibliothèques sur mesure à Paris et en Île-de-France. Atelier Guyonnet conçoit des bibliothèques murales, intégrées et fonctionnelles pour salons, bureaux et espaces perdus.",
    h1: "Bibliothèque sur mesure à Paris",
    primaryKeyword: "bibliothèque sur mesure Paris",
    secondaryKeywords: [
      "bibliothèque murale sur mesure",
      "bibliothèque intégrée Paris",
      "meuble bibliothèque sur mesure Paris",
      "bibliothèque salon sur mesure",
      "bibliothèque bureau sur mesure",
      "menuisier bibliothèque Paris",
      "bibliothèque sur mesure Île-de-France",
    ],
    shortIntro:
      "Structurer un mur en dessinant le bon rythme entre rangements ouverts, portes discrètes et espaces d’exposition, pour un rendu durable et lisible.",
    serviceType: "Bibliothèque sur mesure",
    canonicalPath: "/bibliotheque-sur-mesure-paris",
  },
  {
    slug: "meuble-tv-sur-mesure-paris",
    title: "Meuble TV sur mesure Paris | Atelier Guyonnet",
    metaDescription:
      "Création de meubles TV sur mesure à Paris et en Île-de-France. Atelier Guyonnet conçoit des meubles TV intégrés, muraux et fonctionnels pour salons et espaces de vie.",
    h1: "Meuble TV sur mesure à Paris",
    primaryKeyword: "meuble TV sur mesure Paris",
    secondaryKeywords: [
      "meuble TV mural sur mesure",
      "meuble TV intégré Paris",
      "meuble TV avec rangement Paris",
      "meuble TV suspendu sur mesure",
      "meuble salon sur mesure Paris",
      "rangement TV sur mesure Paris",
      "menuisier meuble TV Paris",
      "meuble TV sur mesure Île-de-France",
    ],
    shortIntro:
      "Regrouper technique et rangement dans un ensemble calé au millimètre sur votre mur, pour un salon plus ordonné sans surcharger la composition.",
    serviceType: "Meuble TV et rangements sur mesure",
    canonicalPath: "/meuble-tv-sur-mesure-paris",
  },
  {
    slug: "rangement-sur-mesure-paris",
    title: "Rangement sur mesure Paris | Atelier Guyonnet",
    metaDescription:
      "Création de rangements sur mesure à Paris et en Île-de-France. Atelier Guyonnet optimise entrées, couloirs, chambres, salons et espaces perdus avec des solutions intégrées.",
    h1: "Rangement sur mesure à Paris",
    primaryKeyword: "rangement sur mesure Paris",
    secondaryKeywords: [
      "rangement intégré Paris",
      "meuble de rangement sur mesure Paris",
      "solution rangement petit appartement Paris",
      "rangement entrée Paris",
      "rangement chambre sur mesure",
      "rangement gain de place Paris",
      "menuisier rangement Paris",
    ],
    shortIntro:
      "Chaque mètre linéaire compte : nous consolidons les besoins réels (saisons, équipements, accès) avant de proposer une solution fabricable et tenable dans le temps.",
    serviceType: "Rangement sur mesure",
    canonicalPath: "/rangement-sur-mesure-paris",
  },
  {
    slug: "optimisation-petit-appartement-paris",
    title: "Optimisation petit appartement Paris | Atelier Guyonnet",
    metaDescription:
      "Solutions sur mesure pour optimiser un petit appartement à Paris : rangements intégrés, placards, meubles gain de place et aménagements pensés au centimètre près.",
    h1: "Optimisation de petit appartement à Paris",
    primaryKeyword: "optimisation petit appartement Paris",
    secondaryKeywords: [
      "aménagement petit appartement Paris",
      "rangement petit appartement Paris",
      "meuble sur mesure petit appartement",
      "optimisation studio Paris",
      "agencement studio Paris",
      "gain de place appartement Paris",
      "menuisier agencement petit espace Paris",
    ],
    shortIntro:
      "Articuler les usages dans un périmètre réduit exige des choix de profondeur et de lignes très précis — c’est le socle de nos études pour studios et deux-pièces parisiens.",
    serviceType: "Optimisation d’appartement",
    canonicalPath: "/optimisation-petit-appartement-paris",
  },
  {
    slug: "agencement-sur-mesure-ile-de-france",
    title: "Agencement sur mesure Île-de-France | Atelier Guyonnet",
    metaDescription:
      "Atelier Guyonnet conçoit des agencements sur mesure en Île-de-France : dressings, placards, rangements, bibliothèques, meubles TV et solutions gain de place.",
    h1: "Agencement sur mesure en Île-de-France",
    primaryKeyword: "agencement sur mesure Île-de-France",
    secondaryKeywords: [
      "agencement intérieur sur mesure Île-de-France",
      "menuisier agencement Île-de-France",
      "aménagement intérieur sur mesure Île-de-France",
      "rangement sur mesure Île-de-France",
      "mobilier sur mesure Île-de-France",
      "agencement appartement Île-de-France",
      "optimisation espace Île-de-France",
    ],
    shortIntro:
      "Vue d’ensemble régionale : les mêmes savoir-faire menuiserie que sur les pages Paris, avec logistique et disponibilités atelier selon le projet.",
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
    title: "Agencement sur mesure Paris | Atelier Guyonnet",
    metaDescription:
      "Atelier Guyonnet conçoit des agencements sur mesure à Paris : dressings, placards, rangements, bibliothèques, meubles TV et solutions gain de place pour appartements parisiens.",
    h1: "Agencement sur mesure à Paris",
    localIntro:
      "Paris impose souvent des couloirs étroits, des plafonds atypiques et des contraintes d’accès : les études tiennent compte de ces limites dès le premier échange, du centre historique aux quartiers en transformation.",
    nearbyAreas: ["Boulogne-Billancourt", "Neuilly-sur-Seine", "Levallois-Perret", "Vincennes"],
    canonicalPath: "/zones/paris",
  },
  {
    slug: "boulogne-billancourt",
    cityName: "Boulogne-Billancourt",
    department: "Hauts-de-Seine (92)",
    title: "Agencement sur mesure Boulogne-Billancourt | Atelier Guyonnet",
    metaDescription:
      "Atelier Guyonnet conçoit des agencements sur mesure à Boulogne-Billancourt : dressings, placards, rangements, bibliothèques, meubles TV et solutions gain de place.",
    h1: "Agencement sur mesure à Boulogne-Billancourt",
    localIntro:
      "Programmes récents et immeubles plus anciens autour de Billancourt ou du secteur Pont de Seine : les linéaires de rangement sur mesure épousent les cotes du logement et les contraintes techniques (gaines, plinthes, angles).",
    nearbyAreas: ["Paris", "Issy-les-Moulineaux", "Neuilly-sur-Seine"],
    canonicalPath: "/zones/boulogne-billancourt",
  },
  {
    slug: "neuilly-sur-seine",
    cityName: "Neuilly-sur-Seine",
    department: "Hauts-de-Seine (92)",
    title: "Agencement sur mesure Neuilly-sur-Seine | Atelier Guyonnet",
    metaDescription:
      "Atelier Guyonnet conçoit des agencements sur mesure à Neuilly-sur-Seine : dressings, placards, rangements, bibliothèques, meubles TV et solutions gain de place.",
    h1: "Agencement sur mesure à Neuilly-sur-Seine",
    localIntro:
      "Intérieurs souvent très soignés : les linéaires sur mesure cherchent discrétion et précision de façade — du secteur Sablons aux abords de la Seine, l’atelier calibre profondeurs et jeux pour rester élégant au quotidien.",
    nearbyAreas: ["Levallois-Perret", "Courbevoie", "Paris"],
    canonicalPath: "/zones/neuilly-sur-seine",
  },
  {
    slug: "levallois-perret",
    cityName: "Levallois-Perret",
    department: "Hauts-de-Seine (92)",
    title: "Agencement sur mesure Levallois-Perret | Atelier Guyonnet",
    metaDescription:
      "Atelier Guyonnet conçoit des agencements sur mesure à Levallois-Perret : dressings, placards, rangements, bibliothèques, meubles TV et solutions gain de place.",
    h1: "Agencement sur mesure à Levallois-Perret",
    localIntro:
      "Ville très urbaine où les circulations et le stockage cohabitent : les projets calent dressings et placards sur des cotes serrées sans sacrifier la lisibilité des pièces ni la qualité de pose.",
    nearbyAreas: ["Neuilly-sur-Seine", "Courbevoie", "Paris"],
    canonicalPath: "/zones/levallois-perret",
  },
  {
    slug: "issy-les-moulineaux",
    cityName: "Issy-les-Moulineaux",
    department: "Hauts-de-Seine (92)",
    title: "Agencement sur mesure Issy-les-Moulineaux | Atelier Guyonnet",
    metaDescription:
      "Atelier Guyonnet conçoit des agencements sur mesure à Issy-les-Moulineaux : dressings, placards, rangements, bibliothèques, meubles TV et solutions gain de place.",
    h1: "Agencement sur mesure à Issy-les-Moulineaux",
    localIntro:
      "Entre programmes récents et maisons restructurées, les projets familiaux combinent entrées actives, chambres, salons et parfois un coin bureau : le sur-mesure propose des linéaires intégrés qui gardent des lignes nettes sans sacrifier le stockage au quotidien.",
    nearbyAreas: ["Boulogne-Billancourt", "Paris", "Vanves"],
    canonicalPath: "/zones/issy-les-moulineaux",
  },
  {
    slug: "vincennes",
    cityName: "Vincennes",
    department: "Val-de-Marne (94)",
    title: "Agencement sur mesure Vincennes | Atelier Guyonnet",
    metaDescription:
      "Atelier Guyonnet conçoit des agencements sur mesure à Vincennes : dressings, placards, rangements, bibliothèques, meubles TV et solutions gain de place.",
    h1: "Agencement sur mesure à Vincennes",
    localIntro:
      "Entre appartements familiaux et maisons de ville, les intérieurs vincennois demandent souvent des rangements intégrés discrets : le sur-mesure épouse murs, entrées et recoins pour un résultat fluide, sans surcharge visuelle.",
    nearbyAreas: ["Saint-Mandé", "Montreuil", "Paris"],
    canonicalPath: "/zones/vincennes",
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
