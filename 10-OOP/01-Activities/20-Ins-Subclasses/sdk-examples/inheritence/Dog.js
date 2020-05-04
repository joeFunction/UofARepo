const Animal = require("./Animal");

class Dog extends Animal {
    constructor(miles) {
        // This will call parent class constructor
        super("Woof!", 4);

        this.miles = miles;
    }

    walk() {
        console.log(`Walked ${this.miles} miles`);
    }
}

module.exports = Dog;
