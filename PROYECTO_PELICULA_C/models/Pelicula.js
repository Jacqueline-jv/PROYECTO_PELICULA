import mongoose from "mongoose";

const PeliculaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    director: { type: mongoose.Schema.Types.ObjectId, ref: "Director", required: true },
    genero: [{ type: mongoose.Schema.Types.ObjectId, ref: "Genero", required: true }], // Corregido a array
    productora: { type: mongoose.Schema.Types.ObjectId, ref: "Productora", required: true },
    tipo: { type: mongoose.Schema.Types.ObjectId, ref: "Tipo", required: true },
    media: { type: mongoose.Schema.Types.ObjectId, ref: "Media", required: true },
    descripcion: { type: String, required: true },
    año: { type: Number, required: true } // Usando "año" en lugar de "anio"
});

const Pelicula = mongoose.model("Pelicula", PeliculaSchema);

export default Pelicula;