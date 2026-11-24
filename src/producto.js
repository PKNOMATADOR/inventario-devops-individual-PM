// Validación de dominio. No conoce HTTP.
const STOCK_MIN = 0;
const STOCK_MAX = 2147483647;
const NOMBRE_MIN = 1;
const NOMBRE_MAX = 100;

function stockValido(stock) {
  return Number.isInteger(stock) && stock >= STOCK_MIN && stock <= STOCK_MAX;
}

function nombreValido(nombre) {
  if (typeof nombre !== 'string') return false;
  const limpio = nombre.trim();
  const puntos = [...limpio].length;
  return puntos >= NOMBRE_MIN && puntos <= NOMBRE_MAX;
}

function validarProducto({ nombre, stock }) {
  if (!nombreValido(nombre)) return { ok: false, campo: 'nombre' };
  if (!stockValido(stock)) return { ok: false, campo: 'stock' };
  return { ok: true, nombre: nombre.trim(), stock };
}

module.exports = { stockValido, nombreValido, validarProducto };
