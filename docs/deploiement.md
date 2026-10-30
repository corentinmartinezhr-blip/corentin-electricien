# Mise en ligne du site

## Principe

Le pare-feu d'o2switch bloque les envois venant de GitHub (le FTP est coupé et le SSH fermé sans l'API cPanel, indisponible sur ce compte). On inverse donc le sens :

1. À chaque envoi sur `main`, GitHub construit le site (`.github/workflows/publier.yml`) et range **uniquement les fichiers prêts à publier** dans la branche `production`.
2. Sur o2switch, une **tâche cron** récupère la branche `production` toutes les 5 minutes et la copie dans le dossier du site.

Une modification est donc en ligne au maximum ~5 minutes après l'envoi.

Il n'y a pas de site de test : choix de Corentin, pour garder la chaîne simple.

## Tâche cron (cPanel → Tâches Cron)

- Fréquence : toutes les 5 minutes (`*/5 * * * *`).
- Commande (une seule ligne) :

```sh
{ cd "$HOME" && { [ -d site-git ] || git clone -q --depth 1 -b production https://github.com/corentinmartinezhr-blip/corentin-electricien.git site-git; } && cd site-git && git fetch -q --depth 1 origin production && git reset -q --hard origin/production && rsync -a --delete --exclude=.git --exclude=.htaccess --exclude=.well-known/ --exclude=cgi-bin/ ./ "$HOME/public_html/"; } > "$HOME/deploiement-dernier.log" 2>&1
```

Le site est dans `public_html` (racine du document de `corentin-electricien.fr`). Corentin a confirmé que l'ancien contenu de ce dossier pouvait être supprimé.

Le résultat du dernier passage est dans `~/deploiement-dernier.log` (vide = tout va bien).

## Attention

- `rsync --delete` efface du dossier du site tout ce qui n'est pas dans le dépôt, sauf `.htaccess`, `.well-known/` et `cgi-bin/`. Ne rien installer à la main dans ce dossier : Matomo ira sur un sous-domaine à part (ex. `stats.corentin-electricien.fr`).
- Depuis le lancement officiel du 30/10/2026, le site est construit avec `PUBLIC_SITE_ENV: production` : ouvert à Google (robots.txt ouvert, plan du site). Remettre `preparation` le fermerait à Google (noindex partout, robots.txt fermé).
