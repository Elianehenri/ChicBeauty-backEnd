


const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./src/models/userModel');
const Category = require('./src/models/categoryModel');
const Product = require('./src/models/productModel');
require('dotenv').config();

const runSeed = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log('Conectado ao MongoDB.');

        const createUsers = async () => {
            const adminEmail = 'admin@admin.com';
            const userEmail = 'user@user.com';
            const adminPassword = 'Admin123@';
            const userPassword = 'User123@';

            const adminExists = await User.findOne({ email: adminEmail });
            const userExists = await User.findOne({ email: userEmail });

            if (adminExists && userExists) {
                console.log('Usuários já existem. Nenhuma ação necessária.');
                return;
            }

            const hashedAdminPassword = await bcrypt.hash(adminPassword, 10);
            const hashedUserPassword = await bcrypt.hash(userPassword, 10);

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
        };

        const createCategories = async () => {
            const categories = [
                { nome: 'Perfumaria' },
                { nome: 'Corpo-e-Banho' },
                { nome: 'Cabelos' },
                { nome: 'Make' }
            ];

            for (const category of categories) {
                const existingCategory = await Category.findOne({ nome: category.nome });
                if (!existingCategory) {
                    await new Category(category).save();
                    console.log(`Categoria '${category.nome}' criada com sucesso.`);
                } else {
                    console.log(`Categoria '${category.nome}' já existe.`);
                }
            }
        };

        const createProducts = async () => {
            const categories = await Category.find({});
            const categoryMap = categories.reduce((acc, category) => {
                acc[category.nome] = category._id;
                return acc;
            }, {});

            const products = [
                { nome: 'Perfume Lily', preco: 1500.00, categoria: categoryMap['Perfumaria'], imagem: '/uploads/perfume.png', parcelas: 6 },
                { nome: 'Perfume Lily 120 ml', preco: 1500.00, categoria: categoryMap['Perfumaria'], imagem: '/uploads/perfume.png', parcelas: 6 },
                { nome: 'Perfume Florata Azul', preco: 150.00, categoria: categoryMap['Perfumaria'], imagem: '/uploads/perfume.png', parcelas: 3 },
                { nome: 'Perfume Florata Rosa', preco: 90.00, categoria: categoryMap['Perfumaria'], imagem: '/uploads/perfume.png', parcelas: 2 },
                { nome: 'Perfume Malbec ', preco: 200.00, categoria: categoryMap['Perfumaria'], imagem: '/uploads/perfume.png', parcelas: 2 },
                { nome: 'Sabonete Liquido', preco: 29.99, categoria: categoryMap['Corpo-e-Banho'], imagem: '/uploads/banho.png', parcelas: 2 },
                { nome: 'Creme Corpo Macadamia', preco: 50.00, categoria: categoryMap['Corpo-e-Banho'], imagem: '/uploads/banho.png', parcelas: 2 },
                { nome: 'Desodorante Egeo', preco: 62.99, categoria: categoryMap['Corpo-e-Banho'], imagem: '/uploads/banho.png', parcelas: 3 },
                { nome: 'Oleo Hidratante', preco: 69.99, categoria: categoryMap['Corpo-e-Banho'], imagem: '/uploads/banho.png', parcelas: 2 },
                { nome: 'Shammpo Cabelos Cacheados', preco: 19.99, categoria: categoryMap['Cabelos'], imagem: '/uploads/cabelo.png', parcelas: 1 },
                { nome: 'Condicionador Cabelos Cachos', preco: 29.90, categoria: categoryMap['Cabelos'], imagem: '/uploads/cabelo.png', parcelas: 2 },
                { nome: 'Mascara Capilar Regeneradora', preco: 67.80, categoria: categoryMap['Cabelos'], imagem: '/uploads/cabelo.png', parcelas: 3 },
                { nome: 'Creme Pentear', preco: 39.80, categoria: categoryMap['Cabelos'], imagem: '/uploads/cabelo.png', parcelas: 2 },
                { nome: 'Baton Liquido', preco: 59.99, categoria: categoryMap['Make'], imagem: '/uploads/make.png', parcelas: 3 },
                { nome: 'Mascara Cilios', preco: 49.99, categoria: categoryMap['Make'], imagem: '/uploads/make.png', parcelas: 2 },
                { nome: 'Base Liquida', preco: 53.99, categoria: categoryMap['Make'], imagem: '/uploads/make.png', parcelas: 3 },
                { nome: 'Po Compacto', preco: 69.99, categoria: categoryMap['Make'], imagem: '/uploads/make.png', parcelas: 3 }
            ];

            for (const product of products) {
                const existingProduct = await Product.findOne({ nome: product.nome });
                if (!existingProduct) {
                    await new Product(product).save();
                    console.log(`Produto '${product.nome}' criado com sucesso.`);
                } else {
                    console.log(`Produto '${product.nome}' já existe.`);
                }
            }
        };

        await createUsers();
        await createCategories();
        await createProducts();

        console.log('Seed data criado com sucesso.');
    } catch (error) {
        console.error(error);
    } finally {
        mongoose.connection.close();
    }
};

runSeed();
