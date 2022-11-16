const sequelize = require("sequelize");

const sequelizeInstance = new sequelize("ecommerceDB", "root", "Mysql@shu1", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    aquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelizeInstance;
