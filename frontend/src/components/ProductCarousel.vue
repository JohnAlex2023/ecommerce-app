<template>
  <section class="carousel-container">
    <h2>Destacados</h2>

    <Splide :options="options">
      <SplideSlide v-for="producto in productos" :key="producto._id">
        <div class="card">
          <router-link :to="{ name: 'ProductDetail', params: { id: producto._id } }">
            <img :src="producto.imagen" alt="Imagen del producto" class="img-link" />
          </router-link>

          <h3>{{ producto.nombre }}</h3>
          <p class="precio">${{ producto.precio.toFixed(2) }}</p>

          <div class="cantidad-container">
            <button
              class="cantidad-btn"
              @click="cambiarCantidad(producto, -1)"
              :disabled="cantidades[producto._id] <= 1"
            >-</button>

            <input
              type="number"
              v-model.number="cantidades[producto._id]"
              min="1"
              class="cantidad-input"
            />

            <button class="cantidad-btn" @click="cambiarCantidad(producto, 1)">+</button>
          </div>

          <button class="btn" @click="agregarAlCarrito(producto)">Agregar al carrito</button>
          <router-link :to="`/producto/${producto._id}`" class="btn">Ver</router-link>
        </div>
      </SplideSlide>
    </Splide>
  </section>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import axios from 'axios'
import { useCartStore } from '../stores/cart'
import { useModalStore } from '../stores/modal'
import { reactive } from 'vue'

export default {
  components: {
    Splide,
    SplideSlide
  },
  data() {
    return {
      productos: [],
      cantidades: reactive({}),
      options: {
        type: 'loop',
        perPage: 3,
        autoplay: true,
        gap: '1rem',
        breakpoints: {
          768: { perPage: 1 },
          1024: { perPage: 2 }
        }
      }
    }
  },
  methods: {
    cambiarCantidad(producto, valor) {
      const nueva = this.cantidades[producto._id] + valor
      if (nueva >= 1) this.cantidades[producto._id] = nueva
    },
    agregarAlCarrito(producto) {
      const cart = useCartStore()
      const modal = useModalStore()

      cart.addToCart({ ...producto, cantidad: this.cantidades[producto._id] })
      this.cantidades[producto._id] = 1
      modal.abrirModal()
    }
  },
  mounted() {
  axios.get('http://localhost:3000/api/productos')
    .then(res => {
      this.productos = res.data.slice(0, 6)
      this.productos.forEach(p => this.cantidades[p._id] = 1)

      // Evitar foco en botones dentro de slides clonados
      this.$nextTick(() => {
        const clones = document.querySelectorAll('.splide__slide--clone button');
        clones.forEach(btn => btn.setAttribute('tabindex', '-1'));
      });
    })
    .catch(error => {
      console.error('Error al cargar productos destacados:', error)
    })
}

}
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

.cantidad-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0;
  gap: 0.5rem;
}

.cantidad-btn {
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  width: 28px;
  height: 28px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.cantidad-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.cantidad-input {
  width: 40px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 28px;
  font-size: 1rem;
}
</style>
