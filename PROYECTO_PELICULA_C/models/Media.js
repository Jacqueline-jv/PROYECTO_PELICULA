const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
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
});

const Pelicula = mongoose.model('Pelicula', peliculaSchema);

module.exports = Pelicula;
