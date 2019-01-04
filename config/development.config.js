const { env } = process;

// This config file is only used for testing and will be overridden with config.template.js during scaffolding
module.exports = {
  logActions: true,
  socketIO: false,
  jwtDuration: 1000 * 60 * 60 * 24 * 30, // 1 month
  webserver: {
    port: 9090,
    publicDir: "public"
  },
  database: {
    connection: {
      user: env["USER"] || "root",
      password: "",
      database: "rapid_template"
    }
  }
};
