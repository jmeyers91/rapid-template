const { env } = process;
const uuid = require("uuid/v4");

module.exports = {
  logActions: false,
  socketIO: false,
  webserver: {
    port: "auto",
    publicDir: "public"
  },
  database: {
    dropWhenFinished: true,
    connection: {
      user: env["USER"] || "root",
      password: "",
      database: "rapid_test_" + uuid().replace(/-/g, "_")
    }
  }
};
