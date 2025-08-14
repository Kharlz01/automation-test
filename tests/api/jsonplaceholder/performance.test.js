import axios from "axios";
import { expect } from "chai";

// Punto 4. Validacion de Performance: Tienpo de respuesta < 2 seg.

describe('JSONPlaceholder Performance Basica', () => {
// Prueba de rendimiento para el endpoint /posts
  it('Prueba de respuesta inferior a 2 seg para "/posts"', async () => {
    const startTime = Date.now();
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const duration = Date.now() - startTime;
    
    expect(response.status).to.equal(200);
    expect(duration).to.be.lessThan(2000);
    console.log(`Tiempo de respuesta: ${duration}ms`);
  });
});