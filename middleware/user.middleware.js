const jwt = require("jsonwebtoken");
const securityFunction = (req, res, next) => {
  try {
    const token = req.headers.token.split(" ").pop();

    if (!token) return res.status(401).json({ error: "Acceso denegado" });
    const decode = jwt.verify(token, "secret");
    req.user = decode; // Para poder usarlo en otro lado

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError")
      return res.json({ error: "El token ha expirado" });

    res.status(400).json({ error: "El token no es valido" });
    console.error(error);
  }
};

module.exports = securityFunction;
