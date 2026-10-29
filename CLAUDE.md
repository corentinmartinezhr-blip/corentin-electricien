# Règles du projet — Corentin Électricien

Ce fichier est relu au début de chaque session. Il garde les décisions prises pour qu'elles ne se perdent pas.
Le détail du cadrage est dans `docs/note-de-cadrage-v2.md`. La palette est dans `docs/palette.png`.

## Qui, quoi

- Site vitrine de Corentin, artisan électricien indépendant (Marseille). Tout le site est en français.
- Corentin n'est pas développeur : on lui parle simplement, sans jargon, et on ne lui demande jamais de taper de commande.
- Il valide chaque modification sur son téléphone, sur le site de test, avant toute mise en ligne.

## Architecture du site (V1)

- 4 pages : Accueil, Dépannage, Installation, Contact, plus les pages légales (mentions légales, confidentialité).
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

## Formulations interdites ou encadrées (obligatoire)

- Ne jamais écrire « réparateur agréé ».
- Ne jamais écrire « certifié » sauf pour une vraie certification nommée. L'habilitation électrique n'est pas une certification : on affiche les niveaux exacts (BR, B2V…).
- La section Garanties reste masquée tant que les assurances (RC Pro, décennale) ne sont pas signées. L'activité électroménager doit être couverte par la RC Pro avant d'être mise en avant.
- Pas d'avis clients inventés, pas de chiffres inventés.

## Contact

- Sur mobile : WhatsApp en premier. Sur ordinateur : formulaire en premier.
- On change l'ordre, on ne cache jamais rien : le formulaire reste accessible sur mobile.
- Formulaire : script PHP sur o2switch. Expéditeur sur le domaine (ex. `site@corentin-electricien.fr`), destinataire : la boîte Gmail de Corentin, `Reply-To` = adresse du client. Ne jamais écrire l'adresse Gmail en clair dans le HTML.

## Identité visuelle

- Palette « Le soleil et l'olivier », variables dans `src/styles/global.css` :
  jaune soleil #F5C02E, vert olive #34402F, ivoire #FAF7F0, vert brume #EEF0E6, gris pierre #5E5A50, ocre #8A6410.
- Dosage : ivoire ~55 %, olive ~20 %, brume ~15 %, jaune ~10 %.
- Le jaune n'est jamais utilisé pour du texte sur fond clair, et jamais de texte blanc sur jaune. Pour du texte « jaune » sur fond clair, utiliser l'ocre.
- Logos dans `public/logo/` : `logo-horizontal.svg` (fond transparent, pour fond clair), `logo-horizontal-fond-olive.svg`, `logo-carre.svg` (aussi favicon).
- Pas de Google Fonts chargées depuis Google (RGPD) : polices auto-hébergées uniquement.

## Photos

- Réalisations : `src/assets/realisations/` ; portrait : `src/assets/portrait/`.
- Toujours passer par `astro:assets` (`<Image>`) pour optimiser.
- Le portrait actuel montre le logo d'une autre entreprise sur le sweat : à remplacer ou flouter avant la mise en ligne.
- Ne jamais publier d'élément permettant d'identifier l'adresse d'un client.

## Technique

- Astro en site 100 % statique (`output: 'static'`), hébergé sur o2switch. Pas de serveur Node.
- Mesure d'audience : Matomo auto-hébergé sur o2switch, configuré en mode exempté CNIL. Pas de bannière cookies, donc aucun autre traceur.
- Tout ce qui n'est pas la production est en `noindex` (variable `PUBLIC_SITE_ENV`, voir `src/layouts/Base.astro` et `src/pages/robots.txt.ts`).

## Déploiement

- Chaque envoi sur `main` construit le site sur GitHub et le dépose sur `test.corentin-electricien.fr` (`.github/workflows/deploy-test.yml`).
- Le FTP depuis GitHub ne marche pas : le pare-feu o2switch coupe les transferts (ECONNRESET sur le canal de données). On utilise la méthode o2switch : exception temporaire via l'API cPanel `SshWhitelist` (add puis remove in/out), puis rsync sur SSH. Limite : 5 exceptions sur le compte, d'où le retrait systématique.
- rsync utilise `--delete` mais exclut `.htaccess`, `.well-known/` et `cgi-bin/` côté serveur.
- Le site de test est protégé par mot de passe via cPanel (« Confidentialité des répertoires »), qui écrit un `.htaccess` dans le dossier de test. Ne jamais publier de `.htaccess` à la racine du site de test sans y reprendre cette protection.
- La mise en ligne en production se fait seulement après validation explicite de Corentin, par un déploiement séparé (à créer).
- Secrets GitHub : `O2SWITCH_SERVER` (nom d'hôte du serveur cPanel), `CPANEL_USER`, `CPANEL_TOKEN` (jeton API cPanel), `SSH_PRIVATE_KEY`. Les anciens `FTP_*` ne servent plus. Ne jamais demander, afficher ni committer un mot de passe, un jeton ou une clé.

## Questions ouvertes

- Élément du hero : animation ? (à préciser avec Corentin)
- Photos pour le dépannage et l'électroménager : à fournir.
- `tableau-electrique.png` : avant/après ou deux vues ?
