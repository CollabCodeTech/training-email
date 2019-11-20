import server from './api/server';

const start = async () => {
  try {
    const { PORT, HOST } = process.env;

    await server.listen(PORT, HOST);
    server.log.info(`server listening on ${server.server.address().port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
