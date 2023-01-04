const express = require('express');
const axios = require('axios');
const Router = express.Router();

const quotes = require("../data/quotes.json");

Router.get('/', async (req, res) => {
    const sample = arr => {
      const len = arr == null ? 0 : arr.length
      return len ? arr[Math.floor(Math.random() * len)] : undefined
    }
  res.json(sample(quotes));
})

module.exports = Router;