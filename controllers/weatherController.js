const express = require('express');
const axios = require('axios');
const Router = express.Router();


var API_URL = `https://api.unsplash.com`;
var API_KEY = `c1b928b71dc25eee21fde1cead132ae8`;
// const location = `https://api.openweathermap.org/geo/1.0/reverse?$&lat=${lat}&lon=${long}&appid=${API_KEY}`;
// const current_api = `https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=c1b928b71dc25eee21fde1cead132ae8&units=metric`;
// const current_api = `https://api.openweathermap.org/data/2.5/onecall?&lat=${lat}&lon=${long}&exclude=minutely,hourly,alerts&appid=${API_KEY}&units=metric`;

Router.get('/', async (req, res) => {

    let {
        lat,
        long
    } = req.query;
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?&lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
        .then(function (response) {
            res.send(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
})

module.exports = Router;