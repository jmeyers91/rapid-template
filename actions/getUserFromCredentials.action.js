module.exports = rapid => {
  rapid
    .action("getUserFromCredentials")
    .schema({
      type: "object",
      required: ["username", "password"],
      properties: {
        username: { type: "string" },
        password: { type: "string" }
      }
    })
    .receiver(async ({ username, password }) => {
      const { getUserByUsername } = rapid.actions;
      const { verifyPassword } = rapid.helpers;
      const user = await getUserByUsername({ username });

      if (user && (await verifyPassword(password, user.password))) {
        delete user.password;
        return user;
      } else {
        return null;
      }
    });
};
