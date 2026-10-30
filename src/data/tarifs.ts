// Tarifs affichés, validés par Corentin le 29/10/2026 (voir le benchmark dans les documents du projet).
// Seule source des prix du site : la loi impose de les afficher, et ils servent de plafond
// (une remise est possible, jamais un prix plus élevé que l'affichage).

export interface LigneTarif {
  prestation: string;
  detail?: string;
  prix: string;
}

// ---------- Installation : forfaits de main-d'œuvre (validés le 29/10/2026) ----------
// Chaque prix couvre la prestation complète (pose, raccordement, vérification), matériel en plus.
// Cette règle est expliquée une seule fois sur la page, au-dessus des grilles.

/** Une grille de forfaits avec son titre (une page peut en afficher plusieurs). */
export interface GroupeForfaits {
  titre: string;
  lignes: LigneTarif[];
}

export const forfaitsInstallation: GroupeForfaits[] = [
  {
    titre: 'Prises, éclairage et circuits',
    lignes: [
      { prestation: 'Prise ou interrupteur', detail: 'Pose ou remplacement', prix: '65 €' },
      { prestation: 'Prise internet (RJ45) ou TV', prix: '65 €' },
      { prestation: 'Lampe ou plafonnier', prix: '85 €' },
      { prestation: 'Lumière extérieure ou détecteur de présence', detail: 'Là où un fil électrique arrive déjà', prix: '85 €' },
      { prestation: 'Ligne dédiée (plaque, four, lave-linge…)', detail: 'Un nouveau câble depuis le tableau', prix: 'Sur devis' },
      { prestation: 'Prise renforcée pour voiture électrique', detail: 'Jusqu’à 3,7 kW', prix: 'Sur devis' },
      { prestation: 'Remplacement du tableau électrique', prix: 'Sur devis' },
    ],
  },
  {
    titre: 'Chauffage, sécurité et confort',
    lignes: [
      { prestation: 'Radiateur ou sèche-serviettes', detail: 'Pose ou remplacement', prix: '85 €' },
      { prestation: 'Thermostat ou programmateur de radiateur', prix: '75 €' },
      { prestation: 'Détecteur de fumée', prix: '45 €' },
      { prestation: 'Interphone ou visiophone', prix: 'Sur devis' },
    ],
  },
];

export const diagnosticElectromenager: LigneTarif = {
  prestation: 'Recherche de panne sur un appareil',
  detail: 'Déplacement inclus',
  prix: '65 €',
};

// ---------- Dépannage : un forfait unique (défini par Corentin le 29/10/2026) ----------
const euros = (montant: number) =>
  `${montant.toLocaleString('fr-FR', { minimumFractionDigits: Number.isInteger(montant) ? 0 : 2 })}\u00a0€`; // espace insécable : jamais « 89 » et « € » sur deux lignes

const PRIX_DEPANNAGE = 89;
// Engagement de Corentin (29/10/2026) : affiché en gras dans le haut de la page Dépannage et en fin de forfait.
const PROMESSE_DEPANNAGE = 'Pas de facturation si je ne trouve pas la panne.';

export const offreDepannage = {
  prix: euros(PRIX_DEPANNAGE),
  promesse: PROMESSE_DEPANNAGE,
  titre: 'Déplacement et recherche de panne',
  inclus: [
    'Du lundi au samedi, en journée (7h–19h).',
    'Déplacement inclus dans tout Avignon.',
    "Jusqu'à une heure sur place pour trouver la panne.",
    'Si je répare la panne dans cette heure, vous payez seulement les pièces en plus.',
    'Si la réparation prend plus de temps, je vous donne d’abord un devis gratuit.',
    PROMESSE_DEPANNAGE,
  ],
  supplements: [
    { prestation: 'Soir', detail: '19h–22h (+25 %)', prix: euros(PRIX_DEPANNAGE * 1.25) },
    { prestation: 'Dimanche et jours fériés', detail: '+50 %', prix: euros(PRIX_DEPANNAGE * 1.5) },
    { prestation: 'Autres communes de la zone', detail: 'Supplément de déplacement', prix: '+30 €' },
  ] satisfies LigneTarif[],
  // Taux horaire : affichage obligatoire pour le dépannage (arrêté du 24 janvier 2017).
  reparation:
    "Après la première heure\u00a0: 65\u00a0€ de l'heure, comptés par tranche de 15 minutes commencée, et seulement si vous avez accepté le devis.",
  piecesEtSuite: 'Les pièces et un éventuel deuxième passage sont en plus, comme écrit sur le devis.',
};

// ---------- Installation ----------
export const deplacementInstallation =
  'Déplacement offert dans tout Avignon, 30 € dans les autres communes de la zone.';

// Mentions communes.
export const mentionTva = 'Prix nets\u00a0: pas de TVA en plus (TVA non applicable, art. 293 B du CGI).';
