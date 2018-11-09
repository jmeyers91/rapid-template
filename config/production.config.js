const { env } = process;

module.exports = {
  logActions: false,
  jwtDuration: 1000 * 60 * 60 * 24 * 30, // 1 month
  webserver: {
    port: env['PORT'],
    publicDir: 'public',
  },
  database: {
    ssl: true,
    connection: env['DATABASE_URL'],
  },
};
