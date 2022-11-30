const { response } = require('express');
const { Recurso } = require('../models/recurso.model');
const { Validate } = require('../models/recurso.model');


const getRecurso = async (req, res) => {
    const recurso = await Recurso.find();
    res.json(recurso);
}

const findByRecurso = async (req, res) => {
    const { id } = req.params;
    const recurso = await Recurso.findById(id);
    res.json(recurso);
}

const updateByRecurso = async (req, res) => {
    const { id } = req.params;
    await Recurso.updateOne({ _id : id }, req.body);
    res.json({'message':'Datos modificados'});
}

const deleteByRecurso = async (req, res) => {
    const { id } = req.params;
    await Recurso.remove({ _id:id });
    res.json({'message':'Datos eliminados'});
}

const createRecurso = async (req, res) => {
    const recurso = new Recurso(req.body);
    response = Validate(recurso);
    if (response.error) {
        return res.status(422)
        .json({message:response.error.details});
    }
    recurso.save();
    res.json(recurso);
}

module.exports = { 
    getRecurso,
    findByRecurso,
    updateByRecurso,
    deleteByRecurso,
    createRecurso 
}