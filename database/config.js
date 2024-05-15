// config.js
module.exports = {
  username: "postgres",
  password: "26339777",
  database: "postgres",
  host: "localhost",
  puerto: "5432",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
};
