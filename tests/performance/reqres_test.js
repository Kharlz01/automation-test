import http from 'k6/http';
import { check, sleep } from 'k6';

const API_KEY = 'reqres-free-v1';

// Prueba 2 de performance: Prueba de carga en ReqRes.in
// 50 requests concurrentes durante 1 minuto

export const options = {
  vus: 5,
  duration: '1m',
  thresholds: {
    http_req_failed: ['rate<0.05'],
  },
};

export default function () {
 const headers = { headers: { 'x-api-key': API_KEY } };

  const res = http.get('https://reqres.in/api/users?page=1', headers);
  
  check(res, {
    'status 200': (r) => r.status === 200,
    'data returned': (r) => r.json().data.length > 0,
  });

  sleep(1);
}