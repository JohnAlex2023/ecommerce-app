const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const productoRoutes = require('./routes/productoRoutes');
const authRoutes = require('./routes/authRoutes');
const ordenRoutes = require('./routes/ordenRoutes');
const pagoRouter = require('./routes/pagoRoutes'); 

dotenv.config();

const app = express();
const PORT = 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/productos', productoRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/ordenes', ordenRoutes);
app.use('/api/pagos', pagoRouter);

app.get('/', (req, res) => {
  res.send('¡Backend del e-commerce conectado y funcional!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
