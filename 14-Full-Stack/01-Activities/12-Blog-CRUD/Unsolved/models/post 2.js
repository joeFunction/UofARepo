module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define("post",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      category: {
        type: DataTypes.STRING,
        defaultValue: "Personal"
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  return Post;
};
