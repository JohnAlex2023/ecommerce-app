<template>
  <div class="productos">
    <h2>Catálogo de Productos</h2>

    <div v-if="cargando" class="loading">Cargando productos...</div>

    <div v-else class="grid">
      <ProductCard
        v-for="producto in productos"
        :key="producto._id"
        :producto="producto"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductList',
  components: { ProductCard },
  data() {
    return {
      productos: [],
      cargando: true
    };
  },
  async mounted() {
    try {
      const res = await axios.get('http://localhost:3000/api/productos');
      this.productos = res.data;
    } catch (error) {
      console.error('Error al obtener productos:', error);
    } finally {
      this.cargando = false;
    }
  }
};
</script>

<style scoped>
.productos {
  padding: 2rem;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.loading {
  font-size: 1.2rem;
  color: #555;
}
</style>
