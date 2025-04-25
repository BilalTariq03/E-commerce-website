const express = require('express');
const Cart = require('../models/Cart'); // Assuming the Cart schema is in ../models/cart

const router = express.Router();

// Get all cart items
router.get('/', async (req, res) => {
  try {
    const carts = await Cart.find().populate('items.productId');
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Add an item to the cart
router.post('/', async (req, res) => {
  const { userId, productId, quantity, price } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      // Check if product already exists in cart
      const existingItemIndex = cart.items.findIndex(
        item => item.productId.toString() === productId
      );

      if (existingItemIndex !== -1) {
        // Product exists - update quantity and price (optional: validate price match)
        cart.items[existingItemIndex].quantity += quantity;
      } else {
        // Product does not exist - push new item
        cart.items.push({ productId, quantity, price });
      }
    } else {
      // No cart exists - create a new one
      cart = new Cart({
        userId,
        items: [{ productId, quantity, price }],
      });
    }

    // Save and trigger the `pre('save')` hook for totalPrice
    const updatedCart = await cart.save();
    res.status(201).json(updatedCart);

  } catch (error) {
    console.error("Error adding to cart:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});



// Update an item in the cart
router.put('/:id', async (req, res) => {
  try {
    const updatedCartItem = await Cart.findByIdAndUpdate(
      req.params.id,
      { quantity: req.body.quantity },
      { new: true }
    );
    if (!updatedCartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }
    res.status(200).json(updatedCartItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an item from the cart
router.delete('/:id', async (req, res) => {
  try {
    const deletedCartItem = await Cart.findByIdAndDelete(req.params.id);
    if (!deletedCartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }
    res.status(200).json({ message: 'Cart item deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;