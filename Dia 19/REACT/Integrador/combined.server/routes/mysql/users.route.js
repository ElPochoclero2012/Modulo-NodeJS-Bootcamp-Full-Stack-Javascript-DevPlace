const express = require("express"); 
const users = express.Router();
const controller = require("../../controllers/mysql/usersController");
const { ValidateUser } = require("../../models/mysql/user.model");


users.get('/', controller.getUser);
users.post('/',ValidateUser, controller.createUser);
users.get('/:id', controller.getByIdUser);
users.put('/:id',controller.updateUser);
users.delete('/:id',controller.deleteUser);

module.exports=users;