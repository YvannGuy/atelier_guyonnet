# Suivi — Atelier Guyonnet

## Phase actuelle

**Pages services SEO** : **six** routes + **hub** **`/agencement-sur-mesure-ile-de-france`** + **six pages zones**. **Formulaire devis** : envoi e-mail via **Resend** (Server Action, sans stockage ni upload). **Sitemap** : home + 6 services + hub + 6 zones + légal.

## Objectif court terme

**Google Business Profile** et **déploiement Vercel** (`NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `QUOTE_FORM_RECIPIENT` en prod).

## Prochaine étape

1. Configurer **Resend** en production (domaine vérifié, `RESEND_FROM_EMAIL` si besoin).
2. Déployer sur **Vercel** avec les variables d’environnement.
3. Préparer **Google Business Profile**.

## Questions ouvertes

- **Stockage fichiers** : Blob, lien cloud, ou e-mail uniquement (upload photo non géré au MVP).
- **Contenu juridique** : affiner avec un professionnel si besoin.
- **Tracking** : analytics ou non au MVP.

## Dernière livraison — Formulaire devis Resend (2026-05-16)

### Fait

- **`app/actions/send-quote-request.ts`** : Server Action `sendQuoteRequest` — validation serveur légère (nom, email, téléphone, type, budget, délai, message), envoi Resend texte, `replyTo` client, destinataire via **`QUOTE_FORM_RECIPIENT`** (fallback `siteConfig.contactEmail`), sujet « Nouvelle demande de devis — Atelier Guyonnet », clé **`RESEND_API_KEY`** jamais exposée côté client.
- **`components/sections/QuoteFormSection.tsx`** : branché sur `useActionState`, états **envoi en cours** / **succès** / **erreur**, bouton désactivé pendant l’envoi, messages imposés (succès 24–48h ouvrées ; erreur générique avec e-mail de contact).
- **`.env.example`** : `RESEND_API_KEY=`, `QUOTE_FORM_RECIPIENT=contact@atelierguyonnet.com`.
- **Package** : `resend` déjà présent dans `package.json`.

### Validations

- `npm run build` : **OK**.
- Pas de DB, pas d’upload photo, pas de stockage des demandes.

### Limites

- **`RESEND_FROM_EMAIL`** optionnel (non documenté dans `.env.example`) — en prod, domaine Resend à vérifier ; fallback `onboarding@resend.dev` pour dev.
- Pas de rate limiting / captcha sur le formulaire.

### Fichiers créés / modifiés

- `app/actions/send-quote-request.ts` (remplace `submit-quote.ts`)
- `components/sections/QuoteFormSection.tsx`, `.env.example`, `progress-tracker.md`

### Prochaine étape recommandée

**Déploiement Vercel** + **Google Business Profile** ; pause pages zones.

---

## Dernière livraison — Page zone `/zones/vincennes` (2026-05-16)

### Fait

- **`app/zones/vincennes/page.tsx`** : hero (badge Vincennes, H1 brief, sous-texte *appartements et espaces familiaux*), angle **résidentiel, élégant, fonctionnel, proche Paris Est**, 6 problèmes vincennois, grille **6 fiches Paris** + phrase imposée sur l’étude à Vincennes, **secteurs proches** (10 tags brief), méthode 5 étapes (titres brief, rédaction distincte), FAQ ×5, **Services utiles**, maillage **`/`**, hub, Paris, Boulogne, Neuilly, Levallois, Issy, 6 services, **`/#services`**, **`/#devis`**.
- **`components/seo/ZoneVincennesJsonLd.tsx`** : `BreadcrumbList`, `Service` (Vincennes), `FAQPage`.
- **`app/sitemap.ts`** : **`/zones/vincennes`** seule nouvelle URL zone.
- **`lib/constants/seo-pages.ts`** : Vincennes — title & meta brief, **`canonicalPath` `/zones/vincennes`**.
- **`app/agencement-sur-mesure-ile-de-france/page.tsx`** : **sixième** lien local (Vincennes), conservation Paris, Boulogne, Neuilly, Levallois, Issy.
- **Pages zones existantes** (Paris, Boulogne, Neuilly, Levallois, Issy) : liens sobres vers Vincennes.

### Validations

- `npm run build` : **OK** ; route **`/zones/vincennes`**.

### Limites

- Pas d’autres **`/zones/*`** ; pas de formulaire sur la page zone ; pas d’URLs service « Vincennes ».

### Fichiers créés / modifiés

- `app/zones/vincennes/page.tsx`, `components/seo/ZoneVincennesJsonLd.tsx`
- `app/sitemap.ts`, `lib/constants/seo-pages.ts`, `app/agencement-sur-mesure-ile-de-france/page.tsx`, `app/zones/paris/page.tsx`, `app/zones/boulogne-billancourt/page.tsx`, `app/zones/neuilly-sur-seine/page.tsx`, `app/zones/levallois-perret/page.tsx`, `app/zones/issy-les-moulineaux/page.tsx`, `progress-tracker.md`

### Prochaine étape recommandée

**Pause pages zones** → **formulaire Resend** + **Google Business Profile** + **déploiement Vercel**.

---

## Dernière livraison — Page zone `/zones/issy-les-moulineaux` (2026-05-16)

### Fait

- **`app/zones/issy-les-moulineaux/page.tsx`** : hero (badge Issy, H1 brief, sous-texte *modernes et familiaux*), angle **moderne, familial, fonctionnel**, 6 problèmes isséens, **6 fiches Paris** + phrase imposée sur l’étude à Issy, **secteurs proches** (10 tags brief), méthode 5 étapes (titres brief, rédaction distincte), FAQ ×5, **Services utiles**, maillage **`/`**, hub, Paris, Boulogne, Neuilly, Levallois, 6 services, **`/#services`**, **`/#devis`**.
- **`components/seo/ZoneIssyLesMoulineauxJsonLd.tsx`** : `BreadcrumbList`, `Service` (Issy-les-Moulineaux), `FAQPage`.
- **`app/sitemap.ts`** : **`/zones/issy-les-moulineaux`** seule nouvelle URL zone.
- **`lib/constants/seo-pages.ts`** : Issy — title & meta brief, **`canonicalPath` `/zones/issy-les-moulineaux`**.
- **`app/agencement-sur-mesure-ile-de-france/page.tsx`** : **cinquième** lien local (Issy), conservation Paris, Boulogne, Neuilly, Levallois.
- **`app/zones/paris/page.tsx`** : **Autres zones** → … Levallois, **Issy**.
- **`app/zones/boulogne-billancourt/page.tsx`**, **`app/zones/neuilly-sur-seine/page.tsx`**, **`app/zones/levallois-perret/page.tsx`** : liens sobres vers Issy (hero, **Services utiles**, CTA selon page).

### Validations

- `npm run build` : **OK** ; route **`/zones/issy-les-moulineaux`**.

### Limites

- Pas d’autres **`/zones/*`** ; pas de formulaire sur la page zone ; pas d’URLs service « Issy ».

### Fichiers créés / modifiés

- `app/zones/issy-les-moulineaux/page.tsx`, `components/seo/ZoneIssyLesMoulineauxJsonLd.tsx`
- `app/sitemap.ts`, `lib/constants/seo-pages.ts`, `app/agencement-sur-mesure-ile-de-france/page.tsx`, `app/zones/paris/page.tsx`, `app/zones/boulogne-billancourt/page.tsx`, `app/zones/neuilly-sur-seine/page.tsx`, `app/zones/levallois-perret/page.tsx`, `progress-tracker.md`

### Prochaine étape recommandée

**`/zones/vincennes`**.

---

## Dernière livraison — Page zone `/zones/levallois-perret` (2026-05-16)

### Fait

- **`app/zones/levallois-perret/page.tsx`** : hero (badge Levallois, H1 brief, sous-texte *appartements urbains*, CTAs **`/#devis`** / **`/#services`**), angle **urbain, compact, fonctionnel**, 6 problèmes levalloisiens, grille **6 fiches Paris** + phrase imposée sur l’étude à Levallois, **secteurs proches** (10 tags brief), méthode 5 étapes (titres brief, rédaction distincte), FAQ ×5, **Services utiles**, maillage **`/`**, hub, Paris, Boulogne, Neuilly, 6 services, **`/#services`**, **`/#devis`**.
- **`components/seo/ZoneLevalloisPerretJsonLd.tsx`** : `BreadcrumbList`, `Service` (Levallois-Perret), `FAQPage`.
- **`app/sitemap.ts`** : **`/zones/levallois-perret`** seule nouvelle URL zone.
- **`lib/constants/seo-pages.ts`** : Levallois — title & meta brief, **`canonicalPath` `/zones/levallois-perret`** (retrait ancienne promesse « 24–48 h »).
- **`app/agencement-sur-mesure-ile-de-france/page.tsx`** : **quatrième** lien local (Levallois), conservation Paris, Boulogne, Neuilly.
- **`app/zones/paris/page.tsx`** : **Autres zones** → Boulogne, Neuilly, Levallois.
- **`app/zones/boulogne-billancourt/page.tsx`** et **`app/zones/neuilly-sur-seine/page.tsx`** : liens sobres vers Levallois (hero, **Services utiles**, CTA selon page).

### Validations

- `npm run build` : **OK** ; route **`/zones/levallois-perret`**.

### Limites

- Pas d’autres **`/zones/*`** ; pas de formulaire sur la page zone ; pas d’URLs service « Levallois ».

### Fichiers créés / modifiés

- `app/zones/levallois-perret/page.tsx`, `components/seo/ZoneLevalloisPerretJsonLd.tsx`
- `app/sitemap.ts`, `lib/constants/seo-pages.ts`, `app/agencement-sur-mesure-ile-de-france/page.tsx`, `app/zones/paris/page.tsx`, `app/zones/boulogne-billancourt/page.tsx`, `app/zones/neuilly-sur-seine/page.tsx`, `progress-tracker.md`

### Prochaine étape recommandée

**`/zones/issy-les-moulineaux`**.

---

## Dernière livraison — Page zone `/zones/neuilly-sur-seine` (2026-05-16)

### Fait

- **`app/zones/boulogne-billancourt/page.tsx`** : hero local (badge, H1 brief, CTAs **`/#devis`** / **`/#services`**), angle confort / famille / programmes mixtes, 6 problèmes spécifiques, grille **6 prestations** (liens **fiches Paris** existantes + phrase sur l’étude à Boulogne), section **secteurs proches** (tags demandés + mention prudente déplacements), méthode 5 étapes (formulation distincte de Paris), FAQ ×5, **Services utiles**, maillage vers **`/`**, hub IdF, **`/zones/paris`**, 6 services, **`/#services`**, **`/#devis`**.
- **`components/seo/ZoneBoulogneBillancourtJsonLd.tsx`** : `BreadcrumbList`, `Service` (Boulogne-Billancourt), `FAQPage`.
- **`app/sitemap.ts`** : **`/zones/boulogne-billancourt`** (seule nouvelle URL zone).
- **`lib/constants/seo-pages.ts`** : Boulogne — title & meta brief, **`canonicalPath` `/zones/boulogne-billancourt`**.
- **`app/agencement-sur-mesure-ile-de-france/page.tsx`** : liens **Paris** + **Boulogne-Billancourt** (conservation Paris).
- **`app/zones/paris/page.tsx`** : bloc **Autres zones étudiées** → lien unique Boulogne.

### Validations

- `npm run build` : **OK** ; route **`/zones/boulogne-billancourt`**.

### Limites

- Pas d’autres **`/zones/*`** ; pas de formulaire sur la page zone ; pas de fiches service « Boulogne » dédiées en URL.

### Fichiers créés / modifiés

- `app/zones/boulogne-billancourt/page.tsx`, `components/seo/ZoneBoulogneBillancourtJsonLd.tsx`
- `app/sitemap.ts`, `lib/constants/seo-pages.ts`, `app/agencement-sur-mesure-ile-de-france/page.tsx`, `app/zones/paris/page.tsx`, `progress-tracker.md`

### Prochaine étape recommandée

**`/zones/neuilly-sur-seine`**.

---

## Dernière livraison — Page zone `/zones/paris` (2026-05-16)

### Fait

- **`app/zones/paris/page.tsx`** : hero local (H1 *Agencement sur mesure à Paris*, badge Paris, CTA **`/#devis`** + **Voir les services** → **`/#services`**), angle *centimètre près*, 6 problèmes fréquents, grille **services** avec les **6 URLs Paris** existantes, tags **20 arrondissements**, phrases prudentes sur les déplacements, méthode en 5 étapes, FAQ ×5, bloc **Services utiles**, CTA final, maillage vers **`/`**, hub IdF, services + **`/#devis`** / **`/#services`**.
- **Metadata** (via `seo-pages`) : *Agencement sur mesure Paris | Atelier Guyonnet*, description brief, canonical **`/zones/paris`**, OG/Twitter alignés sur `siteConfig.defaultOgImage`.
- **`components/seo/ZoneParisJsonLd.tsx`** : `BreadcrumbList` (accueil → IdF → Paris), `Service` (zone Paris, `provider` → `/#business`), `FAQPage` — pas d’avis, prix fixes, téléphone ni adresse complète inventés.
- **`app/sitemap.ts`** : **`/zones/paris`** uniquement (aucune autre ville).
- **`lib/constants/seo-pages.ts`** : entrée **Paris** — `canonicalPath` **`/zones/paris`**, title & meta alignés brief.
- **`app/agencement-sur-mesure-ile-de-france/page.tsx`** : lien sobre vers **`/zones/paris`** dans la section zone (une seule page ville, pas d’autres liens zones).

### Validations

- `npm run build` : **OK** ; route **`/zones/paris`**.

### Limites

- Pas d’autres pages **`/zones/*`** ; pas de formulaire embarqué (CTA vers **`/#devis`**). Pas de lien depuis cette livraison vers des futures villes non publiées.

### Fichiers créés / modifiés

- `app/zones/paris/page.tsx`, `components/seo/ZoneParisJsonLd.tsx`
- `app/sitemap.ts`, `lib/constants/seo-pages.ts`, `app/agencement-sur-mesure-ile-de-france/page.tsx`, `progress-tracker.md`

### Prochaine étape recommandée

**`/zones/boulogne-billancourt`**.

---

## Dernière livraison — Hub régional `/agencement-sur-mesure-ile-de-france` (2026-05-16)

### Fait

- **`app/agencement-sur-mesure-ile-de-france/page.tsx`** : hero hub (H1 brief, badge Paris & IdF, CTA **`/#devis`** + **Voir les services** → **`/#services`**), intro usages, 6 besoins IdF, grille **solutions** vers les 6 pages Paris existantes, 4 bénéfices sur-mesure, zone Paris + 8 départements + phrase prudente sur les déplacements, méthode 5 étapes, FAQ ×5, bloc **Pages services**, CTA final **`/#devis`**, liens utiles (`/`, services, `/#inspirations`).
- **Metadata** : *Agencement sur mesure Île-de-France | Atelier Guyonnet* (`title.absolute`), description brief, canonical **`/agencement-sur-mesure-ile-de-france`**, OG/Twitter alignés sur `siteConfig.defaultOgImage`.
- **`components/seo/AgencementSurMesureIleDeFranceJsonLd.tsx`** : `BreadcrumbList`, `Service`, `FAQPage` (pas d’avis, prix fixes, téléphone ni adresse complète inventés).
- **`app/sitemap.ts`** : entrée hub (priorité 0,85).
- **`lib/constants/seo-pages.ts`** : fiche `agencement-sur-mesure-ile-de-france` alignée (title, meta, secondaryKeywords du brief).
- **`components/sections/ServicesSection.tsx`** : lien **agencement sur mesure en Île-de-France** vers le hub.

### Validations

- `npm run build` : **OK** ; route **`/agencement-sur-mesure-ile-de-france`**.

### Limites

- Pas de pages ville ni **`/menuisier-agencement-paris`** ; pas de formulaire embarqué sur le hub (CTA vers **`/#devis`** sur l’accueil).

### Fichiers créés / modifiés

- `app/agencement-sur-mesure-ile-de-france/page.tsx`, `components/seo/AgencementSurMesureIleDeFranceJsonLd.tsx`
- `app/sitemap.ts`, `lib/constants/seo-pages.ts`, `components/sections/ServicesSection.tsx`, `progress-tracker.md`

### Prochaine étape recommandée

**Créer les premières pages zones prioritaires** (villes / zones dans `seo-pages.ts`), avec maillage depuis le hub sans URL fantôme.

---

## Dernière livraison — Page service `/optimisation-petit-appartement-paris` (2026-05-16)

### Fait

- **`app/optimisation-petit-appartement-paris/page.tsx`** : hero (H1 brief), enjeu petit espace, 6 zones, 6 solutions combinables, 4 bénéfices sur-mesure, méthode 5 étapes globale, zone Paris–IdF + **`/#devis`**, FAQ ×5 (devis / premier cadrage via formulaire, pas de prix fixe), bloc **Autres solutions** → rangement, placard, meuble TV, bibliothèque, CTA + liens utiles (dont dressing).
- **Metadata** : *Optimisation petit appartement Paris | Atelier Guyonnet* (`title.absolute`), canonical **`/optimisation-petit-appartement-paris`**.
- **`components/seo/OptimisationPetitAppartementParisJsonLd.tsx`** : `BreadcrumbList`, `Service`, `FAQPage`.
- **`app/sitemap.ts`**, **`seo-pages.ts`**, **`ServicesSection.tsx`** (6ᵉ lien + titre « Optimisation de studio » cliquable).

### Validations

- `npm run build` : **OK** ; route **`/optimisation-petit-appartement-paris`**.

### Limites

- Pas de formulaire embarqué sur la page service ; pas de prix chiffrés ni portfolio inventé.

### Fichiers créés / modifiés

- `app/optimisation-petit-appartement-paris/page.tsx`, `components/seo/OptimisationPetitAppartementParisJsonLd.tsx`
- `app/sitemap.ts`, `lib/constants/seo-pages.ts`, `components/sections/ServicesSection.tsx`, `progress-tracker.md`

### Prochaine étape recommandée

**`/agencement-sur-mesure-ile-de-france`** ou **pages zones** prioritaires.

---

## Dernière livraison — Page service `/meuble-tv-sur-mesure-paris` (2026-05-16)

### Fait

- **`app/meuble-tv-sur-mesure-paris/page.tsx`** : hero (H1 brief), section salon « harmonieux / organisé », 6 types (mural intégré, bas, suspendu, fermé, niches, combiné biblio/étagères), 4 bénéfices (câbles, mur, rangement, style), méthode 5 étapes dédiée, zone Paris–IdF + **`/#devis`**, FAQ ×5 (prix prudents), bloc **Autres solutions** → bibliothèque, rangement, placard, maillage + dressing dans le CTA final.
- **Metadata** : *Meuble TV sur mesure Paris | Atelier Guyonnet* (`title.absolute`), canonical **`/meuble-tv-sur-mesure-paris`**.
- **`components/seo/MeubleTvSurMesureParisJsonLd.tsx`** : `BreadcrumbList`, `Service`, `FAQPage`.
- **`app/sitemap.ts`**, **`seo-pages.ts`**, **`ServicesSection.tsx`** mis à jour.

### Validations

- `npm run build` : **OK** ; route **`/meuble-tv-sur-mesure-paris`**.

### Limites

- Pas de formulaire embarqué sur la page service ; pas de prix chiffrés ni portfolio inventé.

### Fichiers créés / modifiés

- `app/meuble-tv-sur-mesure-paris/page.tsx`, `components/seo/MeubleTvSurMesureParisJsonLd.tsx`
- `app/sitemap.ts`, `lib/constants/seo-pages.ts`, `components/sections/ServicesSection.tsx`, `progress-tracker.md`

### Prochaine étape recommandée (historique)

**`/optimisation-petit-appartement-paris`** — réalisée ; suite : **`/agencement-sur-mesure-ile-de-france`** ou pages zones.

---

## Dernière livraison — Page service `/bibliotheque-sur-mesure-paris` (2026-05-16)

### Fait

- **`app/bibliotheque-sur-mesure-paris/page.tsx`** : hero (H1 brief), section usage « mur espace de vie », 6 types de bibliothèques (murale, niches, fermé, bureau, salon + bas, angle / pente), 4 bénéfices spécifiques, méthode 5 étapes dédiée, zone Paris–IdF avec lien **`/#devis`**, FAQ ×5 (prix prudents), bloc **Autres solutions** → dressing, placard, rangement, CTA **`/#devis`** + maillage vers `/`, `/#services`, `/#inspirations`, `/#methode`, `/#devis`.
- **Metadata** : *Bibliothèque sur mesure Paris | Atelier Guyonnet* (`title.absolute`), description brief, canonical **`/bibliotheque-sur-mesure-paris`**, OG/Twitter alignés sur `siteConfig.defaultOgImage`.
- **`components/seo/BibliothequeSurMesureParisJsonLd.tsx`** : `BreadcrumbList`, `Service`, `FAQPage`.
- **`app/sitemap.ts`** : **`/bibliotheque-sur-mesure-paris`** (priorité 0,85).
- **`lib/constants/seo-pages.ts`** : fiche bibliothèque alignée (title, meta, secondaires élargis).
- **`components/sections/ServicesSection.tsx`** : lien **Bibliothèque sur mesure à Paris** ; pages à venir limitées à meuble TV et optimisation studio.

### Validations

- `npm run build` : **OK** ; route **`/bibliotheque-sur-mesure-paris`**.

### Limites

- Pas de formulaire embarqué sur la page service ; pas de prix chiffrés ni portfolio inventé.

### Fichiers créés / modifiés

- `app/bibliotheque-sur-mesure-paris/page.tsx`, `components/seo/BibliothequeSurMesureParisJsonLd.tsx`
- `app/sitemap.ts`, `lib/constants/seo-pages.ts`, `components/sections/ServicesSection.tsx`, `progress-tracker.md`

### Prochaine étape recommandée (historique)

**`/meuble-tv-sur-mesure-paris`** — réalisée ; **`/optimisation-petit-appartement-paris`** — réalisée ; suite : **`/agencement-sur-mesure-ile-de-france`** ou pages zones.

---

## Dernière livraison — Page service `/rangement-sur-mesure-paris` (2026-05-16)

### Fait

- **`app/rangement-sur-mesure-paris/page.tsx`** : hero (H1 brief), problème « espaces mal exploités », 6 espaces à optimiser, 6 solutions globales (angle aménagement, sans recopier la page placard), 4 bénéfices sur-mesure, méthode 5 étapes dédiée, zone Paris–IdF avec lien **`/#devis`**, FAQ ×5 (prix prudents, pas de tarif fixe), CTA **`/#devis`**, maillage vers `/`, dressing, placard, `/#services`, `/#inspirations`, bloc **Autres solutions** → dressing + placard.
- **Metadata** : *Rangement sur mesure Paris | Atelier Guyonnet* (`title.absolute`), description brief, canonical **`/rangement-sur-mesure-paris`**, OG/Twitter alignés sur `siteConfig.defaultOgImage`.
- **`components/seo/RangementSurMesureParisJsonLd.tsx`** : `BreadcrumbList`, `Service`, `FAQPage`.
- **`app/sitemap.ts`** : **`/rangement-sur-mesure-paris`** (priorité 0,85).
- **`lib/constants/seo-pages.ts`** : fiche rangement alignée (title, meta, h1 court, secondaires élargis selon brief SEO).
- **`components/sections/ServicesSection.tsx`** : troisième lien **Rangement sur mesure à Paris** via `find(slug)` ; thématiques sans page restent **sans URL** (bibliothèque, meuble TV, optimisation studio…).

### Validations

- `npm run build` : **OK** ; route **`/rangement-sur-mesure-paris`**.

### Limites

- Pas de formulaire embarqué sur la page service ; pas de prix chiffrés ni portfolio inventé.

### Fichiers créés / modifiés

- `app/rangement-sur-mesure-paris/page.tsx`, `components/seo/RangementSurMesureParisJsonLd.tsx`
- `app/sitemap.ts`, `lib/constants/seo-pages.ts`, `components/sections/ServicesSection.tsx`, `progress-tracker.md`

### Prochaine étape recommandée (historique)

**`/bibliotheque-sur-mesure-paris`** — réalisée ; suite : **`/meuble-tv-sur-mesure-paris`**.

---

## Dernière livraison — Page service `/placard-sur-mesure-paris` (2026-05-16)

### Fait

- **`app/placard-sur-mesure-paris/page.tsx`** : hero (H1 brief), problème « espace perdu », 6 types de placards, 4 leviers d’optimisation, méthode 5 étapes (wording spécifique), zone Paris–IdF avec liens accueil et **`/#services`**, FAQ ×5, bloc **Autres solutions** → **`/dressing-sur-mesure-paris`**, CTA **`/#devis`** + maillage interne demandé.
- **Metadata** : *Placard sur mesure Paris | Atelier Guyonnet* (`title.absolute`), description brief, canonical, OG/Twitter.
- **`components/seo/PlacardSurMesureParisJsonLd.tsx`** : `BreadcrumbList`, `Service`, `FAQPage`.
- **`app/sitemap.ts`** : **`/placard-sur-mesure-paris`** (priorité 0,85).
- **`lib/constants/seo-pages.ts`** : fiche placard alignée (title, meta, h1, secondaires élargis).
- **`ServicesSection`** : liens **Dressing** et **Placard** vers pages publiées ; autres thématiques sans URL.

### Validations

- `npm run build` : **OK** ; route **`/placard-sur-mesure-paris`**.

### Limites

- Pas de formulaire embarqué ; pas de prix chiffrés ni portfolio inventé.

### Fichiers créés / modifiés

- `app/placard-sur-mesure-paris/page.tsx`, `components/seo/PlacardSurMesureParisJsonLd.tsx`
- `app/sitemap.ts`, `lib/constants/seo-pages.ts`, `components/sections/ServicesSection.tsx`, `progress-tracker.md`

### Prochaine étape recommandée (historique)

**`/rangement-sur-mesure-paris`** — réalisée ; **`/bibliotheque-sur-mesure-paris`** — réalisée ; suite : **`/meuble-tv-sur-mesure-paris`**.

---

## Dernière livraison — Page service `/dressing-sur-mesure-paris` (2026-05-16)

### Fait

- **`app/dressing-sur-mesure-paris/page.tsx`** : structure complète (header/hero, problème, 6 types de dressings, 4 bénéfices sur-mesure, méthode courte 5 étapes, zone IdF sans recharger la carte, FAQ dressing ×5, CTA + maillage vers `/`, `/#services`, `/#inspirations`, `/#devis`, `/#methode`). **Un seul H1** ; ton premium, pas de prix chiffré ni portfolio inventé.
- **Metadata** : titre absolu *Dressing sur mesure Paris | Atelier Guyonnet*, description brief, canonical, OG/Twitter alignés sur `siteConfig.defaultOgImage`.
- **`components/seo/DressingSurMesureParisJsonLd.tsx`** : `BreadcrumbList`, `Service`, `FAQPage` (pas d’avis ni d’adresse postale factice).
- **`app/sitemap.ts`** : entrée **`/dressing-sur-mesure-paris`** (priorité 0,85).
- **`lib/constants/seo-pages.ts`** : entrée « dressing » alignée sur les métadonnées publiées + mots-clés secondaires élargis (Île-de-France, intégré, chambre, menuisier, placard dressing).
- **`components/sections/ServicesSection.tsx`** : lien interne vers la page dressing ; le lien placard a été ajouté lors de la livraison **`/placard-sur-mesure-paris`** (voir plus haut).

### Validations

- `npm run build` : **OK** ; route statique **`/dressing-sur-mesure-paris`**.

### Limites

- Pas de formulaire embarqué sur la page service : CTA vers **`/#devis`** sur l’accueil.
- Pas de photo de réalisation : visuels inchangés (placeholders réservés à l’accueil / inspirations).
- **Rich results** non garantis (Google / IA).

### Fichiers créés / modifiés

- `app/dressing-sur-mesure-paris/page.tsx` (créé)
- `components/seo/DressingSurMesureParisJsonLd.tsx` (créé)
- `app/sitemap.ts`, `lib/constants/seo-pages.ts`, `components/sections/ServicesSection.tsx`, `progress-tracker.md`

### Prochaine étape recommandée (historique)

**`/placard-sur-mesure-paris`** — réalisée ; suite : **`/rangement-sur-mesure-paris`** (réalisée) ; prochain focus : **`/bibliotheque-sur-mesure-paris`**.

---

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
| 2026-05-16 | **Page service** `/placard-sur-mesure-paris` + sitemap + maillage, build OK |
| 2026-05-16 | **Page service** `/dressing-sur-mesure-paris` + sitemap + maillage, build OK |
| 2026-05-16 | **Page service** `/bibliotheque-sur-mesure-paris` + sitemap + maillage ServicesSection, build OK |
| 2026-05-16 | **Page service** `/optimisation-petit-appartement-paris` + sitemap + maillage ServicesSection, build OK |
| 2026-05-16 | **Page service** `/meuble-tv-sur-mesure-paris` + sitemap + maillage ServicesSection, build OK |
| 2026-05-16 | **Hub SEO** `/agencement-sur-mesure-ile-de-france` + JSON-LD + sitemap + lien ServicesSection, build OK |
| 2026-05-16 | **Page zone** `/zones/paris` + JSON-LD + sitemap + lien depuis hub IdF, build OK |
| 2026-05-16 | **Page zone** `/zones/boulogne-billancourt` + JSON-LD + sitemap + maillage hub & Paris, build OK |
| 2026-05-16 | **Page zone** `/zones/neuilly-sur-seine` + JSON-LD + sitemap + maillage hub, Paris, Boulogne, build OK |
| 2026-05-16 | **Page service** `/rangement-sur-mesure-paris` + sitemap + maillage ServicesSection, build OK |
| 2026-05-16 | **SEO** fondation (robots, sitemap, JSON-LD, FAQ, seo-pages.ts), build OK |
| 2026-05-16 | **UX** formulaire sans photos + slider sur image + carte Leaflet OSM, build OK |
| 2026-05-18 | **Formulaire devis** + Resend (Server Action), build OK |
| 2026-05-18 | **UX** photos + zone intervention + slider avant/après, build OK |
