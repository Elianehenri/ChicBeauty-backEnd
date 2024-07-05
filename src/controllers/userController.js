/* const userService = require('../services/userService');
const { generateToken } = require('../utils/authUtils');

// Controlador para registrar usuário e gerar token JWT
exports.registerUser = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        const newUser = await userService.createUser(nome, email, senha);
        
        // Exemplo: gerar token JWT após o registro
        const token = generateToken(newUser);

        res.status(201).json({ newUser, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controlador para fazer login e gerar token JWT
exports.loginUser = async (req, res) => {
    try {
        const { email, senha } = req.body;
        
        // Exemplo: verificar credenciais e gerar token JWT
        const user = await userService.getUserByEmail(email);

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        const isMatch = await userService.comparePasswords(senha, user.senha);

        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciais inválidas.' });
        }

        const token = generateToken(user);

        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
 */
const userService = require('../services/userService');
const { generateToken } = require('../utils/authUtils');

// Controlador para registrar usuário e gerar token JWT
exports.registerUser = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        // Verifica se o email já está cadastrado
        const isUniqueEmail = await userService.isEmailUnique(email);
        if (!isUniqueEmail) {
            return res.status(400).json({ message: 'Este email já está em uso.' });
        }

        // Cria o novo usuário
        const newUser = await userService.createUser(nome, email, senha);
        
        // Exemplo: gerar token JWT após o registro
        const token = generateToken(newUser);

        res.status(201).json({ newUser, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controlador para fazer login e gerar token JWT
exports.loginUser = async (req, res) => {
    try {
        const { email, senha } = req.body;
        
        // Exemplo: verificar credenciais e gerar token JWT
        const user = await userService.getUserByEmail(email);

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        const isMatch = await userService.comparePasswords(senha, user.senha);

        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciais inválidas.' });
        }

        const token = generateToken(user);

        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
