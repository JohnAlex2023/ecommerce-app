// src/stores/modal.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const mostrarModalCarrito = ref(false)

  function abrirModal() {
    mostrarModalCarrito.value = true
  }

  function cerrarModal() {
    mostrarModalCarrito.value = false
  }

  return {
    mostrarModalCarrito,
    abrirModal,
    cerrarModal
  }
})
