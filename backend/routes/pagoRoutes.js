// backend/routes/pagoRoutes.js
const express = require('express');
const mercadopago = require('mercadopago');
const router = express.Router();

mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN // del .env
});

router.post('/crear-preferencia', async (req, res) => {
  const { descripcion, precio, cantidad } = req.body;

  const preference = {
    items: [
      {
        title: descripcion,
        unit_price: Number(precio),
        quantity: Number(cantidad),
      },
    ],
    back_urls: {
      success: 'http://localhost:5173/pago-exitoso',
      failure: 'http://localhost:5173/pago-fallido',
    },
    auto_return: 'approved',
  };

  try {
    const respuesta = await mercadopago.preferences.create(preference);
    res.json({ id: respuesta.body.id });
  } catch (err) {
    res.status(500).json({ error: 'Error al crear preferencia de pago', detalles: err.message });
  }
});

module.exports = router;
