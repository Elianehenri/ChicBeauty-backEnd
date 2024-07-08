const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//  fazer login
router.post('/login', authController.loginUser);

module.exports = router;
