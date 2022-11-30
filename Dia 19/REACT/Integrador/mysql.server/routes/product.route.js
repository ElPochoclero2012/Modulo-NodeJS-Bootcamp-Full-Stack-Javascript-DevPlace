const express = require("express");
const product = express.Router();
const controller = require("../controllers/productController")

/**Get all users */
product.get('/', controller.getProduct);
product.post('/',controller.createProduct);
product.get('/:id', controller.getByIdProduct);
product.put('/:id',controller.updateProduct);
product.delete('/:id',controller.deleteProduct);


module.exports=product;