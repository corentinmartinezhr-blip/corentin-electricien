# Règles du projet — Corentin Électricien

Ce fichier est relu au début de chaque session. Il garde les décisions prises pour qu'elles ne se perdent pas.
Le cadrage de référence est la note de cadrage V3 (Claude Docs : https://claude.ai/artifact/EntNT5KbDpYUD3NwiTPGYk), reconstruite le 29/10/2026 à partir de `docs/synthese-cadrage-v1.1.md` et `docs/note-de-cadrage-v2.md`. En cas de divergence, la V2 l'emporte sur la V1.1. La palette est dans `docs/palette.png`.

## Qui, quoi

- Site vitrine de Corentin, artisan électricien indépendant à Avignon. Tout le site est en français.
- Corentin n'est pas développeur : on lui parle simplement, sans jargon, et on ne lui demande jamais de taper de commande.
- Il voit chaque modification directement sur le vrai site (pas de site de test, à sa demande) : on lui explique ce qui va changer avant d'envoyer.

## Architecture du site (V1)

- 4 pages : Accueil, Dépannage, Installation, Contact, plus les pages légales (mentions légales, confidentialité).
- Faites : Accueil (`/`), Dépannage (`/depannage-electrique-avignon/`), Installation (`/installation-electrique-avignon/`). À faire : Contact (avec formulaire), pages légales.
- Menu (en-tête et pied de page) : `src/data/navigation.ts`. Composants partagés : `IntroPage`, `SectionTarifs`, `GrilleTarifs`, `Deroule`, `AppelFinal`, `BoutonContact`, `NumeroCopiable`.
- Électroménager : pas de réfrigérateur ni de climatisation (circuit de froid = attestation fluides frigorigènes).
- Véhicule électrique : uniquement « prise renforcée jusqu'à 3,7 kW » (pas de qualification IRVE). Ne jamais proposer de « borne de recharge » ni de puissance supérieure tant que Corentin n'est pas qualifié IRVE.
- Pas de page Tarifs : les prix sont affichés sur Dépannage et Installation.
- Accueil : hero avec la photo de Corentin, 3 services (dépannage électrique ; petits travaux et tableau ; électroménager), présentation, garanties, FAQ, appel final.
- Électroménager : une section de la page Dépannage en V1, pas une page.
- Les « bons réflexes » sont sur la page Dépannage.

## Grille tarifaire (périodes)

- Journée : du lundi au samedi, 7h–19h.
- Soir : 19h–22h, +25 %.
- Dimanche et jours fériés : +50 %.
- Le samedi après-midi est au tarif journée, sans majoration.
- Un tarif de diagnostic électroménager doit être affiché.
- Montants validés par Corentin le 29/10/2026 (benchmark dans les documents du projet) : seule source `src/data/tarifs.ts`. 65 €/h journée, 81 €/h soir, 97 €/h dimanche et fériés ; déplacement 35 € Avignon, 49 € autres communes ; recherche de panne 110 € ; disjoncteur 75 € ; prise/interrupteur 65 € ; luminaire 85 € ; tableau sur devis ; diagnostic électroménager 65 € déplacement inclus.
- Devis gratuit. Décompte : première heure due en entier, puis par quart d'heure entamé. Prix nets, « TVA non applicable, art. 293 B du CGI » (franchise de TVA, à confirmer avec le SIRET).
- Les prix affichés sont un plafond : remise possible, jamais au-dessus.

## Formulations interdites ou encadrées (obligatoire)

- Ne jamais écrire « réparateur agréé ».
- Ne jamais écrire « certifié » sauf pour une vraie certification nommée. L'habilitation électrique n'est pas une certification : on affiche les niveaux exacts (BR, B2V…).
- Ne jamais annoncer la décennale ou la RC Pro avant leur signature. L'électroménager peut être mis en avant (validé par Corentin le 29/10/2026).
- Pas d'avis clients inventés, pas de chiffres inventés.

## Contact

- Téléphone et WhatsApp : 06 83 78 69 11 (même numéro). Coordonnées et communes dans `src/data/entreprise.ts`, seule source à utiliser.
- Zone : les 18 communes de la zone principale sont validées (29/10/2026). Formulation prudente sur les frais de déplacement.
- Présentation (faits fournis par Corentin) : 31 ans, réactif, communication et transparence, croit en l'artisanat et au fait main. Rien d'autre sans validation.
- Le bouton « Demander un devis » mène à l'appel final (#contact) tant que le formulaire n'existe pas.
- Boutons « Appeler » = lien `tel:` (lance l'appel). Numéro écrit en clair dans un texte (pied de page, FAQ, appel final) = composant `NumeroCopiable` : un clic copie le numéro et affiche « Numéro copié » (demande de Corentin).
- Garanties (après « Qui suis-je ») : CAP Électricien mention très bien (Académie de Paris, 2025) et habilitations basse tension BR, BC, B2V, B2V Essai, BE Essai, confirmés le 29/10/2026. La H0 n'est pas affichée (choix de Corentin). La 3e carte « Décennale et RC Pro » n'apparaît que si `assurancesSignees: true` dans `src/data/entreprise.ts` : à passer seulement après signature (prévue début novembre 2026).
- SIREN/SIRET en cours (demande déposée à l'INPI). Pas de lancement officiel (indexation) avant SIRET + décennale signée ; mentions légales à compléter à ce moment-là.
- Sur mobile : WhatsApp en premier. Sur ordinateur : formulaire en premier.
- On change l'ordre, on ne cache jamais rien : le formulaire reste accessible sur mobile.
- Formulaire : script PHP sur o2switch. Expéditeur sur le domaine (ex. `site@corentin-electricien.fr`), destinataire : la boîte Gmail de Corentin, `Reply-To` = adresse du client. Ne jamais écrire l'adresse Gmail en clair dans le HTML.

## Identité visuelle

- Palette « Le soleil et l'olivier », variables dans `src/styles/global.css` :
  jaune soleil #F5C02E, vert olive #34402F, ivoire #FAF7F0, vert brume #EEF0E6, gris pierre #5E5A50, ocre #8A6410.
- Dosage : ivoire ~55 %, olive ~20 %, brume ~15 %, jaune ~10 %.
- Hero de l'accueil : fond vert brume, sobre. Le fond jaune pastel avec motif d'éclairs a été essayé puis rejeté par Corentin (29/10/2026) : ne pas le reproposer. Pas d'animation.
- Polices : Fraunces (titres) et Manrope (texte), via `@fontsource-variable`, servies depuis o2switch.
- Le jaune n'est jamais utilisé pour du texte sur fond clair, et jamais de texte blanc sur jaune. Pour du texte « jaune » sur fond clair, utiliser l'ocre.
- Logos dans `public/logo/` : `logo-horizontal.svg` (fond transparent, pour fond clair), `logo-horizontal-fond-olive.svg`, `logo-carre.svg` (aussi favicon).
- Pas de Google Fonts chargées depuis Google (RGPD) : polices auto-hébergées uniquement.

## Photos

- Réalisations : `src/assets/realisations/` ; portrait : `src/assets/portrait/`.
- Photos de réalisations : WebP fournis et déjà compressés par Corentin, dans `public/realisations/`, servis tels quels (balise `<img>`, pas de recompression : demande de Corentin, la recompression d'Astro était visible). Autres images (portrait, tableau) : `astro:assets`.
- Portrait : le logo d'une autre entreprise a été effacé du sweat (original hors dépôt). Un shooting est prévu pour le remplacer.
- Ne jamais publier d'élément permettant d'identifier l'adresse d'un client.

## Technique

- Astro en site 100 % statique (`output: 'static'`), hébergé sur o2switch. Pas de serveur Node.
- Mesure d'audience : Matomo auto-hébergé sur o2switch, configuré en mode exempté CNIL. Pas de bannière cookies, donc aucun autre traceur.
- Tout ce qui n'est pas `PUBLIC_SITE_ENV=production` est en `noindex` (voir `src/layouts/Base.astro` et `src/pages/robots.txt.ts`).

## Déploiement

- Détail complet : `docs/deploiement.md`.
- Pas de site de test (choix de Corentin) : chaque envoi sur `main` part en ligne sur `corentin-electricien.fr`. Donc rien d'inachevé ou de faux ne doit être envoyé sur `main`. En cas de doute, demander à Corentin avant d'envoyer.
- Le pare-feu o2switch bloque GitHub → o2switch (FTP coupé, SSH fermé, API cPanel indisponible sur ce compte). Méthode retenue : GitHub construit le site et le range dans la branche `production` (`.github/workflows/publier.yml`) ; une tâche cron o2switch récupère cette branche toutes les 5 min et la copie dans le dossier du site avec `rsync --delete` (exclut `.htaccess`, `.well-known/`, `cgi-bin/`).
- Ne jamais installer quoi que ce soit à la main dans le dossier du site (rsync l'effacerait). Matomo ira sur un sous-domaine.
- Tant que le site n'est pas lancé officiellement : `PUBLIC_SITE_ENV: preparation` (non indexé). Le jour du lancement : `production`.
- Ne jamais demander, afficher ni committer un mot de passe, un jeton ou une clé.

## Règles de code (exigence de Corentin : léger, lisible, robuste, bon SEO)

Relire chaque modification avec un œil critique avant de l'envoyer, et améliorer sans hésiter.

- **Structure :** une page = `src/pages/` ; une section = un composant (`src/components/<page>/`) qui porte son contenu et son style. Viser < 150 lignes par fichier.
- **Données :** toute information sur l'entreprise (téléphone, communes, diplômes…) vient de `src/data/entreprise.ts`, jamais écrite en dur ailleurs.
- **Styles :** couleurs et espacements via les variables de `src/styles/global.css` (aucune couleur en dur hors de ce fichier). Classes communes : `.conteneur`, `.section`, `.section--brume`, `.fond-olive`, `.carte`, `.liste-nue`, `.bouton`. Supprimer tout CSS inutilisé.
- **Boutons d'action :** `BoutonContact` (appel / whatsapp / devis). Numéro en clair : `NumeroCopiable`.
- **JavaScript :** aucun par défaut. Seule exception actuelle : la copie du numéro. Pas de bibliothèque ni de dépendance sans raison forte.
- **Nommage :** en français, explicite (`telephoneLien`, `garanties`), commentaires courts qui disent le pourquoi.
- **Performance :** images via `astro:assets` avec `widths`/`sizes` ; CSS intégré dans la page ; polices latines préchargées ; viser LCP ≤ 2,5 s, CLS ≤ 0,1.
- **SEO :** un seul `<h1>` par page ; title ≤ ~60 caractères et description ≤ ~155 ; URL lisibles (`/depannage-electrique-avignon/`) ; canonical, sitemap et données structurées `Electrician` gérés par `Base.astro`, `sitemap.xml.ts`, `robots.txt.ts`. Les nouvelles pages entrent seules dans le sitemap.
- **Accessibilité :** contrastes WCAG AA, focus visible, `aria-labelledby` sur chaque section, `role="list"` sur les listes sans puces.
- **Vérification :** après chaque envoi, contrôler que le build GitHub passe, puis regarder la page en ligne (mobile et ordinateur) après le passage du cron.
- **Limite connue :** pas de `package-lock.json` (l'espace de travail de Claude ne peut pas installer les paquets). Les versions suivent les plages de `package.json`.

## Questions ouvertes

- Élément du hero : animation ? (à préciser avec Corentin)
- Photos pour le dépannage et l'électroménager : à fournir.
- `tableau-electrique.png` : avant/après ou deux vues ?
