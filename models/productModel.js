const sequelize = require("sequelize");
const sequelizeInstance = require("../config/db.config");

const productModel = sequelizeInstance.define(
  "product",
  {
    id: {
      type: sequelize.DataTypes.BIGINT,
      notNull: true,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: sequelize.DataTypes.STRING,
      notNull: true,
    },
    price: {
      type: sequelize.DataTypes.BIGINT,
      notNull: true,
    },
    categoryId: sequelize.DataTypes.BIGINT,
    notNull: true,
  },
  { timeStamps: false }
);