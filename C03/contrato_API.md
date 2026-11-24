# Contrato HTTP

| Caso | Solicitud | Estado | Cuerpo |
|---|---|---|---|
| Creación válida | POST /productos {"nombre":" Cable HDMI ","stock":10} | 201 | {"id":1,"nombre":"Cable HDMI","stock":10} |
| Listado | GET /productos | 200 | [{"id":1,...}] |
| Rechazo VALIDACION | POST /productos {"nombre":"Mouse","stock":-1} | 400 | {"error":{"codigo":"VALIDACION",...}} |
| Rechazo JSON_INVALIDO | POST /productos con cuerpo cortado | 400 | {"error":{"codigo":"JSON_INVALIDO",...}} |
