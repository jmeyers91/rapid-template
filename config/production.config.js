const { env } = process;

module.exports = {
  webserver: {
    port: env['PORT'],
  },
  database: {
    ssl: true,
    connection: env['DATABASE_URL'],
  },
};
