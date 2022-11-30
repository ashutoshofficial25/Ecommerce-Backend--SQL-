module.exports = (sequelize, dbConnection) => {
  const productModel = dbConnection.define(
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
      categoryId: {
        type: sequelize.DataTypes.BIGINT,
        notNull: true,
      },
    },
    { timestamps: false }
  );

  return productModel;
};

// productModel.sync({ alter: true });
