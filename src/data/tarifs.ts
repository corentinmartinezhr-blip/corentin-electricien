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
      { prestation: 'Prise RJ45 ou TV', prix: '65 €' },
      { prestation: 'Luminaire ou plafonnier', prix: '85 €' },
      { prestation: 'Éclairage extérieur ou détecteur de présence', detail: 'Sur une alimentation existante', prix: '85 €' },
      { prestation: 'Circuit dédié (plaque, four, lave-linge…)', detail: 'Tirage de câble depuis le tableau', prix: 'Sur devis' },
      { prestation: 'Prise renforcée pour véhicule électrique', detail: 'Jusqu’à 3,7 kW', prix: 'Sur devis' },
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
  prestation: 'Diagnostic électroménager',
  detail: 'Déplacement inclus',
  prix: '65 €',
};

// ---------- Dépannage : un forfait unique (défini par Corentin le 29/10/2026) ----------
const euros = (montant: number) =>
  `${montant.toLocaleString('fr-FR', { minimumFractionDigits: Number.isInteger(montant) ? 0 : 2 })}\u00a0€`; // espace insécable : jamais « 89 » et « € » sur deux lignes

const PRIX_DEPANNAGE = 89;

export const offreDepannage = {
  prix: euros(PRIX_DEPANNAGE),
  titre: 'Déplacement et diagnostic de panne',
  inclus: [
    'Du lundi au samedi, en journée (7h–19h).',
    'Déplacement inclus dans tout Avignon.',
    "Jusqu'à une heure sur place pour rechercher et identifier la panne.",
    'Devis de réparation gratuit, avant tout travail supplémentaire.',
  ],
  supplements: [
    { prestation: 'Soir', detail: '19h–22h (+25 %)', prix: euros(PRIX_DEPANNAGE * 1.25) },
    { prestation: 'Dimanche et jours fériés', detail: '+50 %', prix: euros(PRIX_DEPANNAGE * 1.5) },
    { prestation: 'Autres communes de la zone', detail: 'Supplément de déplacement', prix: '+30 €' },
  ] satisfies LigneTarif[],
  // Taux horaire : affichage obligatoire pour le dépannage (arrêté du 24 janvier 2017).
  reparation: "Réparation au-delà du diagnostic : 65 € de l'heure, comptée par quart d'heure entamé, toujours sur devis accepté.",
  piecesEtSuite:
    'Pièces, réparation et éventuel second déplacement sont facturés selon le devis accepté.',
};

// ---------- Installation ----------
export const deplacementInstallation =
  'Déplacement offert dans tout Avignon, 49 € dans les autres communes de la zone.';

// Mentions communes.
export const mentionTva = 'Prix nets, TVA non applicable (art. 293 B du CGI).';
