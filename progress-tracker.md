# Suivi — Atelier Guyonnet

## Phase actuelle

**Fondation SEO (phase 1)** : `robots.txt` + `sitemap.xml` (home + légal uniquement), métadonnées **title / description / canonical / Open Graph / Twitter** affinées (`app/layout.tsx`, `app/page.tsx`, pages légales), **JSON-LD** sur l’accueil (`ProfessionalService`, `Service` ×6, `FAQPage` — sans garantie d’affichage dans les IA), section **FAQ** (`#faq`) + liens header/footer, **maillage** services → devis + annonce des prochaines pages thématiques (`lib/constants/seo-pages.ts` + paragraphe dans `ServicesSection`), **alts** placeholders reformulés en *visuels d’inspiration*. **`NEXT_PUBLIC_SITE_URL`** à fixer en prod pour canonicals/JSON-LD absolus corrects.

## Objectif court terme

Publier les **3 premières pages services** (`/dressing-sur-mesure-paris`, `/placard-sur-mesure-paris`, `/rangement-sur-mesure-paris`) avec contenu unique ; puis fusionner leurs URL dans le sitemap (`getFutureSeoPaths` déjà prévu côté constantes).

## Prochaine étape

1. Déployer avec **`NEXT_PUBLIC_SITE_URL`** = URL production (Vercel).
2. Implémenter **/dressing-sur-mesure-paris** puis les deux autres services prioritaires.
3. Remplacer progressivement l’image OG / hero par un visuel maison si besoin.

## Questions ouvertes

- **Stockage fichiers** : Blob, lien cloud, ou e-mail uniquement.
- **Contenu juridique** : affiner avec un professionnel si besoin.
- **Tracking** : analytics ou non au MVP.

## Dernière livraison — Fondation SEO technique + calendrier éditorial (2026-05-16)

### Fait

- **`app/robots.ts`** : crawl autorisé, `sitemap` pointant vers `/sitemap.xml`.
- **`app/sitemap.ts`** : `/`, `/mentions-legales`, `/politique-de-confidentialite` uniquement (pas d’URL fantôme) ; commentaire pour fusion future avec `getFutureSeoPaths()`.
- **`lib/constants/site.ts`** : titre SEO accueil, **e-mail** public, `defaultOgImage`, `sameAs` vide (extensible).
- **`app/layout.tsx` + `app/page.tsx`** : template titre, OG + Twitter avec image locale, **canonical** accueil `/` ; mention robots/googleBot.
- **Mentions / politique** : **`alternates.canonical`** par route.
- **`components/seo/HomeJsonLd.tsx`** : `@graph` — `ProfessionalService` (adresse Paris/IdF sans rue ni téléphone inventés), 6 × `Service`, `FAQPage` (questions/réponses factuelles, sans promesse d’indexation IA).
- **`lib/constants/home-faq.ts`** + **`components/sections/FaqSection.tsx`** (`#faq`) : 5 questions brief ; lien vers `#devis`.
- **`lib/constants/seo-pages.ts`** : inventaire **8 services** + **12 zones** (contenus différenciés), `getFutureSeoPaths`.
- **`ServicesSection`** : paragraphe **lien interne** `#devis` + annonce pages à venir (3 premières entrées du config).
- **`Header` / `Footer`** : entrée **FAQ** ; mailto depuis `siteConfig.contactEmail`.
- **`lib/constants/placeholder-images.ts`** : alts explicites *visuel d’inspiration*, pas réalisation atelier.

### Validations

- `npm run build` : **OK** ; routes **`/robots.txt`**, **`/sitemap.xml`** générées.

### Limites

- **Aucune garantie** de rich results / citations ChatGPT, Perplexity, etc.
- **URL prod** : sans `NEXT_PUBLIC_SITE_URL`, canonicals et JSON-LD peuvent rester sur `localhost` en dev — **à définir en production**.
- **Pas de téléphone ni SIRET** dans les schémas (conforme consigne).
- Pages **seo-pages** non routées : pas de contenu dupliqué en ligne pour l’instant.

