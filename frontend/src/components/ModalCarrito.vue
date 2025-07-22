<template>
  <div class="modal-backdrop" @click.self="cerrar">
    <div class="modal-carrito">
      <h3>🛒 Carrito de compras</h3>

      <div v-if="cart.items.length">
        <div v-for="item in cart.items" :key="item._id" class="carrito-item">
          <span>{{ item.nombre }} </span>
          <span class="cantidad">x{{ item.cantidad }}</span>
          <span class="precio">${{ (item.precio * item.cantidad).toFixed(2) }}</span>
        </div>

        <div class="carrito-total">
          <strong>Total: ${{ cart.total.toFixed(2) }}</strong>
        </div>

        <button class="btn btn-ir" @click="irAlCarrito">Ir al carrito</button>
        <button class="btn btn-continuar" @click="cerrar">Seguir comprando</button>
        <button class="btn btn-pagar" @click="iniciarPago">Pagar con MercadoPago</button>
      </div>

      <div v-else>
        <p class="vacio">🛍️ Tu carrito está vacío.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'
import { defineEmits } from 'vue'

const cart = useCartStore()
const router = useRouter()
const emit = defineEmits(['close'])

function cerrar() {
  emit('close')
}

function irAlCarrito() {
  router.push({ name: 'Carrito' })
  cerrar()
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
}

.modal-carrito {
  position: absolute;
  right: 0;
  top: 0;
  width: 360px;
  height: 100%;
  background: white;
  padding: 1.5rem;
  overflow-y: auto;
  box-shadow: -2px 0 12px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

h3 {
  margin-bottom: 1rem;
  font-size: 1.3rem;
  color: #333;
}

.carrito-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
}

.carrito-item .cantidad {
  color: #555;
}

.carrito-item .precio {
  font-weight: bold;
  color: #222;
}

.carrito-total {
  margin-top: 1rem;
  font-size: 1.1rem;
  text-align: right;
}

.vacio {
  margin-top: 2rem;
  text-align: center;
  color: #777;
}

.btn {
  margin-top: 1rem;
  width: 100%;
  padding: 0.6rem;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

.btn-ir {
  background-color: #007bff;
  color: white;
}

.btn-ir:hover {
  background-color: #0056b3;
}

.btn-continuar {
  background-color: #28a745;
  color: white;
}

.btn-continuar:hover {
  background-color: #218838;
}
</style>
