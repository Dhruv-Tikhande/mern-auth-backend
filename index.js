const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config(); // To use environment variables from .env file

const app = express();

// // Enable CORS with specific options
// app.use(cors({
//     origin: '*', // Allows all origins
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allows all standard methods
//     allowedHeaders: ['Content-Type', 'Authorization'], // Allows specific headers
//   }));

// Enable CORS with more specific options
app.use(cors({
  origin: 'https://my-auth-app-mlow.onrender.com', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Connect to Database
connectDB();

// Init Middleware
// This allows us to accept JSON data in the body of our requests (e.g., from Postman or our frontend)
app.use(express.json({ extended: false }));

// A simple test route
app.get('/', (req, res) => res.send('API is running...'));

// A simple new test route
app.get('/api/test', (req, res) => res.send('The test route is working!'));

// Define Routes
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));