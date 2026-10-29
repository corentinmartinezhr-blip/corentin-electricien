// Tarifs affichés, validés par Corentin le 29/10/2026 (voir le benchmark dans les documents du projet).
// Seule source des prix du site : la loi impose de les afficher, et ils servent de plafond
// (une remise est possible, jamais un prix plus élevé que l'affichage).

export interface LigneTarif {
  prestation: string;
  detail?: string;
  prix: string;
}

export const tauxHoraires: LigneTarif[] = [
  { prestation: 'Journée', detail: 'Du lundi au samedi, 7h–19h', prix: '65 € / h' },
  { prestation: 'Soir', detail: '19h–22h (+25 %)', prix: '81 € / h' },
  { prestation: 'Dimanche et jours fériés', detail: '+50 %', prix: '97 € / h' },
];

export const deplacements: LigneTarif[] = [
  { prestation: 'Avignon', prix: '35 €' },
  { prestation: 'Autres communes de la zone', prix: '49 €' },
];

// Forfaits : chaque prestation est définie une seule fois, puis regroupée par page.
const recherchePanne: LigneTarif = {
  prestation: 'Recherche de panne',
  detail: "Jusqu'à 1 h, hors déplacement",
  prix: '110 €',
};
const disjoncteur: LigneTarif = {
  prestation: "Remplacement d'un disjoncteur",
  detail: 'Main-d’œuvre, hors matériel',
  prix: '75 €',
};
const priseInterrupteur: LigneTarif = {
  prestation: "Pose ou remplacement d'une prise ou d'un interrupteur",
  detail: 'Main-d’œuvre, hors matériel',
  prix: '65 €',
};
const luminaire: LigneTarif = {
  prestation: "Pose d'un luminaire ou d'un plafonnier",
  detail: 'Main-d’œuvre, hors matériel',
  prix: '85 €',
};
const tableau: LigneTarif = { prestation: 'Remplacement du tableau électrique', prix: 'Sur devis' };
const priseVehicule: LigneTarif = {
  prestation: 'Prise renforcée pour véhicule électrique',
  detail: 'Jusqu’à 3,7 kW',
  prix: 'Sur devis',
};

// Petites installations : forfaits validés le 29/10/2026 (benchmark complété dans les documents du projet).
const mainOeuvre = 'Main-d’œuvre, hors matériel';
const detecteurFumee: LigneTarif = { prestation: "Pose d'un détecteur de fumée", detail: mainOeuvre, prix: '45 €' };
const radiateur: LigneTarif = {
  prestation: "Pose ou remplacement d'un radiateur ou d'un sèche-serviettes",
  detail: mainOeuvre,
  prix: '85 €',
};
const thermostat: LigneTarif = {
  prestation: "Pose d'un thermostat ou d'un programmateur de radiateur",
  detail: mainOeuvre,
  prix: '75 €',
};
const priseReseau: LigneTarif = { prestation: "Pose d'une prise RJ45 ou TV", detail: mainOeuvre, prix: '65 €' };
const eclairageExterieur: LigneTarif = {
  prestation: "Éclairage extérieur ou détecteur de présence",
  detail: 'Sur une alimentation existante, hors matériel',
  prix: '85 €',
};
const interphone: LigneTarif = { prestation: 'Interphone ou visiophone', prix: 'Sur devis' };
const circuitDedie: LigneTarif = {
  prestation: 'Circuit dédié (plaque, four, lave-linge…)',
  detail: 'Tirage de câble depuis le tableau',
  prix: 'Sur devis',
};

/** Une grille de forfaits avec son titre (une page peut en afficher plusieurs). */
export interface GroupeForfaits {
  titre: string;
  lignes: LigneTarif[];
}

export const forfaitsDepannage: GroupeForfaits[] = [
  { titre: 'Forfaits dépannage', lignes: [recherchePanne, disjoncteur, priseInterrupteur, tableau] },
];

export const forfaitsInstallation: GroupeForfaits[] = [
  {
    titre: 'Prises, éclairage et circuits',
    lignes: [priseInterrupteur, priseReseau, luminaire, eclairageExterieur, circuitDedie, priseVehicule, tableau],
  },
  { titre: 'Chauffage, sécurité et confort', lignes: [radiateur, thermostat, detecteurFumee, interphone] },
];

export const diagnosticElectromenager: LigneTarif = {
  prestation: 'Diagnostic électroménager',
  detail: 'Déplacement inclus',
  prix: '65 €',
};

// Conditions à afficher (arrêté du 24 janvier 2017), confirmées par Corentin le 29/10/2026.
export const conditions = {
  decompte: "La première heure est due en entier, puis le temps est compté par quart d'heure entamé.",
  devis: 'Le devis est gratuit et vous est remis par écrit avant toute intervention.',
  materiel: 'Le matériel est facturé en plus, au prix indiqué sur le devis.',
  tva: 'TVA non applicable, art. 293 B du CGI.',
};
