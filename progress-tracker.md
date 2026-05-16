# Suivi — Atelier Guyonnet

## Phase actuelle

**Placeholders visuels Unsplash (fichiers locaux)** : images dans `public/images/placeholders/`, métadonnées centralisées dans `lib/constants/placeholder-images.ts`, rendu via **`next/image`** (hero, inspirations, avant/après, à propos). Aucun backend ni nouvelle dépendance ; libellés honnêtes « inspiration / illustration ».

## Objectif court terme

**Remplacer** ces visuels par des médias Atelier Guyonnet ; **finaliser** le juridique ; **brancher** le formulaire.

## Prochaine étape

1. **Swap assets** : nouveaux fichiers dans `placeholders/` ou chemins définitifs via `placeholder-images.ts`.
2. Compléter **mentions / politique** et coordonnées réelles.
3. **Envoi formulaire** : Server Action ou API + email (+ mise à jour politique).

## Questions ouvertes

- **Transport du formulaire** : Server Action + Resend (ou autre) — à trancher.
- **Stockage fichiers** : Blob, lien cloud, ou pas d’upload au MVP.
- **Contenu juridique** : finaliser mentions, politique, coordonnées téléphoniques réelles.
- **Tracking** : analytics ou non au MVP.

## Dernière livraison — Placeholders Unsplash locaux (2026-05-16)

### Fait

- **`lib/constants/placeholder-images.ts`** : clés, `publicPath`, `alt`, `role`.
- **`public/images/placeholders/`** : 8 JPG (sources Unsplash, import local).
- **`HeroSection`**, **`InspirationsSection`**, **`BeforeAfterSection`**, **`AboutSection`** : `next/image` + overlays — pas d’images ajoutées aux autres sections (sobriété).
- **`public/images/README.md`** : tableau placeholders + IDs Unsplash + rappel chemins définitifs.

### Stratégie

Fichiers **locaux** (pas de `remotePatterns` / pas de chargement runtime Unsplash).

### Fichiers touchés

- `lib/constants/placeholder-images.ts` (créé)
- `public/images/placeholders/*.jpg` (×8)
- `components/sections/HeroSection.tsx`, `InspirationsSection.tsx`, `BeforeAfterSection.tsx`, `AboutSection.tsx`
- `public/images/README.md`, `progress-tracker.md`

### Validations

- `npm run build` : **OK**.

### Limites

- Visuels **Unsplash** — crédit photographe selon usages ; pas de réalisations AG.
- **Avant/après** : deux photos distinctes, présentées comme **synthèse illustrative**.
- **QuoteFormSection** volontairement sans visuel additionnel.

### Prochaine étape notée (non implémentée)

**Brancher le formulaire** ; remplacer les placeholders par des assets maison.

---

## Dernière livraison — Pages légales (2026-05-16)

### Fait

- `app/mentions-legales/page.tsx` : **H1** unique, sections éditeur / publication / hébergement / propriété intellectuelle ; mentions « indicatif » et champs **À compléter** ; lien vers politique ; en-tête léger (logo texte + accueil) + **Footer** réutilisé.
- `app/politique-de-confidentialite/page.tsx` : **H1** unique, responsable, données collectées (état honnête du **formulaire non branché**), finalités, conservation, destinataires, droits RGPD, cookies ; lien CNIL ; lien vers mentions ; même en-tête + **Footer**.

### Fichiers créés

- `app/mentions-legales/page.tsx`
- `app/politique-de-confidentialite/page.tsx`
- `progress-tracker.md` (ce fichier)

### Validations effectuées

- `npm run build` : **OK** — routes statiques `/mentions-legales`, `/politique-de-confidentialite`.

### Limites restantes

- Texte **non revu par un juriste** ; identités légales / hébergeur / publication à compléter avant prod.
- **Formulaire** toujours non branché ; politique à mettre à jour lors du branchement et de tout outil analytique.

### Note « next step » (hors périmètre immédiat)

**Finaliser le contenu juridique** et brancher le formulaire avec mise à jour conjointe de la politique de confidentialité.

