# Données de l'observatoire du Lab ANSSI

Ce dépôt Git contient les migrations de la base de données de l'observatoire du Lab ANSSI.

## Philosophie

Chaque produit du Lab dispose de son propre schéma PostgreSQL :

| Produit            | Schéma |
| ------------------ | ------ |
| MonServiceSécurisé | `mss`  |
| MesServicesCyber   | `msc`  |

Les migrations sont écrites en TypeScript avec [`knex.js`](https://knexjs.org/) et exécutées via [`tsx`](https://tsx.is/).
Elles sont toutes dans le dossier [`migrations/`](./migrations) : chaque migration précise le schéma qu'elle concerne (`withSchema(...)`).

## Configuration de l'environnement de développement

Il est nécessaire en prérequis d'avoir installé [Git](https://git-scm.com/), [Node.js](https://nodejs.org/) (version dans [`.nvmrc`](./.nvmrc)),
[pnpm](https://pnpm.io/), [Docker Engine](https://docs.docker.com/get-docker/) et [Docker Compose](https://docs.docker.com/compose/install/).

Récupérer les sources du projet et installer les dépendances.

```sh
$ git clone https://github.com/betagouv/lab-anssi-donnees-observatoire.git && cd lab-anssi-donnees-observatoire
$ pnpm install
```

Démarrer la base de données locale (exposée sur le port `5434`, base `observatoire`).

```sh
$ docker compose up -d observatoire-db
```

Créer un fichier `.env` en copiant le fichier `.env.template`, puis valoriser chaque variable.

```sh
$ cp .env.template .env
```

## Migrations

Jouer toutes les migrations :

```sh
$ pnpm run migration-bdd
```

Annuler le dernier lot de migrations :

```sh
$ pnpm run migration-bdd:annule
```

Créer une nouvelle migration :

```sh
$ pnpm run migration-bdd:nouvelle ajouteTableMaTable
```

## Scripts

Vider toutes les données des tables du schéma `mss` (sans confirmation, sur la base pointée par `URL_SERVEUR_BASE_DONNEES`) :

```sh
$ pnpm run vide-donnees-mss
```

Vider toutes les données des tables du schéma `msc` (sans confirmation, sur la base pointée par `URL_SERVEUR_BASE_DONNEES`) :

```sh
$ pnpm run vide-donnees-msc
```

## Déploiement

Le déploiement se fait sur Clever Cloud via la GitHub Action [`deploiement.yml`](./.github/workflows/deploiement.yml),
en DÉMO puis en PRODUCTION, à chaque push sur `main`.
Les applications Clever Cloud sont configurées en [mode tâche](https://www.clever.cloud/developers/doc/deploy/tasks/) :
à chaque déploiement, Clever Cloud démarre une instance, exécute la commande définie dans `CC_RUN_COMMAND`
(`pnpm run migration-bdd`), puis arrête l'instance.

Pour rejouer les migrations sans redéployer :

```sh
$ clever restart --app <ID_APP>
```
