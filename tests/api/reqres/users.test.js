import axios from 'axios';
import { expect } from 'chai';
import { API_KEY, BASE_URL } from '../../../config.js';

// Punto 2. Gestión de Usuarios.
describe('ReqRes.in Gestion de usuarios', () => {
  const headers = { headers: { 'x-api-key': API_KEY } };
  let userId;

  // Prueba 1. Crear usuario
  it('prueba crear usuario', async () => {
    const userData = { name: 'John Doe', job: 'QA Engineer' };
    const response = await axios.post(`${BASE_URL}/users`, userData, headers);
    expect(response.status).to.equal(201);
    userId = response.data.id;
  });

  // Prueba 2. Actualizar usuario
  it('prueba actualizar usuario', async () => {
    const updatedData = { name: 'John Updated', job: 'QA Lead' };
    const response = await axios.put(`${BASE_URL}/users/${userId}`, updatedData, headers);
    expect(response.status).to.equal(200);
    expect(response.data.name).to.equal('John Updated');
  });
});