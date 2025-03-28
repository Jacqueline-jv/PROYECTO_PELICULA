import express from "express";
import { obtenerGeneros, crearGenero } from "../controllers/generoController.js";

const router = express.Router();

router.get("/", obtenerGeneros);
router.post("/", crearGenero);

export default router;