exports.up = function (knex) {
    return knex.schema.createTable('accounts', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.integer('institution_id').unsigned().notNullable();
      table.decimal('balance', 14, 2).defaultTo(0);
  
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
      table.foreign('institution_id').references('id').inTable('institutions').onDelete('CASCADE');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('accounts');
  };  