const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    emailVisible: { type: String } // Campo para armazenar as três primeiras letras visíveis
});

// Antes de salvar, ajusta o campo emailVisible
userSchema.pre('save', function(next) {
    if (this.email && !this.emailVisible) {
        this.emailVisible = this.email.substring(0, 3); // Armazena apenas as três primeiras letras se emailVisible estiver vazio
    }
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
