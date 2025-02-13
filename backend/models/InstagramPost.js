// models/InstagramPost.js
const mongoose = require('mongoose');

const InstagramPostSchema = new mongoose.Schema(
  {
    igId: { type: String, required: true, unique: true },
    caption: { type: String },
    mediaType: { type: String},
    mediaUrl: { type: String },
    permalink: { type: String },
    timestamp: { type: Date },
    mediaType: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('InstagramPost', InstagramPostSchema);
