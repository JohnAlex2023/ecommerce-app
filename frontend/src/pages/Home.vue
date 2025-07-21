<template>
  <div>
    
    <section class="banner">
      <h1 class="titulo">Mi Tienda Tech</h1>
    <p class="subtitulo">Explora los mejores productos en tecnología y accesorios</p>
  
    </section>

    <ProductCarousel />

    <ProductList />
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue';
import ProductCarousel from '../components/ProductCarousel.vue';
import Cart from '../components/Cart.vue';

export default {
  components: {
    ProductList,
    ProductCarousel,
    Cart

  }
};
</script>



<style scoped>
.banner {
  background-image: url('https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=1400&q=80');
  background-size: cover;
  background-position: center;
  padding: 5rem 2rem;
  color: white;
  text-align: center;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.banner-texto h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.banner-texto p {
  font-size: 1.2rem;
  font-weight: 300;
}
</style>
