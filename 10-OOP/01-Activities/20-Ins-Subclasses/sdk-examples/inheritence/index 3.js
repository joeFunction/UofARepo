const Animal = require("./Animal");
const Dog = require("./Dog");
const Bird = require("./Bird");

const spot = new Dog(10);
spot.walk();
spot.makeNoise();

const parrot = new Bird(5);
parrot.fly();
parrot.makeNoise();

//instanceof
/* Poly-morphism */ //many forms
// object instanceof Class
console.log(spot instanceof Dog);
console.log(spot instanceof Animal);

console.log(spot instanceof Bird);

console.log(parrot instanceof Bird);
console.log(parrot instanceof Animal);
