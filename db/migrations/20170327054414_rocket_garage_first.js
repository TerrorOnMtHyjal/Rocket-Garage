exports.up = function(knex, Promise) {

  return Promise.all([

    knex.schema.createTable('users', (t) => {
      t.increments('uid').primary();
      t.string('steamID')
            .unique();
      t.string('username')
            .unique();
      t.boolean('donator')
            .defaultTo(false);
      t.enu('primaryPlatform', ['PS4', 'PC', 'XB1']);
    }),

    knex.schema.createTable('garages', t => {
      t.increments('gid').primary();
      t.integer('user_id')
            .references('uid')
            .inTable('users');
      t.string('header')
            .defaultTo("Set your garage header!");
      t.string('subheader')
            .defaultTo('Set your garage tagline, or leave it empty!');
      t.boolean('primaryGarage')
            .defaultTo(false);
      t.enu('platform', ['PS4', 'PC', 'XB1']);
    }),

    knex.schema.createTable('user_items', (t) => {
      t.increments('uiid').primary();
      t.integer('garage_id')
            .references('gid')
            .inTable('garages');
      t.integer('user_id')
            .references('uid')
            .inTable('users');
      t.integer('item')
            .references('iid')
            .inTable('items');
      t.integer('paint')
            .nullable()
            .references('pid')
            .inTable('paints');
      t.integer('cert')
            .nullable()
            .references('cid')
            .inTable('certs');
      t.boolean('promoted')
            .defaultTo(false);
      t.enu('postType', ["have", "want"]);
    }),

    knex.schema.createTable('items', (t) => {
      t.increments('iid').primary();
      t.string('name');
      t.string('rarity');
      t.string('body_type');
      t.enu('type', ['wheel', 'body', 'decal', 'boost', 'topper']);
    }),

    knex.schema.createTable('paints', (t) => {
      t.increments('pid').primary();
      t.enu('color', ['Black', 'Burnt Sienna', 'Cobalt', 'Crimson', 'Forest Green', 'Grey', 'Lime', 'Orange', 'Pink',
                        'Purple', 'Saffron', 'Sky Blue', 'Titanium White']);
    }),

    knex.schema.createTable('certs', function(t){
      t.increments('cid').primary();
      t.enu('type', ['Acrobat', 'Aviator', 'Goalkeeper', 'Guardian', 'Juggler', 'Paragon', 'Playmaker', 'Scorer', 
                        'Show-Off', 'Sniper', 'Striker', 'Sweeper', 'Tactician', 'Turtle', 'Victor']);
      t.enu('track', ['Bicycle Goals', 'Aerial Goals', 'Saves', 'Epic Saves', 'Juggles', 'MVP', 'Assists', 'Goals',
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
    knex.schema.dropTable('garages'),
    knex.schema.dropTable('users')
  ]);
};
