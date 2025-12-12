import express from "express";
import { generateResponse } from "../controllers/geminiController.js";

const router = express.Router();

router.post("/ask", generateResponse);

export default router;
