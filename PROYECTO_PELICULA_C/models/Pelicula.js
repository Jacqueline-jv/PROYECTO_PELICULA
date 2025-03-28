import mongoose from "mongoose";

const PeliculaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    director: { type: mongoose.Schema.Types.ObjectId, ref: "Director" },
    genero: { type: mongoose.Schema.Types.ObjectId, ref: "Genero" },
    productora: { type: mongoose.Schema.Types.ObjectId, ref: "Productora" },
    tipo: { type: mongoose.Schema.Types.ObjectId, ref: "Tipo" },
    media: { type: mongoose.Schema.Types.ObjectId, ref: "Media" },
    descripcion: { type: String },
    anio: { type: Number },
});

const Pelicula = mongoose.model("Pelicula", PeliculaSchema);

export default Pelicula;