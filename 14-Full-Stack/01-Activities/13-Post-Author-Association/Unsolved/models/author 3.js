module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define("author",
    {
      // Giving the Author model a name of type STRING
      name: {
        type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  return Author;
};