---

## Dernière livraison — Préparation visuels & README images (2026-05-16)

### Fait

- **Vérification des chemins** (alignés avec le code) :
  - `/images/hero-atelier-guyonnet.jpg` — `HeroSection.tsx`
  - `/images/inspirations/dressing.jpg`
  - `/images/inspirations/placard-entree.jpg`
  - `/images/inspirations/bibliotheque.jpg`
  - `/images/inspirations/meuble-tv.jpg` — `InspirationsSection.tsx`
- **`public/images/README.md`** créé : rôle de chaque fichier, format JPG optimisé, dimensions recommandées (hero **2400×1600**, inspirations **1600×1200**), style visuel attendu, consignes (pas de texte / logos / personnes reconnaissables sur les inspirations), **mention explicite** de ne pas présenter les visuels d’inspiration comme des réalisations clientes sans accord.
- **Absence d’images** : pas de casse du rendu — couches `background-image` optionnelles au-dessus de dégradés ; pas d’`Image` Next obligeant un fichier présent.
- **Aucune** image placeholder ajoutée au repo ; pas de nouvelle dépendance ; architecture inchangée.

### Fichiers modifiés / créés (ce lot)

- `public/images/README.md` (créé)
- `progress-tracker.md` (ce fichier)

### Validations effectuées

- `npm run build` : **OK** (Next.js 16.2.6).

### Limites restantes

- Fichiers JPG **encore absents** du dépôt : le site s’affiche avec dégradés uniquement sur hero / inspirations jusqu’à remplissage.
- **Formulaire** non branché ; **upload** décoratif ; **mentions / politique** : routes non créées (404).
- **À propos** et **avant-après** : toujours placeholders CSS (hors périmètre fichiers listés par le user).

### Note « next step » (non implémentée ici)

**Créer les pages légales minimales** : `/mentions-legales` et `/politique-de-confidentialite`.

---

## Dernière livraison — Polish landing (2026-05-16)

### Ce qui a été poli

- **Ancres / navigation** : `scroll-margin-top` sur `main > section[id]` pour compenser le header fixe ; scroll doux sauf `prefers-reduced-motion` ; `overflow-x: clip` sur `html` pour limiter le débordement horizontal.
- **Header** : fond semi-transparent un peu plus lisible sur le hero sombre (`bg-primary/35`) ; CTAs et liens sans soulignement par défaut (patterns existants conservés).
- **Menu mobile** : zones de touche plus confortables sur les liens (`py-4`).
- **Hero** : hauteur réduite sur petit mobile (`min-h` adaptatif), overlay un peu plus équilibré, CTA avec hauteur minimale et `touch-manipulation`, hiérarchie / réassurances clarifiées.
- **Sections & grilles** : `min-w-0` sur colonnes et cartes sensibles au flex/grid (dont formulaire, inspirations, zone d’intervention, offre lancement, à propos, services, méthode) pour éviter les débordements ; espacements et hovers de cartes affinés où nécessaire (ex. bordure au survol plus nette sur les services).
- **Processus (méthode)** : grilles moins compressées sur grand écran, typographie d’étapes harmonisée.
- **Formulaire** : champs avec largeur contrôlée, focus visible (tokens), bouton bien dimensionné ; libellé **« Envoyer ma demande »** avec espace insécable (`\u00A0`) ; microcopy inchangée stratégiquement (upload toujours explicitement non branché).
- **Footer** : respiration verticale, liens avec zone cliquable confortable, alignement avec la DA sombre.
- **`main`** : `min-w-0 flex-1` pour stabiliser le flux flex sous le header.

### Corrections obligatoires (checklist)

1. **Bouton formulaire** : texte corrigé / confirmé — *Envoyer ma demande* (pas « mdemande »).
2. **Ancres** : `id` présents et alignés avec les liens — `#services`, `#inspirations`, `#methode`, `#apropos`, `#devis`.
3. **CTA** : tous pointent vers `#devis` ou `#inspirations` (sections existantes).

### Fichiers modifiés (passe polish)

