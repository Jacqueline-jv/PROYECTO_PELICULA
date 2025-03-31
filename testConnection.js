import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import Genero from "./models/Genero.js";  // Asegúrate de que la ruta sea correcta

// 🔹 Cargar manualmente el archivo .env
const envPath = path.resolve(".env");
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
} else {
  console.error("❌ Error: Archivo .env no encontrado");
  process.exit(1);
}

console.log("🔹 URI Cargada:", process.env.MONGO_URI);

const uri = process.env.MONGO_URI;

if (!uri) {
  console.error("❌ Error: No se encontró la variable MONGO_URI en el archivo .env");
  process.exit(1);
}

// 🔹 Conectar a MongoDB
const connectWithRetry = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log("✅ Conexión exitosa a MongoDB Atlas");

    // 🔹 Verificar si la colección de Géneros tiene datos
    const generos = await Genero.find();
    console.log("📌 Géneros encontrados en la base de datos:", generos);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error al conectar con MongoDB Atlas:", error);
    console.log("🔄 Reintentando en 5 segundos...");
    setTimeout(connectWithRetry, 5000);
  }
};

connectWithRetry();