### Fichiers touchés / créés

- `app/robots.ts`, `app/sitemap.ts`, `app/layout.tsx`, `app/page.tsx`
- `app/mentions-legales/page.tsx`, `app/politique-de-confidentialite/page.tsx`
- `components/seo/HomeJsonLd.tsx`, `components/sections/FaqSection.tsx`
- `components/sections/ServicesSection.tsx`, `components/layout/Header.tsx`, `components/layout/Footer.tsx`
- `lib/constants/site.ts`, `lib/constants/home-faq.ts`, `lib/constants/seo-pages.ts`, `lib/constants/placeholder-images.ts`
- `progress-tracker.md`

### Prochaine étape notée (hors périmètre)

Créer **une par une** : `/dressing-sur-mesure-paris`, `/placard-sur-mesure-paris`, `/rangement-sur-mesure-paris`, puis étendre le **sitemap**.

---

## Dernière livraison — Formulaire épuré, slider sur image, carte OSM (2026-05-16)

### Fait

- **`QuoteFormSection`** : suppression **totale** du bloc « Photos de l’espace » (aucun fichier, aucun texte « prochainement »). Champs conservés : nom, e-mail, téléphone, ville, type, dimensions, budget, délai, message + **Envoyer ma\u00A0demande**. Correction du JSX du **`<button>`** submit (balise ouverte manquante après un retrait de bloc).
- **`BeforeAfterSlider`** : comparaison **directement sur l’image** — couche « après » avec `clip-path: inset`, ligne verticale + poignée ronde, **souris / tactile** (`setPointerCapture`, `onLostPointerCapture`), **`input type="range"` en `sr-only`** pour le **clavier** ; légende sous le bloc : *Illustration d’ambiance — pas un avant/après réel* ; pastilles **Avant** / **Après** sur l’image.
- **`ServiceAreaSection`** : remplacement du schéma abstrait par un bloc carte premium (entête *Zone d’intervention indicative*, disclaimer zone / disponibilités, rappel attribution OSM).
- **`ServiceAreaMap`** (`components/ui/`) : client Leaflet — `MapContainer`, tuiles OSM, **cercle ~40 km**, marqueur **Paris** (`L.divIcon`), `Popup` indicatif ; `import "leaflet/dist/leaflet.css"`.
- **`ServiceAreaMapDynamic`** : client + `next/dynamic(..., { ssr: false })` pour respecter Next 16 (la section reste un Server Component).
- **`app/globals.css`** : styles **Leaflet** (hauteur mobile/desktop, cercle `.ag-map-idf-zone`, marqueur `.ag-paris-marker`, attribution) ; **suppression** des anciennes règles `.quote-slider-range`.

### Validations

- `npm run build` : **OK** (Next.js 16.2.6).

### Limites

- Carte : chargement **client uniquement** ; tuiles **tierces** OpenStreetMap (pas de clé, pas de cookies ajoutés par nous) — conformité RGPD / performance selon usage réel à valider côté projet.
- Slider : le **focus clavier** arrive sur le `range` masqué (Tab depuis le groupe) ; pas d’indication visuelle de focus sur la poignée sans surcharger l’UI.
- Cercle sur la carte : **indicatif**, pas cadastre ni engagement de rayon d’intervention.

### Fichiers modifiés / créés

- `components/sections/QuoteFormSection.tsx`
- `components/ui/BeforeAfterSlider.tsx`
- `components/sections/ServiceAreaSection.tsx`
- `components/ui/ServiceAreaMap.tsx` (créé)
- `components/ui/ServiceAreaMapDynamic.tsx` (créé — contrainte Next 16)
- `app/globals.css`
- `progress-tracker.md`

### Dépendances npm (lot carte)

- `leaflet`, `react-leaflet`, devDependency `@types/leaflet`.

### Prochaine étape notée (non implémentée)

Parcours **photos** (upload ou lien) si produit ; affinage **Resend** prod ; remplacement **placeholders** visuels.

---

## Dernière livraison — UX formulaire photos, zone d’intervention, slider avant/après (2026-05-18)

