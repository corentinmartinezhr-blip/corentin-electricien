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
  /** Texte exact de l'avis, sans retouche. */
  texte: string;
}

// Note moyenne et nombre total d'avis affichés sur la fiche Google (à recopier à chaque ajout).
export const bilan = { note: 5, nombre: 0 };

export const avis: Avis[] = [];

/** Les 3 avis 5 étoiles les plus récents : ceux montrés sur l'accueil. */
export const avisAffiches = avis
  .filter((un) => un.note === 5)
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 3);
