// Copie du numéro de téléphone, chargée sur toutes les pages (autres scripts : formulaire.ts sur la page
// Contact, et la mesure d'audience Matomo).
//  - Numéro écrit en clair (bouton .numero-copiable) : un clic le copie, sur tous les appareils.
//  - Boutons « Appeler » (liens tel:) : sur téléphone, ils ouvrent l'application d'appel (comportement
//    normal du navigateur) ; sur ordinateur, un lien tel: ne fait rien, donc on copie le numéro à la place.
// Dans les deux cas de copie, un petit message « Numéro copié » apparaît au-dessus de l'élément.

/**
 * Téléphone (ou tablette) = l'appareil se déclare mobile, OU son pointeur principal est le doigt.
 * Les deux critères ensemble évitent de prendre un téléphone pour un ordinateur
 * (certains Android, ou le mode « version ordinateur » du navigateur). Un portable à écran
 * tactile garde la souris comme pointeur principal : il reste traité comme un ordinateur.
 */
function estTelephone(): boolean {
  const declareMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  const pointeurDoigt = window.matchMedia('(pointer: coarse)').matches;
  return declareMobile || pointeurDoigt;
}

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

  // Sur téléphone, on laisse le lien tel: ouvrir l'application d'appel.
  const lienAppel = cible?.closest<HTMLAnchorElement>('a[href^="tel:"]');
  if (lienAppel && !estTelephone()) {
    evenement.preventDefault();
    copierDepuis(lienAppel, lienAppel.dataset.numero ?? '');
  }
});
