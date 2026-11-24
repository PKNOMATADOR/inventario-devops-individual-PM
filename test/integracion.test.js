const request = require('supertest');
const { createApp } = require('../src/app');

describe('Integración API /productos', () => {
  test('POST válido crea producto con 201', async () => {
    const app = createApp();
    const res = await request(app)
      .post('/productos')
      .send({ nombre: ' Cable HDMI ', stock: 10 });
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ id: 1, nombre: 'Cable HDMI', stock: 10 });
  });

  test('GET /productos devuelve arreglo con productos', async () => {
    const app = createApp();
    await request(app).post('/productos').send({ nombre: 'Cable HDMI', stock: 10 });
    const res = await request(app).get('/productos');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body).toHaveLength(1);
  });

  test('rechazo 400 no altera el inventario', async () => {
    const app = createApp();
    await request(app).post('/productos').send({ nombre: 'Cable HDMI', stock: 10 });
    const antes = await request(app).get('/productos');
    const rechazo = await request(app).post('/productos').send({ nombre: 'Mouse', stock: -1 });
    expect(rechazo.status).toBe(400);
    expect(rechazo.body.error.codigo).toBe('VALIDACION');
    const despues = await request(app).get('/productos');
    expect(despues.body.length).toBe(antes.body.length);
  });

  test('nueva instancia de createApp arranca vacía', async () => {
    const appA = createApp();
    await request(appA).post('/productos').send({ nombre: 'Cable HDMI', stock: 10 });
    const appB = createApp();
    const res = await request(appB).get('/productos');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });
});
