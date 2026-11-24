# Criterios de aceptación

| Id | Req. | Entrada | Tipo | Resultado observable |
|---|---|---|---|---|
| CA-01 | RF-01 | POST nombre ' Cable HDMI ' y stock 0 | Cero (frontera) | 201 con nombre «Cable HDMI» y stock 0 |
| CA-02 | RF-01 | POST nombre 'Cable' y stock 2147483647 | Máximo (frontera) | 201 con stock 2147483647 |
| CA-03 | RF-01 | POST nombre '   ' y stock 5 | Nombre vacío tras trim | 400 VALIDACION |
| CA-04 | RF-01 | POST nombre 'Cable' y stock 1.5 | Decimal | 400 VALIDACION |
| CA-05 | RF-01 | POST nombre 'Cable' y stock '10' | Cadena numérica | 400 VALIDACION |
| CA-06 | RF-02 | GET /productos con inventario vacío | Normal | 200 con [] |
