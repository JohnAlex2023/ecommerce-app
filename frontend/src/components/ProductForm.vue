<template>
  <form @submit.prevent="agregarProducto">
    <h2>Agregar nuevo producto</h2>
    <input v-model="nombre" placeholder="Nombre del producto" required />
    <input v-model="precio" type="number" placeholder="Precio" required />
    <input v-model="imagen" placeholder="URL de la imagen" required />
    <button type="submit">Guardar</button>
    <p v-if="mensaje">{{ mensaje }}</p>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ProductForm',
  data() {
    return {
      nombre: '',
      precio: '',
      imagen: '',
      mensaje: ''
    }
  },
  methods: {
    async agregarProducto() {
  try {
    const producto = {
      nombre: this.nombre,
      precio: parseFloat(this.precio),
      imagen: this.imagen
    }

    const token = localStorage.getItem('token');




    await axios.post('http://localhost:3000/api/productos', producto, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    this.mensaje = '✅ Producto agregado exitosamente';
    this.nombre = '';
    this.precio = '';
    this.imagen = '';
  } catch (error) {
    console.error('Error al agregar producto:', error);
    this.mensaje = '❌ Error al guardar producto';
  }
}

  }
}
</script>

<style scoped>
form {
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 10px;
}
input {
  padding: 0.5rem;
}
button {
  background-color: #28a745;
  color: white;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
}
p {
  margin-top: 10px;
}
</style>
