import http from 'k6/http';
import { check, sleep } from 'k6';

// Prueba 1 de performance: Obtener posts de JSONPlaceholder
// 100 requests concurrentes durante 2 minutos

export const options = {
  vus: 100,
  duration: '2m',
  thresholds: {
    http_req_duration: ['p(95) < 500'],
  },
};

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/posts');
  check(res, {
    'status 200': (r) => r.status === 200,
  });
  sleep(1);
}