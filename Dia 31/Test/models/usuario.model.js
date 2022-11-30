const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');
const validateRequest = require('../middleware/validateRequest')

const UsuarioSchema = new Schema({
    username:{
        required: true,
        type: String
    },
    email:{
        required: true,
        type: String
    },
    rol:{ // La idea es que, de ser 0 sería un usuario comun, y de ser 1 sería un usuario premium //Punto 1
        required: true,
        type: Boolean  //Punto 1
    }
})

const Usuario = mongoose.model('usuario', UsuarioSchema);

const Validate = (req, res, next) => {
    const schema = Joi.object({
        username:Joi.string().min(5).max(20).required()
        .messages({
            "string.empty":"Ingrese el username",
            "string.min": "El username debe ser mayor a 5 carácteres",
            "any.required": "Ingrese el username",
        }),
        email: Joi.string().email().min(5).max(20).required()
        .messages({
            "string.empty": "Ingrese su correo",
            "string.min": "El correo debe ser mayor a 5 carácteres",
            "any.required": "Ingrese su correo",
        }),
        rol:Joi.bool().required()
    });
    validateRequest(req, res, next, schema);
};

module.exports = {
    Usuario,
    Validate
}