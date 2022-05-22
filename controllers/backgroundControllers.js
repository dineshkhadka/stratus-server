const express = require('express');
const axios = require('axios');
const Router = express.Router();


var API_URL = `https://api.unsplash.com`;
var API_KEY = `b26f90cbe29ca389bf76ad3176e29bda81ef9fc80e6792ce828664660ca3afdc`;
var collection = `${API_URL}/collections/26321157/photos?client_id=${API_KEY}`;

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