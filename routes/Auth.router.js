module.exports = rapid => {
  const { middleware, actions } = rapid;

  return new rapid.Router()
    .post('/auth/login', middleware.login(actions.login), context => {
      context.response.body = {
        authToken: context.state.authToken,
        user: context.state.user
      };
    })
    .get('/auth/secureExample', middleware.auth(), context => {
      context.response.body = 'Access granted!';
    })
    .get('/auth/insecureExample', context => {
      context.response.body = 'Welcome guest!';
    });
};
