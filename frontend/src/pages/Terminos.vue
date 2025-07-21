<template>
  <div class="terminos-container">
    <h1>Términos y Condiciones</h1>
    <section>
      <h2>1. Introducción</h2>
      <p>
        Bienvenido a Mi Tienda. Al acceder y utilizar nuestro sitio web, aceptas cumplir con los siguientes términos y condiciones. Si no estás de acuerdo, por favor no utilices nuestros servicios.
      </p>
    </section>
    <section>
      <h2>2. Uso del Sitio</h2>
      <p>
        El usuario se compromete a utilizar este sitio de manera responsable y conforme a la ley. No está permitido el uso indebido, fraudulento o que pueda dañar la reputación de Mi Tienda.
      </p>
    </section>
    <section>
      <h2>3. Propiedad Intelectual</h2>
      <p>
        Todo el contenido de este sitio, incluyendo textos, imágenes y logotipos, es propiedad de Mi Tienda o de sus proveedores y está protegido por las leyes de propiedad intelectual.
      </p>
    </section>
    <section>
      <h2>4. Privacidad</h2>
      <p>
        Nos comprometemos a proteger tu información personal. Consulta nuestra Política de Privacidad para más detalles sobre cómo gestionamos tus datos.
      </p>
    </section>
    <section>
      <h2>5. Modificaciones</h2>
      <p>
        Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones serán publicadas en esta página y entrarán en vigor inmediatamente.
      </p>
    </section>
    <section>
      <h2>6. Contacto</h2>
      <p>
        Si tienes preguntas sobre estos términos, puedes contactarnos a través de la sección de <router-link to="/contacto">Contacto</router-link>.
      </p>
    </section>
  </div>
</template>

<style scoped>
.terminos-container {
  max-width: 800px;
  margin: 3rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}
h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}
h2 {
  margin-top: 1.5rem;
  color: #007bff;
}
p {
  margin: 0.5rem 0 1rem 0;
  color: #333;
}
</style>