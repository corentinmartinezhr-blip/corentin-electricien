// Seul JavaScript du site : copie du numéro de téléphone.
//  - Numéro écrit en clair (bouton .numero-copiable) : un clic le copie, partout.
//  - Liens « Appeler » (tel:) : sur téléphone, ils lancent l'appel normalement ;
//    sur ordinateur (souris, pas d'écran tactile), un lien tel: ne fait rien,
//    donc on copie le numéro à la place.
// Dans les deux cas, un petit message « Numéro copié » apparaît au-dessus de l'élément.

const surOrdinateur = window.matchMedia('(hover: hover) and (pointer: fine)');

/** Copie synchrone dans le geste de l'utilisateur : la méthode la plus fiable (Android, iOS, navigateurs intégrés). */
function copieClassique(texte: string): boolean {
  const zone = document.createElement('textarea');
  zone.value = texte;
  zone.setAttribute('aria-hidden', 'true');
  zone.style.cssText = 'position:fixed;top:0;left:0;opacity:0;font-size:16px'; // 16px : pas de zoom sur iPhone
  zone.contentEditable = 'true';
  document.body.appendChild(zone);
  zone.focus();
  zone.select();
  zone.setSelectionRange(0, texte.length); // nécessaire sur iOS
  let reussi = false;
  try {
    reussi = document.execCommand('copy');
  } catch {
    reussi = false;
  }
  zone.remove();
  return reussi;
}

function copier(texte: string): Promise<void> {
  if (copieClassique(texte)) return Promise.resolve();
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(texte);
  return Promise.reject(new Error('copie impossible'));
}

function afficherMessage(element: HTMLElement, texte: string): void {
  let message = element.querySelector<HTMLSpanElement>('.message-copie');
  if (!message) {
    message = document.createElement('span');
    message.className = 'message-copie';
    message.setAttribute('role', 'status');
    element.appendChild(message);
  }
  const bulle = message;
  bulle.textContent = texte;
  requestAnimationFrame(() => bulle.classList.add('est-visible'));
  window.clearTimeout(Number(bulle.dataset.minuteur));
  bulle.dataset.minuteur = String(window.setTimeout(() => bulle.classList.remove('est-visible'), 1800));
}

function copierDepuis(element: HTMLElement, numero: string): void {
  copier(numero)
    .then(() => afficherMessage(element, 'Numéro copié'))
    // Dernier recours : afficher le numéro pour qu'on puisse le noter.
    .catch(() => afficherMessage(element, numero));
}

document.addEventListener('click', (evenement) => {
  const cible = evenement.target as Element | null;

  const numeroEcrit = cible?.closest<HTMLButtonElement>('.numero-copiable');
  if (numeroEcrit) {
    copierDepuis(numeroEcrit, numeroEcrit.dataset.copier ?? '');
    return;
  }

  const lienAppel = cible?.closest<HTMLAnchorElement>('a[href^="tel:"]');
  if (lienAppel && surOrdinateur.matches) {
    evenement.preventDefault();
    copierDepuis(lienAppel, lienAppel.dataset.numero ?? '');
  }
});
