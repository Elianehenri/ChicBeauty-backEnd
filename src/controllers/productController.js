const productService = require('../services/productService');


exports.createProduct = async (req, res) => {
    try {
        const productData = req.body;
        const newProduct = await productService.createProduct(productData);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getProductsByCategory = async (req, res) => {
    try {
        const category = req.params.category;
        const products = await productService.getProductsByCategory(category);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const updateData = req.body;

        const updatedProduct = await productService.updateProduct(productId, updateData);

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Produto não encontrado.' });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        await productService.deleteProduct(id);
        res.status(200).json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getAllCategories = async (req, res) => {
    try {
        const categories = await productService.getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
