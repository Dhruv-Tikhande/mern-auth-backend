const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config(); // To use environment variables from .env file

const app = express();

//Enable CORS
app.use(cors());

// Connect to Database
connectDB();

// Init Middleware
// This allows us to accept JSON data in the body of our requests (e.g., from Postman or our frontend)
app.use(express.json({ extended: false }));

// A simple test route
app.get('/', (req, res) => res.send('API is running...'));

// Define Routes
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));