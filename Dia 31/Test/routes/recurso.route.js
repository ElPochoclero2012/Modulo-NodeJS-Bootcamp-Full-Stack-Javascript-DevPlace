const express = require('express');
const router = express.Router();

const { Validate } = require('../models/recurso.model');
const  validateId  = require('../middleware/validateId');
const { getRecurso,findByRecurso,updateByRecurso,deleteByRecurso,createRecurso } = require('../controllers/recurso.controller');

router.get('/recurso', getRecurso); // Punto 5
router.post('/recurso', Validate, createRecurso); // Punto 6
router.get('/recurso/:id', validateId, findByRecurso);
router.put('/recurso/:id', updateByRecurso);    // Punto 6
router.delete('/recurso/:id', validateId, deleteByRecurso); // Punto 7 a medias, no se como validar que el usuario es premium por ahora

module.exports = router;