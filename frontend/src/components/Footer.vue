<template>
  <footer class="footer">
    <p>&copy; 2025 Mi Tienda Online. Todos los derechos reservados.</p>
    <p>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/contacto">Contacto</router-link> |
      <router-link to="/terminos">Términos</router-link>
    </p>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #222;
  color: #ccc;
  text-align: center;
  padding: 1.5rem 1rem;
  font-size: 0.9rem;
  border-top: 1px solid #444;
}

.footer a {
  color: #ccc;
  margin: 0 0.5rem;
  text-decoration: none;
}

.footer a:hover {
  color: white;
}
</style>
