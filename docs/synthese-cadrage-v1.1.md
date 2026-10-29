**CORENTIN ÉLECTRICIEN**

Synthèse de cadrage — Site vitrine V1.1

Document maître de référence • Relecture critique + orientation design • 29 octobre 2026

# 1. Résumé exécutif

Créer un site vitrine rapide, accessible et rassurant pour Corentin Électricien, artisan indépendant à Avignon. La priorité commerciale est de générer des appels pour le dépannage électrique ; la seconde est de recevoir des demandes de devis pour les installations et petits travaux réellement proposés.

- Le site doit être pensé mobile-first, avec un numéro de téléphone cliquable et un accès évident au devis.

- La V1 ne doit pas promettre de disponibilité 24 h/24, de délais d’intervention, de prix, de qualifications ou de couverture géographique qui n’ont pas été confirmés.

- Direction artistique de travail : « Provence contemporaine », en site clair, avec bleu profond, ivoire, bleu grisé, olive et ocre. Duo typographique proposé : Fraunces pour les titres et Manrope pour les textes et l’interface. Cette direction reste à valider sur la maquette et après contrôle des contrastes.

- Le SEO commence par une structure propre et des pages utiles ; aucun volume de recherche précis ne doit être considéré comme validé à ce stade.

# 2. Décisions retenues

## Objectifs et public

Objectif principal : appels entrants pour des dépannages et recherches de panne. Objectif secondaire : demandes de devis pour des installations électriques et petits travaux. Le ton doit être humain, professionnel, local et transparent.

## Socle technique

- Astro + TypeScript ; rendu statique par défaut. Si un endpoint serveur est nécessaire pour le formulaire, activer explicitement le mode/runtime approprié et vérifier le déploiement Vercel.

- CSS natif organisé, composants réutilisables et design tokens pour couleurs, espacements et typographies.

- Hébergement cible : Vercel.

- JavaScript côté client et dépendances limités au strict nécessaire.

- Pas de CMS ni de base de données en l’absence d’un besoin concret.

# 3. Architecture de la V1 — clarification nécessaire

La guideline technique actuelle définit explicitement l’accueil et la page de dépannage. En revanche, les textes de l’accueil comportent un CTA « Découvrir les installations », ce qui suggère une page Installation qui n’est pas encore décrite dans la guideline. Il faut décider et documenter ce point avant le développement.

## Recommandation

Prévoir trois pages commerciales si le périmètre reste raisonnable :

- Accueil — / : positionnement global et mot-clé cible « électricien à Avignon ».

- Dépannage — /depannage-electrique-avignon/ : pannes, recherche de panne, modalités d’intervention et CTA d’appel.

- Installation — /installation-electrique-avignon/ : prises, luminaires, remplacements et autres travaux effectivement proposés.

Le guide « Que faire en cas de panne électrique ? » peut être une section de la page dépannage en V1 ; il pourra devenir une page séparée seulement si le contenu apporte une réelle valeur et que le périmètre le justifie.

Si la priorité est de livrer un MVP très court, la page Installation peut être reportée, mais il faudra alors remplacer le CTA « Découvrir les installations » par un CTA de contact ou de devis et ne pas laisser de lien vide.

# 4. Contenu de la page d’accueil

La variante A du document éditorial est la meilleure base de départ : directe, rassurante et explicite.

## Hero recommandé — base à intégrer en maquette

Surtitre : ARTISAN ÉLECTRICIEN À AVIGNON

**Titre : Un problème électrique ? Je suis là pour vous aider.**

Dépannage électrique, recherche de panne et installations : je vous accompagne avec des solutions adaptées à votre besoin, à Avignon et dans les communes où j’interviens.

CTA principal : Appeler Corentin

CTA secondaire : Demander un devis (ajouter « gratuit » uniquement après validation des conditions commerciales).

Note : « dans les communes où j’interviens » est plus prudent que « à Avignon et dans ses environs » tant que la liste de communes et les conditions de déplacement ne sont pas validées.

