# Code — Standards Atelier Guyonnet

## Général

- **TypeScript strict** : pas de `any` sans justification courte en commentaire.
- **Mobile-first** : styles Tailwind basés sur la vue mobile, puis `sm:` / `md:` / `lg:`.
- **Composants** : petits, lisibles ; props typées (`type` pour props publiques sauf convention existante).
- **Nommage** : fichiers composants en **PascalCase** (`Hero.tsx`), utilitaires en **camelCase**.

## Next.js (App Router)

- Préférer **Server Components** par défaut ; `"use client"` **uniquement** pour interactivité (slider, formulaire contrôlé, menus).
- Métadonnées via **`export const metadata`** (ou `generateMetadata` si besoin).
- Utiliser **`next/link`** pour la navigation interne ; **`next/image`** pour images (pas de `<img>` sauf cas exceptionnel documenté).

## Tailwind

- Utiliser un **design token** cohérent (`bg-background`, `text-foreground`, etc. quand la config étend le thème — aligné sur `ui-context.md`).
- Éviter les valeurs magiques répétées : centraliser dans `tailwind.config` ou variables CSS.
- Privilégier **`gap`** + flex/grid à des margins empilées difficiles à maintenir.

## Accessibilité

- Contraste suffisant (hero sombre : texte clair ; fond clair : texte `text-main`).
- **Labels** sur champs de formulaire ; focus visible ; boutons avec texte explicite.

## Contenu & honnêteté

- Pas d’images ou de **case studies** inventés. Placeholders **clairement temporaires** ou pas d’entrée en prod.

## Git / livraison

- Commits petits et explicites ; pas de secrets dans le repo (fichiers `.env` ignorés).
