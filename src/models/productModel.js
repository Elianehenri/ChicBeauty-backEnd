/* 

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
 */
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    imagem: { type: String }, // Campo para armazenar o caminho da imagem
    parcelas: { type: Number, required: true }
});

module.exports = mongoose.model('Product', productSchema);

