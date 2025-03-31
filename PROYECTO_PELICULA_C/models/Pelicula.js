import mongoose from 'mongoose';

const { Schema } = mongoose;

const peliculaSchema = new Schema({
  titulo: { type: String, required: true },
  descripcion: String,
  año: Number,
  duracion: Number,
  director: { nombre: String },
  genero: { nombre: String },
  productora: { nombre: String },
  tipo: { nombre: String },
  media: {
    url: { type: String, required: true } // Campo para la URL de la imagen
  }
  // otros campos según sea necesario
}, { timestamps: true });

// Usar el modelo ya compilado si existe, o crearlo de lo contrario
const Pelicula = mongoose.models.Pelicula || mongoose.model('Pelicula', peliculaSchema);

export default Pelicula;