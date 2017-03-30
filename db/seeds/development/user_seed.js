const users = require('../data').users;

exports.seed = function(knex, Promise) {
  const userPromises = [];
  
  users.forEach(user => {
    userPromises.push(seedUser(knex, user));
  });

  return knex('users').del().then(() => Promise.all(userPromises));
};

function seedUser(knex, steamID){
  console.log(steamID)
  return knex.table('users')
              .insert({
                steamID                      
              });
}