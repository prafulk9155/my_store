// routes/userRoutes.js
const express = require('express');
const { registerUser } = require('../controllers/userController');

const router = express.Router();

// Route to register a user
router.post('/register', registerUser);

// Define more user routes here...

module.exports = router; // Export the router
