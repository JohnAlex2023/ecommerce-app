// models/Producto.js
const mongoose = require('mongoose');

// Esquema del producto
const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true, // Obligatorio
    trim: true
  },
  descripcion: {
    type: String,
    required: true,
    trim: true
  },
  precio: {
    type: Number,
    required: true,
    min: 0
  },
  imagen: {
    type: String,
    required: false // Puede estar vacía al principio
  },
  categoria: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
    min: 0
  },
  fechaCreacion: {
    type: Date,
    default: Date.now // Se guarda automáticamente al crear
  }
});

// Exportar el modelo
module.exports = mongoose.model('Producto', productoSchema);
