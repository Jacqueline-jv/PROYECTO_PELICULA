import express from "express";
import { obtenerProductoras, crearProductora } from "../controllers/productoraController.js";

const router = express.Router();

router.get("/", obtenerProductoras);
router.post("/", crearProductora);

export default router;