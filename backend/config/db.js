// config/db.js
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable inside .env");
}



const connectDB = async () => {
  await mongoose.connect(MONGO_URI);
}

module.exports = connectDB;
