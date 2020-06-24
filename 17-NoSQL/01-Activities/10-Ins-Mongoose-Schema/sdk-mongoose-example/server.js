const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://localhost:27017/mongoose_userDB", { useNewUrlParser: true, useUnifiedTopology: true });

const createUser = async () => {
    try {
        const user = {
            first_name: "Steve",
            last_name: "Rogers",
            username: "srogers",
            email: "steve.rogers@starenterprises.com",
            password: "password12345"
        };

        const userObj = new User(user);
        userObj.setFullName();

        const data = await User.create(userObj);

        findAll();

    } catch (error) {
        console.log(error);
    }
};

const findAll = async () => {
    try {
        const data = await User.find({});

        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
};

createUser();