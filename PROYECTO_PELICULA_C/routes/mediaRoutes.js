import express from "express";
import { obtenerMedias, crearMedia } from "../controllers/mediaController.js";

const router = express.Router();

router.get("/", obtenerMedias);
router.post("/", crearMedia);

export default router;

