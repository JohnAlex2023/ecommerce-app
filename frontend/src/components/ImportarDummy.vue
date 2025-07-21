<template>
  <div>
    <h2>Importar productos desde DummyJSON</h2>
    <button @click="importar">Importar Smartphones</button>
    <p v-if="mensaje">{{ mensaje }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      mensaje: ''
    }
  },
  methods: {
    async importar() {
      try {
        // 1. Obtener los productos de DummyJSON
        const respuesta = await axios.get('https://dummyjson.com/products/category/smartphones');
        const productosDummy = respuesta.data.products;

        // 2. Preparar productos para tu backend
        const productosFormateados = productosDummy.map(p => ({
          nombre: p.title,
          descripcion: p.description,
          precio: p.price,
          imagen: p.thumbnail,
          categoria: p.category,
          stock: p.stock
        }));

        // 3. Enviar uno a uno a tu backend
        const token = localStorage.getItem('token');
        for (const producto of productosFormateados) {
          await axios.post('http://localhost:3000/api/productos', producto, {
            headers: { Authorization: `Bearer ${token}` }
          });
        }

        this.mensaje = '✅ Productos importados correctamente';
      } catch (error) {
        console.error('❌ Error al importar:', error);
        this.mensaje = '❌ Hubo un error al importar productos';
      }
    }
  }
}
</script>
