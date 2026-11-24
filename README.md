# inventario-devops-individual-PM

API mínima en memoria para crear y listar productos.  
Trabajo individual · Unidad 1 · Gestión de la Configuración del Software.  
Estudiante: **Piero Antonio Mendoza Coloma**

## Requisitos
- Node.js 20+
- npm 10+

## Contrato RF-01 / RF-02
- POST /productos → 201 con {id, nombre, stock}. Si falla: 400 sin guardar.
- GET /productos → 200 con arreglo; [] si el inventario está vacío.
- nombre: string, aplicar trim, entre 1 y 100 puntos de código.
- stock: entero entre 0 y 2147483647, sin coerción (rechaza "10").
- Datos almacenados en memoria; sin autenticación; sin base de datos.

## Fuente revisada
- Commit: 5da0f32

- Fecha: 23 de Noviembre de 2026

## Límites
- Almacenamiento volátil: al reiniciar se pierden los productos.
- Sin autenticación: cualquier cliente puede crear y listar.
- No incluye ventas, cuentas ni persistencia.

## Seguridad
- No incluye secretos, tokens ni .env reales. Solo .env.example con valores ficticios.
## Comandos
```bash
# Instalar dependencias exactas del lock
npm ci

# Ejecutar pruebas (unitarias e integración)
npm test

# Arrancar el servidor
npm start
# Servidor disponible en http://localhost:3000
