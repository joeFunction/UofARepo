class Shape {
    constructor(name) {
        this.name = name;
        this.id = ++Shape.lastId;
    }

    printShapeName() {
        console.log(`Shape name: ${this.name}`);
    }

    printShapeId() {
        console.log(`Shape id: ${this.id}`);
    }

    calculateArea() {
        return 0;
    }
}

Shape.lastId = 0;

module.exports = Shape;
