const Child = require("./Child");

class DayCare {
  constructor() {
    this.children = [];
    this.capacity = 3;
    this.ageLimit = 6;
  };

  addChild(child) {
    // If not passed a Child object, throw an error
    if (child instanceof Child === false) {
      throw new Error("Expected parameter 'child' to be an instance of Child");
    }

    // If at capacity, return early
    if (this.children.length >= this.capacity) {
      console.log("At capacity, unable to add more children");
      return;
    }

    // If the child is over the age limit, return early
    if (child.age > this.ageLimit) {
      console.log("Unable to add child, they are over the age limit");
      return;
    }

    // Add the child to the `children` array if we made it this far
    this.children.push(child);
  };

  pickupChild(name) {
    // Find the index of a child with the given name
    const index = this.children.findIndex((child) => {
      return child.name === name;
    });

    // If no child is found, return early
    if (index === -1) {
      console.log("Child not found");
      return;
    }

    // If a child is found, remove it from the `children` array and return it
    console.log(`Picked up ${name} from day care`);
    return this.children.splice(index, 1)[0];
  };
}

module.exports = DayCare;
