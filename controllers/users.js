import express from 'express';
import UsersMessage from '../models/usersMessage.js';

const router = express.Router();


export const fetchUserByEmail = async (req, res) => {
  try {
    const { email } = req.query;

    // Find user by email
    const user = await UsersMessage.findOne({ email });

    if (!user) {
      // If user not found, return an error
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user by email:', error);
    res.status(500).json({ error: 'Internal from controllers by email Server Error' });
  }
};


  export const fetchAllUsers = async (req, res) => {
    try {
        const UsersMessages = await UsersMessage.find();

        res.status(200).json(UsersMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
  try {
    const { name, email, image } = req.body;

    // Check if the user with the given email already exists
    const existingUser = await UsersMessage.findOne({ email });

    if (!existingUser) {   
      // User does not exist, create a new user
      const newUser = new UsersMessage({ name, email, image });
      await newUser.save();

      res.status(201).json(newUser);
    }
  } catch (error) {
    console.error('Error creating user from controllers:', error);
    res.status(500).json({ error: 'Internal Server createUser at controllers Error' });
  }
};


export const UpdateCart = async (req, res) => {
  try {
    const { 'product-id': product_id } = req.query;
    const { email } = req.body;
    
    // Find the user by email
    const user = await UsersMessage.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }


    // Check if the product is already in the cart
    const existingProduct = user.cart.find(item => item.product_id === product_id);

    if (existingProduct) {
      // If the product is already in the cart, you can update the quantity or perform any other logic
      existingProduct.quantity += 1;
    } else {
      // If the product is not in the cart, add it
      user.cart.push({ product_id, quantity: 1 });
    }

    // Save the updated user document
    await user.save();

    res.status(200).json({ message: 'Cart updated successfully' });
  } catch (error) {
    console.error('Error updating cart:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// controllers/users.js

// ... (other imports and code)

export const getCartData = async (req, res) => {
  try {
    const { email } = req.query;

    // Find the user by email
    const user = await UsersMessage.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Extract relevant cart data
    const cartData = user.cart.map(item => ({
      product_id: item.product_id,
      quantity: item.quantity,
      object_id: item._id,
    }));

    res.status(200).json({ cart: cartData });
  } catch (error) {
    console.error('Error getting cart data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteCartItem = async (req, res) => {
  try {
    const { 'email': email, 'product-id': product_id } = req.query;

    const user = await UsersMessage.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const updatedCart = user.cart.filter(item => item.product_id !== product_id);

    user.cart = updatedCart;
    await user.save();

    res.status(200).json({ message: 'Cart item deleted successfully' });
  } catch (error) {
    console.error('Error deleting cart item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


  

export default router;
