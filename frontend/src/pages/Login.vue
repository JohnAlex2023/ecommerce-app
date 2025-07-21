<template>
  <div class="login-container">
    <form @submit.prevent="login" class="login-form">
      <h2>Iniciar sesión</h2>

      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input
          v-model="email"
          type="email"
          id="email"
          placeholder="correo@ejemplo.com"
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Contraseña</label>
        <input
          v-model="password"
          type="password"
          id="password"
          placeholder="********"
          required
        />
      </div>

      <p v-if="mensaje" :class="mensaje.includes('✅') ? 'success' : 'error'">
        {{ mensaje }}
      </p>

      <button type="submit">Iniciar sesión</button>

      <p class="registro">
        ¿No tienes cuenta? <router-link to="/register">Regístrate aquí</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      mensaje: ''
    };
  },
  methods: {
    async login() {
      this.mensaje = '';
      try {
        const res = await axios.post('http://localhost:3000/api/auth/login', {
          email: this.email,
          password: this.password
        });

        // Guarda token y usuario
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('usuario', JSON.stringify(res.data.usuario));

        this.mensaje = '✅ Sesión iniciada correctamente';

        // Redirige según el rol
        setTimeout(() => {
          if (res.data.usuario && res.data.usuario.esAdmin) {
            this.$router.push('/admin');
          } else {
            this.$router.push('/home');
          }
        }, 1000);

      } catch (error) {
        this.mensaje = '❌ Credenciales inválidas o error en el servidor';
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 420px;
  margin: 3rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.login-form {
  display: flex;
  flex-direction: column;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  font-weight: 600;
  display: block;
  margin-bottom: 0.3rem;
}

input {
  width: 100%;
  padding: 0.6rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  transition: border 0.2s ease;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

button {
  background-color: #007bff;
  color: white;
  padding: 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.2s ease;
}

button:hover {
  background-color: #0056b3;
}

.success {
  color: green;
  font-weight: bold;
  margin-top: 1rem;
  text-align: center;
}

.error {
  color: red;
  font-weight: bold;
  margin-top: 1rem;
  text-align: center;
}

.registro {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
}

.registro a {
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
}

.registro a:hover {
  text-decoration: underline;
}
</style>
