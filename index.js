import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import connectDB from './config/db.js';

// Importar rutas
import directoresRoutes from './routes/directoresRoutes.js';
import generoRoutes from './routes/generoRoutes.js';
import mediaRoutes from './routes/mediaRoutes.js';
import peliculasRoutes from './routes/peliculasRoutes.js';
import productorasRoutes from './routes/productorasRoutes.js';
import tiposRoutes from './routes/tiposRoutes.js';

// Importar middleware de manejo de errores
import errorHandler from "./middlewares/errorHandler.js";

// Configuración
dotenv.config();
connectDB();

const app = express();

// Middleware para parsear JSON y habilitar CORS
app.use(express.json());
app.use(cors());

// Definir __dirname (para ES modules)
const __dirname = path.resolve();

// Servir archivos estáticos correctamente
app.use('/images', express.static(path.join(__dirname, 'frontend/public/images')));

// Rutas de la API
app.use('/api/directores', directoresRoutes);
app.use('/api/generos', generoRoutes);
app.use('/api/medias', mediaRoutes);
app.use('/api/peliculas', peliculasRoutes);
app.use('/api/productoras', productorasRoutes);
app.use('/api/tipos', tiposRoutes);

// Middleware para rutas no encontradas (404)
app.use((req, res, next) => {
  res.status(404).json({ mensaje: 'Recurso no encontrado' });
});

// Middleware de manejo de errores
app.use(errorHandler);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Servidor corriendo en el puerto ${PORT}`));
