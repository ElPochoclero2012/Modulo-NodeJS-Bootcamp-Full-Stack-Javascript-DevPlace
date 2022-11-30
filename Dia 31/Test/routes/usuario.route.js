const express = require('express');
const router = express.Router();

const { Validate } = require('../models/usuario.model');
const  validateId  = require('../middleware/validateId');
const {getUsers, createUser, findByUser, updateByUser, deleteByUser} = require('../controllers/usuario.controller');

router.get('/usuario', getUsers);
router.post('/usuario',Validate, createUser);
router.get('/usuario/:id', validateId, findByUser);
router.put('/usuario/:id', updateByUser);
router.delete('/usuario/:id', validateId, deleteByUser);

module.exports = router;