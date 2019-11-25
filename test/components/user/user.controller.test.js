import request from 'supertest';
import fastify from '../../../src/api/server';

const { server } = fastify;
const path = '/user';

describe(`${path}`, () => {
  beforeAll(async () => {
    await fastify.ready();
  });

  afterAll(() => {
    fastify.close();
  });

  describe(`POST ${path}/confirmation`, () => {
    it('should return status 200 when send email valid in body', async () => {
      const {
        status,
        request: { _data }
      } = await request(server)
        .post(`${path}/confirmation`)
        .send({ email: 'marco.bruno.br@gmail.com', sandbox: true });

      expect(status).toEqual(200);
      expect(_data.email).toEqual('marco.bruno.br@gmail.com');
    });
  });
});
