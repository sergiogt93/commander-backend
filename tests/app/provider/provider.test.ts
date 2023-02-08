// import supertest, { Response, SuperTest, Test } from 'supertest';
// import server from '../../../src/app/index';

// let application: SuperTest<Test> = supertest(server);

// afterAll(() => {
//   server.close();
// });

// describe('POST /api/provider', () => {
//   describe('the response status code should be 201', () => {
//     test('the response should be empty', async () => {
//       const res: Response = await application.post('/api/provider')
//       expect(res.statusCode).toBe(201);
//       expect({}).toStrictEqual(res.body)
//     });
//   });
// });