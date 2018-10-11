const { env } = process;

module.exports = {
  webserver: {
    port: env['PORT'] || 9090,
    publicDir: 'public',
  },
  database: {
    ssl: !!env['DATABASE_URL'],
    connection: env['DATABASE_URL'] || {
      user: env['USER'] || 'root',
      password: '',
      database: '{{ databaseName }}'
    },
  },
};
