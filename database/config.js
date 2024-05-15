// config.js
module.exports = {
  username: process.env.USERNAMEDB,
  password: process.env.PASSDB,
  database: process.env.DATABD,
  host: process.env.HOSTBD,
  puerto: process.env.PORTBD,
  dialect: process.env.DIALECTBD,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
};
