const { typeOf } = require("react-is");

const calculator = {
  sum: (a, b) => a + b,
  substract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  power: (a, b) => a ** b,
};

module.exports = calculator;

console.log(typeOf(calculator))