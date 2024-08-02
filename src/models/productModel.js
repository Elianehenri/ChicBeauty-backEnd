
 

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    imagem: { type: String },
    parcelas: { type: Number, required: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

