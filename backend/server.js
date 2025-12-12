import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import geminiRoutes from "./routes/gemini.js";

dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

app.use("/api/gemini", geminiRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
