import axios from 'axios';
import { expect } from 'chai';
import { API_KEY} from '../../../config.js';

// Punto 3. Paginación: Respuestas paginadas de /api/users?page=2
describe('ReqRes.in Paginacion', () => {
  const authHeaders = { headers: { 'x-api-key': API_KEY } };
    // Prueba para retornar de "/api/users?page=2"
  it('prueba para retornar una pagina de usuarios', async () => {
    const response = await axios.get('https://reqres.in/api/users?page=2', authHeaders);
    
    expect(response.status).to.equal(200);
    expect(response.data.page).to.equal(2);
    expect(response.data.per_page).to.equal(6);
    expect(response.data.data).to.be.an('array').with.lengthOf(6);
  });
});