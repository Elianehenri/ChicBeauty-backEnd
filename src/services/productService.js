const Product = require('../models/productModel');

exports.createProduct = async (productData) => {
    const product = new Product(productData);
    return await product.save();
};

exports.getProductsByCategory = async (category) => {
    return await Product.find({ categoria: category });
};

exports.getAllProducts = async () => {
    return await Product.find();
};
