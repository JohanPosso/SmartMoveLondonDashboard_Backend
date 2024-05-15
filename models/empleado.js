const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const Tarea = require("./tarea");

const empleado = sequelize.define("empleados", {
  id_empleado: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  nombres: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  primer_apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  segundo_apellido: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  identificacion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  codigo_postal: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pais: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ciudad: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
Tarea.belongsTo(empleado, { foreignKey: "id_empleado" });
empleado.hasMany(Tarea, { foreignKey: "id_empleado" });

module.exports = empleado;
