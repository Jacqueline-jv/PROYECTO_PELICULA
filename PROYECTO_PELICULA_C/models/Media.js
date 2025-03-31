import mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema(
  {
    url: { type: String, required: true }
    // Puedes agregar más campos si lo necesitas, por ejemplo:
    // nombre: { type: String },
    // descripcion: { type: String }
  },
  { timestamps: true }
);

// Usamos el modelo ya compilado si existe, para evitar sobrescribirlo
const Media = mongoose.models.Media || mongoose.model('Media', mediaSchema);

export default Media;
