<template>
  <form @submit.prevent="login">
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Contraseña" />
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
        const response = await axios.post('http://localhost:3000/api/auth/login', {
          email: this.email,
          password: this.password
        })

        const token = response.data.token
        localStorage.setItem('token', token)  // << GUARDAMOS EL TOKEN
        this.mensaje = '✅ Inicio de sesión correcto'
        this.$router.push('/admin')  // redirigir si quieres

      } catch (error) {
        this.mensaje = '❌ Error al iniciar sesión'
        console.error(error)
      }
    }
  }
}
</script>
