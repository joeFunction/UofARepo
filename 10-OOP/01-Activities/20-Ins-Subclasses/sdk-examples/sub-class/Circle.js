const Shape = require("./Shape");

class Circle extends Shape {
    constructor(radius) {
        super("Circle");

        this.radius = radius;
    }

    calculateArea(){
        return Math.PI * this.radius * this.radius;
    }
}

module.exports = Circle;