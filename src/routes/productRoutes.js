const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//  criar um novo produto
router.post('/', productController.createProduct);

//  obter todos os produtos
router.get('/', productController.getAllProducts);

//  obter produtos por categoria
router.get('/categoria/:category', productController.getProductsByCategory);

//  editar um produto
router.put('/:id', productController.updateProduct);

//  deletar um produto
router.delete('/:id', productController.deleteProduct);

//  obter todas as categorias
router.get('/categorias', productController.getAllCategories);

module.exports = router;
