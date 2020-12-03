# Retrogaming Wiki

_Un projet pour l'apprentissage du développement d'API Rest avec Node.js et Docker_

---

## TP02

### Contenu

Branche git : tp02

- emploi d'un middleware pour gérer les erreurs 404 `./api/middlewares/error_404`
- emploi d'un middleware pour filtrer les méthodes HTTPS autorisées `./api/middlewares/filter_http_method`
- emploi d'un middleware pour gérer les erreurs au format JSON `./api/middlewares/error.js`
- implémentation _Hateoas_ dans les réponses JSON fournies par l'API
- utilisation de variables d'environnement `./config/env.js` `.env.dev` `.env.prod`

### Ressources

#### Middlewares
- https://expressjs.com/fr/guide/writing-middleware.html
- https://expressjs.com/fr/guide/using-middleware.html
- https://expressjs.com/fr/advanced/best-practice-performance.html

#### Routage
- https://expressjs.com/fr/guide/routing.html

#### Traitement d'erreurs et sécurité
- https://expressjs.com/fr/guide/error-handling.html
- https://expressjs.com/fr/advanced/best-practice-performance.html


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