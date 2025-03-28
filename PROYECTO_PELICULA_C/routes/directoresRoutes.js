import express from "express";
import { obtenerDirectores, crearDirector } from "../controllers/directorController.js";

const router = express.Router();

router.get("/", obtenerDirectores);
router.post("/", crearDirector);

export default router;