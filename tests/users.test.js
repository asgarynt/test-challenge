// You already have the methods imported
const { default: expect } = require("expect");
const { getUser, getUsers } = require("../users");

// Make a test to verify if the method getUser(id) works correctly
test("getUser(id) return any data of the resulting objetct", () => {
  expect(getUser(3).id).toBe(3);
});

// Verify any data of the resulting object you want

// READ documentation
