import fastify from 'fastify';

import routes from './routes';

const logger = process.env.NODE_ENV === 'development';
const server = fastify({ logger });

routes(server);

export default server;
