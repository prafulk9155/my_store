// controllers/productController.js
const Product = require('../models/Product');

// Controller to add a new product
const addProduct = async (req, res) => {
    const { name, price, description } = req.body;
    const newProduct = new Product({ name, price, description });

    try {
        const savedProduct = await newProduct.save(); // Save to the database
        res.status(201).json(savedProduct); // Respond with the saved product
    } catch (error) {
        res.status(400).json({ message: error.message }); // Handle errors
    }
};

// Controller to list all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find(); // Retrieve all products
        res.status(200).json(products); // Respond with the list of products
    } catch (error) {
        res.status(500).json({ error:True,message: error.message }); // Handle errors
    }
};

module.exports = { addProduct, getProducts }; // Export the functions
