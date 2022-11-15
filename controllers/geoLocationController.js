const express = require("express");
const axios = require("axios");
const Router = express.Router();
require('dotenv').config()

var API_KEY = process.env.OPENWEATHERMAP_APIKEY;

Router.get("/", async (req, res) => {
  let { place } = req.query;
  axios
    .get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=${API_KEY}`
    )
    .then(function (response) {
      if (response.data.length > 0) {
        res.json({
          name: response.data[0].name,
          local_names: response.data[0].local_names,
          lat: response.data[0].lat,
          lon: response.data[0].lon
        });
      }
      else {
        res.status(404).json({
          status: 'error',
          message: 'Not found'
        });
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      res.send(500)
    });
});

module.exports = Router;
