// This config file is only used for testing and will be overridden with config.template.js during scaffolding
module.exports = {
  webserver: {
    port: 9090,
    publicDir: 'public',
  },
  database: {
    connection: {
      user: process.env.USER || 'root',
      password: '',
      database: 'rapid_template'
    }
  }
};
