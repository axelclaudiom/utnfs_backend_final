const mongoose = require('mongoose');

const articuloSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  categoria: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  proveedor: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Proveedor', 
    required: true 
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Articulo', articuloSchema);