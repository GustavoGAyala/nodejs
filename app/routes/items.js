const express = require('express');
const controller = require('../controllers/items');
const router = express.Router();

const path = 'items';

// Usar backticks `` para la interpolación de variables en las rutas 
router.get(`/${path}`, controller.getData);

module.exports = router;