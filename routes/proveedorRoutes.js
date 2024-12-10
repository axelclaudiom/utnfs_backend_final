const express = require('express');
const Proveedor = require('../models/Proveedor');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Crear proveedor
router.post('/', authMiddleware, async (req, res) => {
  try {
    const proveedor = new Proveedor(req.body);
    await proveedor.save();
    res.status(201).json(proveedor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los proveedores
router.get('/', authMiddleware, async (req, res) => {
  const proveedores = await Proveedor.find();
  res.json(proveedores);
});

// Obtener un proveedor por ID
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const proveedor = await Proveedor.findById(req.params.id);
    if (!proveedor) return res.status(404).json({ error: 'Proveedor no encontrado' });
    res.json(proveedor);
  } catch (error) {
    res.status(400).json({ error: 'ID inválido' });
  }
});

// Actualizar un proveedor por ID
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const proveedor = await Proveedor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!proveedor) return res.status(404).json({ error: 'Proveedor no encontrado' });
    res.json(proveedor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un proveedor por ID
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const proveedor = await Proveedor.findByIdAndDelete(req.params.id);
    if (!proveedor) return res.status(404).json({ error: 'Proveedor no encontrado' });
    res.json({ message: 'Proveedor eliminado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;