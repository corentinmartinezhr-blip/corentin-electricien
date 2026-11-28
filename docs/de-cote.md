# Mis de côté

Ce qui a été retiré du site sans être effacé, pour pouvoir le remettre facilement.

## Réparation d'électroménager (28/11/2026)

Décision de Corentin : se concentrer d'abord sur le dépannage électrique d'urgence (son premier appel venait de là).
Autre raison : son assurance (ERGO, signée le 26/11/2026) ne déclare que l'électricité ; à vérifier avec le courtier
avant de reproposer l'électroménager.

Ce qui est gardé, prêt à resservir :

- `src/components/depannage/Electromenager.astro` : la section de la page Dépannage (appareils, tarif, lien vers le lave-linge).
- `src/data/tarifs.ts` : `tarifElectromenager`.
- `src/components/Icone.astro` : l'icône `electromenager`.
- `src/de-cote/realisations/depannage-lave-linge-miele.astro` : la page du lave-linge Miele (hors de `src/pages/`, donc plus
  construite : l'adresse `/realisations/depannage-lave-linge-miele/` répond « page introuvable »). Ses photos sont rangées dans
  `src/de-cote/photos/depannage-lave-linge-miele/` (hors de `public/`, donc plus servies : sinon le serveur affichait
  la liste des fichiers du dossier à cette adresse), ses données dans `src/data/photos-depannage-lave-linge.ts`, son
  diagnostic dans `src/components/realisations/lave-linge/Diagnostic.astro`.

Pour tout remettre :

1. Page Dépannage : réimporter `Electromenager` et le placer après la zone (et revoir l'alternance des fonds :
   `BonsReflexes` repasse en brume, `FaqUrgence` en ivoire).
2. Accueil : la carte « Électroménager » dans `Services.astro` (lien `/depannage-electrique-avignon/#electromenager`),
   la question « Réparez-vous l'électroménager ? » dans `accueil/Faq.astro`.
3. Formulaire : « Électroménager » dans `typesDemande` (`Formulaire.astro`) ET dans `TYPES_DEMANDE` (`envoyer.php`).
4. `entreprise.ts` : `activite` (mentions légales).
5. Lave-linge : remettre la page dans `src/pages/realisations/`, ses photos dans `public/realisations/depannage-lave-linge-miele/`
   et sa carte dans `src/data/chantiers.ts`.
