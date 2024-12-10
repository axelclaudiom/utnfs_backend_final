const express = require('express');
const Articulo = require('../models/Articulo');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  try {
    const articulo = new Articulo(req.body);
    await articulo.save();
    res.status(201).json(articulo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los articulos con su proveedor
router.get('/', authMiddleware, async (req, res) => {
  try {
    const articulos = await Articulo.find().populate('proveedor');
    res.json(articulos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un artículo específico con su proveedor
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const articulo = await Articulo.findById(req.params.id).populate('proveedor');
    if (!articulo) return res.status(404).json({ error: 'Artículo no encontrado' });
    res.json(articulo);
  } catch (error) {
    res.status(400).json({ error: 'ID inválido' });
  }
});

// Actualizar artículo
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const articulo = await Articulo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!articulo) return res.status(404).json({ error: 'Artículo no encontrado' });
    res.json(articulo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar artículo
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const articulo = await Articulo.findByIdAndDelete(req.params.id);
    if (!articulo) return res.status(404).json({ error: 'Artículo no encontrado' });
    res.json({ message: 'Artículo eliminado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;