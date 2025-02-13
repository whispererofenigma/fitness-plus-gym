// routes/instagramRoutes.js
const express = require('express');
const router = express.Router();
const instagramController = require('../controllers/instagramController');

// Endpoint to fetch and store new Instagram posts
router.get('/fetch', instagramController.fetchAndStorePosts);

// Endpoint to get posts from the database
router.get('/posts', instagramController.getPosts);

module.exports = router;
