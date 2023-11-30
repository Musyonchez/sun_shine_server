import express from 'express';
import { getProducts, getProductsPagenation, getProductsById, getProductsByCategory } from '../controllers/products.js';

const router = express.Router();

// Get all users
router.get('/getall', getProducts);
router.get('/getitems', getProductsPagenation);
router.get('/getitemsbyid', getProductsById)
router.get('/getitemsbycategory', getProductsByCategory)

export default router;
