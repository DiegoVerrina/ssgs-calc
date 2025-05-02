const math = require('./math');

describe('Operazioni matematiche', () => {
  test('add', () => {
    expect(math.add(2, 3)).toBe(5);
  });

  test('subtract', () => {
    expect(math.subtract(5, 3)).toBe(2);
  });

  test('multiply', () => {
    expect(math.multiply(4, 3)).toBe(12);
  });

  test('divide', () => {
    expect(math.divide(10, 2)).toBe(5);
  });

  test('divide by zero', () => {
    expect(() => math.divide(5, 0)).toThrow("Divisione per zero non consentita");
  });

  test('power', () => {
    expect(math.power(2, 3)).toBe(8);
  });
});
