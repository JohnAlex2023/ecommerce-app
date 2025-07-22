<template>
  
  <div class="card">
    <router-link
      :to="{ name: 'ProductDetail', params: { id: producto._id } }"
    >
      <img :src="producto.imagen" alt="Imagen del producto" class="img-link" />
    </router-link>
    <h3>{{ producto.nombre }}</h3>
    <p class="descripcion">{{ producto.descripcion }}</p>
    <p class="precio">${{ producto.precio.toFixed(2) }}</p>
    <router-link
      :to="{ name: 'ProductDetail', params: { id: producto._id } }"
      class="btn"
    >
      Ver detalles
    </router-link>
    
    <div class="cantidad-container">
      <button class="cantidad-btn" @click="cambiarCantidad(-1)" :disabled="cantidad <= 1">-</button>
      <input type="number" v-model.number="cantidad" min="1" class="cantidad-input" />
      <button class="cantidad-btn" @click="cambiarCantidad(1)">+</button>
    </div>

    <button class="btn" @click="agregarAlCarrito">Agregar al carrito</button>
    
    <ModalCarrito v-if="mostrarModal" @close="mostrarModal = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'
import ModalCarrito from './ModalCarrito.vue'
const cart = useCartStore()
const props = defineProps(['producto'])

const mostrarModal = ref(false)

const cantidad = ref(props.producto.cantidad || 1)


function cambiarCantidad(valor) {
  const nuevaCantidad = cantidad.value + valor
  if (nuevaCantidad >= 1) {
    cantidad.value = nuevaCantidad
  }
}


function agregarAlCarrito() {
  cart.addToCart({ ...props.producto, cantidad: cantidad.value })
  cantidad.value = 1
  mostrarModal.value = true
}


function eliminar(id) {
  cart.removeItem(id)
}

function finalizarCompra() {
  alert('¡Gracias por tu compra!')
  cart.clearCart()
}
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

.img-link {
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
  margin: 0.5rem 0 0 0;
}

.btn:hover {
  background-color: #0056b3;
}

.btn-finalizar {
  display: inline-block;
  background-color: #28a745;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.2s ease;
  margin: 0.5rem 0 0 0;
}

.btn-finalizar:hover {
  background-color: #218838;
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
</style>
