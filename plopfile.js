const rapidPlop = require("@simplej/rapid-plop");

module.exports = plop => {
  rapidPlop(plop);

  // Your generators go here

  // plop.setGenerator('thing', {
  // 	description: 'Create a thing',
  // 	prompts: [
  //     {
  //       type: 'input',
  //       name: 'name',
  //       message: 'Thing name'
  //     },
  //   ],
  // 	actions: [{
  // 		type: 'add',
  // 		path: 'things/{{properCase singularName}}.thing.js',
  // 		templateFile: 'plop-templates/thing.hbs',
  // 	}],
  // });
};
