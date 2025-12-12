import express from "express";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const router = express.Router();

// Initialize Gemini client
const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);

// Direct handler inside router
router.post("/ask", async (req, res) => {
  try {
    const prompt = req.body?.prompt || "Write something interesting";

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }]
        }
      ],
    });

    const output = response.text;
    console.log(output);

    return res.status(200).json({ output });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({ error: error.message });
  }
});

export default router;
