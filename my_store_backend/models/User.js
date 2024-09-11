// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // You can add more user fields as needed
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema); // Export the model