- `app/globals.css`
- `app/page.tsx`
- `components/layout/Header.tsx`
- `components/layout/MobileNav.tsx`
- `components/layout/Footer.tsx`
- `components/sections/HeroSection.tsx`
- `components/sections/ServicesSection.tsx`
- `components/sections/InspirationsSection.tsx`
- `components/sections/ProcessSection.tsx`
- `components/sections/AboutSection.tsx`
- `components/sections/LaunchOfferSection.tsx`
- `components/sections/ServiceAreaSection.tsx`
- `components/sections/QuoteFormSection.tsx`

### Validations effectuées

- `npm run build` : **OK** (Next.js 16.2.6).
- **Aucune** Server Action, route API, ni nouvelle dépendance npm.
- Un seul **H1** (hero) ; hiérarchie **H2 / H3** conservée propre par section.

### Limites restantes

- Soumission formulaire : **aucune persistance** ni notification — expérience limitée au `preventDefault` + validation HTML5.
- **Mentions légales / politique** : routes **créées** — contenu indicatif, **à compléter** avant mise en prod.
- **Upload** : UI seule ; pas de traitement ni stockage.
- **Visuels** : nombreux éléments encore **placeholder** (à remplacer par de vrais assets après validation).

### Note « next step » (non implémentée ici — brief produit)

Après validation visuelle : **remplacer progressivement les placeholders visuels par de vrais assets ou rendus d’inspiration.**

---

## Livraison antérieure — QuoteFormSection & Footer (2026-05-16)

### Fait

- `components/sections/QuoteFormSection.tsx` : **id="devis"**, **H2** *Parlez-nous de votre projet*, intro du brief ; **layout 2 colonnes** `lg` (gauche : rappels, étude personnalisée, coordonnées placeholder ; droite : formulaire) ; champs **nom, email, téléphone (req.), ville, type, dimensions, budget, délai, message, fichiers** ; bouton *Envoyer ma demande* ; microcopy rassurante ; champ fichier **UI seule** avec mention que l’envoi serveur viendra plus tard ; **`use client`** uniquement pour `preventDefault` + commentaire d’intégration future (Server Action / API / stockage fichiers).
- `components/layout/Footer.tsx` : fond **`bg-primary`**, typo sobre, liens **sans soulignement**, **liens rapides** alignés header, **contact** (email + téléphone *À compléter*), **mentions / politique**, copyright **© 2026**.
- `app/page.tsx` : **QuoteFormSection** dans `<main>`, **Footer** après `</main>`.

### Fichiers modifiés / créés (ce lot historique)

- `components/sections/QuoteFormSection.tsx` (créé)
- `components/layout/Footer.tsx` (créé)
- `app/page.tsx` (modifié)
- `progress-tracker.md` (ce fichier)

## Journal (à mettre à jour au fil de l’eau)

| Date       | Fait |
|------------|------|
| 2026-05-16 | Rédaction des fichiers de contexte produit / archi / UI / IA |
| 2026-05-16 | Scaffold Next.js, tokens CSS + `@theme`, fonts, metadata FR, arborescence `components/` / `lib/` |
| 2026-05-16 | Implémentation **Header** + **HeroSection**, tokens hero, build OK |
| 2026-05-16 | **ProblemSection** + **ServicesSection**, build OK |
| 2026-05-16 | **InspirationsSection** + **BeforeAfterSection**, build OK |
| 2026-05-16 | **ProcessSection** + **AboutSection**, build OK |
| 2026-05-16 | **LaunchOfferSection** + **ServiceAreaSection**, build OK |
| 2026-05-16 | **QuoteFormSection** (UI) + **Footer**, build OK |
| 2026-05-16 | **Polish** global landing (responsive, ancres, cohérence), build OK |
| 2026-05-16 | **README** `public/images/` + vérif chemins visuels, build OK |
| 2026-05-16 | **Pages légales** `/mentions-legales` + `/politique-de-confidentialite`, build OK |
| 2026-05-16 | **Placeholders Unsplash** locaux + `placeholder-images.ts` + `next/image`, build OK |
