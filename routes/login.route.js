module.exports = rapid => {
  const { middleware, actions } = rapid;

  rapid.api.post(
    '/login',
    middleware.login(actions.getUserFromCredentials),
    async context => {
      context.response.body = {
        authToken: context.state.authToken,
        user: context.state.user,
      };
    },
  );
};
