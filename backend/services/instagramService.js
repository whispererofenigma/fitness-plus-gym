// services/instagramService.js
const axios = require('axios');
const InstagramPost = require('../models/InstagramPost');
const igConfig = require('../config/instagramConfig');

const fetchInstagramPosts = async () => {
  const endpoint = `${igConfig.baseUrl}/${igConfig.apiVersion}/${igConfig.instagramAccountId}/media`;
  const params = {
    access_token: igConfig.accessToken,
    fields: 'id,caption,media_url,permalink,timestamp,media_type',
  };

  try {
    const response = await axios.get(endpoint, { params });
    return response.data.data; // Array of posts
  } catch (error) {
    throw new Error('Error fetching Instagram posts: ' + error.message);
  }
};

exports.fetchAndSavePosts = async () => {
  const posts = await fetchInstagramPosts();
  let newPostsCount = 0;

  // Process each post asynchronously
  await Promise.all(
    posts.map(async (post) => {
      // Check if the post already exists by its Instagram ID (igId)
      const exists = await InstagramPost.findOne({ igId: post.id });
      if (!exists) {
        // Save new post
        const newPost = new InstagramPost({
          igId: post.id,
          caption: post.caption,
          mediaUrl: post.media_url,
          mediaType: post.media_type,
          permalink: post.permalink,
          timestamp: post.timestamp,
          mediaType: post.media_type,
        });
        await newPost.save();
        newPostsCount++;
      }
    })
  );

  return { totalFetched: posts.length, newPostsAdded: newPostsCount };
};
