const express = require('express');
const axios = require('axios');
const Router = express.Router();
require('dotenv').config()

var API_URL = `https://api.unsplash.com`;
var API_KEY = process.env.UNSPLASH_APIKEY;
console.log(process)
var collection = `${API_URL}/collections/26321157/photos?per_page=100&client_id=${API_KEY}`;

Router.get('/', async (req, res) => {
    axios.get(collection)
        .then(function (response) {
            res.send(response.data)
        })
        .catch(function (error) {
            console.log(error);
            res.send(500)
        })
})

module.exports = Router;