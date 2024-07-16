const Category = require('../models/categoryModel');

// Função para obter todas as categorias
exports.getAllCategories = async () => {
    return await Category.find({});
};

// Função para criar uma nova categoria (opcional)
exports.createCategory = async (categoryData) => {
    const newCategory = new Category(categoryData);
    return await newCategory.save();
};
