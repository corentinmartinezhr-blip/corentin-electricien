# Fichier `.htaccess` du site (o2switch)

Ce fichier vit **sur le serveur**, dans `/home/maco0206/public_html/.htaccess`, pas dans le code du site.
La mise à jour automatique (cron + `rsync --delete`) l'exclut : il n'est jamais écrasé ni effacé.
Cette page en garde une copie documentée. Toute modification sur le serveur doit être reportée ici.

Dernière modification : 30/10/2026 (Claude, à la demande de Corentin, depuis le cPanel).
Sauvegarde de la version précédente : `/home/maco0206/htaccess-sauvegarde-2026-10-30.txt`.

## Contenu actuel

1. **Redirection www → sans www**, en premier, pour http et https en une seule étape.
   La règle créée par le menu « Redirections » du cPanel ne marchait pas : elle ne s'appliquait qu'en http,
   alors que le bloc o2switch « forceHttps » passe déjà tout en https avant elle. Elle a été remplacée.
   Conséquence : la redirection n'apparaît plus dans le menu « Redirections » du cPanel ; c'est normal.
2. **Page d'erreur 404** : `ErrorDocument 404 /404.html` (page « Aïe, aïe, aïe » générée par `src/pages/404.astro`). Le code renvoyé reste bien 404.
3. **Bloc o2switch « forceHttps »** (WpTiger) : géré par o2switch, ne pas modifier.
4. **Bloc « WordPress » vide** : laissé par l'hébergeur, sans effet.
5. **Mise en cache dans le navigateur** : `/_astro/` 1 an (noms de fichiers uniques à chaque version),
   photos/logos/polices 1 semaine, pages `no-cache` (revérifiées à chaque visite).

```apache
# Corentin Électricien : www.corentin-electricien.fr -> https://corentin-electricien.fr (http et https, en une seule redirection)
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\.corentin-electricien\.fr$ [NC]
RewriteRule ^(.*)$ https://corentin-electricien.fr/$1 [R=301,L]

# Corentin Électricien : page « Aïe, aïe, aïe » pour les adresses qui n'existent pas (le code reste 404)
ErrorDocument 404 /404.html

# o2s WpTiger Begin - Dont edit - Ne pas modifier - forceHttps
RewriteEngine On
RewriteCond %{HTTP:X-Forwarded-Proto} !https
RewriteCond %{HTTPS} !on
RewriteRule ^(.*) https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
# o2s WpTiger End - Dont edit - Ne pas modifier - forceHttps
# BEGIN WordPress
# (bloc vide laissé par l'hébergeur)
# END WordPress

# Corentin Électricien : mise en cache dans le navigateur (copie documentée dans docs/htaccess.md du dépôt)
<IfModule mod_headers.c>
  # Fichiers techniques d'Astro (polices, styles) : leur nom change à chaque version, donc 1 an sans risque
  <If "%{REQUEST_URI} =~ m#^/_astro/#">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </If>
  # Photos, logos, icône : 1 semaine (une photo remplacée apparaît partout en 7 jours au plus)
  <ElseIf "%{REQUEST_URI} =~ m#\.(webp|png|jpe?g|svg|ico|woff2)$#">
    Header set Cache-Control "public, max-age=604800"
  </ElseIf>
  # Pages : revérifiées à chaque visite, pour que les changements apparaissent tout de suite
  <ElseIf "%{REQUEST_URI} =~ m#(/|\.html)$#">
    Header set Cache-Control "no-cache"
  </ElseIf>
</IfModule>
```

## Outils o2switch volontairement non activés

- **PageSpeed** : réécrit les pages et recompresse les images (refusé par Corentin pour ses photos), peut injecter du code.
- **Extreme Cache / Tiger Cache** : cache de pages pour sites dynamiques (WordPress). Inutile pour un site statique,
  et risqué pour `contact/envoyer.php`.
