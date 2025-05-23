exports.up = function (knex) {
    return knex.schema.createTable('institutions', function (table) {
      table.increments('id').primary();
      table.string('name').notNullable().unique();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('institutions');
  };  