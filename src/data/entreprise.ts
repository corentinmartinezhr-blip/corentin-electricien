// Informations publiques de l'entreprise, validées par Corentin.
// Ne rien ajouter ici qui n'ait été confirmé (voir CLAUDE.md).

export const entreprise = {
  nom: 'Corentin Électricien',
  ville: 'Avignon',
  telephoneAffiche: '06 83 78 69 11',
  telephoneInternational: '+33683786911',
  telephoneLien: 'tel:+33683786911',
  // Même numéro pour WhatsApp (confirmé le 29/10/2026).
  whatsappLien: 'https://wa.me/33683786911',
  // Adresse publique du domaine, redirigée vers la boîte Gmail de Corentin (cPanel → Redirecteurs).
  // L'adresse Gmail n'est jamais publiée : le dépôt GitHub et le site sont publics.
  email: 'contact@corentin-electricien.fr',
  // Adresse fournie par Corentin le 29/10/2026. Code postal à confirmer (84000 ou 84140 selon le quartier).
  adresse: { rue: '15 rue Alexandre Fleming', ville: 'Avignon' },
};

// Section « Garanties » de l'accueil (triptyque après « Qui suis-je »).
// Intitulés confirmés par Corentin le 29/10/2026. Jamais « certifié » (aucune certification nommée).
export const garanties = {
  diplome: 'CAP Électricien, mention très bien',
  diplomeDetail: 'Académie de Paris, 2025',
  habilitations: 'BR, BC, B2V, B2V Essai, BE Essai',
  // Décennale et RC Pro : pas encore signées (prévu début novembre 2026).
  // Passer à true UNIQUEMENT après signature : la 3e carte apparaîtra.
  assurancesSignees: false,
  assureur: '', // facultatif, à renseigner à la signature
};

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
