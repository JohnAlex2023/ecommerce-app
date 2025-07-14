<template>
  <div class="productos">
    <h2>Catálogo de Productos</h2>
    <div v-if="cargando">Cargando productos...</div>
    <div v-else class="grid">
      <div v-for="producto in productos" :key="producto._id" class="card">
        <img :src="producto.imagen" alt="Imagen" class="producto-img" />
        <h3>{{ producto.nombre }}</h3>
        <p>{{ producto.descripcion }}</p>
        <p><strong>${{ producto.precio }}</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProductList',
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

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  transition: all 0.2s ease-in-out;
  background-color: #f9f9f9;
}

.card:hover {
  transform: scale(1.03);
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
}

.producto-img {
  max-width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 1rem;
}
</style>
