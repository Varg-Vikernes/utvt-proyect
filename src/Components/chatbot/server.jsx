// Importa las bibliotecas necesarias
const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

// Crea una instancia de Express
const app = express();
const port = process.env.PORT || 3000;
const token = "6311073911:AAGCWINcXtG5tVgmfXLkaEl5vp3cYqqsVI8"; // Reemplaza con tu token de Telegram

// Crea una instancia del bot de Telegram
const bot = new TelegramBot(token, { polling: true });

// Configura Express para manejar solicitudes JSON
app.use(express.json());

// Maneja las solicitudes POST en el punto de conexión /webhook
app.post("/webhook", (req, res) => {
  // Extrae el objeto 'message' del cuerpo de la solicitud
  const { message } = req.body;

  if (message && message.text) {
    const chatId = message.chat.id;
    const userMessage = message.text;

    // Implementa la lógica del chatbot para responder a los mensajes del usuario aquí.
    // Por ejemplo:
    if (userMessage.toLowerCase() === "hola") {
      bot.sendMessage(chatId, "Hola, ¿en qué puedo ayudarte?");
    } else {
      bot.sendMessage(
        chatId,
        "No entiendo lo que estás diciendo. Puedes usar /ayuda para obtener ayuda."
      );
    }
    res.sendStatus(200); // Responde con éxito
  } else {
    console.error("Mensaje de Telegram mal formado.");
    res.sendStatus(400); // Responde con un código de estado 400 para solicitudes mal formadas
  }
});

// Inicia el servidor Express en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});
