exports.up = async knex => {
  if (await knex.schema.hasTable('users')) return;
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.timestamps(true, true);

    table
      .string('email')
      .notNullable()
      .unique();
    table.string('password').notNullable();
  });
};

exports.down = async knex => {
  if (await knex.schema.hasTable('users')) {
    return knex.schema.dropTable('users');
  }
};
