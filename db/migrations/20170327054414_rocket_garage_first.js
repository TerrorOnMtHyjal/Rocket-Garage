exports.up = function(knex, Promise) {

  return Promise.all([

    knex.schema.createTable('users', function(table){
      table.increments('uid').primary();
      table.string('steamID').unique();
    }),

    knex.schema.createTable('user_items', function(table){
      table.increments('uiid').primary();
      table.integer('user_id')
            .references('uid')
            .inTable('users');
      table.integer('item')
            .references('iid')
            .inTable('items');
      table.integer('paint')
            .references('pid')
            .inTable('paints');
      table.integer('cert')
            .references('cid')
            .inTable('certs');
    }),

    knex.schema.createTable('items', function(table){
      table.increments('iid').primary();
      table.string('name');
      table.string('type');
      table.string('rarity');
      table.string('body_type');
    }),

    knex.schema.createTable('paints', function(table){
      table.increments('pid').primary();
      table.string('paint_color').unique();
    }),

    knex.schema.createTable('certs', function(table){
      table.increments('cid').primary();
      table.string('cert_type').unique();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('user_items'),
    knex.schema.dropTable('items'),
    knex.schema.dropTable('paints'),
    knex.schema.dropTable('certs'),
    knex.schema.dropTable('users')
  ]);
};
