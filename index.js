
const fastify = require('fastify');

const server = fastify({ logger: true });
const PORT = 5002;

server.get('/', async () => ({ hello: 'world' }));

const start = async () => {
  try {
    await server.listen(PORT);
    server.log.info(`server listening on ${server.server.address().port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
