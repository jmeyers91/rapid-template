module.exports = rapid => {
  const { middleware, actions } = rapid;

  rapid.api.post(
    "/login",
    middleware.login(actions.getUserFromCredentials),
    async context => {
      const { user, authToken } = context.state;

      context.cookies.set("authToken", authToken, { httpOnly: true });
      context.success({
        user,
        authToken: process.env["NODE_ENV"] === "test" ? authToken : null
      });
    }
  );
};
