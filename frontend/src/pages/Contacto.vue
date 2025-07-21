<template>
  <div class="contacto-container">
    <h1>Contacto</h1>
    <p>¿Tienes alguna pregunta, sugerencia o necesitas soporte? Completa el siguiente formulario y nos pondremos en contacto contigo lo antes posible.</p>
    <form class="contacto-form">
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input id="nombre" type="text" placeholder="Tu nombre" required />
      </div>
      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input id="email" type="email" placeholder="tu@email.com" required />
      </div>
      <div class="form-group">
        <label for="mensaje">Mensaje</label>
        <textarea id="mensaje" rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>
      </div>
      <button type="submit">Enviar mensaje</button>
    </form>
    <div class="info-extra">
      <p><strong>Email:</strong> soporte@mitienda.com</p>
      <p><strong>Teléfono:</strong> +34 600 123 456</p>
      <p><strong>Dirección:</strong> Calle Falsa 123, Ciudad, País</p>
    </div>
  </div>
</template>

<style scoped>
.contacto-container {
  max-width: 600px;
  margin: 3rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}
h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}
.contacto-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.form-group label {
  font-weight: 600;
  margin-bottom: 0.3rem;
  display: block;
}
input, textarea {
  width: 100%;
  padding: 0.6rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  transition: border 0.2s;
}
input:focus, textarea:focus {
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
  transition: background 0.2s;
}
button:hover {
  background-color: #0056b3;
}
.info-extra {
  margin-top: 2rem;
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  color: #333;
}
</style>