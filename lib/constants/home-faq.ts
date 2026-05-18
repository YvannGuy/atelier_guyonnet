/**
 * FAQ page d’accueil — réponses factuelles, alignées avec l’offre réelle.
 * Réutilisé par `FaqSection` et le schéma JSON-LD FAQPage.
 */
export type HomeFaqItem = {
  question: string;
  answer: string;
};

export const homeFaqItems = [
  {
    question: "Intervenez-vous à Paris et en Île-de-France ?",
    answer:
      "Oui. Atelier Guyonnet organise des rendez-vous et des déplacements pour les projets d’agencement sur mesure à Paris intra-muros et en Île-de-France. La faisabilité et le calendrier sont toujours confirmés après un premier échange, selon votre localisation et la nature du projet.",
  },
  {
    question: "Peut-on demander un devis pour un petit espace ?",
    answer:
      "Oui. Les petits appartements, recoins et surfaces contraintes font partie du cœur de l’offre : dressing, placard intégré, bibliothèque, meuble TV ou rangement sur mesure pour optimiser chaque centimètre utile.",
  },
  {
    question: "Faites-vous des dressings sur mesure ?",
    answer:
      "Oui. Les dressings sur mesure sont proposés : étude des besoins, cotes, matériaux et intégration dans la pièce. Chaque proposition est adaptée à votre espace, pas à un module standard catalogue.",
  },
  {
    question: "Les visuels du site sont-ils des réalisations d’Atelier Guyonnet ?",
    answer:
      "Non. Les photographies d’inspiration et les montages « avant / après » illustrés sont des visuels d’ambiance ou de principe, clairement présentés comme tels. Ils ne remplacent pas un dossier photos de chantier ni ne constituent un portfolio de réalisations.",
  },
  {
    question: "Comment se déroule une demande de devis ?",
    answer:
      "Vous remplissez le formulaire de contact en bas de page (section Devis) avec vos coordonnées, votre ville et une description de votre projet. L’équipe revient vers vous sous 24 à 48h ouvrées pour préciser la suite (échanges complémentaires, visite si pertinent, chiffrage).",
  },
] as const satisfies readonly HomeFaqItem[];
