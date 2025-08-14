import axios from 'axios';
import { expect } from 'chai';
import { API_KEY, BASE_URL } from '../../../config.js';

// Punto 4. Rate Limiting: Detectar y manejar limites de request.

describe('ReqRes.in Rate Limiting', () => {
 // Prueba de limite de peticiones (5 por minuto)
  it('prueba de limite de peticiones (5)', async () => {
    let lastStatus;
    try {
      for (let i = 0; i < 6; i++) {
        const response = await axios.get(`${BASE_URL}/users/1`, {
          headers: { 'x-api-key': API_KEY }
        });
        lastStatus = response.status;
      }
    } catch (error) {
      expect(error.response.status).to.equal(429);
    }
    console.log(`Codigo de estado: ${lastStatus || 'None'}`);
  });
});