class Arithmetic {
  constructor(number = 0) {
    this.number = number;
  };

  plus(num = 0) {
    const newNumber = this.number + num;

    return new Arithmetic(newNumber);
  };

  minus(num = 0) {
    const newNumber = this.number - num;

    return new Arithmetic(newNumber);
  };

  value() {
    return this.number;
  };
}

module.exports = Arithmetic;
