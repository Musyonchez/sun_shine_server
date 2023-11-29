import express from 'express';
import mongoose from 'mongoose';

import ProductsMessage from '../models/productsMessage.js';

const router = express.Router();

// Get all products
export const getProducts = async (req, res) => {
    try {
        const products = await ProductsMessage.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProductsPagenation = async (req, res) => {
    try {
      const { page = 1, perPage = 5 } = req.params;
      const skip = (parseInt(page) - 1) * parseInt(perPage);
      const products = await ProductsMessage.find().skip(skip).limit(parseInt(perPage));
      const total = await ProductsMessage.countDocuments(); // Count total number of documents
      res.status(200).json({ data: products, total });
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };



export default router;
