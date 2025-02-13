// config/instagramConfig.js
module.exports = {
  apiVersion: 'v22.0',
  accessToken: process.env.IG_ACCESS_TOKEN,
  // Your Instagram Business Account ID
  instagramAccountId: process.env.IG_ACCOUNT_ID,
  baseUrl: 'https://graph.instagram.com',
};
