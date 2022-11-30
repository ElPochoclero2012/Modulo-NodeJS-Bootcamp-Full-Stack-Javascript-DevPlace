const { response } = require('express');
const { Usuario } = require('../models/usuario.model');
const { Validate } = require('../models/usuario.model');


const getUsers = async (req, res) => {
    const user = await Usuario.find();
    res.json(user);
}

const findByUser = async (req, res) => {
    const { id } = req.params;
    const user = await Usuario.findById(id);
    res.json(user);
}

const updateByUser = async (req, res) => {
    const { id } = req.params;
    await Usuario.updateOne({ _id : id }, req.body);
    res.json({'message':'Datos modificados'});
}

const deleteByUser = async (req, res) => {
    const { id } = req.params;
    await Usuario.remove({ _id:id });
    res.json({'message':'Datos eliminados'});
}

const createUser = async (req, res) => {
    const user = new Usuario(req.body);
    response = Validate(user);
    if (response.error) {
        return res.status(422)
        .json({message:response.error.details});
    }
    user.save();
    res.json(user);
}

module.exports = { 
    getUsers,
    findByUser,
    updateByUser,
    deleteByUser,
    createUser 
}