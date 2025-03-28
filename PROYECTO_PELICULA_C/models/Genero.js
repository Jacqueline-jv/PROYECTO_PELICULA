import mongoose from "mongoose";

const GeneroSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, unique: true, trim: true },
  },
  { 
    timestamps: true, 
    collection: "generos" // Asegura que se use este nombre en la base de datos
  }
);

const Genero = mongoose.model("Genero", GeneroSchema);

export default Genero;