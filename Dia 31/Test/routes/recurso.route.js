const express = require('express');
const router = express.Router();

const { Validate } = require('../models/recurso.model');
const  validateId  = require('../middleware/validateId');
const { getRecurso,findByRecurso,updateByRecurso,deleteByRecurso,createRecurso } = require('../controllers/recurso.controller');

router.get('/recurso', getRecurso);
router.post('/recurso', Validate, createRecurso);
router.get('/recurso/:id', validateId, findByRecurso);
router.put('/recurso/:id', updateByRecurso);
router.delete('/recurso/:id', validateId, deleteByRecurso);

module.exports = router;