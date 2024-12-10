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

// Obtener todos los artículos
router.get('/', authMiddleware, async (req, res) => {
  const articulos = await Articulo.find();
  res.json(articulos);
});

module.exports = router;