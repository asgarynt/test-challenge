const { default: expect } = require("expect");
const { sum, substract, multiply, divide, power } = require("../calculator");

test("adds a + b", () => {
  expect(sum(2, 4)).toBe(6);
});

test("substracts a - b", () => {
  expect(substract(2, 4)).toBe(-2);
});

test("multiplies a * b", () => {
  expect(multiply(2, 4)).toBe(8);
});

test("divides a / b", () => {
  expect(divide(2, 4)).toBe(0.5);
});

test("Raises to power a ^ b", () => {
  expect(power(2, 4)).toBe(16);
});
