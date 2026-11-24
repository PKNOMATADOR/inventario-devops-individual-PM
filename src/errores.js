class ErrorValidacion extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.codigo = 'VALIDACION';
  }
}

class ErrorJsonInvalido extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.codigo = 'JSON_INVALIDO';
  }
}

function respuestaError(codigo, mensaje) {
  return { error: { codigo, mensaje } };
}

module.exports = { ErrorValidacion, ErrorJsonInvalido, respuestaError };
