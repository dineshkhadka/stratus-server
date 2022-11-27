const express = require("express");
const axios = require("axios");
const Router = express.Router();
require("dotenv").config();

const API_URL = `https://api.unsplash.com`;
const API_KEY = process.env.UNSPLASH_APIKEY;
const PER_PAGE = 10;
const collection = `${API_URL}/collections/26321157/?client_id=${API_KEY}`;

function randomPage(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

Router.get("/", async (req, res) => {
  const collectionData = await axios.get(collection);
  await axios
    .get(
      `${API_URL}/collections/26321157/photos?page=${randomPage(1, Math.ceil(collectionData.data.total_photos / PER_PAGE))}&per_page=${PER_PAGE}&client_id=${API_KEY}`
    )
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
      res.send(500);
    });
});

module.exports = Router;
