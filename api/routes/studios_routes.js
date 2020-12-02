
const express = require('express');
const router = express.Router();

const studios = require("../data/studios");//studios Static Data

const base_url = `${process.env.HOST}:${process.env.DIST_PORT}/studios`; 

router.get('/', async (req, res, next) => {
    res.status(200).location(req.path).json(
        { 
            total_items:studios.length,
            total_pages:1,
            page:1,
            page_size:studios.length,
            type:"studios",
            links:[
                {
                    rel:"self", 
                    href:base_url
                }
            ],
            data: studios 
        }
    );
});

module.exports = router;