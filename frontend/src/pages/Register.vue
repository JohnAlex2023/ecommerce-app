<template>
  <div class="registro-container">
    <form @submit.prevent="registrarUsuario" class="registro-form">
      <h2>Crear cuenta</h2>

      <label for="nombre">Nombre completo</label>
      <input v-model="nombre" type="text" id="nombre" required />

      <label for="email">Correo electrónico</label>
      <input v-model="email" type="email" id="email" required />

      <label for="password">Contraseña</label>
      <input v-model="password" type="password" id="password" required />

      <div v-if="mensaje" :class="mensajeError ? 'error' : 'success'">
        {{ mensaje }}
      </div>

      <button type="submit">Registrarse</button>

      <p>¿Ya tienes cuenta? <router-link to="/login">Inicia sesión</router-link></p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  data() {
    return {
      nombre: '',
      email: '',
      password: '',
      mensaje: '',
      mensajeError: false
    }
  },
  methods: {
    async registrarUsuario() {
      try {
        const res = await axios.post('http://localhost:3000/api/auth/register', {
          nombre: this.nombre,
          email: this.email,
          password: this.password
        })

        this.mensaje = '✅ Registro exitoso. Ahora puedes iniciar sesión.';
        this.mensajeError = false;

        setTimeout(() => {
          this.$router.push('/login');
        }, 2000);
      } catch (error) {
        this.mensaje = error.response?.data?.mensaje || '❌ Error al registrarse';
        this.mensajeError = true;
      }
    }
  }
}
</script>

<style scoped>
.registro-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
}

.registro-form {
  background: white;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin: 0.5rem 0 0.2rem;
}

input {
  width: 100%;
  padding: 0.6rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

button:hover {
  background-color: #0056b3;
}

.success {
  color: green;
  margin-bottom: 1rem;
  text-align: center;
}

.error {
  color: red;
  margin-bottom: 1rem;
  text-align: center;
}
</style>
