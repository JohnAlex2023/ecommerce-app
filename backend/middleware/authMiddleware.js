// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'secreto_super_seguro'; // Esto debería estar en una variable de entorno

// Middleware para verificar token JWT
const verificarToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Validamos que venga un token
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ mensaje: 'No autorizado. Token no enviado.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.usuario = decoded; // Aquí guardamos la info del usuario en la request
    next();
  } catch (error) {
    return res.status(401).json({ mensaje: 'Token inválido o expirado' });
  }
};

// Middleware adicional para verificar si es admin
const soloAdmin = (req, res, next) => {
  if (!req.usuario || !req.usuario.esAdmin) {
    return res.status(403).json({ mensaje: 'Acceso denegado. Solo administradores.' });
  }
  next();
};

module.exports = {
  verificarToken,
  soloAdmin
};
