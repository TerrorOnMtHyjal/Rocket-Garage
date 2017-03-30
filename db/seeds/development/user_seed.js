const users = require('../data').users;

exports.seed = function(knex, Promise) {
  const userPromises = [];
  
  users.forEach(user => {
    userPromises.push(seedUser(knex, user.steamID, user.username));
  });

  return knex('users').del().then(() => Promise.all(userPromises));
};

function seedUser(knex, steamID, username){
  return knex.table('users')
              .insert({
                steamID,
                username                      
              });
}