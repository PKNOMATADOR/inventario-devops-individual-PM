const express = require('express');
const { validarProducto } = require('./producto');
const { respuestaError } = require('./errores');

function createApp() {
  const app = express();
  app.use(express.json());

  const productos = [];
  let siguienteId = 1;

  // RF-01
  app.post('/productos', (req, res) => {
    const { nombre, stock } = req.body || {};
    const resultado = validarProducto({ nombre, stock });

    if (!resultado.ok) {
      const mensaje =
        resultado.campo === 'nombre'
          ? 'nombre inválido: debe ser una cadena de 1 a 100 puntos de código tras trim'
          : 'stock inválido: debe ser un entero entre 0 y 2147483647';
      return res.status(400).json(respuestaError('VALIDACION', mensaje));
    }

    const producto = { id: siguienteId++, nombre: resultado.nombre, stock };
    productos.push(producto);
    return res.status(201).json(producto);
  });

  // RF-02
  app.get('/productos', (_req, res) => {
    return res.status(200).json(productos);
  });

  // JSON inválido
  app.use((err, _req, res, next) => {
    if (err instanceof SyntaxError && 'body' in err) {
      return res
        .status(400)
        .json(respuestaError('JSON_INVALIDO', 'El cuerpo de la solicitud no es un JSON válido'));
    }
    return next(err);
  });

  return app;
}

module.exports = { createApp };
