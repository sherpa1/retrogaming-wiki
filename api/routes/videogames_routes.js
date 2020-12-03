const express = require('express');
const router = express.Router();

const {local_port,dist_port,host} = require("../config/env");

const videogames = require("../data/videogames");//Video Games Static Data

const base_url = `${host}:${dist_port}/videogames`; 

router.get('/', async (req, res, next) => {
    res.status(200).location(req.path).json(
        { 
            total_items:videogames.length,
            total_pages:1,
            page:1,
            page_size:videogames.length,
            type:"videogames",
            links:[
                {
                    rel:"self", 
                    href:base_url
                }
            ],
            data: videogames 
        }
    );
});

module.exports = router;