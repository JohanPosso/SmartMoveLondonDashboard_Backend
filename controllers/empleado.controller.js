const Empleado = require("../models/empleado");
const bcrypt = require("bcrypt");

const createUser = (req, res) => {
  const {
    nombres,
    primer_apellido,
    segundo_apellido,
    email,
    fecha_nacimiento,
    telefono,
    codigo_postal,
    pais,
    genero,
    status,
    role_empleado,
    // password,
  } = req.body;
  // const passwordCrypt = bcrypt.hashSync(password, 10);

  const createUser = Empleado.create({
    nombres,
    primer_apellido,
    segundo_apellido,
    email,
    fecha_nacimiento,
    telefono,
    codigo_postal,
    pais,
    genero,
    status: true,
    role_empleado,
    // password: passwordCrypt,
  })

    .then((createUser) => {
      res.json({ message: "Usuario creado exitosamente", createUser });
    })
    .catch((err) => {
      res.json(err);
    });
};

const findAll = async (req, res) => {
  const todo = await Empleado.findAll()
    .then((todo) => {
      res.json(todo);
    })
    .catch((err) => {
      res.json(err);
    });
};

const changeStatus = async (req, res) => {
  const { id } = req.params;

  try {
    const empleado = await Empleado.findByPk(id);

    if (!empleado) {
      return res.status(404).json({ error: "Empleado no encontrado" });
    }

    const newStatus = !empleado.status;

    await Empleado.update(
      { status: newStatus },
      { where: { id_empleado: id } }
    );

    res.json({ status: newStatus });
  } catch (error) {
    console.error("Error al cambiar el estado del empleado:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { createUser, findAll, changeStatus };
