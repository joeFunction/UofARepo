const db = require("./models").default;

const createUser = async () => {
    try {
        const user = {
            username: "tstark",
            email: "tstark@starkenterprises.com",
            password: "password123"
        };

        const data = await db.User.create(user);

        console.log(data);

        findAll();
    } catch (error) {
        console.log(error);
    }
};

const findAll = async () => {
    try {
        const data = await db.User.find({});

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

createUser();