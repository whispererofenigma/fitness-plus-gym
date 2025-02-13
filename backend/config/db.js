// config/db.js
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable inside .env");
}

// Use a global cached connection for serverless environments
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn) {
    // Reuse existing connection
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((mongooseInstance) => mongooseInstance);
  }
  cached.conn = await cached.promise;
  return cached.conn;
};

module.exports = connectDB;
