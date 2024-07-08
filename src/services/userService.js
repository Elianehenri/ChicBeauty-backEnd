
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

// Função criar usuário
exports.createUser = async (nome, email, senha) => {
    const user = new User({
        nome,
        email,
        senha
    });
    return await user.save();
};

// Função verificar se o email já está em uso
exports.isEmailUnique = async (email) => {
    const existingUser = await User.findOne({ email });
    return !existingUser; // Retorna true se o email não estiver em uso
};

// Função  verificar se a senha atende aos critérios
exports.validatePassword = (password) => {
 
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
};

// Função comparar senhas (bcrypt)
exports.comparePasswords = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

// Função  obter usuário por email
exports.getUserByEmail = async (email) => {
    return await User.findOne({ email });
};
