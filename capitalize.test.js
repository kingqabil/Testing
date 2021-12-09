const capitalize = require('./capitalize');

describe('Capitalize string', () => {
  test('transform "sadiq" to "Sadiq"', () => {
    expect(capitalize("sadiq")).toBe("Sadiq");
  });

  test('transform "GRANT" to "Grant"', () => {
    expect(capitalize("GRANT")).toBe("Grant");
  });

  test('transform "Capitalize" to "Capitalize"', () => {
    expect(capitalize("Capitalize")).toBe("Capitalize");
  });

  test('Request a string if other input data type', () => {
    expect(capitalize(10708)).toBe("Enter a string");
  });
});