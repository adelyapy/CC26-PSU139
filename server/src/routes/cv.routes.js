import express from "express";
import { analyzeCV } from "../controllers/cv.controller.js";

const router = express.Router();

router.post("/analyze", analyzeCV);

export default router;