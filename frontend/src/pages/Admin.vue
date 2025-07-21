<template>
  <div>
    <h1>Panel de administrador</h1>
    <ProductForm />
    <ImportarDummy />
    <ProductList /> <!-- 👈 Aquí lo insertamos -->
  </div>
</template>

<script>
import ProductForm from '../components/ProductForm.vue'
import ImportarDummy from '../components/ImportarDummy.vue'
import ProductList from '../components/ProductList.vue'

export default {
  components: {
    ProductForm,
    ImportarDummy,
    ProductList
  }
}
</script>
