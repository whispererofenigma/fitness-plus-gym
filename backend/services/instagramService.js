// services/instagramService.js
const axios = require('axios');
const InstagramPost = require('../models/InstagramPost');
const igConfig = require('../config/instagramConfig');

const fetchInstagramPosts = async () => {
  let allPosts = [];
  let nextPage = `${igConfig.baseUrl}/${igConfig.apiVersion}/${igConfig.instagramAccountId}/media`;
  let params = {
    access_token: igConfig.accessToken,
    fields: 'id,caption,media_url,permalink,timestamp,media_type,like_count,comments_count',
    limit: 100, // Fetch 100 per request (max allowed by Instagram)
  };

  try {
    while (nextPage) {
      const response = await axios.get(nextPage, { params });

      if (response.data?.data) {
        allPosts = [...allPosts, ...response.data.data];
      }

      // Get the next page URL if it exists
      nextPage = response.data.paging?.next || null;
    }

    return allPosts; // Return all fetched posts
  } catch (error) {
    throw new Error('Error fetching Instagram posts: ' + error.message);
  }
};


exports.fetchAndSavePosts = async () => {
  const posts = await fetchInstagramPosts();
  let newPostsCount = 0;
  let updatedPostsCount = 0;

  if (!posts || posts.length === 0) {
    return { totalFetched: 0, newPostsAdded: 0, updatedPosts: 0 };
  }

  // Process each post asynchronously
  await Promise.all(
    posts.map(async (post) => {
      const existingPost = await InstagramPost.findOne({ igId: post.id });

      if (!existingPost) {
        // If the post is new, save it
        const newPost = new InstagramPost({
          igId: post.id,
          caption: post.caption || "",
          mediaUrl: post.media_url || "",
          mediaType: post.media_type || "",
          permalink: post.permalink || "",
          timestamp: post.timestamp || new Date().toISOString(),
          likeCount: post.like_count || 0,
          commentsCount: post.comments_count || 0,
        });

        await newPost.save();
        newPostsCount++;
      } else if (existingPost.mediaUrl !== post.media_url) {
        // If the media URL has changed, update the post
        existingPost.mediaUrl = post.media_url;
        await existingPost.save();
        updatedPostsCount++;
      }
    })
  );

  return { totalFetched: posts.length, newPostsAdded: newPostsCount, updatedPosts: updatedPostsCount };
};
