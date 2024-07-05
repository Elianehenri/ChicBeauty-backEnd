const userService = require('../services/userService');

// Controlador para registrar usuário
exports.registerUser = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        const newUser = await userService.createUser(nome, email, senha);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
