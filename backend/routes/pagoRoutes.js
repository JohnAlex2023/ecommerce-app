// pagoRoutes.js
const express = require('express');
const mercadopago = require('mercadopago');
const router = express.Router();

mercadopago.configure({
  access_token: 'TEST-7727916265724798-072310-0e1818497f072827626560102ba25971-1539210724'
});

router.post('/crear-preferencia', async (req, res) => {
  try {
    const itemsRecibidos = req.body.items;

    console.log('🧾 Items recibidos del frontend:', itemsRecibidos);

    const items = itemsRecibidos.map(item => {
      const title = item.nombre || 'Producto sin nombre';
      const unit_price = Math.round(Number(item.precio)) || 1;
      const quantity = parseInt(item.cantidad) || 1;

      return {
        title,
        unit_price,
        quantity,
        currency_id: 'COP'
      };
    });

    const preferencia = {
      items,
      back_urls: {
        success: 'https://dark-firefly-2274.loca.lt/success',
        failure: 'https://dark-firefly-2274.loca.lt/failure',
        pending: 'https://dark-firefly-2274.loca.lt/pending'
      },
      auto_return: 'approved'
    };

    console.log('🛒 Preferencia generada:', preferencia);

    const respuesta = await mercadopago.preferences.create(preferencia);
    res.status(200).json({ 
      id: respuesta.body.id,
      init_point: respuesta.body.init_point // 👈 necesario para redirigir
    });


  } catch (error) {
    console.error('❌ Error al crear preferencia:', error);
    res.status(500).json({ error: 'Error al crear preferencia de pago' });
  }
});

module.exports = router;
