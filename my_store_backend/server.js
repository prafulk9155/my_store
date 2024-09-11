// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Import the DB connection
const productRoutes = require('./routes/productRoutes'); // Import product routes
const userRoutes = require('./routes/userRoutes'); // Import user routes

require('dotenv').config(); // Load environment variables

const app = express(); 

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use routes
app.use('/api/products', productRoutes); // Base endpoint for product routes
app.use('/api/users', userRoutes); // Base endpoint for user routes

// Sample route for testing
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start server and listen on specified PORT
const PORT = process.env.PORT || 5000; // Use environment port or fallback to 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
