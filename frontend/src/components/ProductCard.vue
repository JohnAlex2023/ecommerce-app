<template>
  <div class="card">
    <img :src="producto.imagen" alt="Imagen del producto" />
    <h3>{{ producto.nombre }}</h3>
    <p>Precio: ${{ producto.precio }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    producto: Object
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 200px;
}
img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}
</style>
