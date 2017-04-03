exports.up = function(knex, Promise) {

  return Promise.all([

    knex.schema.createTable('users', function(table){
      table.increments('uid').primary();
      table.string('steamID')
            .unique();
      table.string('username')
            .unique();
      table.boolean('donator')
            .defaultTo(false);
      table.enu('platform', ['PS4', 'PC', 'Xbox']);
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
            .nullable()
            .references('pid')
            .inTable('paints');
      table.integer('cert')
            .nullable()
            .references('cid')
            .inTable('certs');
      table.boolean('promoted')
            .defaultTo(false);
    }),

    knex.schema.createTable('items', function(table){
      table.increments('iid').primary();
      table.string('name');
      table.string('rarity');
      table.string('body_type');
      table.enu('type', ['wheel', 'body', 'decal', 'boost', 'topper']);
    }),

    knex.schema.createTable('paints', function(table){
      table.increments('pid').primary();
      table.enu('color', ['Black', 'Burnt Sienna', 'Cobalt', 'Crimson', 'Forest Green', 'Grey', 'Lime', 'Orange', 'Pink',
                            'Purple', 'Saffron', 'Sky Blue', 'Titanium White']);
    }),

    knex.schema.createTable('certs', function(table){
      table.increments('cid').primary();
      table.enu('type', ['Acrobat', 'Aviator', 'Goalkeeper', 'Guardian', 'Juggler', 'Paragon', 'Playmaker', 'Scorer', 
                          'Show-Off', 'Sniper', 'Striker', 'Sweeper', 'Tactician', 'Turtle', 'Victor']);
      table.enu('track', ['Bicycle Goals', 'Aerial Goals', 'Saves', 'Epic Saves', 'Juggles', 'MVP', 'Assists', 'Goals',
                            'Backwards Goals', 'Long Goals', 'Shots On Goal', 'Clear Balls', 'Center Balls', 'Turtle Goals', 'Wins']);
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
