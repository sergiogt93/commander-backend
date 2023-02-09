import supertest, { Response, SuperTest, Test } from 'supertest';
import server from '../../../src/app/index';

let application: SuperTest<Test> = supertest(server);

afterAll(() => {
  server.close();
});

describe('GET /', () => {
  describe('the response status code should be 302', () => {
    test('the response should redirect to a path /api', async () => {
      const res: Response = await application.get('/')
      expect(res.headers.location).toEqual('/api');
      expect(res.statusCode).toBe(302);
    });
  });
});

describe('GET /api', () => {
  describe('the response status code should be 200', () => {
    test('the response should be empty', async () => {
      const res: Response = await application.get('/api')
      expect(res.statusCode).toBe(200);
      expect({ message: 'Welcome'}).toStrictEqual(res.body)
    });
  });
});