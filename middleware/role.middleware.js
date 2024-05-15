const jwt = require("jsonwebtoken");

const findRole = async (req, res, next) => {
  try {
    const role = req.user.role;
    if (role !== "admin" || null)
      return res.json("El usuario no tiene permisos para realizar esta accion");

    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError")
      return res.json("El token es invalido!");

    if (error.name === "TokenExpiredError")
      return res.json("El token ha expirado");

    res.json(error);
  }
};

module.exports = findRole;
