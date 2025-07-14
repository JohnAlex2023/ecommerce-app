// models/Orden.js
const mongoose = require('mongoose');

const ordenSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  productos: [
    {
      producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
      },
      cantidad: {
        type: Number,
        required: true
      }
    }
  ],
  total: {
    type: Number,
    required: true
  },
  estado: {
    type: String,
    default: 'pendiente' // otros: pagado, enviado, entregado
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Orden', ordenSchema);
