const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

// Função  criptografar senha
const encryptPassword = (password) => {
    return CryptoJS.AES.encrypt(password, process.env.CRYPTO_SECRET_KEY).toString();
};

// Função  descriptografar senha (se necessário)
const decryptPassword = (encryptedPassword) => {
    const bytes  = CryptoJS.AES.decrypt(encryptedPassword, process.env.CRYPTO_SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
};

// Função  gerar token JWT
const generateToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email,
        
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
