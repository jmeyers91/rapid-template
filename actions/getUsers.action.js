module.exports = rapid => {
  rapid.action('getUsers')
    .get('/users', async context => {
      const { getUsers } = rapid.actions;
      const users = await getUsers();
      context.response.body = { users };
    })
    .receiver(async () => {
      const { User } = rapid.models;
      return User.query();
    });
};
