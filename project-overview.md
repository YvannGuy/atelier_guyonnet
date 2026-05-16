# Atelier Guyonnet — Vue projet

## Produit

Landing vitrine **premium** pour une activité **artisanale d’agencement sur mesure** (Paris / Île-de-France) : conception et réalisation de dressings, placards intégrés, bibliothèques, meubles TV et rangements sur mesure, avec focus **optimisation des petits appartements**.

- **Baseline** : « Votre intérieur, pensé au centimètre près. »
- **Promesse** : Transformer les espaces perdus en rangements beaux, solides et fonctionnels.

## Objectifs

- Générer des demandes qualifiées (contact / devis / diagnostic).
- Présenter le positionnement haut de gamme, artisanal et local.
- Être **rapide**, **SEO-friendly** et **mobile-first**, sans complexité MVP inutile.

## Parcours utilisateur (MVP)

1. Arrivée sur la page → hero immersive + message clair.
2. Scroll éditorial : valeur, services, preuves visuelles (photos **réelles** uniquement quand le contenu sera disponible — pas de faux portfolio).
3. Méthode / réassurance → offre (ex. diagnostic) si conservée.
4. CTA vers formulaire ou contact direct (email / téléphone).
5. Envoi de message (intégration à définir : action serveur simple, service tiers, etc. — **sans** paiement en ligne au MVP).

## Fonctionnalités (in scope MVP)

- Pages/sections landing : header, hero, propositions, grille services, galerie, slider avant/après (si assets), processus, à-propos, offre, contact, footer.
- **Next.js App Router** + **TypeScript** + **Tailwind** + **`next/image`**.
- Métadonnées SEO de base, balises sociales, structure sémantique.
- Formulaire de contact (sans orchestration paiement).

## Hors scope MVP

- Auth, espace client, dashboard.
- Base de données, CMS lourd (sauf décision explicite plus tard).
- Paiement en ligne / réservation payante automatisée.
- Portfolio « fake » ou images stock présentées comme réalisations.
- Mise en avant plomberie / électricité / dépannage (hors cœur métier).
- UI type SaaS générique (cartes grises, illustrations génériques, etc.).

## Critères de succès

- Message et offre comprise en **< 30 s** sur mobile.
- **Lighthouse** : performances et SEO corrects sur une connexion standard (objectifs à fixer au moment de l’implémentation).
- Code **composants réutilisables**, lisible, prêt à itérer (blog, CMS, témoignages) sans dette bloquante.
- Zéro promesse factuelle non validée (prix, délais, périmètre géographique) sans accord métier.
