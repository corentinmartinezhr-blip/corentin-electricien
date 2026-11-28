// Liste des chantiers de la rubrique Réalisations : une entrée par page de src/pages/realisations/.
// Seule source des cartes (catalogue /realisations/ et page Installation).
import { photosCuisine } from './photos-renovation-cuisine';
import { dossierSalon, photosSalon } from './photos-electricite-salon';
import { dossierTableau, photosTableau } from './photos-remplacement-tableau';

const couvertureCuisine = photosCuisine['terminee-17-vue-plan-de-travail-vers-salon'];
const couvertureSalon = photosSalon['couverture-avant-apres'];
const couvertureTableau = photosTableau['04-apres-ouvert-cables-ranges'];
// « installation » = chantier montré aussi sur la page Installation (cartes, sans recopier le texte du chantier).
// Lave-linge Miele mis de côté le 28/11/2026 (électroménager retiré du site) : voir docs/de-cote.md.
export const chantiers = [
  {
    url: '/realisations/renovation-cuisine/',
    installation: true,
    titre: 'Rénovation complète d’une cuisine',
    // Étiquettes et résumé centrés sur l'électricité (demande de Corentin, 28/11/2026) : plomberie, faïence et pose
    // de cuisine ne sont pas couvertes par sa décennale, elles ne doivent pas ressembler à des services proposés.
    resume: 'Ma propre cuisine, refaite de A à Z : prises, bandeaux LED sous les meubles et ventilateur de plafond. Le chantier étape par étape.',
    travaux: ['Prises', 'Éclairage LED', 'Ventilateur de plafond', 'Interrupteurs'],
    image: `/realisations/renovation-cuisine/${couvertureCuisine.fichier}-960.webp`,
    alt: couvertureCuisine.alt,
    // Version 960 px : mêmes proportions que l'originale.
    largeur: 960,
    hauteur: Math.round((960 * couvertureCuisine.hauteur) / couvertureCuisine.largeur),
  },
  {
    url: '/realisations/electricite-salon/',
    installation: true,
    titre: 'Électricité encastrée dans un salon',
    resume: 'Deux points d’interrupteurs en va-et-vient et un nouveau circuit de prises, passés dans le mur : avant, plâtre, après.',
    travaux: ['Va-et-vient', 'Interrupteurs', 'Prises encastrées'],
    image: `${dossierSalon}/${couvertureSalon.fichier}-960.webp`,
    alt: couvertureSalon.alt,
    // Version 960 px (photo en largeur) : mêmes proportions que l'originale.
    largeur: 960,
    hauteur: Math.round((960 * couvertureSalon.hauteur) / couvertureSalon.largeur),
  },
  {
    url: '/realisations/remplacement-tableau-electrique/',
    installation: true,
    titre: 'Remplacement d’un tableau électrique',
    resume: 'À Villeneuve-lès-Avignon, une maison sans terre : nouveau tableau, terre sur tous les circuits et différentiels 30 mA.',
    travaux: ['Tableau électrique', 'Mise à la terre', 'Sécurité'],
    image: `${dossierTableau}/${couvertureTableau.fichier}-960.webp`,
    alt: couvertureTableau.alt,
    // Version 960 px (photo en hauteur) : le plus grand côté fait 960 px.
    largeur: Math.round((960 * couvertureTableau.largeur) / couvertureTableau.hauteur),
    hauteur: 960,
  },
];
