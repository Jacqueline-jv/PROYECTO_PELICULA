import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import path from 'path';

// Importar rutas
import directoresRoutes from './routes/directoresRoutes.js';
import generoRoutes from './routes/generoRoutes.js';
import mediaRoutes from './routes/mediaRoutes.js';
import peliculasRoutes from './routes/peliculasRoutes.js';
import productorasRoutes from './routes/productorasRoutes.js';
import tiposRoutes from './routes/tiposRoutes.js';
import errorHandler from "./middlewares/errorHandler.js";

// Configuración
dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Servir archivos estáticos
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rutas
app.use('/api/directores', directoresRoutes);
app.use('/api/generos', generoRoutes);
app.use('/api/medias', mediaRoutes);
app.use('/api/peliculas', peliculasRoutes);
app.use('/api/productoras', productorasRoutes);
app.use('/api/tipos', tiposRoutes);

// Middleware para manejar rutas no encontradas (404)
app.use((req, res, next) => {
  res.status(404).json({ mensaje: 'Recurso no encontrado' });
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ mensaje: 'Ocurrió un error en el servidor' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

