import mongoose from "mongoose";

const ProductoraSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
});

const Productora = mongoose.model("Productora", ProductoraSchema);

export default Productora;