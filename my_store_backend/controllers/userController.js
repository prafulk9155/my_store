// controllers/userController.js
const User = require('../models/User');

// Controller to register a new user
const registerUser = async (req, res) => {
    const { username, password } = req.body;
    const newUser = new User({ username, password });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Add other user-related functions...

module.exports = { registerUser }; // Export functions for routes