## Sections recommandées

- Présentation courte de l’artisan et de l’approche directe.

- Deux ou trois blocs de services correspondant uniquement aux prestations confirmées.

- Engagements vérifiables : explications claires, devis avant travaux selon les modalités définies, garanties exactes.

- Guide de sécurité en cas de panne, sans inciter à démonter un tableau ni à manipuler des conducteurs.

- Zone d’intervention validée.

- FAQ courte, contact et CTA final.

# 5. Audit des textes existants — corrections et points de vigilance

**CTA « Demander un devis gratuit » —** À conserver uniquement si le devis est réellement gratuit dans les conditions annoncées. Définir aussi ce qui est gratuit : déplacement, diagnostic, devis à distance ou devis après visite.

**« Un devis transparent » —** Bonne intention, mais préciser les conditions commerciales avant publication : frais de déplacement, diagnostic et éventuels coûts facturés.

**« Des garanties professionnelles » —** Ne pas publier comme preuve de confiance sans afficher les intitulés exacts et les informations validées (assurance, décennale, RC Pro, qualifications le cas échéant).

**Prestations —** Les prises, luminaires et petits travaux sont évoqués. Toute autre prestation — borne de recharge, électroménager, mise aux normes complète, etc. — doit être exclue tant que l’entreprise n’a pas confirmé qu’elle la propose.

**Sécurité —** Les textes sont globalement prudents. Maintenir l’interdiction de démonter le tableau ou de toucher aux conducteurs ; en cas de fumée, d’étincelles ou d’odeur de brûlé, s’éloigner et contacter les secours si danger immédiat.

**Tonalité —** Éviter les formules trop génériques ou les promesses absolues. Mettre en avant le contact direct, les explications et les prestations réelles.

# 6. Formulaire de contact / devis

Champs recommandés pour la V1 : nom, téléphone, type de demande et message court ; e-mail si nécessaire au suivi. Ne pas proposer de téléversement de photos au lancement, sauf besoin confirmé et solution de stockage/sécurité définie.

- Choisir le service qui reçoit et traite les demandes avant la mise en production.

- Validation côté serveur, protection anti-spam et messages d’erreur accessibles.

- Si photos acceptées : limiter les formats et la taille, contrôler les fichiers et sécuriser leur stockage.

- Prévoir les mentions de confidentialité, la finalité de collecte, une durée de conservation définie et un moyen de contact relatif aux données.

- Ne jamais afficher un succès si l’envoi a échoué ; tester un envoi réel de bout en bout.

# 7. SEO local — base de travail, pas étude de volumes validée

Mots-clés principaux à travailler par intention :

- Accueil : « électricien Avignon ».

- Dépannage : « dépannage électrique Avignon », « recherche de panne électrique Avignon » ; « urgence » seulement si la disponibilité réelle correspond à cette promesse.

- Installation : « installation électrique Avignon », puis les prestations réellement proposées comme « pose luminaire Avignon » ou « installation prise électrique Avignon ».

- FAQ / guide : questions précises comme « pourquoi mon disjoncteur saute ? » ou « que faire en cas de panne électrique ? ».

Aucun volume par mot-clé n’a été vérifié dans Google Ads Keyword Planner ou une base SEO professionnelle. Le chiffre d’environ 720 recherches mensuelles pour « électricien Avignon », précédemment évoqué, provient d’un benchmark tiers et reste une estimation non reproduite indépendamment : ne pas l’utiliser comme donnée officielle.

SEO technique : titles et méta-descriptions uniques, un H1 principal par page, URLs lisibles, liens internes, images optimisées, sitemap.xml, robots.txt adapté, canonicals, données structurées locales exactes, Search Console et Google Business Profile lorsque disponibles. Éviter le bourrage de mots-clés et les pages quasi identiques par commune.

# 8. Zone d’intervention — statut à confirmer

