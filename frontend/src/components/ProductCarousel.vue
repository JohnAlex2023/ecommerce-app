<template>
  <section class="carousel-container">
    <h2>Destacados</h2>
    <Splide :options="options">
      <SplideSlide v-for="producto in productos" :key="producto._id">
        <div class="card">
          <img :src="producto.imagen" alt="Imagen del producto" />
          <h3>{{ producto.nombre }}</h3>
          <p class="precio">${{ producto.precio.toFixed(2) }}</p>
          <router-link :to="`/producto/${producto._id}`" class="btn">Ver</router-link>
        </div>
      </SplideSlide>
    </Splide>
  </section>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import axios from 'axios';

export default {
  components: {
    Splide,
    SplideSlide
  },
  data() {
    return {
      productos: [],
      options: {
        type: 'loop',
        perPage: 3,
        autoplay: true,
        gap: '1rem',
        breakpoints: {
          768: {
            perPage: 1
          },
          1024: {
            perPage: 2
          }
        }
      }
    };
  },
  async mounted() {
    try {
      const res = await axios.get('http://localhost:3000/api/productos');
      // Solo mostramos los primeros 6 como destacados
      this.productos = res.data.slice(0, 6);
    } catch (error) {
      console.error('Error al cargar productos destacados:', error);
    }
  }
};
</script>

<style scoped>
.carousel-container {
  margin: 3rem 0;
  text-align: center;
}

.card {
  background: #fff;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: center;
}

.card img {
  height: 150px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.card h3 {
  margin: 0.5rem 0;
}

.precio {
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.btn {
  background: #007bff;
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  text-decoration: none;
}

.btn:hover {
  background: #0056b3;
}
</style>
