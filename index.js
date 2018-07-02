const Rapid = require('@simplej/rapid');
const rapid = new Rapid(__dirname);

rapid.discover
  .configs('config/config.default.js', 'config/config.js')
  .models('models/**/*.model.js')
  .controllers('controllers/**/*.controller.js')
  .routers('routers/**/*.router.js')
  .seeds('seeds/**/*.seed.js');

rapid.start()
  .catch(error => console.log(error));
