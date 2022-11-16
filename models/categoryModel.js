const sequelize = require("sequelize");
const sequelizeInstance = require("../config/db.config");

const categoryModel = new sequelizeInstance.create(
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
  { timeStamps: false }
);

module.exports = categoryModel;
