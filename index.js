require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const articuloRoutes = require('./routes/articuloRoutes');

const app = express();
connectDB();

app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/articulos', articuloRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));