import mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema(
  {
    url: { type: String, required: true }
   
  },
  { timestamps: true }
);

const Media = mongoose.models.Media || mongoose.model('Media', mediaSchema);

export default Media;
