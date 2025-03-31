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

const seedDatabase = async () => {
  try {
    console.log("🌱 Iniciando inserción de datos...");

    // Buscar los ObjectId de cada entidad
    const director1 = await Director.findOne({ nombre: "Lana Wachowski" });
    const director2 = await Director.findOne({ nombre: "Stephen Sommers" });
    const director3 = await Director.findOne({ nombre: "Andrew Adamson" });
    const director4 = await Director.findOne({ nombre: "Gore Verbinski" });
    const director5 = await Director.findOne({ nombre: "Brian Robbins" });
    const director6 = await Director.findOne({ nombre: "Francis Ford Coppola" });
    const director7 = await Director.findOne({ nombre: "Christopher Nolan" });

    const genero1 = await Genero.findOne({ nombre: "Ciencia Ficción" });
    const genero2 = await Genero.findOne({ nombre: "Acción" });
    const genero3 = await Genero.findOne({ nombre: "Aventura" });
    const genero4 = await Genero.findOne({ nombre: "Comedia" });
    const genero5 = await Genero.findOne({ nombre: "Crimen" });
    const genero6 = await Genero.findOne({ nombre: "Drama" });

    const productora1 = await Productora.findOne({ nombre: "Warner Bros." });
    const productora2 = await Productora.findOne({ nombre: "Universal Pictures" });
    const productora3 = await Productora.findOne({ nombre: "DreamWorks Animation" });
    const productora4 = await Productora.findOne({ nombre: "Walt Disney Pictures" });
    const productora5 = await Productora.findOne({ nombre: "Paramount Pictures" });

    const tipo1 = await Tipo.findOne({ nombre: "Película de Acción" });
    const tipo2 = await Tipo.findOne({ nombre: "Aventura" });
    const tipo3 = await Tipo.findOne({ nombre: "Animación" });
    const tipo4 = await Tipo.findOne({ nombre: "Comedia" });
    const tipo5 = await Tipo.findOne({ nombre: "Crimen" });
    const tipo6 = await Tipo.findOne({ nombre: "Ciencia Ficción" });

    const media1 = await Media.findOne({ archivo: "Matrix.jpeg" });
    const media2 = await Media.findOne({ archivo: "La momia.jpeg" });
    const media3 = await Media.findOne({ archivo: "Shrek.jpeg" });
    const media4 = await Media.findOne({ archivo: "Piratas del caribe.jpeg" });
    const media5 = await Media.findOne({ archivo: "Norbit.jpeg" });
    const media6 = await Media.findOne({ archivo: "El padrino.jpeg" });
    const media7 = await Media.findOne({ archivo: "interstellar.jpeg" });

    // Validar que se encontraron todos los documentos
    if (!director1 || !genero1 || !productora1 || !tipo1 || !media1) {
      console.log("❌ Error: No se encontraron algunos documentos relacionados.");
      process.exit(1);
    }

    // Crear películas con los ObjectId correctos
    const peliculas = [
      {
        titulo: "La Matrix",
        descripcion: "Un hacker descubre la verdad oculta de su realidad y lucha contra un sistema controlado por máquinas.",
        año: 1999,
        director: director1._id,
        genero: [genero1._id, genero2._id],
        productora: productora1._id,
        tipo: tipo1._id,
        media: media1._id
      },
      {
        titulo: "La Momia",
        descripcion: "Un explorador despierta una antigua maldición y debe enfrentarse a fuerzas sobrenaturales.",
        año: 1999,
        director: director2._id,
        genero: [genero3._id, genero2._id],
        productora: productora2._id,
        tipo: tipo2._id,
        media: media2._id
      },
      {
        titulo: "Shrek",
        descripcion: "Un ogro se embarca en una aventura inesperada para recuperar su hogar y descubre el verdadero significado de la amistad.",
        año: 2001,
        director: director3._id,
        genero: [genero3._id, genero4._id],
        productora: productora3._id,
        tipo: tipo3._id,
        media: media3._id
      },
      {
        titulo: "Piratas del Caribe",
        descripcion: "Un capitán pirata carismático busca recuperar su barco robado y enfrenta peligros en alta mar.",
        año: 2003,
        director: director4._id,
        genero: [genero3._id, genero6._id],
        productora: productora4._id,
        tipo: tipo2._id,
        media: media4._id
      },
      {
        titulo: "Norbit",
        descripcion: "Un hombre tímido se ve envuelto en situaciones cómicas mientras trata de escapar de una vida opresiva.",
        año: 2007,
        director: director5._id,
        genero: [genero4._id],
        productora: productora3._id,
        tipo: tipo4._id,
        media: media5._id
      },
      {
        titulo: "El Padrino",
        descripcion: "La historia de la familia Corleone y sus oscuros negocios en el mundo del crimen organizado.",
        año: 1972,
        director: director6._id,
        genero: [genero5._id, genero6._id],
        productora: productora5._id,
        tipo: tipo5._id,
        media: media6._id
      },
      {
        titulo: "Interstellar",
        descripcion: "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
        año: 2014,
        director: director7._id,
        genero: [genero1._id, genero6._id],
        productora: productora5._id,
        tipo: tipo6._id,
        media: media7._id
      }
    ];

    // Insertar en la base de datos
    await Pelicula.insertMany(peliculas);
    console.log("✅ Base de datos poblada correctamente");

    process.exit();
  } catch (error) {
    console.error("❌ Error al poblar la base de datos:", error);
    process.exit(1);
  }
};

seedDatabase();