
module.exports = rapid => {
  const { middleware } = rapid;

  rapid.api.get(
    '/user',
    middleware.auth(),
    async context => {
      const { user } = context.state;
      context.response.body = { user };
    }
  );
};
