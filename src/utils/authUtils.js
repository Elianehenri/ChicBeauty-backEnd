const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

// Função para criptografar senha
const encryptPassword = (password) => {
    return CryptoJS.AES.encrypt(password, process.env.CRYPTO_SECRET_KEY).toString();
};

// Função para descriptografar senha (se necessário)
const decryptPassword = (encryptedPassword) => {
    const bytes  = CryptoJS.AES.decrypt(encryptedPassword, process.env.CRYPTO_SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
};

// Função para gerar token JWT
const generateToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email,
        // Adicione outros dados do usuário, se necessário
    };
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1h' }); // Token expira em 1 hora
};

// Função para verificar token JWT
const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
};

module.exports = {
    encryptPassword,
    decryptPassword,
    generateToken,
    verifyToken
};
