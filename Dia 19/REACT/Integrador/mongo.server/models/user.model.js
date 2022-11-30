const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi')

const UserSchema = new Schema({
    nickname:{
        required: true,
        type: String
    },
    email:{
        required: true,
        type: String
    },
    password:{
        required: true,
        type: String
    },
    phonenumber:{
        required: true,
        type: Number
    },
    image:{
        required: true,
        type: String
    }
})

const User = mongoose.model('users', UserSchema);

const ValidateUser = (user) => {
    const schema = Joi.object({
        nickname: Joi.string().min(8).max(20).required(),
        email: Joi.string().min(8).max(30).required(),
        password: Joi.string().min(8).max(14).required(),
        phonenumber: Joi.number().min(8).max(20).required()
    }).options({ abortEarly: false});

    return schema.validate(user);
};

module.exports = {
    User,
    ValidateUser
}