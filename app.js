
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const path = require('path'); // Adicione esta linha
const conectarMongoDB = require('./src/config/conectarMongoDb');
const userRoutes = require('./src/routes/userRoutes');
const authRoutes = require('./src/routes/authRoutes');
const productRoutes = require('./src/routes/productRoutes');
const categoryRoutes = require('./src/routes/categoryRoutes');
const upload = require('./src/utils/multer.config');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Configurando CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração do middleware para servir arquivos estáticos (imagens, uploads, etc.)
app.use('/uploads', express.static(path.join(__dirname, 'uploads'), {
    maxAge: '1y' // Cache de 1 ano
}));

// Conectar ao MongoDB
conectarMongoDB()
    .then(() => console.log('Conectado ao MongoDB'))
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

// Inicializar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
