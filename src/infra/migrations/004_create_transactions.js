exports.up = function (knex) {
    return knex.schema.createTable('transactions', function (table) {
      table.increments('id').primary();
      table.integer('account_id').unsigned().notNullable();
      table.enu('type', ['credit', 'debit']).notNullable();
      table.decimal('amount', 14, 2).notNullable();
      table.string('description').notNullable();
      table.timestamp('date').defaultTo(knex.fn.now());
  
      table.foreign('account_id').references('id').inTable('accounts').onDelete('CASCADE');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('transactions');
  };  