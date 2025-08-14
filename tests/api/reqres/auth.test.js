import axios from 'axios';
import { expect } from 'chai';
import { API_KEY, BASE_URL } from '../../../config.js';

// ReqRes.in API Testing
// Punto 1. Autenticacion: (/api/login, /api/register)

describe('ReqRes Autenticación:', () => {
  const authHeaders = { headers: { 'x-api-key': API_KEY } };

  // Prueba 1. Login
  it('prueba para login exitoso', async () => {
    const credentials = { email: 'eve.holt@reqres.in', password: 'cityslicka' };
    const response = await axios.post(`${BASE_URL}/login`, credentials, authHeaders);
    expect(response.status).to.equal(200);
    expect(response.data.token).to.be.a('string');
  });

  // Prueba 2. Registro
  it('prueba para registro de usuario', async () => {
    const userData = { email: 'eve.holt@reqres.in', password: 'pistol' };
    const response = await axios.post(`${BASE_URL}/register`, userData, authHeaders);
    expect(response.status).to.equal(200);
    expect(response.data.id).to.be.a('number');
  });
});