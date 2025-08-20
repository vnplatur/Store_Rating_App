import "./env.js"   // load the environment variable from .env
import express from "express";
import cors from "cors";
import userRoutes from "./src/routes/userRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve React build folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.use("/api", userRoutes);
console.log("DATABASE_URL", process.env.DB_NAME);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
