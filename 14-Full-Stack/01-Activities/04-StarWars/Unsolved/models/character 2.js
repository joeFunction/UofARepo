const orm = require("../config/orm.js");

const character = {
    all: async () => {
        const result = await orm.all();

        return result;
    },

    search: async name => {
        const result = await orm.search(name);

        return result;
    },

    create: async c => {
        const result = await orm.create(c);

        return result;
    }

};

module.exports = character;
