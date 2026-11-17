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
  /** Texte exact de l'avis, sans retouche. Paragraphes séparés par une ligne vide (\n\n), retour à la ligne : \n. */
  texte: string;
}

// Note moyenne et nombre total d'avis affichés sur la fiche Google (à recopier à chaque ajout).
export const bilan = { note: 5, nombre: 2 };

export const avis: Avis[] = [
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
    texte:
      "Il y a eu une prise qui a commencé à fumer dans la cuisine et une amie m’a recommandé Corentin, qui est venu en urgence chez moi à Villeneuve-lès-Avignon. Il a été rapide et professionnel et m’a expliqué la situation de manière très claire avant de résoudre le problème. Je le recommande moi aussi comme électricien il est fiable et a un bon contact humain.",
  },
];

/** Les 3 avis 5 étoiles les plus récents : ceux montrés sur l'accueil. */
export const avisAffiches = avis
  .filter((un) => un.note === 5)
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 3);
