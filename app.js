const express = require('express');
const bodyParser = require('body-parser');
const conectarMongoDB = require('./src/config/conectarMongoDb');
const userRoutes = require('./src/routes/userRoutes');
const authRoutes = require('./src/routes/authRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conectar ao MongoDB
conectarMongoDB()
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((error) => console.error('Erro ao conectar ao MongoDB', error));

// Rotas
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
