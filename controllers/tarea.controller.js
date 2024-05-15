const Tarea = require("../models/tarea");

const createTarea = async (req, res) => {
  const {
    nombre,
    fecha_finalizacion_task,
    fecha_asignacion_task,
    status,
    descripcion,
    id_empleado,
    prioridad,
  } = req.body;
  const id_empleadoNumero = parseInt(id_empleado);

  try {
    // Crear la tarea
    const nuevaTarea = await Tarea.create({
      nombre,
      fecha_finalizacion_task,
      fecha_asignacion_task,
      status,
      descripcion,
      prioridad,
      id_empleado: id_empleadoNumero,
    });

    if (id_empleadoNumero && id_empleadoNumero.length > 0) {
      await nuevaTarea.addEmpleados(id_empleadoNumero);
    }

    res.json({ message: "Tarea creada exitosamente", tarea: nuevaTarea });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTarea = async (req, res) => {
  try {
    const tareas = await Tarea.findAll();
    res.json(tareas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletetarea = async (req, res) => {
  const { id } = req.params;
  try {
    await Tarea.destroy({
      where: {
        id_tarea: id,
      },
    });
    res.json({ msg: "Tarea eliminado con exito" });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
    console.log(error);
  }
};

const changeStatus = async (req, res) => {
  const { id } = req.params;

  try {
    const Findtarea = await Tarea.findByPk(id);

    if (!Findtarea) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    const newStatus = !Findtarea.status;

    await Tarea.update({ status: newStatus }, { where: { id_tarea: id } });

    res.json({ status: newStatus });
  } catch (error) {
    console.error("Error al cambiar el estado de la tarea:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
module.exports = { createTarea, getTarea, deletetarea, changeStatus };