Le document géographique actuel est une base de prospection, pas une liste contractuelle de communes desservies. Il utilise un rayon de 20 km à vol d’oiseau à partir des mairies ; ce n’est ni la distance routière ni le temps de trajet.

La liste dite « zone principale proposée » comprend Avignon, Le Pontet, Villeneuve-lès-Avignon, Les Angles, Rognonas, Morières-lès-Avignon, Vedène, Sorgues, Saint-Saturnin-lès-Avignon, Châteaurenard, Rochefort-du-Gard, Entraigues-sur-la-Sorgue, Jonquerettes, Caumont-sur-Durance, Noves, Graveson, Pujaut et Sauveterre. Chaque commune doit être validée selon les trajets, le planning, le type de chantier et les frais de déplacement.

Ne pas publier la liste complète de 61 communes ni créer une page SEO pour chacune sans validation et contenu utile propre. La formulation prudente proposée reste à valider avant publication : « Corentin Électricien intervient à Avignon et dans les communes voisines, selon la nature de la demande et les disponibilités. Contactez-moi pour confirmer la possibilité d’intervention et les éventuels frais de déplacement. »

# 9. Performance, accessibilité et recette

- Mobile-first, mise en page responsive, téléphone cliquable et CTA visibles.

- Navigation clavier, focus visible, contrastes suffisants, formulaires correctement étiquetés ; viser WCAG 2.2 AA.

- Optimiser les images et limiter scripts, animations et bibliothèques superflues.

- Objectifs Core Web Vitals : LCP ≤ 2,5 s ; INP ≤ 200 ms ; CLS ≤ 0,1, au 75e percentile lorsque des données terrain sont disponibles.

- Avant livraison : build réussi, liens et routes testés, pas d’erreurs console, tests mobile/ordinateur, contrôles clavier et contrastes, validation de la conformité du contenu et test réel du formulaire de bout en bout.

# 10. Informations à confirmer avant publication

- Numéro de téléphone et coordonnées publiques.

- Liste définitive des prestations proposées.

- Intitulés exacts des assurances, certifications, qualifications et garanties.

- Ce que signifie précisément « devis gratuit » et les frais éventuels (déplacement, diagnostic).

- Communes réellement desservies et éventuelles conditions de déplacement.

- Service de formulaire, destinataire des demandes, stockage et durée de conservation.

- Logo, couleurs et maquettes Figma définitives ; photo authentique et éventuels avis/réalisations authentiques.

# 11. Plan d’exécution recommandé

1.  Valider les informations métier de la section 10.

2.  Valider le périmètre des pages : recommandation = Accueil + Dépannage + Installation.

3.  Intégrer la direction artistique validée et les maquettes Figma dès qu’elles sont disponibles.

4.  Construire les composants communs et les trois routes ; intégrer les textes après validation.

5.  Implémenter et tester le formulaire, le SEO technique et les données structurées.

6.  Faire une recette finale mobile/desktop avant mise en ligne.

# 12. Documents examinés

- guideline_technique_corentin_electricien_v1.docx — structure technique, architecture, formulaire, SEO, accessibilité et recette.

- textes_page_accueil_corentin_electricien_v1.docx — trois variantes de hero, présentation, services, engagements, guide, zone, FAQ et CTA.

- zone_intervention_corentin_electricien.docx — rayon géographique proposé, communes, formulation de zone et recommandations SEO.

# Complément de cadrage V1.1 — design, technique et critères de livraison

Ce complément transforme les recommandations de la synthèse en règles de travail utilisables dans Figma et en développement. Il précise les choix proposés, sans présenter comme confirmées les informations métier encore inconnues.

# 13. Direction artistique proposée — « Provence contemporaine »

Intention : un site clair, accueillant et immédiatement compréhensible, avec une personnalité provençale discrète. La référence néo-rétro doit venir des proportions, de la typographie et de quelques motifs simples — pas d’une accumulation d’effets vintage. La lisibilité, la confiance et l’appel à l’action priment sur la décoration.

