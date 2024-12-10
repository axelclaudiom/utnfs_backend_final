require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const helmet = require('helmet');

const authRoutes = require('./routes/authRoutes');
const articuloRoutes = require('./routes/articuloRoutes');
const proveedorRoutes = require('./routes/proveedorRoutes');

const app = express();
connectDB();

// Middlewares
app.use(helmet());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/articulos', articuloRoutes);
app.use('/api/proveedores', proveedorRoutes);

// Servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));