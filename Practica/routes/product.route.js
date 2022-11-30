const express = require('express');
const router = express.Router();
const { getProduct,getProductById,createProduct,updateProduct,deleteProduct } = require('../controllers/product.controller');

router.get('/product', getProduct);
router.post('/product', createProduct);
router.get('/product/:id', getProductById);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

module.exports = router;