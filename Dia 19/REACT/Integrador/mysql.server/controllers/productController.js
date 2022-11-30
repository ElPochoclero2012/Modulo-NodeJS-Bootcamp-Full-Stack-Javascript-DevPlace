var Products = require('../models/product.model');
const Controller={}

Controller.getProduct = async (req, res) => {
    const response = await Products.findAll().then((data) => {
        const res = { error: false, data: data }
        return res;
    }).catch(error => {
        const res = { error: true, message: error }
        return res;
    });
    res.json(response);
}

Controller.createProduct = async (req, res) => {
    try {
        const modelData = {
            name: req.body.name,
            stock: req.body.stock,
            image: req.body.image,
            category: req.body.category
        }
        const response = await Products.create(modelData)
            .then((data) => {
                const res = { error: false, data: data, message: "Product Create" }
                return res;
            }).catch(error => {
                const res = { error: true, message: error }
                return res;
            });
        res.json(response);
    } catch (e) {
        console.log(e)
    }
}


Controller.getByIdProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Products.findAll({
            where: { id: id }
        }).then((data) => {
            const res = { error: false, data: data }
            return res;
        }).catch(error => {
            const res = { error: true, message: error }
            return res;
        });
        res.json(response);
    } catch (e) {
        console.log(e);
    }
}

Controller.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Products.update(req.body, {
            where: { id: id }
        }).then((data) => {
                const res = { error: false, data: data, message: "Product Update" }
                return res;
            }).catch(error => {
                const res = { error: true, message: error }
                return res;
            });
        res.json(response);
    } catch (e) {
        console.log(e)
    }
}

Controller.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
       
        const response = await Products.destroy({
            where: { id: id }
        }).then((data) => {
            const res = { error: false, data: data,message:"Deleted Successful" }
            return res;
        }).catch(error => {
            const res = { error: true, message: error }
            return res;
        });
        res.json(response);
    } catch (e) {
        console.log(e);
    }
}

module.exports = Controller