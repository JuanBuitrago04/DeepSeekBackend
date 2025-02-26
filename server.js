import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import bodyParser from "body-parser";

dotenv.config(); // Cargar variables de entorno

if (!process.env.DEEPSEEK_API_KEY) {
  throw new Error("Falta la API Key de DeepSeek en el archivo .env");
}

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const openai = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: process.env.DEEPSEEK_API_KEY,
});

// Ruta de prueba para verificar que el backend funciona
app.get("/", (req, res) => {
  res.send("✅ Servidor funcionando en Vercel.");
});

// Ruta de la API de chat
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "El mensaje no puede estar vacío." });
  }

  try {
    const response = await openai.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model: "deepseek-chat",
    });

    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error("Error en la API de DeepSeek:", error);
    res.status(500).json({ error: "Error en la respuesta del servidor" });
  }
});

// 🔹 Vercel no usa `app.listen()`
export default app;