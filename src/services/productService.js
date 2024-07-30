
// const Product = require('../models/productModel');
// const Category = require('../models/categoryModel'); // Importa o modelo de categoria

// // Função para criar um novo produto
// exports.createProduct = async (productData) => {
//     const newProduct = new Product(productData);
//     return await newProduct.save();
// };

// // Função para obter todos os produtos
// exports.getAllProducts = async () => {
//     const products = await Product.find({}).populate('categoria'); // Popula a categoria
//     return products.map(product => ({
//         ...product.toObject(),
//         categoria: product.categoria ? product.categoria.nome : 'Desconhecida' // Adiciona o nome da categoria ao produto, verifica se categoria existe
//     }));
// };

// // Função para obter produtos por categoria
// exports.getProductsByCategory = async (category) => {
//     if (!category) throw new Error('Categoria não fornecida');
//     return await Product.find({ categoria: category }).populate('categoria'); // Popula a categoria, se necessário
// };

// // Função para editar um produto
// exports.updateProduct = async (productId, updateData) => {
//     return await Product.findByIdAndUpdate(productId, updateData, { new: true }).populate('categoria');
// };

// // Função para deletar um produto
// exports.deleteProduct = async (id) => {
//     return await Product.findByIdAndDelete(id);
// };

const Product = require('../models/productModel');
const Category = require('../models/categoryModel'); // Importa o modelo de categoria

// Função para criar um novo produto
exports.createProduct = async (productData) => {
    const newProduct = new Product(productData);
    return await newProduct.save();
};

// Função para obter todos os produtos
exports.getAllProducts = async () => {
    const products = await Product.find({}).populate('categoria'); // Popula a categoria
    return products.map(product => ({
        ...product.toObject(),
        categoria: product.categoria ? product.categoria.nome : 'Desconhecida' // Adiciona o nome da categoria ao produto, verifica se categoria existe
    }));
};

// Função para obter produtos por categoria
exports.getProductsByCategory = async (category) => {
    if (!category) throw new Error('Categoria não fornecida');
    return await Product.find({ categoria: category }).populate('categoria'); // Popula a categoria, se necessário
};

// Função para obter um produto pelo ID (Adicione esta função)
exports.getProductById = async (productId) => {
    return await Product.findById(productId).populate('categoria');
};

// // Função para editar um produto
// exports.updateProduct = async (productId, updateData) => {
//     return await Product.findByIdAndUpdate(productId, updateData, { new: true }).populate('categoria');
// };
exports.updateProduct = async (productId, updateData) => {
    console.log('Atualizando produto no banco de dados:', productId); // Adiciona log
    console.log('Dados de atualização no serviço:', updateData); // Adiciona log
    return await Product.findByIdAndUpdate(productId, updateData, { new: true }).populate('categoria');
};

// Função para deletar um produto
exports.deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
};
