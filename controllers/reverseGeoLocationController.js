const express = require("express");
const axios = require("axios");
const Router = express.Router();

var API_KEY = `c1b928b71dc25eee21fde1cead132ae8`;

Router.get("/", async (req, res) => {
  let { lat, long } = req.query;
  axios
    .get(
      `https://api.openweathermap.org/geo/1.0/reverse?$&lat=${lat}&lon=${long}&appid=${API_KEY}`
    )
    .then(function (response) {
      res.json({
        name: response.data[0].name,
        local_names: response.data[0].local_names,
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
});

module.exports = Router;