### Fait

- **`QuoteFormSection`** : bloc « Photos de l’espace » — bordure fine, fond `bg-secondary/20`, texte imposé + phrase optionnelle sur l’utilité des photos ; pas de `input file`.
- **`ServiceAreaSection`** : encart **Déplacement sur rendez-vous** (Paris central, projet, priorité agencement, confirmation après premier échange) ; 3 lignes Paris intra / petite couronne / IdF ; tags départements conservés ; figure schéma cercles concentriques (pas carte).
- **`BeforeAfterSlider`** (`components/ui/`, client) : `useState` + `clip-path` sur la couche « après », ligne + poignée synchronisées, `input type="range"` clavier/souris/tactile, libellés Avant / Après, mention « Illustration d’ambiance… ».
- **`BeforeAfterSection`** (Server) : compose le slider ; images depuis `placeholderImages` ; disclaimer renforcé dans l’intro.
- **`app/globals.css`** : styles `.quote-slider-range` (tokens `--ag-*`).

### Validations

- `npm run build` : **OK**.

### Limites

- Slider « après » : `alt` vide sur l’image découpée ; descriptif dans `sr-only` + alt « avant ».
- Schéma zone : indicatif, non géolocalisé.

### Fichiers modifiés / créés

- `components/sections/QuoteFormSection.tsx`
- `components/sections/ServiceAreaSection.tsx`
- `components/sections/BeforeAfterSection.tsx`
- `components/ui/BeforeAfterSlider.tsx` (créé)
- `app/globals.css`
- `progress-tracker.md`

### Prochaine étape notée (non implémentée)

**Photos** (upload ou workflow e-mail) et/ou **finalisation légale** selon priorité produit.

---

## Dernière livraison — Formulaire devis + Resend (2026-05-18)

### Fait

- **`npm install resend`**.
- **`.env.example`** : `RESEND_API_KEY`, `RESEND_FROM_EMAIL` (optionnel).
- **`lib/constants/quote-form.ts`** : listes déroulantes partagées avec la validation serveur.
- **`app/actions/submit-quote.ts`** : validation des champs, corps d’e-mail texte, `replyTo` = e-mail du client, sujet demandé, destinataire `contact@atelierguyonnet.com`, gestion erreur Resend / config manquante.
- **`QuoteFormSection`** : `useActionState`, message succès / erreur (`role="status"` / `role="alert"`), bouton « Envoi en cours… », champs désactivés pendant l’envoi, zone photos remplacée par le texte imposé.
- **`app/politique-de-confidentialite/page.tsx`** : formulaire, Resend, absence de stockage BDD — ajustements honnêtes (indicatif, à valider juridiquement).

### Validations

- `npm run build` : **OK**.

### Limites

- **Expéditeur** : sans `RESEND_FROM_EMAIL` vérifié, utilisation de l’adresse de test Resend (`onboarding@resend.dev`) — à adapter avant production.
- **Pas de pièces jointes** ; pas de anti-spam avancé (rate limit, honeypot) — évolutions possibles.
- **Politique de confidentialité** : texte mis à jour de bonne foi, **non substitut** à un avis juridique.

### Fichiers touchés

- `package.json`, `package-lock.json`
- `.env.example`
- `lib/constants/quote-form.ts`
- `app/actions/submit-quote.ts`
- `components/sections/QuoteFormSection.tsx`
- `app/politique-de-confidentialite/page.tsx`
- `progress-tracker.md`

### Prochaine étape notée (non implémentée)

**Upload photos** ou parcours d’envoi sécurisé des fichiers + renforcement anti-abus.

---

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
| 2026-05-16 | **SEO** fondation (robots, sitemap, JSON-LD, FAQ, seo-pages.ts), build OK |
| 2026-05-16 | **UX** formulaire sans photos + slider sur image + carte Leaflet OSM, build OK |
| 2026-05-18 | **Formulaire devis** + Resend (Server Action), build OK |
| 2026-05-18 | **UX** photos + zone intervention + slider avant/après, build OK |
