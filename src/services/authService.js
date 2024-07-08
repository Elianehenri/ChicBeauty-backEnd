const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/authUtils');

// Função para fazer login de usuário
exports.loginUser = async (email, senha) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Usuário não encontrado.');
    }

    const isMatch = await bcrypt.compare(senha, user.senha);

    if (!isMatch) {
        throw new Error('Credenciais inválidas.');
    }

    const token = generateToken(user);
    return { user, token };
};

