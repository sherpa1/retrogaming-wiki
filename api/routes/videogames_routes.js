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

router.get('/:id', async (req, res, next) => {

    if (!req.params.id || req.params.id == undefined || req.params.id == 0) return res.status(401).location(req.path).json({ message: "Missing videogame id" });

    const the_videogame = videogames.find((videogame) =>
        (videogame.id === Number(req.params.id)));

    if(the_videogame==undefined)
    return res.status(404).location(req.path).json({ message: "Not Found" });

    res.status(200).location(req.path).json(
        {
            data:the_videogame,
            type:"videogames",
            links:[
                {
                    rel:"self", 
                    href:`${base_url}/${req.params.id}`
                },
                {
                    rel:"list", 
                    href:`${base_url}`
                }
            ],
        }
    );
});

module.exports = router;