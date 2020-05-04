const Rectangle = require("./Rectangle");
const Circle = require("./Circle");
const Shape = require("./Shape");

/* Rectangle */
const rectangle = new Rectangle(3, 5);
rectangle.printShapeName();
rectangle.printShapeId();
console.log(`Area: ${rectangle.calculateArea()}`);

/* Circle */
const circle = new Circle(5);
circle.printShapeName();
circle.printShapeId();
console.log(`Area: ${circle.calculateArea()}`);

/* poly morphism */
console.log(rectangle instanceof Rectangle);
console.log(rectangle instanceof Shape);