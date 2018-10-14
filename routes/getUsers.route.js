module.exports = rapid => {
  const { actions, middleware } = rapid;

  rapid.api.get('/users', middleware.auth(), async context => {
    context.response.body = {
      users: await actions.getUsers(),
    };
  });
};
