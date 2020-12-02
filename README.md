# retrogaming-wiki
A project for learning API programming with Node.js and Docker
# Retrogaming Wiki

Un projet pour l'apprentissage du développement d'API Rest avec Node.js et Docker

---

## TP01

Branche git : tp01

- mise en place d'une architecture basée sur les services avec Docker et Docker Compose,
- réalisation d'un serveur HTTP avec Node.js,
- mise en place d'un projet d'API Rest avec Express.js,
- gestion des routes associées au modèle de données Videogame,
- utilisation de données statiques

---

## Commandes utiles

### Node.js

#### Installer les dépendances du projet

Exécuter la commande suivante depuis la racine du dossier "api"

```
npm i
```
### Docker & Docker Compose

#### Démarrer les services Docker

Exécuter la commande suivante depuis la racine du projet :

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

Alexandre Leroux

alex@sherpa.one

Enseignant vacataire à l'Université de Lorraine

- IUT Nancy-Charlemagne (LP Ciasie)

- Institut des Sciences du Digital (Masters Sciences Cognitives)