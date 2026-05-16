# Architecture — MVP Atelier Guyonnet

## Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **`next/image`** pour le média (formats modernes, tailles, `priority` sur le hero)

## Structure cible (à la création du repo)

```text
app/
  layout.tsx          # layout global, fonts, metadata
  page.tsx            # landing (composition de sections au fil de l’eau)
  globals.css         # Tailwind v4 + tokens CSS (--ag-*) + @theme
components/
  layout/             # Header, Footer, shells
  sections/           # blocs de page (Hero, Services, …)
  ui/                 # primitives réutilisables (boutons, champs…)
lib/
  constants/          # site.ts (metadata, copy statique centralisée)
  utils/              # helpers (vide pour l’instant)
public/
  images/             # assets optimisés (photos atelier / chantiers — sources réelles)
```

*(A adapter si le squelette Next choisi diffère légèrement ; garder la séparation **sections** vs **ui**.)*

## Données & backend (MVP)

- **Pas de base de données.**
- Contenu principalement **statique** (constantes / copy en TS ou fichiers dédiés).
- Formulaire contact : **Server Action** ou route **API Route Handler** minimale, selon la solution d’envoi (email, webhook, outil tiers) — **décision à trancher** avant implémentation.

## Auth & paiement

- **Aucune** au MVP.

## Déploiement

- Compatible **Vercel** (recommandé pour Next). Variables d’environnement uniquement si intégration email / analytics.

## SEO & perf

- Metadata API App Router, titres/descriptions uniques.
- HTML sémantique (`main`, `section`, headings hiérarchiques).
- Images dimensionnées ; éviter le LCP gourmand sans `sizes` / qualité adaptée.

## Hors MVP (évolutions possibles)

- i18n, blog, CMS headless, témoignages structurés, pages légales dynamiques.
