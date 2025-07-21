<template>
  <div id="app">
    <Navbar />

    <main class="contenido">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Footer,
    Navbar
  }
};
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
