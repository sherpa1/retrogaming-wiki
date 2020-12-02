
const express = require('express');
const router = express.Router();

const platforms = require("../data/platforms");//platforms Static Data

const base_url = `${process.env.HOST}:${process.env.DIST_PORT}/platforms`; 

router.get('/', async (req, res, next) => {
    res.status(200).location(req.path).json(
        { 
            total_items:platforms.length,
            total_pages:1,
            page:1,
            page_size:platforms.length,
            type:"platforms",
            links:[
                {
                    rel:"self", 
                    href:base_url
                }
            ],
            data: platforms 
        }
    );
});

module.exports = router;