module.exports = (sequelize, dbConnection) => {
  const User = dbConnection.define("user", {
    username: { type: sequelize.STRING },
    email: { type: sequelize.STRING },
    passsword: { type: sequelize.STRING },
  });
  return User;
};
