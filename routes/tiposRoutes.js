import express from "express";
import { obtenerTipos, crearTipo } from "../controllers/tipoController.js";

const router = express.Router();

router.get("/", obtenerTipos);
router.post("/", crearTipo);

export default router;