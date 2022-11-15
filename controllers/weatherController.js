const express = require('express');
const axios = require('axios');
const Router = express.Router();

Router.get('/', async (req, res) => {
    let {
        lat,
        long
    } = req.query;

    axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,precipitation&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_hours&current_weather=true&timeformat=unixtime&timezone=UTC`)
        .then(function (response) {
            var data = response.data
            var weatherDetails = {
                "current_weather": data.current_weather,
                "days": data.daily
            }

            res.send(weatherDetails)
        })
        .catch(function (error) {
            console.log(error);
        })
})

module.exports = Router;