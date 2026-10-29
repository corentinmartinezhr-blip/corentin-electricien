// Informations publiques de l'entreprise, validées par Corentin.
// Ne rien ajouter ici qui n'ait été confirmé (voir CLAUDE.md).

export const entreprise = {
  nom: 'Corentin Électricien',
  ville: 'Avignon',
  telephoneAffiche: '06 83 78 69 11',
  telephoneLien: 'tel:+33683786911',
  // Même numéro pour WhatsApp (confirmé le 29/10/2026).
  whatsappLien: 'https://wa.me/33683786911',
};

// Section « Garanties » de l'accueil (triptyque après « Qui suis-je »).
// Reste à null — donc masquée — tant que Corentin n'a pas confirmé :
//  - l'intitulé exact de son diplôme (jamais « certifié » sans certification nommée),
//  - ses niveaux d'habilitation exacts (basse tension),
//  - la signature de la décennale et de la RC Pro.
export const garanties: null | {
  diplome: string; // ex. « CAP Électricien »
  habilitations: string; // ex. « BR, B2V, BC » — tels qu'écrits sur le titre
  assureur?: string;
} = null;

// Zone principale validée par Corentin le 29/10/2026.
export const communes = [
  'Avignon',
  'Le Pontet',
  'Villeneuve-lès-Avignon',
  'Les Angles',
  'Rognonas',
  'Morières-lès-Avignon',
  'Vedène',
  'Sorgues',
  'Saint-Saturnin-lès-Avignon',
  'Châteaurenard',
  'Rochefort-du-Gard',
  'Entraigues-sur-la-Sorgue',
  'Jonquerettes',
  'Caumont-sur-Durance',
  'Noves',
  'Graveson',
  'Pujaut',
  'Sauveterre',
];
