module.exports = plop => {
  plop.setGenerator('Controller', {
		description: 'Create a controller',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'controller name'
		}],
		actions: [{
			type: 'add',
			path: 'controllers/{{properCase name}}.controller.js',
			templateFile: 'plop-templates/controller.hbs'
		}],
  });

  plop.setGenerator('Model', {
		description: 'Create a model',
		prompts: [
      {
        type: 'input',
        name: 'singularName',
        message: 'Singular name'
      },
      {
        type: 'input',
        name: 'pluralName',
        message: 'Plural name'
      }
    ],
		actions: [{
			type: 'add',
			path: 'models/{{properCase singularName}}.model.js',
			templateFile: 'plop-templates/model.hbs'
		}],
  });

  plop.setGenerator('Router', {
		description: 'Create a router',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'router name'
		}],
		actions: [{
			type: 'add',
			path: 'routers/{{camelCase name}}.router.js',
			templateFile: 'plop-templates/router.hbs'
		}],
  });

  plop.setGenerator('Seed', {
		description: 'Create a seed',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'seed name'
		}],
		actions: [{
			type: 'add',
			path: 'seeds/{{camelCase name}}.seed.js',
			templateFile: 'plop-templates/seed.hbs'
		}],
  });

  plop.setGenerator('Hook', {
		description: 'Create a hook',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'hook name'
		}],
		actions: [{
			type: 'add',
			path: 'hooks/{{camelCase name}}.hook.js',
			templateFile: 'plop-templates/hook.hbs'
		}],
  });
};
