module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });

  return User;
};
