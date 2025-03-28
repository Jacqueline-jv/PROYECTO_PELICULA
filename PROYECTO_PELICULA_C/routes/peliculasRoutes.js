import express from "express";
import { obtenerPeliculas, crearPelicula } from "../controllers/peliculaController.js";

const router = express.Router();

router.get("/", obtenerPeliculas);
router.post("/", crearPelicula);

export default router;