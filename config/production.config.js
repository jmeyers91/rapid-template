const { env } = process;

module.exports = {
  webserver: {
    port: env['PORT'],
    publicDir: 'public',
  },
  database: {
    ssl: true,
    connection: env['DATABASE_URL'],
  },
};
