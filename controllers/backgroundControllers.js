const express = require('express');
const axios = require('axios');
const Router = express.Router();


var API_URL = `https://api.unsplash.com`;
var API_KEY = process.env.UNSPLASH_APIKEY;
var collection = `${API_URL}/collections/26321157/photos?per_page=100&client_id=${API_KEY}`;

Router.get('/', async (req, res) => {
    axios.get(collection)
        .then(function (response) {
            res.send(response.data)
        })
        .catch(function (error) {
            // handle error
            // console.log(error);
        })
})

module.exports = Router;