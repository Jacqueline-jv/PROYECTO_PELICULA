import mongoose from 'mongoose';

const { Schema } = mongoose;

const PeliculaSchema = new Schema(
  {
    titulo: { type: String, required: true, trim: true },
    descripcion: { type: String, trim: true, default: null },
    año: { 
      type: Number, 
      min: 1888, // Año mínimo de una película registrada
      max: new Date().getFullYear(), // No permite años futuros
    },
    duracion: { type: Number, min: 1, default: null }, // Duración no puede ser negativa
    director: { type: Schema.Types.ObjectId, ref: 'Director', default: null },
    genero: { type: Schema.Types.ObjectId, ref: 'Genero', default: null },
    productora: { type: Schema.Types.ObjectId, ref: 'Productora', default: null },
    tipo: { type: Schema.Types.ObjectId, ref: 'Tipo', default: null },
    media: { type: Schema.Types.Mixed, default: null } // Permite manejar películas y series
  },
  { timestamps: true }
);

const Pelicula = mongoose.model('Pelicula', PeliculaSchema);
export default Pelicula;
