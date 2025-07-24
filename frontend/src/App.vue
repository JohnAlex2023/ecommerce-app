// App.vue (modificado con manejo global del modal)
<template>
  <div id="app">
    <Navbar />

    <main class="contenido">
      <router-view />
    </main>

    <Footer />

    <!-- Solo una instancia global del modal -->
    <ModalCarrito v-if="modal.mostrarModalCarrito" @close="modal.cerrarModal" />
  </div>
</template>

<script setup>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import ModalCarrito from './components/ModalCarrito.vue'
import { useModalStore } from './stores/modal'

const modal = useModalStore()
console.log(modal) 
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.contenido {
  flex: 1;
  padding: 2rem;
  background-color: #f4f4f4;
}
</style>
