const Rapid = require('@simplej/rapid');
const path = require('path');

const rapidTest = Rapid.test(() =>
  new Rapid(path.join(__dirname, '..'))
    .clear()
    .migrate()
    .seed()
    .autoload()
);

describe('Rapid app', () => {
  rapidTest('Should start successfully', rapid => {
    expect(rapid).toBeTruthy();
  });
});
