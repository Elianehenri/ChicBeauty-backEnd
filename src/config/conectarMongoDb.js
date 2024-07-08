
const mongoose = require('mongoose');

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
};

module.exports = conectarMongoDB;
