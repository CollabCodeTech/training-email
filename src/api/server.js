import { config } from 'dotenv';
import fastify from 'fastify';
import routes from './routes';

config();

const logger = process.env.NODE_ENV === 'development';
const server = fastify({ logger });

routes(server);

export default server;
