# Assets images — Atelier Guyonnet

Ce dossier sert à héberger les **fichiers image** de la vitrine. Les chemins publics correspondent aux fichiers sous `public/` (ex. `public/images/placeholders/hero.jpg` → URL `/images/placeholders/hero.jpg`).

## Placeholders Unsplash (temporaires)

Les fichiers suivants sont importés depuis **Unsplash**, stockés **localement** pour un rendu stable hors ligne et sans configuration de domaine distant dans Next.js. Ils sont référencés dans le code via **`lib/constants/placeholder-images.ts`** — **single source of truth** pour chemins, `alt` et rôle.

**Règle** : ce ne sont pas des chantiers Atelier Guyonnet. Libellés côté UI : inspiration / illustration / ambiance. Remplacer par des vrais médias dès que possible.

| Fichier | Chemin public | Section | ID photo Unsplash (import d’origine) |
|--------|----------------|---------|----------------------------------------|
| `hero.jpg` | `/images/placeholders/hero.jpg` | Hero | `photo-1616046229478-9901c5536a45` |
| `inspiration-dressing.jpg` | `/images/placeholders/inspiration-dressing.jpg` | Inspirations | `photo-1631679706909-1844bbd07221` |
| `inspiration-placard-entree.jpg` | `/images/placeholders/inspiration-placard-entree.jpg` | Inspirations | `photo-1600121848594-d8644e57abab` |
| `inspiration-bibliotheque.jpg` | `/images/placeholders/inspiration-bibliotheque.jpg` | Inspirations | `photo-1507842217343-583bb7270b66` |
| `inspiration-meuble-tv.jpg` | `/images/placeholders/inspiration-meuble-tv.jpg` | Inspirations | `photo-1600210492486-724fe5c67fb0` |
| `before-after-avant.jpg` | `/images/placeholders/before-after-avant.jpg` | Avant / Après | `photo-1524758631624-e2822e304c36` |
| `before-after-apres.jpg` | `/images/placeholders/before-after-apres.jpg` | Avant / Après | `photo-1586023492125-27b2c045efd7` |
| `about-atelier-detail.jpg` | `/images/placeholders/about-atelier-detail.jpg` | À propos | `photo-1504148455328-c376907d081c` |

**Crédit** : conformément à la licence Unsplash, pensez à créditer les photographes sur les supports où c’est pertinent ; fiche image : `https://unsplash.com/photos/<id>` (certaines pages redirigent vers un slug court).

**Mise à jour** : pour remplacer un visuel, écrasez le fichier dans `public/images/placeholders/` (même nom) **ou** changez le `publicPath` / ajoutez un nouveau fichier dans `placeholder-images.ts`.

---

## Fichiers définitifs prévus (hors Unsplash)

Ces chemins restent la cible documentée pour les **photos maison** (non branchés comme placeholders actuels) :

| | |
|---|---|
| **Hero définitif** | `public/images/hero-atelier-guyonnet.jpg` → `/images/hero-atelier-guyonnet.jpg` |
| **Inspirations définitives** | `public/images/inspirations/*.jpg` (dressing, placard-entree, bibliotheque, meuble-tv) |

Pour passer des placeholders aux fichiers définitifs : mettre à jour **`placeholder-images.ts`** ou renommer les imports dans les composants concernés.

---

## Comportement sans fichier

Les sections concernées utilisent désormais **`next/image`** avec des fichiers **présents** dans `placeholders/`. Si un fichier est retiré, le build ou le runtime peut échouer — rouvrir ce dossier ou rétablir le chemin dans les constantes.

---

## Checklist avant mise en ligne

1. Fichiers présents aux chemins attendus, **poids** raisonnable (viser moins de 300 à 500 Ko par fichier suivant la qualité retenue).
2. Droits et libellés site : **inspiration** vs **réalisation** explicites si besoin.
3. Vérifier le rendu mobile (recadrage `cover` peut rogner des zones sensibles du sujet).
