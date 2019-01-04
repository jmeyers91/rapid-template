module.exports = rapid => {
  const normalizeEmail = require('normalize-email');
  const { User } = rapid.models;
  const { hashPassword } = rapid.helpers;

  rapid
    .action('createUser')
    .schema(User.jsonSchema)
    .receiver(async props => {
      const { email, password, ...rest } = props;
      const fields = {
        ...rest,
        email: normalizeEmail(email),
        password: await hashPassword(password),
      };
      const user = await User.query()
        .insert(fields)
        .returning('*');

      return user;
    });
};
