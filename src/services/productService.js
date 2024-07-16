

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
        categoria: product.categoria.nome // Adiciona o nome da categoria ao produto
    }));
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
