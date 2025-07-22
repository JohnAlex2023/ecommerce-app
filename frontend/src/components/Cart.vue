<!-- En tu componente de carrito, por ejemplo Cart.vue -->
<template>
  <div class="carrito-page">
    <h2>Carrito de compras</h2>
    <div v-if="cart.items.length">
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart.items" :key="item._id">
            <td>{{ item.nombre }}</td>
            <td>
              <button @click="cambiarCantidad(item, -1)" :disabled="item.cantidad <= 1">-</button>
              <input
                type="number"
                :value="item.cantidad"
                min="1"
                style="width:40px;text-align:center;"
                @input="cambiarCantidad(item, $event.target.value - item.cantidad)"
              />
              <button @click="cambiarCantidad(item, 1)">+</button>
            </td>
            <td>${{ item.precio.toFixed(2) }}</td>
            <td>${{ (item.precio * item.cantidad).toFixed(2) }}</td>
            <td><button @click="eliminar(item._id)" class="eliminar">Eliminar</button></td>
          </tr>
        </tbody>
      </table>
      <div class="total">
        <strong>Total: ${{ cart.total.toFixed(2) }}</strong>
      </div>
      
      <button class="btn-finalizar" @click="finalizarCompra">Finalizar compra</button>
    </div>
    <div v-else>
      <p>Tu carrito está vacío.</p>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
const cart = useCartStore()

function cambiarCantidad(item, valor) {
  const nueva = Number(item.cantidad) + Number(valor)
  if (nueva >= 1) {
    cart.updateItem(item._id, nueva)
  }
}

function eliminar(id) {
  cart.removeItem(id)
}

function finalizarCompra() {
  alert('¡Gracias por tu compra! Pronto recibirás un correo con los detalles.');
  cart.clearCart();
}
</script>

<style scoped>
.carrito-page {
  max-width: 800px;
  margin: 2rem auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  padding: 2rem;
}
h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}
th, td {
  padding: 0.5rem;
  text-align: center;
  border-bottom: 1px solid #eee;
}
.eliminar {
  background: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.3rem 0.7rem;
  cursor: pointer;
}
.eliminar:hover {
  background: #c0392b;
}
.total {
  text-align: right;
  font-size: 1.2rem;
  margin-top: 1rem;
}
.btn-finalizar {
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  float: right;
}
.btn-finalizar:hover {
  background: #0056b3;
}
</style>