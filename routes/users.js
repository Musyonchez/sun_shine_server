import express from 'express';
import { fetchUserByEmail, fetchAllUsers, createUser, UpdateCart, getCartData, deleteCartItem } from '../controllers/users.js';

const router = express.Router();

router.get('/byEmail', fetchUserByEmail);

// Get user by email
router.get('/', fetchAllUsers);

router.post('/', createUser);

router.put('/cart', UpdateCart);

router.get('/cart', getCartData);

router.delete('/cart', deleteCartItem);

export default router;
