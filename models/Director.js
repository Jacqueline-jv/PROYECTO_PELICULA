import mongoose from "mongoose";

const DirectorSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
});

const Director = mongoose.model("Director", DirectorSchema);

export default Director;