## 13.1 Palette et règles d’utilisation

Palette de travail recommandée. Les couleurs sont des tokens initiaux : elles devront être testées sur les composants réels et pourront être ajustées après la maquette Figma.

| **Rôle / aperçu** | **Token et valeur** | **Usage recommandé**                                       | **Règle de contraste**                                                                                 |
|-------------------|---------------------|------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| **Bleu profond**  | \#203345            | Texte principal, titres, bouton principal, footer.         | Texte blanc/ivoire très lisible ; référence principale.                                                |
| **Ivoire**        | \#FAF8F2            | Fond principal, sections de lecture, zones aérées.         | Ne pas utiliser l’ocre comme texte fin sur ce fond.                                                    |
| **Bleu grisé**    | \#E8EEF0            | Fond alternatif pour services, FAQ ou zones informatives.  | Le bleu profond fonctionne très bien en texte.                                                         |
| **Olive**         | \#5C6B50            | Petits labels, traits, icônes, détails végétaux.           | Peut servir de texte sur ivoire ; vérifier les états de composants.                                    |
| **Ocre solaire**  | \#D39A42            | Accent graphique, repères, icônes et CTA secondaire ciblé. | Éviter le texte blanc et le petit texte ocre sur fond clair ; préférer du texte bleu profond sur ocre. |
| **Bordure douce** | \#CBD4D8            | Bordures de cartes, séparateurs et champs.                 | La bordure est décorative ; ne pas s’en servir seule pour communiquer un état.                         |

Repères de contraste calculés sur les valeurs initiales : bleu profond sur ivoire ≈ 12,2:1 ; olive sur ivoire ≈ 5,4:1 ; bleu profond sur ocre ≈ 5,2:1. L’ocre sur ivoire n’atteint qu’environ 2,3:1 : ne pas l’utiliser pour du texte courant. Vérifier les contrastes définitifs selon WCAG 2.2 AA sur les états normaux, hover, focus, disabled et erreurs.

## 13.2 Typographie — option 3 retenue pour la maquette

Titres : Fraunces (Google Fonts). Corps de texte, navigation, boutons, formulaires et labels : Manrope (Google Fonts). Ce duo donne un caractère éditorial et chaleureux sans sacrifier la clarté des contenus pratiques.

- Fraunces : titres H1/H2 et quelques accroches seulement. Éviter les longs paragraphes, les menus et les textes de petite taille dans cette fonte.

- Manrope : tout le texte fonctionnel. Viser 16 px minimum pour le corps sur ordinateur et mobile, avec une hauteur de ligne autour de 1,5.

- Échelle de départ : H1 42–56 px desktop et 32–40 px mobile ; H2 30–36 px desktop et 26–30 px mobile ; H3 20–24 px ; corps 16–18 px ; labels 12–14 px uniquement si leur contraste et leur lecture restent confortables.

- Limiter le nombre de graisses chargées à celles réellement utilisées. Charger les polices via les liens Google Fonts plutôt que par @import, utiliser font-display: swap et vérifier le rendu avec un réseau lent.

## 13.3 Motifs, iconographie et image

- Motifs possibles : soleil géométrique, cyprès stylisé ou lignes topographiques très légères. Les utiliser ponctuellement dans le hero, en illustration de section ou dans le pied de page.

- Les motifs restent décoratifs et à faible contraste ; jamais derrière un paragraphe, un formulaire ou un bouton. Éviter les textures lourdes et les animations superflues.

- Préférer une photographie authentique de Corentin ou de son travail, si elle est disponible et pertinente. À défaut, utiliser une illustration simple plutôt qu’une photo générique pouvant laisser croire qu’elle représente l’artisan.

- Les icônes doivent être familières et cohérentes. Toujours accompagner une icône seule d’un libellé si son sens pourrait être ambigu.

## 13.4 Composition de page et principes UX

