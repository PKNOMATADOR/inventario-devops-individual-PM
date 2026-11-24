# Diseño rastreable
## Módulos
- producto.js: Validación de dominio; no conoce HTTP.
- app.js: Rutas y estado; memoria por instancia.
- errores.js: Clases de error y respuesta unificada.
- server.js: Arranque del puerto.

## Recorrido POST
POST /productos → app.js recibe cuerpo → producto.js valida → si inválido: 400 sin guardar → si válido: asigna id, guarda, responde 201.

## Límites
- Almacenamiento volátil.
- Sin autenticación.
