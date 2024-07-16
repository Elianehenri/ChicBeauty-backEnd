const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//  registrar usuário
router.post('/register', userController.registerUser);

// Obter todos os usuários
router.get('/', userController.getAllUsers); // Adicione esta linha
module.exports = router;
