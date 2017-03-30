const userItems = require('../data').userItems;

exports.seed = function(knex, Promise) {
  const userItemPromises = [];
  
  userItems.forEach(userItem => {
    userItemPromises.push(seedUserItem(knex, userItem.user_id, userItem.item, userItem.paint, userItem.cert));
  });

  return knex('user_items').del().then(() => Promise.all(userItemPromises));
};

function seedUserItem(knex, user_id, item, paint = null, cert = null){
  console.log(user_id, item, paint, cert);
  return knex.table('user_items')
              .insert({
                user_id,
                item,
                paint,
                cert                      
              });
}