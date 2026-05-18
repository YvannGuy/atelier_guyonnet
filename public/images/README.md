# Assets images — Atelier Guyonnet

Ce dossier sert à héberger les **fichiers image** de la vitrine. Les chemins publics correspondent aux fichiers sous `public/` (ex. `public/images/placeholders/hero.jpg` → URL `/images/placeholders/hero.jpg`).

## Placeholders Unsplash (temporaires)

Les fichiers suivants sont importés depuis **Unsplash**, stockés **localement** pour un rendu stable hors ligne et sans configuration de domaine distant dans Next.js. Ils sont référencés dans le code via **`lib/constants/placeholder-images.ts`** — **single source of truth** pour chemins, `alt` et rôle.

**Règle** : ce ne sont pas des chantiers Atelier Guyonnet. Libellés côté UI : inspiration / illustration / ambiance. Remplacer par des vrais médias dès que possible.

| Fichier | Chemin public | Section | ID photo Unsplash (import d’origine) |
|--------|----------------|---------|----------------------------------------|
| `hero.jpg` | `/images/placeholders/hero.jpg` | Hero | `photo-1616046229478-9901c5536a45` |
| `inspiration-dressing.jpg` | `/images/placeholders/inspiration-dressing.jpg` | Inspirations (legacy) | `photo-1631679706909-1844bbd07221` |
| `inspiration-placard-entree.jpg` | `/images/placeholders/inspiration-placard-entree.jpg` | Inspirations (legacy) | `photo-1600121848594-d8644e57abab` |
| `inspiration-bibliotheque.jpg` | `/images/placeholders/inspiration-bibliotheque.jpg` | Inspirations (legacy) | `photo-1507842217343-583bb7270b66` |
| `inspiration-meuble-tv.jpg` | `/images/placeholders/inspiration-meuble-tv.jpg` | Inspirations (legacy) | `photo-1600210492486-724fe5c67fb0` |
| `before-after-avant.jpg` | `/images/placeholders/before-after-avant.jpg` | Avant / Après | `photo-1524758631624-e2822e304c36` |
| `before-after-apres.jpg` | `/images/placeholders/before-after-apres.jpg` | Avant / Après | `photo-1586023492125-27b2c045efd7` |
| `about-atelier-detail.jpg` | `/images/placeholders/about-atelier-detail.jpg` | À propos (legacy) | `photo-1504148455328-c376907d081c` |

**Crédit** : conformément à la licence Unsplash, pensez à créditer les photographes sur les supports où c’est pertinent ; fiche image : `https://unsplash.com/photos/<id>` (certaines pages redirigent vers un slug court).

**Mise à jour** : pour remplacer un visuel, écrasez le fichier dans `public/images/placeholders/` (même nom) **ou** changez le `publicPath` / ajoutez un nouveau fichier dans `placeholder-images.ts`.

---

## Inspirations Atelier Guyonnet (rendus d’inspiration)

Visuels réalistes générés pour la marque, branchés dans **`lib/constants/placeholder-images.ts`**. Libellés UI : **visuel d’inspiration** — ne pas présenter comme réalisations clientes.

| Fichier | Chemin public | Carte section Inspirations |
|--------|----------------|----------------------------|
| `dressing.jpg` | `/images/inspirations/dressing.jpg` | Dressing toute hauteur |
| `placard-entree.jpg` | `/images/inspirations/placard-entree.jpg` | Placard d’entrée intégré |
| `bibliotheque.jpg` | `/images/inspirations/bibliotheque.jpg` | Bibliothèque murale |
| `meuble-tv.jpg` | `/images/inspirations/meuble-tv.jpg` | Meuble TV avec rangements |
| `cuisine.jpg` | `/images/inspirations/cuisine.jpg` | Cuisine sur mesure |

`/images/inspirations/cuisine.jpg` et `/images/before-after/cuisine-avant.png` sont des visuels d’inspiration générés pour illustrer une possibilité d’agencement de cuisine sur mesure. Ils ne doivent **pas** être présentés comme des réalisations clientes Atelier Guyonnet.

---

## Avant / Après (visuels d’inspiration générés)

Les images du dossier **`before-after/`** sont des visuels d’inspiration générés pour illustrer des possibilités d’aménagement. Elles ne doivent **pas** être présentées comme des réalisations clientes Atelier Guyonnet.

Référencées dans **`lib/constants/before-after-images.ts`**. Les visuels « après » réutilisent les rendus **`inspirations/`** ; les « avant » sont dans **`before-after/`**.

| Fichier | Chemin public | Comparaison |
|--------|----------------|-------------|
| `bibliotheque-avant.jpg` | `/images/before-after/bibliotheque-avant.jpg` | Bibliothèque murale |
| `dressing-avant.jpg` | `/images/before-after/dressing-avant.jpg` | Dressing toute hauteur |
| `meuble-tv-avant.jpg` | `/images/before-after/meuble-tv-avant.jpg` | Meuble TV avec rangements |
| `placard-entree-avant.jpg` | `/images/before-after/placard-entree-avant.jpg` | Placard d’entrée intégré |
| `cuisine-avant.png` | `/images/before-after/cuisine-avant.png` | Cuisine sur mesure |

Les placeholders Unsplash `before-after-avant.jpg` / `before-after-apres.jpg` (dossier `placeholders/`) ne sont plus utilisés sur la landing.

---

## À propos (visuel d’ambiance atelier)

`/images/about/artisan-atelier-decoupe-bois.png` est un visuel d’ambiance généré pour illustrer le savoir-faire artisanal et le travail du bois. Il ne doit **pas** être présenté comme une photo réelle de l’atelier ou de l’artisan Atelier Guyonnet.

| Fichier | Chemin public | Section |
|--------|----------------|---------|
| `artisan-atelier-decoupe-bois.png` | `/images/about/artisan-atelier-decoupe-bois.png` | À propos |

---

## Fichiers définitifs prévus (hors Unsplash)

Ces chemins restent la cible documentée pour les **photos maison** (non branchés comme placeholders actuels) :

| | |
|---|---|
| **Hero définitif** | `public/images/hero-atelier-guyonnet.jpg` → `/images/hero-atelier-guyonnet.jpg` |

---

## Comportement sans fichier

Les sections concernées utilisent désormais **`next/image`** avec des fichiers **présents** dans `placeholders/`. Si un fichier est retiré, le build ou le runtime peut échouer — rouvrir ce dossier ou rétablir le chemin dans les constantes.

---

## Checklist avant mise en ligne

1. Fichiers présents aux chemins attendus, **poids** raisonnable (viser moins de 300 à 500 Ko par fichier suivant la qualité retenue).
2. Droits et libellés site : **inspiration** vs **réalisation** explicites si besoin.
3. Vérifier le rendu mobile (recadrage `cover` peut rogner des zones sensibles du sujet).
