const authService = require('../services/authService');

//  fazer login e gerar token JWT
exports.loginUser = async (req, res) => {
    try {
        const { email, senha } = req.body;
        const { user, token } = await authService.loginUser(email, senha);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
