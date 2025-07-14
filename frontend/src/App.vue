<template>
  <div>
    <header>
      <nav>
        <router-link to="/">Inicio</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/admin">Admin</router-link>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
nav {
  background: #333;
  padding: 1rem;
}
nav a {
  color: white;
  margin-right: 1rem;
  text-decoration: none;
}
main {
  padding: 2rem;
}
</style>
