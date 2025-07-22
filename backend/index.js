

// index.js
require('dotenv').config();


const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
const PORT = 3000;



// Conectar a la base de datos
connectDB();

// Middleware para recibir datos en JSON
app.use(express.json());


app.use(cors()); // 💡 Habilita CORS para todas las rutas
app.use(express.json());

// Rutas
const productoRoutes = require('./routes/productoRoutes');
app.use('/api/productos', productoRoutes);


const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);


const ordenRoutes = require('./routes/ordenRoutes');
app.use('/api/ordenes', ordenRoutes);


// Ruta base
app.get('/', (req, res) => {
  res.send('¡Backend del e-commerce conectado y funcional!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
