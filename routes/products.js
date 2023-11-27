import express from 'express';
import { getProducts, getProductsPagenation } from '../controllers/products.js';

const router = express.Router();

// Get all users
router.get('/', getProducts);
router.get('/page=:page/per-page=:perPage', getProductsPagenation);


export default router;
