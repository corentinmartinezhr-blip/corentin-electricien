<?php
// Envoi du formulaire de contact (exécuté par o2switch, le reste du site est statique).
// Rien n'est stocké sur le serveur : la demande et les photos partent par e-mail, puis tout est effacé.
// Sans JavaScript : le formulaire est posté ici, puis on redirige vers /contact/merci/ ou /contact/erreur/.
declare(strict_types=1);

// Adresse publique du domaine, redirigée vers la boîte Gmail de Corentin (cPanel → Redirecteurs).
// L'adresse Gmail n'apparaît jamais dans le code : le dépôt GitHub est public.
const DESTINATAIRE = 'contact@corentin-electricien.fr';
const EXPEDITEUR = 'contact@corentin-electricien.fr';

const PAGE_FORMULAIRE = '/contact/';
const PAGE_MERCI = '/contact/merci/';
const PAGE_ERREUR = '/contact/erreur/';

const TYPES_DEMANDE = ['Dépannage', 'Installation', 'Électroménager', 'Autre'];
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

function rediriger(string $page): void
{
    header('Location: ' . $page, true, 303);
    exit;
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
        $taille = (int) $fichiers['size'][$i];
        $total += $taille;
        $format = FORMATS_PHOTO[$detecteur->file($chemin) ?: ''] ?? null;

        $refusee = $fichiers['error'][$i] !== UPLOAD_ERR_OK
            || !is_uploaded_file($chemin)
            || count($photos) >= PHOTOS_MAX
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

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    rediriger(PAGE_FORMULAIRE);
}

// Anti-spam : champ invisible que seuls les robots remplissent. On fait comme si tout allait bien.
if (champ('site_web', 200) !== '') {
    rediriger(PAGE_MERCI);
}

$prenom = champ('prenom', 60);
$nom = champ('nom', 60);
$telephone = champ('telephone', 30);
$email = champ('email', 120);
$type = champ('type', 30);
$message = champ('message', 3000, true);

$saisieValide = $prenom !== ''
    && $nom !== ''
    && preg_match('/^[0-9+().\s-]{10,20}$/', $telephone) === 1
    && filter_var($email, FILTER_VALIDATE_EMAIL) !== false
    && in_array($type, TYPES_DEMANDE, true)
    && mb_strlen($message) >= 10;
$photos = photosJointes();

if (!$saisieValide || $photos === null) {
    rediriger(PAGE_ERREUR);
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
rediriger($envoye ? PAGE_MERCI : PAGE_ERREUR);
