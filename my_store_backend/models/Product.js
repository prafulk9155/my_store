// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    // Add more fields as necessary
}, {
    timestamps: true // Automatically manage createdAt and updatedAt timestamps
});

module.exports = mongoose.model('Product', productSchema); // Export the model
