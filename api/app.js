'use strict';

const express = require('express');
const app = express();

const port = process.env.LOCAL_PORT || 3000;
const host = process.env.HOST || "http://localhost";

const { error_handler } = require("./middlewares/error");


const videogames_routes = require("./routes/videogames_routes");
app.use("/videogames",videogames_routes);

const manufacturers_routes = require("./routes/manufacturers_routes");
app.use("/manufacturers",manufacturers_routes);

const categories_routes = require("./routes/categories_routes");
app.use("/categories",categories_routes);

const platforms_routes = require("./routes/platforms_routes");
app.use("/platforms",platforms_routes);

const studios_routes = require("./routes/studios_routes");
app.use("/studios",studios_routes);


//exemple de middleware en entrée
app.use((req, res, next) => {
    console.log(`${req.path}`);
    next();
});

app.get('/', async (req, res, next) => {
    res.status(200).location(req.path).json({ status: 200, message:"Welcome to the Retrogaming API" });
});



//All errors middleware, must be the last middleware
app.use(error_handler);

app.listen(port, async () => {
    console.log(`Retrograming Wiki API listening at ${host}:${port}`);
});
