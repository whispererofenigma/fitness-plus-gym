const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable inside .env");
}

let isConnected = false; // Track connection status

const connectDB = async () => {
  if (isConnected) {
    console.log("✅ Using existing database connection");
    return;
  }

  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true; // Set to true once connected
    console.log("✅ New database connection established");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    throw new Error("Database connection error");
  }
};

module.exports = connectDB;
