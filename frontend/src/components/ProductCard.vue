<template>
  <div class="card">
    <img :src="producto.imagen" alt="Imagen del producto" />
    <h3>{{ producto.nombre }}</h3>
    <p class="descripcion">{{ producto.descripcion }}</p>
    <p class="precio">${{ producto.precio.toFixed(2) }}</p>
    <router-link
      :to="{ name: 'ProductDetail', params: { id: producto._id } }"
      class="btn"
    >
      Ver detalles
    </router-link>
  </div>
  <div class="product-card">
    <h3>{{ producto.nombre }}</h3>
    <p>${{ producto.precio }}</p>
    <!-- Otros detalles del producto -->
    <button @click="agregarAlCarrito">Agregar al carrito</button>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cart'
const cart = useCartStore()
defineProps(['producto'])

function agregarAlCarrito() {
  cart.addToCart(producto)
}

export default {
  name: 'ProductCard',
  props: {
    producto: Object
  }
};
</script>

<style scoped>
.card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: scale(1.03);
}

img {
  width: 100%;
  height: 180px;
  object-fit: contain;
  border-radius: 6px;
  margin-bottom: 1rem;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.descripcion {
  font-size: 0.9rem;
  color: #666;
  min-height: 60px;
}

.precio {
  margin: 1rem 0;
  font-weight: bold;
  font-size: 1.1rem;
  color: #2c3e50;
}

.btn {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.2s ease;
}

.btn:hover {
  background-color: #0056b3;
}



</style>
