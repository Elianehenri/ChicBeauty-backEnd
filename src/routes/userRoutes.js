const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Endpoint para registrar usuário
router.post('/register', userController.registerUser);

module.exports = router;
