const express = require("express");
const axios = require("axios");
const Router = express.Router();

Router.get("/", async (req, res) => {
  let { lat, long, timezone } = req.query;
  timezone = timezone || UTC;
  axios
    .get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,precipitation&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_hours&current_weather=true&timeformat=unixtime&timezone=${timezone}`
    )
    .then(function (response) {
      var data = response.data;
      var weatherDetails = {
        current_weather: data.current_weather,
        days: data.daily,
        hourly: data.hourly,
      };

      res.send(weatherDetails);
    })
    .catch(function (error) {
      res.status(500).json({
        status: "error",
        message: "Not found",
      });
    });
});

module.exports = Router;
