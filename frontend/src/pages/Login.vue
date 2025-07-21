<template>
  <form @submit.prevent="login">
    <input v-model="email" placeholder="Correo electrónico" required />
    <input v-model="password" type="password" placeholder="Contraseña" required />
    <button type="submit">Iniciar sesión</button>
    <p>{{ mensaje }}</p>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: '',
      mensaje: ''
    }
  },
  methods: {
    async login() {
      try {
        const res = await axios.post('http://localhost:3000/api/auth/login', {
          email: this.email,
          password: this.password
        });

        // ✅ GUARDAMOS EL TOKEN
        localStorage.setItem('token', response.data.token);


        this.mensaje = '✅ Sesión iniciada correctamente';
        this.$router.push('/admin'); // redirigir si todo va bien

      } catch (error) {
        this.mensaje = '❌ Credenciales inválidas o error en el servidor';
        console.error(error);
      }
    }
  }
}
</script>
