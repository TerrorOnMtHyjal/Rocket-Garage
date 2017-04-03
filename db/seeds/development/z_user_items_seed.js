const userItems = require('../data').userItems;

exports.seed = function(knex, Promise) {
  const userItemPromises = [];
  
  userItems.forEach(userItem => {
    userItemPromises.push(seedUserItem(knex, userItem.user_id, userItem.item, userItem.postType, userItem.store_id, userItem.paint, userItem.cert));
  });

  return knex('user_items').del().then(() => Promise.all(userItemPromises));
};

function seedUserItem(knex, user_id, item, postType, store_id, paint = null, cert = null){
  console.log(user_id, item, paint, cert);
  return knex.table('user_items')
              .insert({
                user_id,
                item,
                postType,
                store_id,
                paint,
                cert                      
              });
}