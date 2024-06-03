const accountSid = process.env.TWILIOSID;
const authToken = process.env.TWILIOAUTH;

const client = require("twilio")(accountSid, authToken);

const sendMessage = async (req, res) => {
  const messagesToSend = req.body; // Esto debe ser un array de objetos con 'to' y 'msg'
  try {
    const messages = [];
    for (const messageData of messagesToSend) {
      const { to, msg } = messageData;
      const message = await client.messages.create({
        from: "whatsapp:+14155238886",
        to: `whatsapp:${to}`,
        body: msg,
      });
      messages.push(message);
    }
    res.json({ resp: "Message sent successfully", msgs: messages });
  } catch (error) {
    res.status(500).json({ error: "Error sending message" });
  }
};

module.exports = { sendMessage };
