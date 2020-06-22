module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("post",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 160]
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
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at"
    });

  return Post;
};
