<template>
  <header class="navbar">
    <nav class="nav-container">
      <div class="logo">🛒 Mi Tienda</div>
      <div class="nav-links">
        <router-link to="/">Inicio</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/admin">Admin</router-link>
        <button class="cart-icon" @click="mostrarCarrito = true">
          🛍️
          <span v-if="cart.totalItems > 0" class="badge">{{ cart.totalItems }}</span>
        </button>
      </div>
    </nav>

    <!-- Modal del carrito -->
    <ModalCarrito v-if="mostrarCarrito" @close="mostrarCarrito = false" />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'
import ModalCarrito from './ModalCarrito.vue'

const cart = useCartStore()
const mostrarCarrito = ref(false)
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 1rem 2rem;
  color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: bold;
  font-size: 1.2rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-links a,
.cart-icon {
  color: white;
  text-decoration: none;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
}

.nav-links a:hover,
.cart-icon:hover {
  text-decoration: underline;
}

.badge {
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: red;
  color: white;
  font-size: 0.75rem;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
}
</style>
