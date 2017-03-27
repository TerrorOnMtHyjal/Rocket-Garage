exports.up = function(knex, Promise) {

  return Promise.all([

    knex.schema.createTable('users', function(table){
      table.increments('user_id').primary();
      table.string('steamID').unique();
    }),

    knex.schema.createTable('user_items', function(table){
      table.increments('id').primary();
      table.integer('user_id')
            .references('user_id')
            .inTable('users');
      table.integer('item')
            .references('item_id')
            .inTable('items');
      table.integer('paint')
            .references('paint_id')
            .inTable('paints');
      table.integer('cert')
            .references('cert_id')
            .inTable('certs');
    }),

    knex.schema.createTable('items', function(table){
      table.increments('id').primary();
      table.string('name');
      table.string('type');
      table.string('rarity');
      table.string('body_type');
    }),

    knex.schema.createTable('paints', function(table){
      table.increments('paint_id').primary();
      table.string('paint_color').unique();
    }),

    knex.schema.createTable('certs', function(table){
      table.increments('cert_id').primary();
      table.string('cert_type').unique();
    })

  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('user_items'),
    knex.schema.dropTable('items'),
    knex.schema.dropTable('paints'),
    knex.schema.dropTable('certs')
  ]);
};