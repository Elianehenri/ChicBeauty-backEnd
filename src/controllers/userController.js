
const userService = require('../services/userService.js');
const { generateToken } = require('../utils/authUtils');
const bcrypt = require('bcryptjs');
const upload = require('../utils/multer.config.js'); 

// Registrar usuário e gerar token JWT
exports.registerUser = [
  upload.single('avatar'), 
  async (req, res) => {
    console.log("Dados recebidos:", req.body);
    try {
      const { nome, email, senha } = req.body;
      const avatar = req.file ? req.file.filename : null;

      // Verifica se o email já está cadastrado
      const isUniqueEmail = await userService.isEmailUnique(email);
      if (!isUniqueEmail) {
        return res.status(400).json({ message: 'Este email já está em uso.' });
      }

      // Valida a senha
      if (!userService.validatePassword(senha)) {
        return res.status(400).json({ message: 'A senha deve ter pelo menos 8 caracteres incluindo letras maiúsculas, minúsculas, caracteres especiais e números.' });
      }

      // Criptografa a senha antes de salvar
      const hashedPassword = await bcrypt.hash(senha, 10);

      // Cria o novo usuário
      const newUser = await userService.createUser(nome, email, hashedPassword, avatar);

      // Gera token JWT após o registro
      const token = generateToken(newUser);

      res.status(201).json({ newUser, token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
];
exports.getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};