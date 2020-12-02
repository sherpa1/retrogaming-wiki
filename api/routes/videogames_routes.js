
const express = require('express');
const router = express.Router();

const videogames = require("../data/videogames");//Video Games Static Data

const base_url = `${process.env.HOST}:${process.env.DIST_PORT}/videogames`; 

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