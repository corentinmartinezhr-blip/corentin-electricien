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

export const forfaitsDepannage: LigneTarif[] = [
  { prestation: 'Recherche de panne', detail: "Jusqu'à 1 h, hors déplacement", prix: '110 €' },
  { prestation: "Remplacement d'un disjoncteur", detail: 'Main-d’œuvre, hors matériel', prix: '75 €' },
  {
    prestation: "Remplacement d'une prise ou d'un interrupteur",
    detail: 'Main-d’œuvre, hors matériel',
    prix: '65 €',
  },
  { prestation: 'Remplacement du tableau électrique', prix: 'Sur devis' },
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
