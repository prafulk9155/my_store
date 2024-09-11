// server.js or routes/paymentRoutes.js
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);  // Use your actual secret key
const router = express.Router();

router.post('/create-payment-intent', async (req, res) => {
    const { amount } = req.body; // Ensure you're receiving the amount correctly

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount, // Amount in smallest currency unit (e.g., cents)
            currency: 'inr', // Change to your desired currency
        });
        // Send the client secret back to the client
        res.status(200).send({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;  // Export your router to use in your server
