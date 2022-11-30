module.exports = (sequelize, dbConnection) => {
  const categoryModel = dbConnection.define(
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

  return categoryModel;
};
