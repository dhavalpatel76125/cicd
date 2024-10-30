const request = require('supertest');
const app = require('./app'); // Ensure this points to your Express app

test('GET / should return Hello, CI/CD!', async () => {
  const response = await request(app).get('/');
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe('Hello, CI/CD!');
});
