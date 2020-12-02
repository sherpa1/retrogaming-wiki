
const express = require('express');
const router = express.Router();

const manufacturers = require("../data/manufacturers");//manufacturers Static Data

const base_url = `${process.env.HOST}:${process.env.DIST_PORT}/manufacturers`; 

router.get('/', async (req, res, next) => {
    res.status(200).location(req.path).json(
        { 
            total_items:manufacturers.length,
            total_pages:1,
            page:1,
            page_size:manufacturers.length,
            type:"manufacturers",
            links:[
                {
                    rel:"self", 
                    href:base_url
                }
            ],
            data: manufacturers 
        }
    );
});

module.exports = router;