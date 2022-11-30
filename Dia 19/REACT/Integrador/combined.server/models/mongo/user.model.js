const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi')
const validateRequest = require('../../middlewares/validateRequest');

const UsersSchema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  status: {
    type: Boolean,
    default: true
  }
});
const User = mongoose.model('users', UsersSchema);

const ValidateUser = (req, res, next) => {
  const schema = Joi.object({
    first_name: Joi.string().min(5).max(100).required()
      .messages({
        'string.empty': "Ingresa el Nombre",
        'string.min': "El nombre debe ser mayor a 5 caracteres",
        'any.required': "Ingresa el Nombre"
      }),
    last_name: Joi.string().min(5).max(100).required()
      .messages({
        'string.empty': "Ingresa el Apellido",
        'string.min': "El Apellido debe ser mayor a 5 caracteres",
        'any.required': "Ingresa el Apellido"
      }),
      email: Joi.string().email().min(5).max(100).required()
        .messages({
          'string.empty': "Ingresa el email",
          'string.min': "El email debe ser mayor a 5 caracteres",
          'any.required': "Ingresa el email"
        }),
        password: Joi.string().min(5).max(100).required()
          .messages({
            'string.empty': "Ingresa su password",
            'string.min': "El password debe ser mayor a 5 caracteres",
            'any.required': "Ingresa el password"
          }),
  });
  validateRequest(req, res, next, schema);
};

module.exports = {
  User,
  ValidateUser,
}