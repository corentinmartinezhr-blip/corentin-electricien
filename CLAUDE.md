# Règles du projet — Corentin Électricien

Ce fichier est relu au début de chaque session. Il garde les décisions prises pour qu'elles ne se perdent pas.
Le cadrage de référence est la note de cadrage V3 (Claude Docs : https://claude.ai/artifact/EntNT5KbDpYUD3NwiTPGYk), reconstruite le 29/10/2026 à partir de `docs/synthese-cadrage-v1.1.md` et `docs/note-de-cadrage-v2.md`. En cas de divergence, la V2 l'emporte sur la V1.1. La palette est dans `docs/palette.png`.

## Qui, quoi

- Site vitrine de Corentin, artisan électricien indépendant à Avignon. Tout le site est en français.
- Corentin n'est pas développeur : on lui parle simplement, sans jargon, et on ne lui demande jamais de taper de commande.
- Il voit chaque modification directement sur le vrai site (pas de site de test, à sa demande) : on lui explique ce qui va changer avant d'envoyer.

## Positionnement (choisi par Corentin le 30/10/2026)

- **Dépannage électrique d'urgence à vélo électrique, à Avignon.** Focus du lancement : générer des appels de dépannage. Mots-clés : urgence, dépannage, Avignon.
- Horaires : 7 jours sur 7, de 7h à 22h (22h peut-être revu). Délai : « en moins de 24 h, le plus souvent le jour même » ; « Si je suis libre, j'arrive en moins d'une heure ». Jamais de délai plus court promis sans condition.
- Vélo électrique : une valeur de Corentin (le tout électrique). Rester factuel (pas de bouchons, pas de problème pour se garer, pas de voiture) : jamais « zéro émission » ni « écologique » (allégations environnementales encadrées).
- Données dans `src/data/entreprise.ts` (`horaires`, `delai`, `delaiRapide`, `deplacement`) ; horaires aussi dans les données structurées.

## Architecture du site (V1)

- Pages visibles : Accueil, Dépannage, Contact, plus les pages légales (mentions légales, confidentialité). **Installation mise de côté le 30/10/2026** : la page reste en ligne pour Corentin, mais hors menu, hors accueil, hors formulaire, hors plan du site et non indexée (pour la remettre : voir le commentaire en tête de `installation-electrique-avignon.astro`).
- Faites : Accueil (`/`), Dépannage (`/depannage-electrique-avignon/`), Installation (`/installation-electrique-avignon/`), Contact (`/contact/`, + `merci/` et `erreur/` non indexées), Confidentialité (`/confidentialite/`). À faire : Mentions légales (attend le SIRET).
- Menu (en-tête et pied de page) : `src/data/navigation.ts`. Composants partagés : `IntroPage`, `GrilleTarifs`, `Deroule`, `AppelFinal`, `BoutonContact`, `NumeroCopiable`.
- Électroménager : pas de réfrigérateur ni de climatisation (circuit de froid = attestation fluides frigorigènes).
- Véhicule électrique : uniquement « prise renforcée jusqu'à 3,7 kW » (pas de qualification IRVE). Ne jamais proposer de « borne de recharge » ni de puissance supérieure tant que Corentin n'est pas qualifié IRVE.
- Pas de page Tarifs : les prix sont affichés sur Dépannage et Installation.
- Accueil : hero avec la photo de Corentin, 2 services (dépannage électrique d'urgence ; électroménager), présentation (dont le vélo électrique), garanties, zone, FAQ, appel final.
- Page Dépannage, dans cet ordre (demande de Corentin) : haut de page (urgence, délai, vélo, horaires), tarifs avec l'exemple chiffré en bandeau olive juste dessous, pannes, électroménager, bons réflexes.
- Électroménager : une section de la page Dépannage en V1, pas une page.
- Les « bons réflexes » sont sur la page Dépannage.

## Tarifs (seule source : `src/data/tarifs.ts`)

- **Offre de lancement (définie par Corentin le 30/10/2026, jusqu'au 31/12/2026, peut être prolongée)** : une seule règle pour tout. Déplacement gratuit partout dans la zone (le supplément de 30 € pour les autres communes est supprimé) et devis gratuit. Main-d'œuvre 65 €/h, 1 heure minimum puis par quart d'heure, pièces ou matériel en plus. Pastille « Offre de lancement jusqu'au 31 décembre 2026 » au-dessus des tarifs. À revoir avant le 31/12/2026.
- **Dépannage** : le temps de recherche de la panne est facturé (c'est du travail), mais promesse gardée : « Pas de facturation si je ne trouve pas la panne. » (en gras en haut de page et en fin de carte). Soir 19h–22h +25 % (81,25 €/h), dimanche et fériés 7h–22h +50 % (97,50 €/h). Affichage obligatoire (arrêté du 24/01/2017) : taux horaire, déplacement, décompte du temps. Exemple affiché : prise réparée en 40 min = 65 € + la prise.
- **Électroménager** : même règle que le dépannage.
- **Installation** : pas de prix par prestation (jugé peu clair par Corentin) : la liste des interventions avec un temps estimé. Petits travaux « 1 heure ou moins » (prise, interrupteur, RJ45/TV, lampe, lumière extérieure, radiateur, thermostat, détecteur de fumée) ; gros travaux avec une fourchette de temps et « sur devis » (prise sans fil existant, interphone, ligne dédiée, prise voiture électrique ≤ 3,7 kW, tableau). Pas de VMC pour l'instant.
- Prix affichés TTC (« 65 € TTC de l'heure »). Pas de mention de TVA sur le site (demande de Corentin, 30/10/2026 : la franchise de TVA n'est pas sûre). Si la franchise est confirmée, la mention « TVA non applicable, art. 293 B du CGI » ira sur les factures.
- Les prix affichés sont un plafond : remise possible, jamais au-dessus.

## Ton (règle n° 1 de toute la communication, définie par Corentin le 30/10/2026)

- **Clair avant d'être intelligent.** Mots simples, phrases courtes, aucun jargon technique, même quand le sujet fait peur (panne, tableau, danger). Si un terme technique est indispensable, on l'explique en quelques mots.
- Le ton est humain, professionnel, proche (local, Avignon) et transparent : on parle comme Corentin parlerait à un client chez lui, au « je » et au « vous ».
- Pas de formule générique, pas de promesse absolue, pas de « style » qui passe avant la compréhension.
- Repère : un enfant de 10 ans doit comprendre chaque phrase du site (demande de Corentin, 30/10/2026). Textes du site relus dans ce sens le 30/10/2026.
- Repère complet (ton, couleurs, typo, logos) : guide de marque « Corentin Électricien » (Design System, https://claude.ai/artifact/3mgG7Yecot73i12baC3TiV). Toute nouvelle règle de marque (ton, couleur, police, logo) y est reportée aussi.

## Formulations interdites ou encadrées (obligatoire)

- Ne jamais écrire « réparateur agréé ».
- Ne jamais écrire « certifié » sauf pour une vraie certification nommée. L'habilitation électrique n'est pas une certification : on affiche les niveaux exacts (BR, B2V…).
- Ne jamais annoncer la décennale ou la RC Pro avant leur signature. L'électroménager peut être mis en avant (validé par Corentin le 29/10/2026).
- Pas d'avis clients inventés, pas de chiffres inventés.

## Contact

- Téléphone et WhatsApp : 06 83 78 69 11 (même numéro). Coordonnées et communes dans `src/data/entreprise.ts`, seule source à utiliser.
- Zone recentrée le 30/10/2026 : Avignon, Le Pontet, Villeneuve-lès-Avignon, Les Angles. Déplacement gratuit dans ces quatre villes.
- Présentation (faits fournis par Corentin) : 31 ans, réactif, communication et transparence, croit en l'artisanat et au fait main. Rien d'autre sans validation.
- Corentin parle aussi anglais (29/10/2026) : mention sous les boutons de « Me joindre directement » (page Contact) et `knowsLanguage` dans les données structurées.
- Le bouton « Demander un devis gratuit » mène à `/contact/`.
- Boutons « Appeler » = lien `tel:` : sur téléphone (appareil déclaré mobile ou pointeur tactile principal), ouvre l'application d'appel ; sur ordinateur, copie le numéro et affiche « Numéro copié ». Exigence de Corentin : ne jamais copier sur un téléphone. Numéro écrit en clair dans un texte (pied de page, FAQ, appel final) = composant `NumeroCopiable` : un clic copie le numéro et affiche « Numéro copié » (demande de Corentin).
- Garanties (après « Qui suis-je ») : CAP Électricien mention très bien (Académie de Paris, 2025) et habilitations basse tension BR, BC, B2V, B2V Essai, BE Essai, confirmés le 29/10/2026. La H0 n'est pas affichée (choix de Corentin). La 3e carte « Décennale et RC Pro » n'apparaît que si `assurancesSignees: true` dans `src/data/entreprise.ts` : à passer seulement après signature (prévue début novembre 2026).
- SIREN/SIRET en cours (demande déposée à l'INPI). Pas de lancement officiel (indexation) avant SIRET + décennale signée ; mentions légales à compléter à ce moment-là.
- Sur mobile : WhatsApp en premier. Sur ordinateur : formulaire en premier.
- On change l'ordre, on ne cache jamais rien : le formulaire reste accessible sur mobile.
- Formulaire (`src/components/contact/Formulaire.astro` → `public/contact/envoyer.php`, sans JavaScript) : prénom, nom, téléphone, e-mail, type de demande, descriptif, photos facultatives (3 max, 8 Mo chacune, JPEG/PNG/WebP/HEIC, vrai format vérifié). Rien n'est stocké : envoi par e-mail puis effacement. Le client reçoit un accusé de réception automatique (texte fixe, sans ce qu'il a écrit, pour qu'un robot ne puisse pas s'en servir) ; la page merci le mentionne. Anti-spam : champ piège. Téléphone : impossible de taper autre chose que des chiffres (10 chiffres commençant par 0), clavier numérique, pas de texte d'aide sous le champ (refusé par Corentin) ; normalisé « 06 12 34 56 78 » dans l'e-mail. Exemples grisés (placeholders) dans chaque champ : souhaités par Corentin. Les règles du navigateur et de `envoyer.php` doivent rester identiques (sinon erreur incompréhensible). Succès → `/contact/merci/`, échec → `/contact/erreur/#<champ>` (nom, telephone, email, type, message, photos, envoi) : la page n'affiche que l'explication du champ en cause (CSS `:target`). Limites PHP du dossier dans `public/contact/.user.ini`. Testé localement sur ~40 cas (dont « test » partout, photos refusées par le serveur, panne d'envoi).
- E-mail public : `contact@corentin-electricien.fr` (dans `entreprise.ts`), expéditeur et destinataire du formulaire, redirigé vers le Gmail de Corentin par un redirecteur cPanel. Ne jamais écrire l'adresse Gmail dans le code ni sur le site (dépôt public).
- Adresse : 15 rue Alexandre Fleming, 84000 Avignon (fournie le 29/10/2026), affichée sur la page Contact et dans les données structurées.

## Identité visuelle

- Palette « Le soleil et l'olivier », variables dans `src/styles/global.css` :
  jaune soleil #F5C02E, vert olive #34402F, ivoire #FAF7F0, vert brume #EEF0E6, gris pierre #5E5A50, ocre #8A6410.
- Dosage : ivoire ~55 %, olive ~20 %, brume ~15 %, jaune ~10 %.
- Hero de l'accueil : fond vert brume, sobre. Le fond jaune pastel avec motif d'éclairs a été essayé puis rejeté par Corentin (29/10/2026) : ne pas le reproposer. Pas d'animation.
- Polices : Playfair Display (titres, remplace Fraunces le 30/10/2026 : Fraunces jugée trop inhabituelle par Corentin) et Manrope (texte), via `@fontsource-variable`, servies depuis o2switch.
- Le jaune n'est jamais utilisé pour du texte sur fond clair, et jamais de texte blanc sur jaune. Pour du texte « jaune » sur fond clair, utiliser l'ocre.
- Logos dans `public/logo/` : `logo-horizontal.svg` (fond transparent, pour fond clair), `logo-horizontal-fond-olive.svg`, `logo-carre.svg` (aussi favicon).
- Pas de Google Fonts chargées depuis Google (RGPD) : polices auto-hébergées uniquement.

## Photos

- Réalisations : `src/assets/realisations/` ; portrait du hero : `public/portrait/corentin.webp` (WebP final de Corentin, avec son logo, servi tel quel).
- Page Installation : tarifs avant les réalisations (demande de Corentin).
- Photos de réalisations : WebP fournis et déjà compressés par Corentin, dans `public/realisations/`, servis tels quels (balise `<img>`, pas de recompression : demande de Corentin, la recompression d'Astro était visible). Autres images (tableau) : `astro:assets`.
- Portrait : version finale retouchée par Corentin (logo Corentin Électricien sur le sweat, 29/10/2026). Un shooting est prévu pour la remplacer.
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
- **Styles :** couleurs et espacements via les variables de `src/styles/global.css` (aucune couleur en dur hors de ce fichier). Classes communes : `.conteneur`, `.section`, `.section--brume`, `.fond-olive`, `.carte`, `.liste-nue`, `.etiquettes`, `.pastille-icone`, `.bouton`, `.message-copie`. Supprimer tout CSS inutilisé.
- **Boutons d'action :** `BoutonContact` (appel / whatsapp / devis). Numéro en clair : `NumeroCopiable`.
- **JavaScript :** aucun par défaut. Exceptions : `src/scripts/contact.ts` (copie du numéro ; sur ordinateur, les liens `tel:` copient le numéro au lieu de ne rien faire) et `src/scripts/formulaire.ts` (champ téléphone : chiffres uniquement, demande de Corentin ; chargé seulement sur la page Contact). Pas de bibliothèque ni de dépendance sans raison forte.
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
