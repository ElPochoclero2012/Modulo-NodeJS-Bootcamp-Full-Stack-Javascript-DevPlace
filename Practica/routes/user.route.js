const express = require('express');
const router = express.Router();

const { ValidateUser } = require('../models/user.model');
const  validateId  = require('../middleware/validateId');
const {getUsers, createUser, findByUser, updateByUser, deleteByUser} = require('../controllers/user.controller');

router.get('/user', getUsers);
router.post('/user',ValidateUser, createUser);
router.get('/user/:id', validateId, findByUser);
router.put('/user/:id', updateByUser);
router.delete('/user/:id', validateId, deleteByUser);

module.exports = router;