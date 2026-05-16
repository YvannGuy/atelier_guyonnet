# Règles de travail (IA / Cursor) — Atelier Guyonnet

## Priorité

1. Respecter **`project-overview.md`** (scope / hors-scope) et **`ui-context.md`** (direction visuelle).
2. Ne pas introduire d’**auth**, **DB**, **dashboard**, **paiement** au MVP sans validation explicite.
3. **Aucun faux portfolio** : pas d’images ou témoignages inventés ; contenu placeholder seulement si clairement marqué temporaire.

## Avant de coder une fonctionnalité

- Vérifier **`architecture.md`** et **`code-standards.md`**.
- Préférer les **Server Components** ; `"use client"` seulement si nécessaire.
- **Mobile-first** et **`next/image`** pour tout visuel.

## Style produit

- Ton : **premium, artisanal, Paris / IDF** ; pas de vocabulaire SaaS ou dépannage (plomberie / électricité).
- UI : hero sombre, sections claires/beige, typo **serif + sans**, CTA noirs, détails fins (lignes type mesure) avec parcimonie.

## Workflow itératif

- Petites PRs logiques : **structure de page** → **sections** → **formulaire** → **polish SEO/perf**.
- Après chaque bloc : vérifier accessibilité de base (labels, contrastes, focus).

## Questions ouvertes

- Si une règle métier manque (prix, zone, délais), **demander** ou laisser un TODO explicite — ne pas inventer.

## Hors demande utilisateur

- Pas de refactor large non demandé ; pas de nouvelles deps sans justification courte.
