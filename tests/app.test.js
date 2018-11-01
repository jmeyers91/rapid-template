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
      username: 'jim',
      password: 'secret',
    });

    expect(response.status).toEqual(200);
    expect(response.data.authToken).toBeTruthy();
  });

  rapidTest('Should be able to request users', async rapid => {
    const response = await rapid.axios.get('/api/users');

    expect(response.status).toEqual(200);
  });
});
