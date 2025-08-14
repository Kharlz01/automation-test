import http from 'k6/http';
import { check } from 'k6';

// Prueba 3 de performance: Stress test en Petstore API
// 200 request por minuto durante 5 minutos

export const options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 200,
      timeUnit: '1m',
      duration: '5m',
      preAllocatedVUs: 20,
    },
  },
};

export default function () {
  const petId = Math.floor(Math.random() * 100);
  const res = http.get(`https://petstore.swagger.io/v2/pet/${petId}`);
  check(res, {
    'status 200': (r) => r.status === 200,
  });
}