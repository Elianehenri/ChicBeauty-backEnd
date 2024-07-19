
const express = require('express');
const router = express.Router();
const upload = require('../utils/multer.config');
const productController = require('../controllers/productController');

// Rota para criar um novo produto com upload de imagem
router.post('/', upload.single('imagem'), productController.createProduct);

//  obter todos os produtos
router.get('/', productController.getAllProducts);

//  obter produtos por categoria
router.get('/categoria/:category', productController.getProductsByCategory);

//  editar um produto
router.put('/:id', productController.updateProduct);

//  deletar um produto
router.delete('/:id', productController.deleteProduct);

module.exports = router;
