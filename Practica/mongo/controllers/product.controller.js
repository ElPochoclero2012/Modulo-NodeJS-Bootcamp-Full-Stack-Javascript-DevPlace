const  Product  = require('../models/product.model');

const getProduct = async (req, res) => {
    const product = await Product.find();
    res.status(201).json(product);
}

const getProductById = async (req, res) => {
    const { id } = req.params;
    Product.findById(id).then((data) => {
        res.json(data);
    }).catch(() => {
        res.status(404).json("ITEM not found...");
    })
}

const createProduct = async (req, res) => {
    const product = new Product(req.body)
    product.save()
        .then(() =>res.json(product))
        .catch((err) => res.json("Faltan datos..."));
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    await Product.updateOne({_id:id}, req.body);
    res.json("Elemento editado...");
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    await Product.remove({_id:id});
    res.json("Elemento eliminado...");
}

module.exports = {
    getProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}