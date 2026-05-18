/** Valeurs des champs du formulaire devis — partagées client / validation serveur. */

export const QUOTE_PROJECT_TYPES = [
  { value: "dressing", label: "Dressing sur mesure" },
  { value: "placard", label: "Placard intégré" },
  { value: "bibliotheque", label: "Bibliothèque sur mesure" },
  { value: "meuble-tv", label: "Meuble TV / meuble mural" },
  { value: "studio", label: "Optimisation de studio" },
  { value: "pente-recoin", label: "Rangement sous pente / recoin" },
  { value: "autre", label: "Autre projet" },
] as const;

export const QUOTE_BUDGETS = [
  { value: "moins-1500", label: "Moins de 1 500 €" },
  { value: "1500-3000", label: "1 500 € – 3 000 €" },
  { value: "3000-5000", label: "3 000 € – 5 000 €" },
  { value: "5000-8000", label: "5 000 € – 8 000 €" },
  { value: "8000-plus", label: "8 000 € et plus" },
  { value: "a-definir", label: "À définir" },
] as const;

export const QUOTE_DELAYS = [
  { value: "asap", label: "Dès que possible" },
  { value: "month", label: "Dans le mois" },
  { value: "2-3-mois", label: "Sous 2 à 3 mois" },
  { value: "flexible", label: "Je suis flexible" },
] as const;

export type QuoteProjectTypeValue = (typeof QUOTE_PROJECT_TYPES)[number]["value"];
export type QuoteBudgetValue = (typeof QUOTE_BUDGETS)[number]["value"];
export type QuoteDelayValue = (typeof QUOTE_DELAYS)[number]["value"];
