/* const User = require('../models/userModel');
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
 */

const User = require('../models/userModel');

// Função para criar usuário
exports.createUser = async (nome, email, senha) => {
    const user = new User({
        nome,
        email,
        senha
    });
    return await user.save();
};

// Função para verificar se o email já está cadastrado
exports.isEmailUnique = async (email) => {
    const existingUser = await User.findOne({ email });
    return existingUser ? false : true;
};
