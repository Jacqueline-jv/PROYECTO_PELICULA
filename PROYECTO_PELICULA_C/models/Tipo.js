import mongoose from "mongoose";

const TipoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
});

const Tipo = mongoose.model("Tipo", TipoSchema);

export default Tipo;