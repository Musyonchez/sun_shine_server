import express from 'express';
import { getProducts, getProductsPagenation } from '../controllers/products.js';

const router = express.Router();

// Get all users
router.get('/getall', getProducts);
router.get('/getitems', getProductsPagenation);

export default router;
