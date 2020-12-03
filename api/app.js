'use strict';

const express = require('express');
const app = express();

const {local_port,host} = require("./config/env");

//middleware de sécurité : filtre les méthodes HTTP acceptées par le serveur
const filter_http_methods = require("./middlewares/filter_http_methods");
app.use(filter_http_methods);

const videogames_routes = require("./routes/videogames_routes");
app.use("/videogames",videogames_routes);

app.get('/', async (req, res, next) => {
    res.status(200).location(req.path).json({ message:"Welcome to the Retrogaming API" });
});

//middleware permettant de traiter les erreurs 404
const error_404 = require("./middlewares/error_404");
app.use(error_404);

//middleware permettant de gérer de façon homogène toutes les erreurs retournées par le serveur
const error_handler = require("./middlewares/error_handler");
app.use(error_handler);

app.listen(local_port, async () => {
    console.log(`Retrograming Wiki API listening at ${host}:${local_port}`);
});
