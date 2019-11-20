import server from './api/server';

const PORT = 5002;

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
