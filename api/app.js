'use strict';

const express = require('express');
const app = express();

const port = process.env.LOCAL_PORT || 3000;
const host = process.env.HOST || "http://localhost";

//middleware de sécurité : filtre les méthodes HTTP acceptées par le serveur
const filter_http_methods = require("./middlewares/filter_http_methods");
app.use(filter_http_methods);

const videogames_routes = require("./routes/videogames_routes");
app.use("/videogames",videogames_routes);

app.get('/', async (req, res, next) => {
    res.status(200).location(req.path).json({ status: 200, message:"Welcome to the Retrogaming API" });
});

//middleware permettant de gérer de façon homogène toutes les erreurs retournées par le serveur
const error_handler = require("./middlewares/error_handler");
app.use(error_handler);

app.listen(port, async () => {
    console.log(`Retrograming Wiki API listening at ${host}:${port}`);
});
