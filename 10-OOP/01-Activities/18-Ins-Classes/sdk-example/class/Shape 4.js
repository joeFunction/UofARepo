class Shape {
    constructor(area, perimeter) {
        this.area = area;
        this.perimeter = perimeter;
    }

    printInfo() {
        console.log(`Area: ${this.area}`);
        console.log(`Perimeter: ${this.perimeter}`);
    }
}

const square = new Shape(30, 35);
square.printInfo();
square.calculateArea();

const circle = new Shape(50, 65);
circle.printInfo();
