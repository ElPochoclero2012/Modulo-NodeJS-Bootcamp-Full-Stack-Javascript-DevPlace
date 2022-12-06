const express = require('express');
const router = express.Router();
const { getProduct,getByIdProduct,createProduct,updateProduct,deleteProduct } = require('../controllers/product.controller');
const { ValidateProducts } = require('../models/product.model');

router.get('/', getProduct);

router.get('/:id', getByIdProduct);

router.post('/', ValidateProducts,createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);


module.exports = router;