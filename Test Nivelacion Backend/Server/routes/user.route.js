const express = require('express');
const router = express.Router();
const uploadMulter = require('../config/multer.config');
const { getUser,getByIdUser,createUser,updateUser,deleteUser,login } = require('../controllers/user.controller');
const { ValidateUsers } = require('../models/user.model');

router.get('/', getUser);

router.get('/:id', getByIdUser);

router.post('/login', login);

router.post('/', [uploadMulter.single('image'), ValidateUsers], createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);


module.exports = router;