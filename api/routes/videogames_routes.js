
const express = require('express');
const router = express.Router();

const {dist_port, local_port,host} = require("../config/env");

const videogames = require("../data/videogames");//Video Games Static Data


const base_url = `${host}:${dist_port}/videogames`; 

router.get('/', async (req, res, next) => {
    res.status(200).location(req.path).json(videogames);
});

module.exports = router;