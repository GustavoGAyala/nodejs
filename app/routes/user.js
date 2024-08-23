const express = require('express');
const controller = require('../controllers/user');
const router = express.Router();

const path = 'user';

// Usar backticks `` para la interpolación de variables en las rutas 
router.get(`/${path}`, controller.getData);

module.exports = router;
