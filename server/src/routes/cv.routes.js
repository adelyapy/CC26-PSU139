import express from "express";
import multer from "multer";
import { analyzeCV } from "../controllers/cv.controller.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Endpoint utama: terima PDF atau teks CV
router.post("/analyze", upload.single("cv_file"), analyzeCV);

export default router;