// Prix TTC (demande de Corentin, 30/10/2026 : pas de mention de TVA sur le site, franchise non confirmée).
// Tarifs affichés, définis par Corentin le 30/10/2026 (tarif normal, plus d'« offre de lancement »). Seule source des prix du site : la loi impose de les afficher, et ils servent
// de plafond (une remise est possible, jamais un prix plus élevé que l'affichage).
// Règle unique, pour le dépannage, l'électroménager et l'installation : déplacement et devis gratuits,
// main-d'œuvre 65 € de l'heure (1 heure minimum, puis par quart d'heure), matériel ou pièces en plus.

export interface LigneTarif {
  prestation: string;
  detail?: string;
  prix: string; // colonne de droite : un prix, ou un temps estimé pour l'installation
}

/** Une grille avec son titre (une page peut en afficher plusieurs). */
export interface GroupeForfaits {
  titre: string;
  lignes: LigneTarif[];
}

const euros = (montant: number) =>
  `${montant.toLocaleString('fr-FR', { minimumFractionDigits: Number.isInteger(montant) ? 0 : 2 })} €`; // espace insécable : jamais « 65 » et « € » sur deux lignes

const TAUX_HORAIRE = 65;
const parHeure = (montant: number) => `${euros(montant)} / h`;

export const decompteTemps = "1 heure minimum, puis par quart d'heure";

// ---------- Dépannage ----------
// Affichage obligatoire pour le dépannage (arrêté du 24 janvier 2017) : taux horaire, frais de
// déplacement et façon de compter le temps.
export const offreDepannage = {
  prix: euros(TAUX_HORAIRE),
  unite: "TTC de l'heure",
  titre: 'Main-d’œuvre, pièces en plus',
  // Engagement de Corentin (29/10/2026, gardé le 30/10/2026) : en gras en haut de page et en fin de liste.
  promesse: 'Pas de facturation si je ne trouve pas la panne.',
  inclus: [
    'Déplacement gratuit à vélo électrique, à Avignon et dans les villes proches.',
    `Je compte seulement le temps de travail (recherche et réparation) : ${decompteTemps}.`,
    'Les pièces à changer sont en plus.',
    'Réparation longue : je vous donne d’abord un devis gratuit.',
  ],
  horaires: [
    { prestation: 'Du lundi au samedi', detail: '7h–19h', prix: parHeure(TAUX_HORAIRE) },
    { prestation: 'Soir', detail: '19h–22h (+25 %)', prix: parHeure(TAUX_HORAIRE * 1.25) },
    { prestation: 'Dimanche et jours fériés', detail: '7h–22h (+50 %)', prix: parHeure(TAUX_HORAIRE * 1.5) },
  ] satisfies LigneTarif[],
  // Mis en avant sous la carte : c'est ce qui fait comprendre le tarif d'un coup d'œil.
  exemple: {
    situation: 'Une prise grillée, trouvée et réparée en 40 minutes',
    prix: `${euros(TAUX_HORAIRE)} + le prix de la prise`,
  },
};

// ---------- Électroménager : même règle que le dépannage ----------
export const tarifElectromenager: LigneTarif[] = [
  { prestation: 'Déplacement et devis', prix: 'Gratuits' },
  { prestation: 'Main-d’œuvre (TTC)', detail: decompteTemps, prix: parHeure(TAUX_HORAIRE) },
  { prestation: 'Pièces à changer', prix: 'En plus' },
];

// ---------- Installation : temps estimés (Corentin, 30/10/2026), facturés au taux horaire ----------
export const tauxInstallation = `${euros(TAUX_HORAIRE)} TTC`;

export const interventionsInstallation: GroupeForfaits[] = [
  {
    titre: 'Petits travaux : 1 heure ou moins',
    lignes: [
      { prestation: 'Remplacer une prise ou un interrupteur', prix: 'Moins d’1 h' },
      { prestation: 'Ajouter une prise', detail: 'À côté d’une prise qui existe déjà', prix: 'Environ 1 h' },
      { prestation: 'Prise internet (RJ45) ou TV', detail: 'Remplacement', prix: 'Moins d’1 h' },
      { prestation: 'Remplacer une lampe ou un plafonnier', prix: 'Moins d’1 h' },
      { prestation: 'Lumière extérieure ou détecteur de présence', detail: 'Là où un fil électrique arrive déjà', prix: 'Environ 1 h' },
      { prestation: 'Remplacer un radiateur ou un sèche-serviettes', prix: 'Environ 1 h' },
      { prestation: 'Thermostat ou programmateur de radiateur', prix: 'Moins d’1 h' },
      { prestation: 'Détecteur de fumée', prix: 'Moins d’1 h' },
    ],
  },
  {
    titre: 'Plus gros travaux : sur devis',
    lignes: [
      { prestation: 'Ajouter une prise là où il n’y a pas de fil', prix: '2 à 4 h' },
      { prestation: 'Interphone ou visiophone', prix: '2 à 4 h' },
      { prestation: 'Ligne dédiée (plaque, four, lave-linge…)', detail: 'Un nouveau câble depuis le tableau', prix: '4 à 8 h' },
      { prestation: 'Prise renforcée pour voiture électrique', detail: 'Jusqu’à 3,7 kW', prix: '4 à 8 h' },
      { prestation: 'Remplacement du tableau électrique', prix: '1 à 2 jours' },
    ],
  },
];

