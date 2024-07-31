const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./src/models/userModel');
require('dotenv').config();

// Função para criar os usuários
const createUsers = async () => {
    try {
        const adminEmail = 'admin@admin.com';
        const userEmail = 'user@user.com';
        const adminPassword = 'Admin123@';
        const userPassword = 'User123@';

        // Verificar se os usuários já existem
        const adminExists = await User.findOne({ email: adminEmail });
        const userExists = await User.findOne({ email: userEmail });

        if (adminExists && userExists) {
            console.log('Usuários já existem. Nenhuma ação necessária.');
            return;
        }

        // Criptografar as senhas
        const hashedAdminPassword = await bcrypt.hash(adminPassword, 10);
        const hashedUserPassword = await bcrypt.hash(userPassword, 10);

        // Criar os usuários
        if (!adminExists) {
            await new User({
                nome: 'Admin',
                email: adminEmail,
                senha: hashedAdminPassword
            }).save();
            console.log('Usuário admin criado com sucesso.');
        }

        if (!userExists) {
            await new User({
                nome: 'User',
                email: userEmail,
                senha: hashedUserPassword
            }).save();
            console.log('Usuário user criado com sucesso.');
        }
    } catch (error) {
        console.error('Erro ao criar usuários:', error);
    } finally {
        // Fechar a conexão com o MongoDB
        mongoose.connection.close();
    }
};

// Conectar ao MongoDB e criar os usuários
const conectarMongoDB = async () => {
    const { MONGO_URI } = process.env;

    if (!MONGO_URI) {
        throw new Error('ENV de configuração do banco não informado');
    }

    mongoose.connection.on('connected', () => console.log('Banco de dados conectado'));
    mongoose.connection.on('error', (error) => console.log(`Ocorreu erro ao conectar no banco: ${error}`));

    await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    // Criar os usuários após conectar ao MongoDB
    await createUsers();
};

// Executar a função principal
conectarMongoDB();
