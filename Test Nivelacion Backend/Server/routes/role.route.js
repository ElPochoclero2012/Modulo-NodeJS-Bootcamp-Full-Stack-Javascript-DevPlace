const express = require("express"); 
const role = express.Router();
const { getRole,createRole,getByIdRole,updateRole,deleteRole } = require("../controllers/Role.controller");
const { ValidateRole } = require('../models/Role.model')

role.get('/', getRole);

role.post('/', ValidateRole, createRole);

role.get('/:id', getByIdRole);

role.put('/:id', updateRole);

role.delete('/:id', deleteRole);


module.exports = role;