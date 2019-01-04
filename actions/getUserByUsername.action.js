module.exports = rapid => {
  const normalizeEmail = require("normalize-email");

  rapid
    .action("getUserByUsername")
    .schema({
      type: "object",
      required: ["username"],
      properties: {
        username: { type: "string" }
      }
    })
    .receiver(async ({ username }) => {
      const { User } = rapid.models;

      return User.query()
        .where("email", normalizeEmail(username))
        .first();
    });
};