- Hero : métier et localisation, promesse claire, CTA principal « Appeler Corentin », CTA secondaire « Demander un devis ». Ne pas afficher de délais de réponse ou de disponibilité tant qu’ils ne sont pas confirmés.

- Services : deux ou trois blocs maximum sur l’accueil, reprenant exclusivement les prestations réellement proposées et renvoyant vers les pages correspondantes.

- Confiance : présentation directe de l’artisan, explication de la manière de travailler et preuves vérifiables seulement (assurance, avis authentiques, photos réelles).

- Sécurité : conseils prudents en cas de panne, sans inviter à ouvrir un tableau ou à manipuler des conducteurs.

- Zone d’intervention : formulation prudente jusqu’à validation de la liste et des frais éventuels.

- FAQ courte puis CTA de contact final. Sur mobile, privilégier une action d’appel immédiatement accessible sans faire couvrir le contenu par une barre fixe trop haute.

Alternance de fonds : ivoire pour les grandes zones de lecture, bleu grisé pour une section sur deux, bleu profond réservé au contact final et au pied de page. L’ocre sert d’accent, pas de fond dominant. Garder une grille, des espacements et des rayons de composants cohérents ; ne pas mettre chaque section dans une carte.

# 14. Arbitrage technique — formulaire et architecture

L’architecture Astro en rendu statique reste recommandée pour le contenu et le SEO. Le point à décider est le traitement du formulaire : un endpoint statique ne suffit pas à envoyer une demande à chaque soumission utilisateur. Il faut un service de formulaire compatible ou un endpoint exécuté côté serveur. Le déploiement de routes à la demande dans Astro sur Vercel nécessite le mode et l’adaptateur appropriés ; ce choix doit être fait avant l’implémentation.

## 14.1 Recommandation pour le MVP

- Choisir avant le développement un service de formulaire compatible avec un site statique, ou une route serveur Vercel si une maîtrise plus fine est nécessaire. Vérifier la délivrabilité des e-mails, la politique de données, les sous-traitants, les coûts et les protections anti-spam.

- Ne pas prévoir de téléversement de photos en V1 par défaut. Cette fonction ajoute de la validation de fichiers, du stockage, des limites de taille, une politique de conservation et des risques de sécurité. La réintroduire seulement si le besoin métier est confirmé.

- Limiter les champs : nom, téléphone, motif de contact et message court. L’e-mail peut être facultatif si le téléphone est le canal prioritaire. Indiquer les champs obligatoires clairement.

- Prévoir validation serveur lorsqu’un endpoint serveur est utilisé, anti-spam, messages d’erreur compréhensibles, confirmation uniquement après réception réelle et test d’envoi jusqu’à la boîte destinataire.

- Aucune base de données n’est nécessaire par défaut si le formulaire transmet la demande à un service adapté sans historique applicatif. Documenter toutefois où les informations sont traitées et combien de temps elles sont conservées.

Documentation technique officielle : Astro — endpoints serveur ; Vercel — framework Astro. Voir les liens dans la section « Références de vérification ».

# 15. Mesure de la réussite et SEO local

Le site doit être évalué sur les contacts utiles générés, pas uniquement sur le trafic. Les outils de mesure seront configurés de façon minimale et conformément aux règles de confidentialité applicables.

- Indicateur principal : clics sur les liens téléphone (événement tel:), à interpréter avec prudence car un clic ne prouve pas qu’un appel a abouti.

- Indicateurs secondaires : envois de formulaires confirmés, clics e-mail éventuels et clics depuis les pages Dépannage et Installation vers le contact.

- Search Console et fiche d’établissement Google si disponibles ; vérifier l’indexation, les pages exclues et les requêtes réellement observées après mise en ligne.

- Le balisage LocalBusiness doit contenir uniquement les données exactes et publiques. Ne pas créer une page par commune sans service réel et contenu différencié.

- Les valeurs de Core Web Vitals restent des cibles, pas une garantie au lancement : LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1, évalués au 75e percentile lorsque les données terrain existent.

