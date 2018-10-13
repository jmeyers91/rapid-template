const uuid = require('uuid/v4');

module.exports = {
  webserver: {
    port: 'auto',
    publicDir: 'public',
  },
  database: {
    dropWhenFinished: true,
    connection: {
      user: env['USER'] || 'root',
      password: '',
      database: 'rapid_example_test_' + uuid().replace(/-/g, '_'),
    },
  },
};
