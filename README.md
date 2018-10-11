# Rapid App

This app was created with the [Rapid CLI](https://github.com/jmeyers91/rapid-cli).

## Scripts

All scripts are run with `npm run [script name]` or `yarn run [script name]`

* `start` - Start the server
* `watch` - Start the server and restart on file changes
* `migrate` - Run database migrations
* `seed` - Run database seeds
* `refresh` - Drop the database, run migrations, and run seeds
* `clear` - Drop the database
* `generate` - Scaffold common modules (models, actions, routes, seeds, migrations, etc.) with [Plop](https://plopjs.com/)
* `test` - Run tests using [Jest](https://jestjs.io/)

## Deploying with [Heroku](https://dashboard.heroku.com/)

1. Create a Heroku app
2. Add the app's Heroku remote `heroku git:remote -a APP_NAME`
3. Add the Heroku Postgres plugin `heroku addons:create heroku-postgresql:hobby-dev`
4. Push to Heroku `git push heroku master`
5. Run remote migrations `heroku run npm run migrate`
6. Run remote seeds `heroku run npm run seed`
