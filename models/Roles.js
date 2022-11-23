const sequelize = require("sequelize");
const dbConnection = require("../config/db.config");

const Role = dbConnection.define("roles", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: sequelize.STRING,
  },
});

module.exports = Role;
