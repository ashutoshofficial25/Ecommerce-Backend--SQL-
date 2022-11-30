const sequelize = require("sequelize");
const dbConnection = require("../config/db.config");

const db = {};
db.roles = require("./Roles")(sequelize, dbConnection);
db.user = require("./User")(sequelize, dbConnection);
db.product = require("./productModel")(sequelize, dbConnection);
db.category = require("./categoryModel")(sequelize, dbConnection);

db.roles.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});

db.user.belongsToMany(db.roles, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

module.exports = db;
