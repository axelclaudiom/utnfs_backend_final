const mongoose = require('mongoose');

const articuloSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  categoria: { type: String, required: true },
});

module.exports = mongoose.model('Articulo', articuloSchema);