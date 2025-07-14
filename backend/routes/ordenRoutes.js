// routes/ordenRoutes.js
const express = require('express');
const router = express.Router();
const Orden = require('../models/Orden');
const { verificarToken } = require('../middleware/authMiddleware');

// Crear una nueva orden (usuario autenticado)
router.post('/', verificarToken, async (req, res) => {
  try {
    const { productos, total } = req.body;

    const nuevaOrden = new Orden({
      usuario: req.usuario.id,
      productos,
      total
    });

    const ordenGuardada = await nuevaOrden.save();
    res.status(201).json(ordenGuardada);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear orden', error: error.message });
  }
});

// Ver órdenes del usuario autenticado
router.get('/mis-ordenes', verificarToken, async (req, res) => {
  try {
    const ordenes = await Orden.find({ usuario: req.usuario.id }).populate('productos.producto');
    res.json(ordenes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener tus órdenes' });
  }
});

module.exports = router;
