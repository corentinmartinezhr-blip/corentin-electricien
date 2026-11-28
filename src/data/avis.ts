// Avis Google de Corentin, recopiés à la main depuis sa fiche (captures d'écran envoyées par Corentin).
// Pas de widget ni d'appel à Google : aucun cookie, aucun traceur, et les avis restent ceux publiés sur la fiche.
// Règles (Code de la consommation, art. L111-7-2 et D111-17) : ne jamais modifier le texte d'un avis, toujours
// dire comment ils sont choisis, garder leur date, et mener vers tous les avis (lien de la fiche Google).
// Pour ajouter un avis : une entrée ci-dessous (date au format AAAA-MM-JJ), puis mettre à jour « bilan ».

export interface Avis {
  /** Prénom et initiale du nom, comme sur Google (ex. « Camille M. »). */
  auteur: string;
  /** Date de publication sur Google, AAAA-MM-JJ. */
  date: string;
  /** Nombre d'étoiles (1 à 5). */
  note: number;
  /** false : avis gardé ici mais pas montré sur l'accueil (choix de Corentin). */
  affiche?: boolean;
  /** true : avis laissé après un dépannage, montré sur la page Dépannage (choix de Corentin). */
  depannage?: boolean;
  /** Texte exact de l'avis, sans retouche. Paragraphes séparés par une ligne vide (\n\n), retour à la ligne : \n. */
  texte: string;
}

// Note moyenne et nombre total d'avis affichés sur la fiche Google (à recopier à chaque ajout).
export const bilan = { note: 5, nombre: 6 };

export const avis: Avis[] = [
  // Dates déduites de « il y a 3 jours » et « il y a 4 jours » sur les captures du 28/11/2026 (seul le mois s'affiche).
  {
    auteur: 'Agathe A.',
    date: '2026-11-25',
    note: 5,
    affiche: false, // l'accueil garde les 3 avis choisis par Corentin
    depannage: true,
    texte:
      "Merci à Corentin d'être intervenu rapidement chez moi : mes disjoncteurs sautaient sans arrêt, il a trouvé l'origine de la panne et tout est rentré dans l'ordre. Travail propre, explications claires. Je recommande !",
  },
  {
    auteur: 'Maxime S.',
    date: '2026-11-24',
    note: 5,
    affiche: false, // l'accueil garde les 3 avis choisis par Corentin
    depannage: true,
    texte: 'Intervention plus que rapide !\nDétection de panne d’un chauffe eau et réparation dans l’heure, merci beaucoup !!',
  },
  {
    auteur: 'Elsa B.',
    date: '2026-11-23',
    note: 5,
    texte:
      "Corentin est très réactif et sérieux, il a été transparent tout au long de l'intervention. Merci encore Corentin !",
  },
  {
    auteur: 'Singe L.',
    date: '2026-11-20',
    note: 5,
    affiche: false, // Corentin préfère montrer l'avis de Moara (23/11/2026)
    texte:
      "J'ai fait appel à Corentin pour des problèmes de branchement et de fonctionnement d'appareils professionnels demandant des compétences que je n'ai pas et il a été très efficace, il m'a tout expliqué et m'a même donné des conseils.\nÀ la fois sympathique et compétent je le recommande chaudement !",
  },
  {
    auteur: 'Rudy S.',
    date: '2026-11-17',
    note: 5,
    texte:
      "Je recommande vivement Corentin. Appelé puis rencontré a la maison en une journée. Un devis détaillé est envoyé le lendemain pour un rendez-vous fixé dans la semaine.\n\nCet électricien est intervenu à la maison pour installer 5 ventilateurs de plafond. Le travail a été propre, efficace et professionnel. Il a pris le temps de bien nous expliquer toutes les étapes.\n\nBref un artisan pro et sérieux que je n'hésiterais pas à recontacter pour mes futurs travaux !\nEncore merci Corentin :)",
  },
  {
    auteur: 'Moara T.',
    date: '2026-11-17',
    note: 5,
    depannage: true, // prise qui fumait, venu en urgence : aussi sur la page Dépannage (demande de Corentin, 28/11/2026)
    texte:
      "Il y a eu une prise qui a commencé à fumer dans la cuisine et une amie m’a recommandé Corentin, qui est venu en urgence chez moi à Villeneuve-lès-Avignon. Il a été rapide et professionnel et m’a expliqué la situation de manière très claire avant de résoudre le problème. Je le recommande moi aussi comme électricien il est fiable et a un bon contact humain.",
  },
];

/** Les 3 avis montrés sur l'accueil : 5 étoiles, choisis par Corentin, du plus récent au plus ancien. */
export const avisAffiches = avis
  .filter((un) => un.note === 5 && un.affiche !== false)
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 3);

/** Les avis laissés après un dépannage, montrés sur la page Dépannage, du plus récent au plus ancien. */
export const avisDepannage = avis
  .filter((un) => un.depannage)
  .sort((a, b) => b.date.localeCompare(a.date));
