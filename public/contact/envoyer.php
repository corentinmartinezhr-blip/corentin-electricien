<?php
// Envoi du formulaire de contact (exécuté par o2switch, le reste du site est statique).
// Rien n'est stocké sur le serveur : la demande et les photos partent par e-mail, puis tout est effacé.
// Sans JavaScript : le formulaire est posté ici, puis on redirige vers /contact/merci/ ou /contact/erreur/.
declare(strict_types=1);

// Adresse publique du domaine, redirigée vers la boîte Gmail de Corentin (cPanel → Redirecteurs).
// L'adresse Gmail n'apparaît jamais dans le code : le dépôt GitHub est public.
const DESTINATAIRE = 'contact@corentin-electricien.fr';
const EXPEDITEUR = 'contact@corentin-electricien.fr';

const TELEPHONE = '06 83 78 69 11'; // = entreprise.telephoneAffiche (src/data/entreprise.ts)

const PAGE_FORMULAIRE = '/contact/';
const PAGE_MERCI = '/contact/merci/';
const PAGE_ERREUR = '/contact/erreur/';

const TYPES_DEMANDE = ['Dépannage', 'Électroménager', 'Installation', 'Autre'];
const MESSAGE_MIN = 10; // caractères, = minlength du formulaire
const PHOTOS_MAX = 3;
const TAILLE_MAX_PHOTO = 8 * 1024 * 1024; // 8 Mo par photo
const TAILLE_MAX_TOTALE = 20 * 1024 * 1024; // 20 Mo en tout
const FORMATS_PHOTO = [
    'image/jpeg' => 'jpg',
    'image/png' => 'png',
    'image/webp' => 'webp',
    'image/heic' => 'heic', // photos d'iPhone
    'image/heif' => 'heif',
];

// never : la fonction ne rend jamais la main (exit), le code qui suit un refus ne s'exécute pas.
function rediriger(string $page): never
{
    header('Location: ' . $page, true, 303);
    exit;
}

/** Renvoie vers la page d'erreur, sur l'explication du champ en cause (ancre lue en CSS, sans JavaScript). */
function refuser(string $motif): never
{
    rediriger(PAGE_ERREUR . '#' . $motif);
}

/**
 * Téléphone réduit à ses chiffres (espaces, points et tirets ignorés), puis écrit « 06 12 34 56 78 ».
 * Accepte un numéro français à 10 chiffres ou un numéro international en « + ». Null si invalide.
 */
function telephoneNormalise(string $saisie): ?string
{
    $numero = preg_replace('/[\s.\-]/u', '', $saisie);
    if (preg_match('/^0[1-9][0-9]{8}$/', $numero) === 1) {
        return trim(chunk_split($numero, 2, ' '));
    }
    return preg_match('/^\+[0-9]{9,15}$/', $numero) === 1 ? $numero : null;
}

/** Texte saisi, nettoyé et limité en longueur. Une ligne : aucun caractère de contrôle (anti-injection d'en-têtes). */
function champ(string $nom, int $longueurMax, bool $multiligne = false): string
{
    $valeur = trim((string) ($_POST[$nom] ?? ''));
    $valeur = $multiligne
        ? preg_replace('/[\x00-\x09\x0B-\x1F\x7F]/u', '', str_replace(["\r\n", "\r"], "\n", $valeur))
        : preg_replace('/[\x00-\x1F\x7F]/u', '', $valeur);
    return mb_substr((string) $valeur, 0, $longueurMax);
}

/** Photos jointes, vérifiées (nombre, taille, vrai format du fichier). Null si une photo est refusée. */
function photosJointes(): ?array
{
    $fichiers = $_FILES['photos'] ?? null;
    if (!is_array($fichiers) || !is_array($fichiers['name'] ?? null)) {
        return [];
    }

    $photos = [];
    $total = 0;
    $detecteur = new finfo(FILEINFO_MIME_TYPE);

    foreach (array_keys($fichiers['name']) as $i) {
        if ($fichiers['error'][$i] === UPLOAD_ERR_NO_FILE) {
            continue;
        }
        $chemin = $fichiers['tmp_name'][$i];
        // Photo refusée par le serveur lui-même (trop lourde…) : il n'y a pas de fichier à examiner.
        if ($fichiers['error'][$i] !== UPLOAD_ERR_OK || !is_uploaded_file($chemin)) {
            return null;
        }
        $taille = (int) $fichiers['size'][$i];
        $total += $taille;
        $format = FORMATS_PHOTO[$detecteur->file($chemin) ?: ''] ?? null;

        $refusee = count($photos) >= PHOTOS_MAX
            || $taille > TAILLE_MAX_PHOTO
            || $total > TAILLE_MAX_TOTALE
            || $format === null;
        if ($refusee) {
            return null;
        }

        $photos[] = [
            'nom' => 'photo-' . (count($photos) + 1) . '.' . $format,
            'type' => array_search($format, FORMATS_PHOTO, true),
            'contenu' => (string) file_get_contents($chemin),
        ];
    }
    return $photos;
}

