# UI — Contexte Atelier Guyonnet

## Direction

S’inspirer de la maquette **Stitch** : hero **sombre** et image immersive ; sections **beige / blanc cassé** ; typos **éditoriales** ; ambiance **bois, atelier, intérieur premium** ; CTA **noirs** ; touches de détail type **lignes de mesure / plans** (frises discrètes, pas gadget) ; chaleureux, **artisanal**, non-SaaS.

## Tokens couleur (référence)

| Token sémantique | Hex | Usage |
|------------------|-----|--------|
| `primary` | `#000000` | CTA pleins, footer, bandeaux foncés |
| `secondary` | `#D9D1C7` | Bandes beige sable, fonds alternés |
| `background-light` | `#F9F7F2` | Fond crème principal |
| `text-main` | `#1A1A1A` | Texte courant sur fond clair |
| `text-muted` | `#666666` | Sous-textes, légendes |
| `hero-base` | `#141210` | Dégradé hero (sommet / fond) — ambiance atelier |
| `hero-mid` | `#1F1A16` | Dégradé hero (transition) |
| `hero-warm` | `#352B24` | Glow / reflets chauds hero (sans « faux bois » plat) |

**Sur hero foncé** : titres et textes en blanc / crème (`#FFFFFF` / `#F9F7F2`) ; bouton primaire **clair** sur fond sombre possible.

**Accents bois** : délégués surtout à la **photo** ; éviter les couleurs « bois cardboard » en flat UI.

## Typographie

- **`font-serif`** : titres, accroches (ex. *Playfair Display*, *Cormorant Garamond* ou équivalent premium).
- **`font-sans`** : interface, corps, navigation (ex. *Inter*, *DM Sans*, *Montserrat*).

Hiérarchie nette : un seul H1 par page ; espacement généreux.

## Radius & bordures

- **Radius** : `0` ou **très faible** (`2px`–`4px` max) pour cartes / séparateurs — esprit atelier.
- **Exception maquette Stitch** : CTA header + hero en **pilule** (`rounded-full`) pour lecture premium sur fond sombre.
- **Bordures** fines `1px` pour séparateurs, cartes, boutons outline.

## Patterns

- Sections séparées par **ligne horizontale** fine ou changement de fond (crème ↔ sable).
- Grille services en cartes **sèches** (numéro `01.`, titre serif, texte sans).
- Détails mesure : traits horizontaux/verticaux légers, opacité basse (décoration, pas grille complète partout).

## Composants prévus (noms fonctionnels — **pas d’impl ici**)

`Header`, `Hero`, `ValueProposition`, `ServicesGrid`, `ImageGallery`, `BeforeAfterSlider`, `ProcessSteps`, `AboutFounder`, `OfferCard`, `ContactSection`, `Footer`, `Button` (variants : primary / outline / inverse).

## Images

- Hero plein écran ou large ; **ratio** et **crop** maîtrisés ; légendes discrètes si besoin.
- Toujours **vraies** photos quand en production ; pas de faux rendus « portfolio ».
