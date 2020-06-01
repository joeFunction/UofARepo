module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define("todo",
        {
            text: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1, 140]
                }
            },
            complete: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        },
        {
            freezeTableName: true,
            timestamps: false
        }
    );

    return Todo;
};
