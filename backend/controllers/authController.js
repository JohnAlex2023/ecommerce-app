// controllers/authController.js
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Clave secreta para JWT (debería ir en variable de entorno)
const JWT_SECRET = 'secreto_super_seguro';

exports.registrarUsuario = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    // Verificar si ya existe
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ mensaje: 'El usuario ya existe' });
    }

    // Encriptar la contraseña
    const salt = await bcrypt.genSalt(10);
    const passwordEncriptado = await bcrypt.hash(password, salt);

    

    const nuevoUsuario = new Usuario({
      nombre,
      email,
      password: passwordEncriptado,
      esAdmin: esAdmin || false
    });


    await nuevoUsuario.save();

    res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al registrar usuario', error: error.message });
  }
};
exports.loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log('🔐 Email recibido:', email);
    console.log('🔐 Password recibido:', password);

    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      console.log('❌ Usuario NO encontrado');
      return res.status(400).json({ mensaje: 'Credenciales incorrectas' });
    }

    console.log('✅ Usuario encontrado:', usuario.email);
    console.log('🧂 Password hash en BD:', usuario.password);

    const esValido = await bcrypt.compare(password, usuario.password);

    console.log('🔍 ¿Password válido?', esValido);

    if (!esValido) {
      console.log('❌ Contraseña incorrecta');
      return res.status(400).json({ mensaje: 'Credenciales incorrectas' });
    }

    const token = jwt.sign(
      { id: usuario._id, email: usuario.email, esAdmin: usuario.esAdmin },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    console.log('✅ Token generado correctamente');
    res.json({ token });

  } catch (error) {
    console.error('💥 Error en login:', error);
    res.status(500).json({ mensaje: 'Error al iniciar sesión', error: error.message });
  }
};

