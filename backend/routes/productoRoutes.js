const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');
const { verificarToken, soloAdmin } = require('../middleware/authMiddleware');

// Crear un producto nuevo (solo si es admin)
router.post('/', verificarToken, soloAdmin, async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    const productoGuardado = await nuevoProducto.save();
    res.status(201).json(productoGuardado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear producto', error: error.message });
  }
});

// Obtener todos los productos (público)
router.get('/', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener productos' });
  }
});

module.exports = router;
