# ERS · RF-01 / RF-02 / RES-01 / CAL-01

| Id | Especificación |
|---|---|
| RF-01 | El sistema debe permitir crear un producto con `POST /productos` a partir de un nombre y un stock. Si los datos cumplen la regla (nombre de 1 a 100 puntos de código tras trim; stock entero de 0 a 2147483647 sin coerción), responde 201. Si no, responde 400 sin cambios. |
| RF-02 | El sistema debe permitir consultar con `GET /productos` todos los productos registrados. Responde 200 con arreglo; si no hay, arreglo vacío. |
| RES-01 | Regla de datos aprobada para la demo. |
| CAL-01 | Rapidez de la consulta. Pendiente: no se fija umbral oficial. |
