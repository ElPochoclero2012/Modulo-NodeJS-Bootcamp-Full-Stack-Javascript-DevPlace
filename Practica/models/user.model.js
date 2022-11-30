const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi')
const validateRequest = require('../middleware/validateRequest');

const UserSchema = new Schema({
    nickname:{
        required: true,
        type: String,
    },
    email:{
        required: true,
        type: String,
    },
    password:{
        required: true,
        type: String,
    },
    phonenumber:{
        required: true,
        type: Number,
    },
    image:{
        required: true,
        type: String,
    }
})

const User = mongoose.model('users', UserSchema);

// const ValidateUser = (user) => {
//     const schema = Joi.object({
//         nickname: Joi.string().min(8).max(20).required(),
//         email: Joi.string().min(8).max(20).required(),
//         password: Joi.string().min(8).max(20).required(),
//         phonenumber: Joi.string().min(8).max(20).required()
//     }).options({ aboutEarly: false });

//     return schema.validate(user);
// };

const ValidateUser = (req, res, next) => {
    const schema = Joi.object({
        nickname:Joi.string().min(5).max(20).required()
        .messages({
            "string.empty":"Ingrese el Nickname",
            "string.min": "El nickname debe ser mayor a 5 carácteres",
            "any.required": "Ingrese el Nickname",
        }),
        email: Joi.string().email().min(5).max(20).required()
        .messages({
            "string.empty": "Ingrese su correo",
            "string.min": "El correo debe ser mayor a 5 carácteres",
            "any.required": "Ingrese su correo",
        }),
        password: Joi.string().min(5).max(20).required()
        .messages({
            "string.empty": "Ingrese su contraseña",
            "string.min": "La contraseña debe ser mayor a 5 carácteres",
            "any.required": "Ingrese su contraseña",
        }),
        phonenumber: Joi.number().min(8).max(20).required()
        .messages({
            "string.empty": "Ingrese su numero telefónico",
            "string.min": "El número telefónico debe ser mayor a 8 carácteres",
            "any.required": "Ingrese su numero telefónico",
        })
    });
    validateRequest(req, res, next, schema);
};

module.exports = {
    User,
    ValidateUser
}