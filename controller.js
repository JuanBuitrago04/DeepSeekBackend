const OpenAI = require("openai");

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: process.env.DEEPSEEK_API_KEY || "sk-5dff92c381d8431bba1416eedc151283",
});

exports.chatController = async (req, res) => {
  const { message } = req.body;
  
  try {
    const response = await openai.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model: "deepseek-chat",
    });

    res.json({ reply: response.choices[0].message.content });
    console.log(response.choices[0].message.content);
  } catch (error) {
    res.status(500).json({ error: "Error en la respuesta del servidor" });
  }
};
