const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Criar uma nova categoria
router.post('/', categoryController.createCategory);

// Obter todas as categorias
router.get('/', categoryController.getCategories);

module.exports = router;
