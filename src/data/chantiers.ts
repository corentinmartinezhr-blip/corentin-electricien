// Liste des chantiers de la rubrique Réalisations : une entrée par page de src/pages/realisations/.
// Seule source des cartes (catalogue /realisations/ et page Installation).
import { photosCuisine } from './photos-renovation-cuisine';
import { dossierLaveLinge, photosLaveLinge } from './photos-depannage-lave-linge';
import { dossierSalon, photosSalon } from './photos-electricite-salon';
import { dossierTableau, photosTableau } from './photos-remplacement-tableau';

const couvertureCuisine = photosCuisine['terminee-17-vue-plan-de-travail-vers-salon'];
const couvertureLaveLinge = photosLaveLinge['01-machine-ouverte-par-le-dessus'];
const couvertureSalon = photosSalon['couverture-avant-apres'];
const couvertureTableau = photosTableau['04-apres-ouvert-cables-ranges'];
// « installation » = chantier montré aussi sur la page Installation (cartes, sans recopier le texte du chantier).
export const chantiers = [
  {
    url: '/realisations/renovation-cuisine/',
    installation: true,
    titre: 'Rénovation complète d’une cuisine',
    resume: 'Électricité, plomberie, ouverture sur le salon, pose des meubles et faïence : le chantier étape par étape.',
    travaux: ['Électricité', 'Plomberie', 'Pose de cuisine', 'Faïence'],
    image: `/realisations/renovation-cuisine/${couvertureCuisine.fichier}-960.webp`,
    alt: couvertureCuisine.alt,
    // Version 960 px : mêmes proportions que l'originale.
    largeur: 960,
    hauteur: Math.round((960 * couvertureCuisine.hauteur) / couvertureCuisine.largeur),
  },
  {
    url: '/realisations/depannage-lave-linge-miele/',
    installation: false,
    titre: 'Dépannage d’un lave-linge Miele',
    resume: 'Une pompe qui vidangeait sans arrêt : le diagnostic pas à pas, jusqu’à la corrosion sur la carte. Aucune pièce changée.',
    travaux: ['Dépannage', 'Électroménager', 'Diagnostic'],
    image: `${dossierLaveLinge}/${couvertureLaveLinge.fichier}-960.webp`,
    alt: couvertureLaveLinge.alt,
    // Version 960 px : le plus grand côté fait 960 px.
    largeur: Math.round((960 * couvertureLaveLinge.largeur) / couvertureLaveLinge.hauteur),
    hauteur: 960,
  },
  {
    url: '/realisations/electricite-salon/',
    installation: true,
    titre: 'Électricité encastrée dans un salon',
    resume: 'Deux points d’interrupteurs en va-et-vient et un nouveau circuit de prises, passés dans le mur : avant, plâtre, après.',
    travaux: ['Électricité', 'Interrupteurs', 'Prises'],
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
