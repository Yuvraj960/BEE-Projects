const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.find();
    res.render('products/index', { products });
  } catch (err) {
    next(err);
  }
});

router.get('/new', (req, res) => {
  res.render('products/new');
});

router.post('/', async (req, res, next) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.redirect('/products');
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) throw new Error('Product not found');
    res.render('products/show', { product });
  } catch (err) {
    next(err);
  }
});

router.get('/:id/edit', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render('products/edit', { product });
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
    res.redirect(`/products/${req.params.id}`);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/products');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
