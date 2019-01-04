// This file is used to start the app without the Rapid CLI
// Useful for running in production environments with tools like forever (https://www.npmjs.com/package/forever).
const Rapid = require('@simplej/rapid');

new Rapid(__dirname)
  .autoload()
  .start()
  .catch(error => console.log(error.stack));
