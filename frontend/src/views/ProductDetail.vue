<template>
  <div v-if="producto" class="detalle">
    <h2>{{ producto.nombre }}</h2>
    <img :src="producto.imagen" alt="Imagen del producto" />
    <p><strong>Descripción:</strong> {{ producto.descripcion }}</p>
    <p><strong>Categoría:</strong> {{ producto.categoria }}</p>
    <p><strong>Precio:</strong> ${{ producto.precio }}</p>
    <p><strong>Stock:</strong> {{ producto.stock }}</p>
    <p><strong>Fecha de creación:</strong> {{ formatFecha(producto.fechaCreacion) }}</p>

    <div class="cantidad-container">
      <button class="cantidad-btn" @click="cambiarCantidad(-1)" :disabled="cantidad <= 1">-</button>
      <input type="number" v-model.number="cantidad" min="1" class="cantidad-input" />
      <button class="cantidad-btn" @click="cambiarCantidad(1)">+</button>
    </div>
    <button class="btn" @click="agregarAlCarrito">Agregar al carrito</button>
  </div>
  <div v-else>Cargando producto...</div>
</template>

<script>
import axios from 'axios'
import { useCartStore } from '../stores/cart'

export default {
  data() {
    return {
      producto: null,
      cantidad: 1
    }
  },
  async created() {
    const id = this.$route.params.id
    try {
      const res = await axios.get(`http://localhost:3000/api/productos/${id}`)
      this.producto = res.data
    } catch (error) {
      console.error('Error cargando producto:', error)
    }
  },
  methods: {
    formatFecha(fecha) {
      return new Date(fecha).toLocaleString()
    },
    cambiarCantidad(valor) {
      if (this.cantidad + valor >= 1) {
        this.cantidad += valor
      }
    },
    agregarAlCarrito() {
      const cart = useCartStore()
      cart.addToCart({ ...this.producto, cantidad: this.cantidad })
      this.cantidad = 1
    }
  }
}
</script>

<style scoped>
.detalle {
  max-width: 600px;
  margin: auto;
  text-align: center;
}
img {
  max-width: 300px;
  margin: 1rem 0;
  cursor: pointer;
}
.cantidad-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 0.5rem 0;
  gap: 0.5rem;
}
.cantidad-btn {
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.2s;
}
.cantidad-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}
.cantidad-input {
  width: 50px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 32px;
  font-size: 1rem;
}
.btn {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.2s ease;
  margin-top: 0.5rem;
}
.btn:hover {
  background-color: #0056b3;
}
</style>
