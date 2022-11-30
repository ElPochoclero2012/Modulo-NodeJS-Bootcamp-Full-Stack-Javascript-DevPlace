const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');
const validateRequest = require('../middleware/validateRequest')

const RecursoSchema = new Schema({
    idRecurso:{ //No debería hacer falta ya que el mongo agrega un ID por defecto a cada nuevo elemento agregado a la base //Punto 2
        required: true,
        unique: true,
        type: Number
    },
    mensaje:{
        required: true,
        type: String
    }
})

const Recurso = mongoose.model('recurso', RecursoSchema);

const Validate = (req, res, next) => {
    const schema = Joi.object({
        idRecurso:Joi.number().required()
        .messages({
            "number.empty":"No se encontró ID",
            "any.required": "No se encontró ID"
        }),
        mensaje: Joi.string().min(5).max(30).required()
        .messages({
            "string.empty": "Ingrese el mensaje",
            "string.min": "El mensaje debe ser mayor a 5 carácteres",
            "any.required": "Ingrese el mensaje",
        })
    });
    validateRequest(req, res, next, schema);
};

module.exports = {
    Recurso,
    Validate
}