# 16. Critères d’acceptation avant publication

- Le numéro public est confirmé et tous les boutons d’appel utilisent le bon lien tel: sur mobile.

- Les pages, CTA, liens internes, navigation clavier, focus visible et états de formulaire ont été testés.

- Les couleurs et états interactifs respectent les contrastes WCAG 2.2 AA ; le zoom à 200 % ne masque ni ne fait perdre de fonctionnalité.

- Le formulaire a été soumis avec succès sur le site déployé ; les cas invalide, anti-spam, échec réseau et échec d’envoi ont des comportements vérifiés.

- Aucun numéro, délai de réponse, prix, garantie, avis, certification, photo ou commune n’est inventé ou publié sans validation.

- Les mentions légales, la politique de confidentialité et l’information au niveau du formulaire sont prêtes et cohérentes avec le service réellement utilisé.

- Les balises title, descriptions, H1, canonical, sitemap.xml, robots.txt et données structurées ont été contrôlés.

- Build de production réussi ; pas d’erreur console bloquante ; contrôle sur téléphone, tablette et ordinateur ; images optimisées.

- Les performances mesurées et les limites connues sont notées ; aucun script ou outil de suivi superflu n’est ajouté.

# 17. Décisions à verrouiller — par ordre de priorité

| **Priorité**            | **Décision à prendre**                    | **Recommandation actuelle**                                                              |
|-------------------------|-------------------------------------------|------------------------------------------------------------------------------------------|
| **Bloquant**            | Téléphone, e-mail et nom commercial exact | Confirmer les coordonnées publiques avant maquette finale et intégration.                |
| **Bloquant**            | Prestations réellement proposées          | Retenir uniquement dépannage, recherche de panne et installations confirmées.            |
| **Bloquant**            | Conditions du devis et frais éventuels    | Employer « Demander un devis » tant que la gratuité exacte n’est pas définie.            |
| **Bloquant**            | Service du formulaire et destinataire     | Choisir et tester le mécanisme de transmission avant le développement.                   |
| **Bloquant**            | Zone géographique opérationnelle          | Valider les communes, les déplacements et les exceptions.                                |
| **Bloquant**            | Identité et preuves de confiance          | Valider assurance, garanties, qualifications, avis et photos authentiques.               |
| **Design**              | Palette et typographies                   | Valider « Provence contemporaine », Fraunces + Manrope après revue Figma et contraste.   |
| **Après mise en ligne** | Optimisation SEO / contenu additionnel    | Décider à partir des données de recherche, des retours clients et de la capacité réelle. |

# 18. Maquette visuelle — référence de discussion

La maquette ci-dessous illustre la hiérarchie, l’alternance des fonds, l’usage des motifs provençaux et le duo typographique Fraunces + Manrope. Elle n’est pas une maquette finale ni une source de vérité pour les textes métier.

*(Maquette conceptuelle de la V1.1 non reprise ici : palette et contenus remplacés depuis.)*

*Concept visuel généré — pour discussion uniquement. Le numéro affiché (06 12 34 56 78), le délai « 24 à 48 h », la gratuité du devis, les formulations de disponibilité et les visuels de personne/paysage sont illustratifs et doivent être remplacés ou validés avant tout usage public.*

# Références de vérification

- [<u>Documentation Astro — endpoints et API routes</u>](https://docs.astro.build/en/guides/endpoints/)

- [<u>Documentation Vercel — framework Astro</u>](https://vercel.com/docs/frameworks/frontend/astro)

- [<u>W3C — Web Content Accessibility Guidelines (WCAG) 2.2</u>](https://www.w3.org/TR/WCAG22/)

- [<u>CNIL — informer les personnes et assurer la transparence</u>](https://cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence)

- [<u>Google Fonts — Fraunces</u>](https://fonts.google.com/specimen/Fraunces)

- [<u>Google Fonts — Manrope</u>](https://fonts.google.com/specimen/Manrope)
