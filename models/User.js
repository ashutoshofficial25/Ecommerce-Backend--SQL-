const sequelize = require("sequelize");

const dbConnection = require("../config/db.config");

const User = dbConnection.define("user", {
  username: { type: sequelize.STRING },
  email: { type: sequelize.STRING },
  passsword: { type: sequelize.STRING },
});

module.exports = User;
