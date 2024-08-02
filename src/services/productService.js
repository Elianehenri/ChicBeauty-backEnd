

const Product = require('../models/productModel');
const Category = require('../models/categoryModel'); // Importa o modelo de categoria

// Função para criar um novo produto
exports.createProduct = async (productData) => {
    try {
        // Verifica se a categoria fornecida existe
        console.log('Dados do Produto:', productData);
        const categoryExists = await Category.findOne({ _id: productData.categoria });
        console.log('Categoria Encontrada:', categoryExists);
        if (!categoryExists) {
            throw new Error('Categoria não encontrada');
        }

        const newProduct = new Product(productData);
        return await newProduct.save();
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        throw error;
    }
};

// Função para obter todos os produtos
exports.getAllProducts = async () => {
    try {
        const products = await Product.find({}).populate('categoria');
        return products.map(product => ({
            ...product.toObject(),
            categoria: product.categoria ? product.categoria.nome : 'Desconhecida'
        }));
    } catch (error) {
        console.error('Erro ao obter produtos:', error);
        throw error;
    }
};

// Função para obter produtos por categoria
exports.getProductsByCategory = async (category) => {
    if (!category) throw new Error('Categoria não fornecida');
    try {
        return await Product.find({ categoria: category }).populate('categoria');
    } catch (error) {
        console.error('Erro ao obter produtos por categoria:', error);
        throw error;
    }
};

// Função para obter um produto pelo ID
exports.getProductById = async (productId) => {
    try {
        return await Product.findById(productId).populate('categoria');
    } catch (error) {
        console.error('Erro ao obter produto pelo ID:', error);
        throw error;
    }
};

// Função para editar um produto
exports.updateProduct = async (productId, updateData) => {
    try {
        return await Product.findByIdAndUpdate(productId, updateData, { new: true }).populate('categoria');
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        throw error;
    }
};

// Função para deletar um produto
exports.deleteProduct = async (id) => {
    try {
        return await Product.findByIdAndDelete(id);
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
        throw error;
    }
};
