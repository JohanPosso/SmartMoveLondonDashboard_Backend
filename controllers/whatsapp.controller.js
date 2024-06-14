require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const sendMessage = async (req, res) => {
  const messagesToSend = req.body;
  try {
    const messages = [];
    for (const messageData of messagesToSend) {
      const { to, contentVariables } = messageData;
      const message = await client.messages.create({
        contentSid: process.env.TWILIO_CONTENT_SID,
        from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
        contentVariables: JSON.stringify(contentVariables),
        messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID,
        to: `whatsapp:${to}`,
      });
      messages.push(message);
    }
    res.json({ resp: "Message sent successfully", msgs: messages });
  } catch (error) {
    console.error("Error sending message:", error); // Para loguear errores en la consola
    res
      .status(500)
      .json({ error: "Error sending message", details: error.message });
  }
};

module.exports = { sendMessage };
