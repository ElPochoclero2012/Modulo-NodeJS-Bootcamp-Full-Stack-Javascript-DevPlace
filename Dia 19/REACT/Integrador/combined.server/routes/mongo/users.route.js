const express = require("express");
const router = express.Router();

const { ValidateUser } = require('../../models/mongo/user.model')
const {getUsers,createUser,findByUser,UpdateByUser,deleteByUser} = require('../../controllers/mongo/userController');
const validateIdMongo = require("../../middlewares/validateIdMongo");


/**Get all users */
router.get('/', getUsers);
router.post('/',ValidateUser,createUser);
router.get('/:id',validateIdMongo, findByUser);
router.put('/:id',UpdateByUser);
router.delete('/:id',validateIdMongo,deleteByUser);

module.exports=router;