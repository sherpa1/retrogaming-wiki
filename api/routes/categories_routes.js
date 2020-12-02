
const express = require('express');
const router = express.Router();

const categories = require("../data/categories");//Categories Static Data

const base_url = `${process.env.HOST}:${process.env.DIST_PORT}/categories`; 

router.get('/', async (req, res, next) => {
    res.status(200).location(req.path).json(
        { 
            total_items:categories.length,
            total_pages:1,
            page:1,
            page_size:categories.length,
            type:"categories",
            links:[
                {
                    rel:"self", 
                    href:base_url
                }
            ],
            data: categories 
        }
    );
});

module.exports = router;