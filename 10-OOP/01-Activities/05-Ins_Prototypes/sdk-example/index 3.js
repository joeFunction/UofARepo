//constructor - it constructs OBJECTS - especial function

//constructor - it instantiates objects.

//define constructor

function Animal(raining, noise, numberOfLegs) {
    this.raining = raining;
    this.noise = noise;
    this.numberOfLegs = numberOfLegs;
}

Animal.prototype.getNumberOfLegs = function () {
    return this.numberOfLegs;
};

Animal.prototype.makeNoise = function () {
    console.log(this.noise);
};

//how do you create an object

const dogs = new Animal(true, "Woof!", 4);
const cats = new Animal(false, "Meow!", 4);
const lions = new Animal(true, "Roar!", 4);

dogs.makeNoise();
cats.makeNoise();

console.log("This is using hasOwnProperty()");
console.log(dogs.hasOwnProperty("raining"));

console.log(dogs.getNumberOfLegs());

cats.raining = true;

const massHysteria = function (dogs, cats) {
    if (dogs.raining === true && cats.raining === true) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
};

massHysteria(dogs, cats);