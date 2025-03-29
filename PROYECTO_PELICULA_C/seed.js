import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import Pelicula from "./models/Pelicula.js"; // Asegúrate de que la ruta es correcta

// Cargar variables de entorno
dotenv.config();

// Conectar a MongoDB
const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Conectado a MongoDB Atlas");
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error);
    process.exit(1);
  }
};

// Cargar las películas desde el archivo JSON
const cargarPeliculas = async () => {
  await conectarDB();

  const filePath = path.resolve("data", "peliculas.json");

  if (!fs.existsSync(filePath)) {
    console.error("❌ Error: No se encontró el archivo peliculas.json");
    process.exit(1);
  }

  try {
    const peliculasData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    await Pelicula.deleteMany(); // Elimina las películas previas
    await Pelicula.insertMany(peliculasData); // Inserta nuevas películas

    console.log("🎬 Películas agregadas correctamente");
    process.exit();
  } catch (error) {
    console.error("❌ Error al insertar películas:", error);
    process.exit(1);
  }
};

// Ejecutar la función
cargarPeliculas();
