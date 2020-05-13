class Animal {
    constructor(noise, numberOfLegs) {
        this.noise = noise;
        this.numberOfLegs = numberOfLegs;
    }

    makeNoise() {
        console.log(`Noise is: ${this.noise}`);
    }
}

module.exports = Animal;