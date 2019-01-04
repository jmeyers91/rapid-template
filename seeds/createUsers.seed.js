module.exports = async function createUsers(rapid) {
  const { actions } = rapid;

  return Promise.all(
    [
      {
        email: "user@test.com",
        password: "secret"
      },
      {
        email: "user2@test.com",
        password: "secret"
      }
    ].map(actions.createUser)
  );
};

module.exports.runOrder = 1;
