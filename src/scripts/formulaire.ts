// Champ téléphone du formulaire de contact : seuls les chiffres peuvent être saisis (demande de Corentin).
// Tout autre caractère (lettre, espace, point…) est retiré dès la frappe ou le collage.
// Un numéro rempli automatiquement en « +33 6 … » devient « 06… ».
// Sans JavaScript, le navigateur (pattern) puis envoyer.php refusent quand même un numéro invalide.

const CHIFFRES_MAX = 10; // pas de maxlength dans le HTML : il couperait un « +33 6 … » avant sa conversion

for (const champ of document.querySelectorAll<HTMLInputElement>('input[data-chiffres]')) {
  champ.addEventListener('input', () => {
    const chiffres = champ.value.replace(/^\s*\+33/, '0').replace(/\D/g, '').slice(0, CHIFFRES_MAX);
    if (chiffres !== champ.value) champ.value = chiffres;
  });
}
