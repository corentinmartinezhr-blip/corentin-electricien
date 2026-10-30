// Informations publiques de l'entreprise, validées par Corentin.
// Ne rien ajouter ici qui n'ait été confirmé (voir CLAUDE.md).

export const entreprise = {
  nom: 'Corentin Électricien',
  // Identité légale (mentions légales, confidentialité). Fournie par Corentin le 30/10/2026.
  responsable: 'Corentin Martinez',
  statut: 'entrepreneur individuel (EI)',
  activite: 'Électricien : dépannage électrique et réparation d’électroménager',
  siren: '', // À RENSEIGNER dès réception (immatriculation en cours) : il s'affichera seul dans les mentions légales.
  ville: 'Avignon',
  telephoneAffiche: '06 83 78 69 11',
  telephoneInternational: '+33683786911',
  telephoneLien: 'tel:+33683786911',
  // Même numéro pour WhatsApp (confirmé le 29/10/2026).
  whatsappLien: 'https://wa.me/33683786911',
  // Adresse publique du domaine, redirigée vers la boîte Gmail de Corentin (cPanel → Redirecteurs).
  // L'adresse Gmail n'est jamais publiée : le dépôt GitHub et le site sont publics.
  email: 'contact@corentin-electricien.fr',
  // Adresse fournie par Corentin le 29/10/2026.
  adresse: { rue: '15 rue Alexandre Fleming', codePostal: '84000', ville: 'Avignon' },
  // Langues parlées par Corentin (29/10/2026), au format des données structurées.
  langues: ['fr', 'en'],
  // Dépannage d'urgence (positionnement du 30/10/2026) : horaires, délai et déplacement à vélo électrique.
  horaires: '7 jours sur 7, de 7h à 22h',
  horairesDonnees: { ouverture: '07:00', fermeture: '22:00' }, // tous les jours (données structurées)
  delai: 'en moins de 24 h, le plus souvent le jour même',
  delaiRapide: "Si je suis libre, j'arrive en moins d'une heure.",
  deplacement: 'à vélo électrique',
};

// Section « Garanties » de l'accueil (triptyque après « Qui suis-je »).
// Intitulés confirmés par Corentin le 29/10/2026. Jamais « certifié » (aucune certification nommée).
export const garanties = {
  diplome: 'CAP Électricien, mention très bien',
  diplomeDetail: 'Académie de Paris, 2025',
  habilitations: 'BR, BC, B2V, B2V Essai et BE Essai',
  // Décennale et RC Pro : pas encore signées (prévu début novembre 2026).
  // Passer à true UNIQUEMENT après signature : la 3e carte apparaîtra.
  assurancesSignees: false,
  assureur: '', // facultatif, à renseigner à la signature
};

// Zone recentrée le 30/10/2026 (dépannage d'urgence à vélo électrique) : Avignon et les villes proches.
export const communes = ['Avignon', 'Le Pontet', 'Villeneuve-lès-Avignon', 'Les Angles'];

// Hébergeur du site (mentions légales obligatoires, LCEN art. 6).
export const hebergeur = {
  nom: 'O2Switch SAS',
  adresse: '222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand',
  telephone: '04 44 44 60 40',
  site: 'https://www.o2switch.fr',
};

// Médiateur de la consommation (obligatoire pour un professionnel qui travaille pour des particuliers).
// À RENSEIGNER dès l'adhésion ({ nom, site }) : la section apparaîtra seule dans les mentions légales.
export const mediateur: { nom: string; site: string } | null = null;
