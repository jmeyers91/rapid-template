module.exports = rapid => {
  const { getUsers } = rapid.actions;

  return new rapid.Router()
    .get('/users', async context => {
      context.response.body = {
        users: await getUsers()
      };
    });
};
