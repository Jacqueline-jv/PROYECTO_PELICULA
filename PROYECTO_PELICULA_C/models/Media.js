import mongoose from "mongoose";

const MediaSchema = new mongoose.Schema({
    url: { type: String, required: true },
});

const Media = mongoose.model("Media", MediaSchema);

export default Media;