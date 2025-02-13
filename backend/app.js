// app.js

const express = require('express');
const cors = require('cors');
const instagramRoutes = require('./routes/instagramRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

const allowedOrigins = ['http://localhost:5173', 'http://192.168.1.6:5173']; 
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy for this site does not allow access from the specified origin: ${origin}`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
}));

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
