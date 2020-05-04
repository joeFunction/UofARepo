class Animal {
    constructor(noise, numberOfLegs) {
        this.noise = noise;
        this.numberOfLegs = numberOfLegs;
    }

    makeNoise() {
        console.log(`Make noise: ${this.noise}`);
    }
}

const dog = new Animal("Woof", 4);
dog.makeNoise();
