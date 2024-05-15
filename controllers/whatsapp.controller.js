const accountSid = process.env.TWILIOSID;
const authToken = process.env.TWILIOAUTH;

const client = require("twilio")(accountSid, authToken);

const sendMessage = async (req, res) => {
  const { to, msg } = req.body;
  try {
    const message = await client.messages.create({
      from: "whatsapp:+14155238886",
      to: `whatsapp:${to}`,
      body: msg,
    });
    res.json({ resp: "Mensaje enviado exitosamente", msg: message.body });
  } catch (error) {
    console.error("Error al enviar el mensaje:", error);
  }
};

module.exports = { sendMessage };
