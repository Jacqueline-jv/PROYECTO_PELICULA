import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Importar modelos
import Director from './models/Director.js';
import Genero from './models/Genero.js';
import Productora from './models/Productora.js';
import Tipo from './models/Tipo.js';
import Media from './models/Media.js';
import Pelicula from './models/Pelicula.js';

dotenv.config();
await connectDB();

const importarPeliculas = async () => {
  try {
    console.log("📥 Importando películas...");

    // Obtener los IDs de las relaciones
    const directores = await Director.find();
    const generos = await Genero.find();
    const productoras = await Productora.find();
    const tipos = await Tipo.find();
    const medias = await Media.find();

    if (!directores.length || !generos.length || !productoras.length || !tipos.length || !medias.length) {
      console.log("❌ Error: Faltan datos relacionados.");
      process.exit(1);
    }

    const peliculas = [
      {
        titulo: "La Matrix",
        descripcion: "Un hacker descubre la verdad oculta de su realidad y lucha contra un sistema controlado por máquinas.",
        año: 1999,
        director: directores[0]._id,
        genero: [generos[0]._id, generos[1]._id],
        productora: productoras[0]._id,
        tipo: tipos[0]._id,
        media: medias[0]._id
      },
      {
        titulo: "Interstellar",
        descripcion: "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
        año: 2014,
        director: directores[1]._id,
        genero: [generos[0]._id, generos[2]._id],
        productora: productoras[1]._id,
        tipo: tipos[1]._id,
        media: medias[1]._id
      }
    ];

    await Pelicula.insertMany(peliculas);
    console.log("✅ Películas importadas correctamente.");
    process.exit();
  } catch (error) {
    console.error("❌ Error al importar películas:", error);
    process.exit(1);
  }
};

importarPeliculas();
