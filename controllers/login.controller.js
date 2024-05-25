const Empleado = require("../models/empleado");
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Empleado.findOne({ where: { email } });
    // const desCryptPassword = bcrypt.compareSync(password, user.password);

    if (!desCryptPassword)
      return res.status(404).json({ error: "Credenciales Incorrecta" });

    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

    const token = jwt.sign({ name: user.name, email: user.email }, "secret", {
      expiresIn: "45min",
    });

    const decodedToken = jwt.decode(token);
    const expiresAt = decodedToken.exp;

    res.header("token", token).json({
      token: token,
      expiresAt,
    });
  } catch (error) {
    res.status(500).json({ error: "Usuario no encontrado" });
  }
};

module.exports = loginUser;
