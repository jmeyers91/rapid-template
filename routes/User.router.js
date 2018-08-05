module.exports = rapid => {
  const { User } = rapid.models;
  const { resource } = rapid.middleware;

  return new rapid.Router()
    .get('/users', async context => {
      context.response.body = {
        users: await User.query()
      };
    });
};
