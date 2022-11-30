const express = require('express');
const router = express.Router();

const { Validate } = require('../models/recurso.model');
const  validateId  = require('../middleware/validateId');
const { getRecurso,findByRecurso,updateByRecurso,deleteByRecurso,createRecurso } = require('../controllers/recurso.controller');

router.get('/product', getRecurso);
router.post('/product', Validate, createRecurso);
router.get('/product/:id', validateId, findByRecurso);
router.put('/product/:id', updateByRecurso);
router.delete('/product/:id', validateId, deleteByRecurso);

module.exports = router;