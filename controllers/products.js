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
    const { page, perPage } = req.query; // Change from req.params to req.query
    console.log("page and perPage", page, perPage);

    // Calculate the number of documents to skip
    const skip = (parseInt(page) - 1) * parseInt(perPage);

    // Use MongoDB's native pagination features
    const products = await ProductsMessage.find()
      .skip(skip)
      .limit(parseInt(perPage))
      .sort({ /* Add your sorting criteria, e.g., createdAt: 1 */ });

    const total = await ProductsMessage.countDocuments(); // Count total number of documents

    res.status(200).json({ data: products, total });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const getProductsById = async (req, res) => {
  try {
    const { _id } = req.query;

    const product = await ProductsMessage.findOne({ _id });

    if (!product) {
      // If user not found, return an error
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error('Error fetching product by id:', error);
    res.status(500).json({ error: 'Internal from controllers by email Server Error' });
  }
};



export const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.query;

    const product = await ProductsMessage.findOne({ category });

    if (!product) {
      // If user not found, return an error
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error('Error fetching product by category:', error);
    res.status(500).json({ error: 'Internal from controllers by email Server Error' });
  }
};


export default router;
