const express = require("express");
const axios = require("axios");
const Router = express.Router();
require("dotenv").config();

const API_URL = `https://api.unsplash.com`;
const API_KEY = process.env.UNSPLASH_APIKEY;
const PER_PAGE = 10;

function randomPage(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

Router.get("/", async (req, res) => {
  const requestedCollection = req.query.collection;
  const collectionId = requestedCollection && String(requestedCollection).trim() !== ''
    ? String(requestedCollection).trim()
    : '26321157';

  try {
    const collectionData = await axios.get(`${API_URL}/collections/${collectionId}/?client_id=${API_KEY}`);
    const totalPhotos = collectionData.data.total_photos;
    const page = randomPage(1, Math.ceil(totalPhotos / PER_PAGE));
    const photosResponse = await axios.get(`${API_URL}/collections/${collectionId}/photos?page=${page}&per_page=${PER_PAGE}&client_id=${API_KEY}`);
    res.send(photosResponse.data);
  } catch (error) {
    res.status(400).json({
      error: {
        code: 'COLLECTION_NOT_FOUND',
        message: 'The specified collection does not exist or is not accessible.',
        collection: collectionId
      }
    });
  }
});

module.exports = Router;
