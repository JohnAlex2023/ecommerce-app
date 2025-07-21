// filepath: c:\Users\john.taimalp\ecommerce-app\frontend\src\stores/cart.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  actions: {
    addToCart(product) {
      const found = this.items.find(item => item.id === product.id)
      if (found) {
        found.cantidad += 1
      } else {
        this.items.push({ ...product, cantidad: 1 })
      }
    },
    removeFromCart(productId) {
      this.items = this.items.filter(item => item.id !== productId)
    },
    clearCart() {
      this.items = []
    }
  },
  getters: {
    total() {
      return this.items.reduce((sum, item) => sum + item.precio * item.cantidad, 0)
    }
  }
})