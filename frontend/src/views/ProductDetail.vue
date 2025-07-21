<template>
  <div v-if="producto" class="detalle">
    <h2>{{ producto.nombre }}</h2>
    <img :src="producto.imagen" alt="Imagen del producto" />
    <p><strong>Descripción:</strong> {{ producto.descripcion }}</p>
    <p><strong>Categoría:</strong> {{ producto.categoria }}</p>
    <p><strong>Precio:</strong> ${{ producto.precio }}</p>
    <p><strong>Stock:</strong> {{ producto.stock }}</p>
    <p><strong>Fecha de creación:</strong> {{ formatFecha(producto.fechaCreacion) }}</p>
  </div>
  <div v-else>Cargando producto...</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      producto: null
    };
  },
  async created() {
    const id = this.$route.params.id;
    try {
      const res = await axios.get(`http://localhost:3000/api/productos/${id}`);
      this.producto = res.data;
    } catch (error) {
      console.error('Error cargando producto:', error);
    }
  },
  methods: {
    formatFecha(fecha) {
      return new Date(fecha).toLocaleString();
    }
  }
};
</script>

<style scoped>
.detalle {
  max-width: 600px;
  margin: auto;
  text-align: center;
}
img {
  max-width: 300px;
  margin: 1rem 0;
}
</style>
