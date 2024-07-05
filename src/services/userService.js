const User = require('../models/userModel');
const { encryptPassword } = require('../utils/authUtils');

// Serviço para criar usuário
exports.createUser = async (nome, email, senha) => {
    const encryptedSenha = encryptPassword(senha);
    const user = new User({
        nome,
        email,
        senha: encryptedSenha
    });
    return await user.save();
};
