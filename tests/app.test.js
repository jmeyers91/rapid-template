const Rapid = require('@simplej/rapid');
const path = require('path');

const rapidTest = Rapid.test(() =>
  new Rapid(path.join(__dirname, '..'))
    .clear()
    .migrate()
    .seed()
    .autoload(),
);

describe('app', () => {
  rapidTest('Should start successfully', rapid => {
    expect(rapid).toBeTruthy();
  });

  rapidTest('Should be able to login', async rapid => {
    const response = await rapid.axios.post('/api/login', {
      username: 'user@test.com',
      password: 'secret',
    });

    expect(response.status).toEqual(200);
    expect(response.data.authToken).toBeTruthy();
  });

  rapidTest('Should be able to request current user', async rapid => {
    const loginResponse = await rapid.axios.post('/api/login', {
      username: 'user@test.com',
      password: 'secret',
    });

    const response = await rapid.axios.get('/api/user', {
      headers: {
        Authorization: loginResponse.data.authToken,
      },
    });

    expect(response.status).toEqual(200);
    expect(response.data.user).toBeTruthy();
  });

  rapidTest('Should be able to register a user', async rapid => {
    const response = await rapid.axios.post('/api/register', {
      email: 'register-test@test.com',
      password: 'password',
    });
    expect(response.status).toEqual(200);

    const user = await rapid.models.User.query()
      .where('email', 'register-test@test.com')
      .first();
    expect(user).toBeTruthy();
  });
});
