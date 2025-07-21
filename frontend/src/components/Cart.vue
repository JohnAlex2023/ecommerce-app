<!-- En tu componente de producto, por ejemplo ProductList.vue -->
<template>
  <div v-for="producto in productos" :key="producto.id">
    <h3>{{ producto.nombre }}</h3>
    <p>${{ producto.precio }}</p>
    <button @click="agregar(producto)">Agregar al carrito</button>
  </div>
</template>

<script setup>

import { useCartStore } from '../stores/cart'
const cart = useCartStore()

function agregar(producto) {
  cart.addToCart(producto)
}
</script>

<style scoped>
.cart-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}
h2 {
  text-align: center;
  margin-bottom: 1rem;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.7rem;
}
.cart-item button {
  background: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.3rem 0.7rem;
  cursor: pointer;
}
.cart-item button:hover {
  background: #c0392b;
}
.cart-total {
  margin-top: 1.5rem;
  text-align: right;
}
.cart-total button {
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 0.5rem;
}
.cart-total button:hover {
  background: #0056b3;
}
</style>