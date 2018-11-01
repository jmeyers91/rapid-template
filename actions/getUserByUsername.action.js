module.exports = rapid => {
  rapid.action('getUserByUsername')
    .schema({
      type: 'object',
      required: ['username'],
      properties: {
        username: { type: 'string' },
      },
    })
    .receiver(async ({ username }) => {
      const { User } = rapid.models;

      return User.query()
        .where('username', username)
        .first();
    });
};
