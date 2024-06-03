const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Tarea = sequelize.define("tarea", {
  id_tarea: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha_finalizacion_task: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fecha_asignacion_task: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  prioridad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  hora: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  descripcion: {
    type: DataTypes.STRING(800),
    allowNull: true,
  },
});

module.exports = Tarea;
