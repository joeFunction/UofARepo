const Shape = require("./Shape");

class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");

        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height
    }
}

module.exports = Rectangle;
