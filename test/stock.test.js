const { stockValido } = require('../src/producto');

describe('stockValido', () => {
  test('0 es válido (frontera inferior)', () => {
    expect(stockValido(0)).toBe(true);
  });
  test('1 es válido (interior)', () => {
    expect(stockValido(1)).toBe(true);
  });
  test('2147483647 es válido (frontera superior)', () => {
    expect(stockValido(2147483647)).toBe(true);
  });
  test('-1 es inválido (bajo el rango)', () => {
    expect(stockValido(-1)).toBe(false);
  });
  test('1.5 es inválido (decimal)', () => {
    expect(stockValido(1.5)).toBe(false);
  });
  test('2147483648 es inválido (sobre el rango)', () => {
    expect(stockValido(2147483648)).toBe(false);
  });
  test("'10' es inválido (cadena numérica, sin coerción)", () => {
    expect(stockValido('10')).toBe(false);
  });
  test('null es inválido', () => {
    expect(stockValido(null)).toBe(false);
  });
  test('true es inválido', () => {
    expect(stockValido(true)).toBe(false);
  });
});
