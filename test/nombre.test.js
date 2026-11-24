const { nombreValido } = require('../src/producto');

describe('nombreValido', () => {
  test('Tornillo es válido', () => {
    expect(nombreValido('Tornillo')).toBe(true);
  });
  test('espacios externos se recortan y sigue válido', () => {
    expect(nombreValido('  Tornillo  ')).toBe(true);
  });
  test('100 caracteres es válido', () => {
    expect(nombreValido('A'.repeat(100))).toBe(true);
  });
  test('101 caracteres es inválido', () => {
    expect(nombreValido('A'.repeat(101))).toBe(false);
  });
  test('100 puntos de código (emoji) es válido', () => {
    expect(nombreValido('\u{1F600}'.repeat(100))).toBe(true);
  });
  test('101 puntos de código (emoji) es inválido', () => {
    expect(nombreValido('\u{1F600}'.repeat(101))).toBe(false);
  });
  test('cadena vacía es inválida', () => {
    expect(nombreValido('')).toBe(false);
  });
  test('solo espacios es inválido', () => {
    expect(nombreValido('   ')).toBe(false);
  });
  test('número es inválido', () => {
    expect(nombreValido(123)).toBe(false);
  });
  test('null es inválido', () => {
    expect(nombreValido(null)).toBe(false);
  });
});
