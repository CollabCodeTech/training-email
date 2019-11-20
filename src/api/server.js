import fastify from 'fastify';

const server = fastify({ logger: true });

server.get('/', async () => ({ hello: 'world' }));

export default server;
