const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    categoria: { type: String, required: true },
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    parcelas: { type: Number, required: true },
    imagem: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
