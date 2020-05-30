module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define("todo",
        {
            text: {
                type: DataTypes.STRING
            },
            complete: {
                type: DataTypes.BOOLEAN
            }
        },
        {
            freezeTableName: true,
            timestamps: false
        }
    );

    return Todo;
};
