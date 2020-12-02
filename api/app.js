'use strict';

const express = require('express');
const app = express();

const port = process.env.LOCAL_PORT || 3000;
const host = process.env.HOST || "http://localhost";

const videogames_routes = require("./routes/videogames_routes");
app.use("/videogames",videogames_routes);

app.get('/', async (req, res, next) => {
    res.status(200).location(req.path).json({ status: 200, message:"Welcome to the Retrogaming API" });
});

app.listen(port, async () => {
    console.log(`Retrograming Wiki API listening at ${host}:${port}`);
});
