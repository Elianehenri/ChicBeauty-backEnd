const User = require('../models/userModel');

// Serviço para criar usuário
exports.createUser = async (nome, email, senha) => {
    const user = new User({
        nome,
        email,
        senha // Certifique-se de criptografar a senha antes de salvar
    });
    return await user.save();
};
