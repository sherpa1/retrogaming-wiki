# Retrogaming Wiki

_Un projet pour l'apprentissage du développement d'API Rest avec Node.js et Docker_

---

## TP01

### Contenu

Branche git : tp01

- mise en place d'une architecture basée sur les services avec Docker et Docker Compose,
- réalisation d'un serveur HTTP avec Node.js,
- mise en place d'un projet d'API Rest avec Express.js,
- gestion des routes associées au modèle de données _Videogame_,
- utilisation de données statiques
- utilisation de variables d'environnement `./config/env.js` `.env.dev` `.env.prod`
- routage

### Ressources

#### Routage
- https://expressjs.com/fr/guide/routing.html

---

## Commandes utiles

### Node.js

_Exécuter la commande suivante depuis la racine du dossier "./api"._

#### Installer les dépendances du projet

```
npm i
```

### Docker & Docker Compose

_Exécuter les commandes Docker depuis la racine du projet._

#### Démarrer les services Docker

```
docker-compose up
```

### API Rest

#### Curl

https://curl.se/

test de la route GET /videogames
```
curl -i http://localhost:4000/videogames
```
---

__Alexandre Leroux__

alex@sherpa.one

_Enseignant vacataire à l'Université de Lorraine_

- IUT Nancy-Charlemagne (LP Ciasie)

- Institut des Sciences du Digital (Masters Sciences Cognitives)