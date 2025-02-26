const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAI = require("openai");
const bodyParser = require("body-parser");

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

app.listen(process.env.PORT || 3000, () => {
  console.log(`🚀 Servidor iniciado en el puerto ${process.env.PORT || 3000}`);
});