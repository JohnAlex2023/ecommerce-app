// filepath: c:\Users\john.taimalp\ecommerce-app\frontend\src\stores/cart.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  function addToCart(producto) {
    const existe = items.value.find(item => item._id === producto._id)
    if (existe) {
      existe.cantidad += producto.cantidad
    } else {
      items.value.push({ ...producto })
    }
  }

  function updateItem(id, cantidad) {
    const item = items.value.find(i => i._id === id)
    if (item && cantidad >= 1) {
      item.cantidad = cantidad
    }
  }

  function removeItem(id) {
    items.value = items.value.filter(i => i._id !== id)
  }

  function clearCart() {
    items.value = []
  }

  const total = computed(() =>
    items.value.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
  )

  const totalItems = computed(() =>
  items.value.reduce((acc, item) => acc + item.cantidad, 0)
)


  return { items, addToCart, updateItem, removeItem, clearCart, total, totalItems }
})