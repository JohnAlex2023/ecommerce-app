<template>
  <div class="card">
    <router-link :to="{ name: 'ProductDetail', params: { id: producto._id } }">
      <img :src="producto.imagen" alt="Imagen del producto" class="img-link" />
    </router-link>

    <h3 class="nombre">{{ producto.nombre }}</h3>
    <p class="descripcion">{{ producto.descripcion }}</p>
    <p class="precio">${{ producto.precio.toFixed(2) }}</p>

    <div class="acciones">
      <router-link :to="{ name: 'ProductDetail', params: { id: producto._id } }" class="btn-outline">
        Ver detalles
      </router-link>

      <div class="cantidad-container">
        <button class="cantidad-btn" @click="cambiarCantidad(-1)" :disabled="cantidad <= 1">-</button>
        <input type="number" v-model.number="cantidad" min="1" class="cantidad-input" />
        <button class="cantidad-btn" @click="cambiarCantidad(1)">+</button>
      </div>

      <button class="btn-primary" @click="agregarAlCarrito">Agregar al carrito</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'
import { useModalStore } from '../stores/modal'

const props = defineProps(['producto'])
const cart = useCartStore()
const modal = useModalStore()

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
  modal.abrirModal()
}
</script>

<style scoped>
.card {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
}

.img-link {
  width: 100%;
  height: 180px;
  object-fit: contain;
  border-radius: 10px;
  margin-bottom: 1rem;
  transition: transform 0.3s;
}

.nombre {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.3rem;
}

.descripcion {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 0.6rem;
  min-height: 60px;
}

.precio {
  font-size: 1.2rem;
  color: #2c3e50;
  font-weight: bold;
  margin-bottom: 1rem;
}

.acciones {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-outline {
  background: transparent;
  border: 2px solid #007bff;
  color: #007bff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: #007bff;
  color: white;
}

.cantidad-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.cantidad-btn {
  background: #e0e0e0;
  border: none;
  border-radius: 6px;
  width: 32px;
  height: 32px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.cantidad-btn:hover {
  background: #d0d0d0;
}

.cantidad-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.cantidad-input {
  width: 50px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 6px;
  height: 32px;
  font-size: 1rem;
}
</style>