/**
 * Accusé de réception envoyé au client. Volontairement sans rien de ce qu'il a écrit (hors type de demande,
 * choisi dans une liste) : un robot ne peut pas s'en servir pour faire envoyer son propre texte à quelqu'un.
 * « Répondre » écrit à Corentin. Un échec n'empêche pas la page de remerciement : la demande, elle, est partie.
 */
function envoyerConfirmation(string $email, string $type): void
{
    $precision = $type === 'Autre' ? '' : ' (' . mb_strtolower($type) . ')'; // « votre demande (dépannage) »
    $corps = "Bonjour,\n\n"
        . "Merci pour votre message : votre demande$precision a bien été prise en compte.\n\n"
        . "Je vais l'étudier et je risque de vous recontacter par e-mail ou par téléphone pour préciser "
        . "votre besoin.\n\n"
        . "Vous pouvez répondre directement à cet e-mail pour ajouter une précision ou des photos.\n"
        . 'Pour une urgence, appelez-moi ou écrivez-moi sur WhatsApp au ' . TELEPHONE . ".\n\n"
        . "À bientôt,\n"
        . "Corentin\n"
        . "Corentin Électricien, Avignon\n"
        . "https://corentin-electricien.fr\n";

    $entetes = implode("\r\n", [
        'From: ' . mb_encode_mimeheader('Corentin Électricien', 'UTF-8', 'Q') . ' <' . EXPEDITEUR . '>',
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: base64',
        'Auto-Submitted: auto-replied', // message automatique : évite les réponses automatiques en boucle
    ]);
    $sujet = mb_encode_mimeheader('Votre demande a bien été reçue – Corentin Électricien', 'UTF-8', 'B');
    mail($email, $sujet, chunk_split(base64_encode($corps)), $entetes, '-f' . EXPEDITEUR);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    rediriger(PAGE_FORMULAIRE);
}

// Anti-spam : champ invisible que seuls les robots remplissent. On fait comme si tout allait bien.
if (champ('site_web', 200) !== '') {
    rediriger(PAGE_MERCI);
}

// Requête plus lourde que la limite du serveur : PHP vide alors $_POST, ce sont les photos qui pèsent trop.
if ($_POST === [] && (int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 0) {
    refuser('photos');
}

$prenom = champ('prenom', 60);
$nom = champ('nom', 60);
$telephone = telephoneNormalise(champ('telephone', 30));
$email = champ('email', 120);
$type = champ('type', 30);
$message = champ('message', 3000, true);

// Mêmes règles que le formulaire (Formulaire.astro) : le navigateur bloque d'abord, le serveur confirme.
// Le premier problème trouvé est indiqué sur la page d'erreur.
if ($prenom === '' || $nom === '') {
    refuser('nom');
}
if ($telephone === null) {
    refuser('telephone');
}
if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    refuser('email');
}
if (!in_array($type, TYPES_DEMANDE, true)) {
    refuser('type');
}
if (mb_strlen($message) < MESSAGE_MIN) {
    refuser('message');
}
$photos = photosJointes();
if ($photos === null) {
    refuser('photos');
}

// ---------- Construction de l'e-mail (texte + photos en pièces jointes) ----------
$corps = "Nouvelle demande depuis corentin-electricien.fr\n\n"
    . "Demande : $type\n"
    . "Nom : $prenom $nom\n"
    . "Téléphone : $telephone\n"
    . "E-mail : $email\n"
    . 'Photos jointes : ' . count($photos) . "\n\n"
    . "Message :\n$message\n";

$frontiere = '=_' . bin2hex(random_bytes(12));
$entetes = implode("\r\n", [
    'From: ' . mb_encode_mimeheader('Site Corentin Électricien', 'UTF-8', 'Q') . ' <' . EXPEDITEUR . '>',
    'Reply-To: ' . $email, // « Répondre » écrit directement au client
    'MIME-Version: 1.0',
    'Content-Type: multipart/mixed; boundary="' . $frontiere . '"',
]);

$contenu = "--$frontiere\r\n"
    . "Content-Type: text/plain; charset=UTF-8\r\n"
    . "Content-Transfer-Encoding: base64\r\n\r\n"
    . chunk_split(base64_encode($corps)) . "\r\n";
foreach ($photos as $photo) {
    $contenu .= "--$frontiere\r\n"
        . "Content-Type: {$photo['type']}; name=\"{$photo['nom']}\"\r\n"
        . "Content-Transfer-Encoding: base64\r\n"
        . "Content-Disposition: attachment; filename=\"{$photo['nom']}\"\r\n\r\n"
        . chunk_split(base64_encode($photo['contenu'])) . "\r\n";
}
$contenu .= "--$frontiere--\r\n";

$sujet = mb_encode_mimeheader("Site : $type – $prenom $nom", 'UTF-8', 'B'); // ex. « Site : Dépannage – Jean Dupont »
$envoye = mail(DESTINATAIRE, $sujet, $contenu, $entetes, '-f' . EXPEDITEUR);

// Le message de réussite ne s'affiche que si l'envoi a vraiment fonctionné.
if (!$envoye) {
    refuser('envoi');
}
envoyerConfirmation($email, $type);
rediriger(PAGE_MERCI);
