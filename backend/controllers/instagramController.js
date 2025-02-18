// controllers/instagramController.js
const InstagramPost = require('../models/InstagramPost');
const instagramService = require('../services/instagramService');


// Fetching from Instagram to Node
exports.fetchAndStorePosts = async (req, res, next) => {
  try {
    const result = await instagramService.fetchAndSavePosts();
    res.status(200).json({
      success: true,
      message: 'Instagram posts processed successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


//Fetching from Node to Frontend

exports.getPosts = async (req, res, next) => {
  try {
   
    let query = instagramService.fetchInstagramPosts();

   

    const posts = await query;
    res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    next(error);
  }
};
