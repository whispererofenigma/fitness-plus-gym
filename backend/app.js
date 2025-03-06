// app.js

const express = require('express');
const cors = require('cors');
const instagramRoutes = require('./routes/instagramRoutes');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/db');
const app = express();
connectDB();

// const allowedOrigins = ['http://localhost:5173', 'http://192.168.1.6:5173', 'https://www.fitnessplus.vercel.app', 'https://fitnessplus.vercel.app']; 
app.options("*", cors());
app.use(
  cors({
    origin: "http://192.168.1.6:5173", // Allow frontend in dev mode
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "limit"],
    
  })
);


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/instagram', instagramRoutes);

// Global Error Handler
app.use(errorHandler);

// Default route for sanity check
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

module.exports = app;
