const Animal = require("./Animal");

class Bird extends Animal {
    constructor(distance) {
        //parent class constructor
        super("Tweet!", 2);
        this.distance = distance;
    }

    fly() {
        console.log(`Flew ${this.distance} miles`);
    }
}

module.exports = Bird;