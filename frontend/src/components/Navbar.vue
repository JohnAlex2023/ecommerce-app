<template>
  <header class="navbar">
    <nav class="nav-container">
      <div class="logo">🛒 Mi Tienda</div>
      <div class="nav-links">
        <router-link to="/">Inicio</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/admin">Admin</router-link>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  background-color: #333;
  padding: 1rem 2rem;
  color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: bold;
  font-size: 1.2rem;
}

.nav-links a {
  color: white;
  margin-left: 1rem;
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: underline;
}
</style>
