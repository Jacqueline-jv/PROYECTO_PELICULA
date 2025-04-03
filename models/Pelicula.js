import mongoose from 'mongoose';

const { Schema } = mongoose;

const PeliculaSchema = new Schema({
    titulo: { type: String, required: true },
    descripcion: String,
    año: Number,
    duracion: Number,
    director: { type: Schema.Types.ObjectId, ref: 'Director' },
    genero: { type: Schema.Types.ObjectId, ref: 'Genero' },
    productora: { type: Schema.Types.ObjectId, ref: 'Productora' },
    tipo: { type: Schema.Types.ObjectId, ref: 'Tipo' },
    media: { type: Schema.Types.ObjectId, ref: 'Media' }
}, { timestamps: true });

const Pelicula = mongoose.model('Pelicula', PeliculaSchema);
export default Pelicula;
