# Corentin Électricien — Retours sur la note V2 et suite du projet

Oct 29, 2026 · @Corentin

La note de cadrage V2 intègre les retours de Corentin. Ce document résume ce qui a changé, les points de vigilance et les prochaines étapes.

## Ce qui a changé

- **Architecture :** 4 pages (Accueil, Dépannage, Installation, Contact) plus les pages légales. Plus de page Tarifs : les prix sont affichés sur les pages Dépannage et Installation, ce qui suffit pour l'obligation légale.
- **Accueil :** hero avec la photo de Corentin, puis 3 services (dépannage électrique ; petits travaux et tableau ; électroménager), la présentation, les garanties, la FAQ et l'appel final. Les avis et l'aperçu des tarifs sont retirés, et les bons réflexes passent sur la page Dépannage.
- **Correction de la grille tarifaire :** le samedi après-midi était à la fois au tarif « journée » et majoré. Désormais : journée du lundi au samedi de 7h à 19h, soir de 19h à 22h (+25 %), dimanche et jours fériés (+50 %).

## Points critiques

- **Électroménager :** vérifier avec l'assureur que la RC Pro couvre bien cette activité. C'est un métier distinct de l'électricité du bâtiment, à déclarer au contrat. Il faut aussi un tarif de diagnostic affiché, et ne jamais écrire « réparateur agréé ». En V1, c'est une section de la page Dépannage. Elle deviendra une page dédiée si la demande suit, parce que c'est une recherche Google distincte.
- **Garanties :** l'habilitation électrique n'est pas une certification. Pour un indépendant, c'est un titre auto-délivré après une formation. On affiche les niveaux exacts (BR, B2V…). On n'écrit « certifié » que pour une vraie certification nommée, sinon c'est une pratique commerciale trompeuse. La section reste masquée tant que les assurances ne sont pas signées.
- **WhatsApp sur mobile, formulaire sur ordinateur :** on change l'ordre selon l'appareil sans rien cacher. Un client sur mobile sans WhatsApp doit toujours trouver le formulaire.

## Socle technique avec o2switch

La V1 prévoyait un serveur Astro sur Vercel et un service de formulaire tiers. Avec o2switch, tout se simplifie.

- **Hébergement :** un site Astro statique, ce sont des fichiers HTML et CSS à déposer. Pas besoin de serveur Node, o2switch convient très bien.
- **Formulaire :** un petit script PHP sur l'hébergement, qui envoie depuis `contact@corentin-electricien.fr`. Gratuit, sans limite d'envois, sans service tiers, données en France.
- **Mesure d'audience :** Matomo installé sur o2switch. Gratuit et, bien configuré, exempté de consentement par la CNIL : pas de bannière de cookies.
- **Mises à jour avec Claude :** le code vit sur GitHub. Corentin demande une modification, Claude l'applique, et le site part automatiquement sur une adresse de test protégée. Corentin valide sur son téléphone, puis c'est mis en ligne. o2switch documente la méthode pour ce type de déploiement automatique.

## Suite du projet

La note de cadrage est à exporter en Markdown pour l'ajouter aux documents du nouveau projet. Elle ira aussi dans le dépôt de code, avec un fichier de règles relu à chaque session, pour que les décisions ne se perdent jamais.

1. Déposer les fichiers du logo Figma (petit, horizontal, vertical) dans le dossier « Corentin Elec ».
2. Créer un compte GitHub et un accès FTP dédié dans le cPanel o2switch, avec un guidage pas à pas.
3. Monter le squelette du site et la chaîne de déploiement automatique, et la tester avant d'écrire la moindre page.

### Questions ouvertes

- [ ] Le domaine s'écrit-il bien `corentin-electricien.fr`, sans accent ?
- [ ] Quel élément pour le hero (« un petit… ») : une animation ?

### Sources

- [o2switch : autorisation SSH et API](https://faq.o2switch.fr/cpanel/outils/exception-parefeu/)
- [o2switch : connexion SSH](https://faq.o2switch.fr/guides/webmastering/connexion-ssh/)
- [Git Version Control sur o2switch](https://blog.kdj-webdesign.com/git-version-control-sur-hebergement-o2switch/)
- [Matomo : exemption CNIL](https://matomo.org/faq/how-do-i-configure-matomo-without-tracking-consent-for-french-visitors-cnil-exemption/)
