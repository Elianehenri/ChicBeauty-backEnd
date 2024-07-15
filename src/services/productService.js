const Product = require('../models/productModel');

// Função para criar um novo produto
exports.createProduct = async (productData) => {
    const newProduct = new Product(productData);
    return await newProduct.save();
};

// Função para obter todos os produtos
exports.getAllProducts = async () => {
    return await Product.find({});
};

// Função para obter produtos por categoria
exports.getProductsByCategory = async (category) => {
    return await Product.find({ categoria: category });
};

// Função para editar um produto

exports.updateProduct = async (productId, updateData) => {
    return await Product.findByIdAndUpdate(productId, updateData, { new: true });
};


// Função para deletar um produto
exports.deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
};

// Função para obter todas as categorias
exports.getAllCategories = async () => {
    return await Product.distinct('categoria');
};
