const sequelize = require("sequelize");
const sequelizeInstance = require("../config/db.config");
const categoryModel = sequelizeInstance.define(
  "catgory",
  {
    id: {
      type: sequelize.DataTypes.BIGINT,
      notNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: sequelize.DataTypes.STRING,
      notNull: true,
    },
  },
  { timestamps: false }
);

module.exports = categoryModel;
