import request from 'supertest';
import fastify from '../../../src/api/server';
import emailBuilder from '../../data-builder/email.builder';

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
    it('should return status 200 when send email and link in body', async () => {
      const body = {
        email: emailBuilder.emailValid(),
        link: emailBuilder.linkValid()
      };
      const {
        status,
        request: { _data }
      } = await request(server)
        .post(`${path}/confirmation`)
        .send({
          ...body,
          sandbox: true
        });

      expect(status).toEqual(200);
      expect(_data.email).toEqual(body.email);
      expect(_data.link).toEqual(body.link);
    });

    it('should return status 400 when not send the body', async () => {
      const { status } = await request(server).post(`${path}/confirmation`);

      expect(status).toEqual(400);
    });
  });
});
