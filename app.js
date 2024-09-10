

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const conectarMongoDB = require('./src/config/conectarMongoDb');
const userRoutes = require('./src/routes/userRoutes');
const authRoutes = require('./src/routes/authRoutes');
const productRoutes = require('./src/routes/productRoutes');
const categoryRoutes = require('./src/routes/categoryRoutes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração para servir arquivos estáticos
app.use('/uploads', express.static(path.join(__dirname, 'uploads'), {
    maxAge: '1y' // Cache de 1 ano
}));
// // Configuração para servir arquivos estáticos


// Conectar ao MongoDB
conectarMongoDB()
    .then(() => {
        console.log('Conectado ao MongoDB');

        // Executar o script para criar usuários
        const { exec } = require('child_process');
        exec('node seed.js', (error, stdout, stderr) => {
            if (error) {
                console.error(`Erro ao executar o script de seed: ${error}`);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });

        // Inicializar o servidor
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        });
    })
    .catch((error) => console.error('Erro ao conectar ao MongoDB', error));

// Rotas
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

// Rota para lidar com erros 404
app.use((req, res) => {
    res.status(404).json({ message: 'Rota não encontrada' });
});
