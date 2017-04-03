const stores = require('../data').stores;

exports.seed = function(knex, Promise) {
  const storePromises = [];
  
  stores.forEach(store => {
    storePromises.push(seedStore(knex, store.user_id, store.header, store.subheader, store.platform, store.primaryStore));
  });

  return knex('stores').del().then(() => Promise.all(storePromises));
};

function seedStore(knex, user_id, header, subheader, platform, primaryStore){
  return knex.table('stores')
              .insert({
                user_id,
                header,
                subheader,
                platform,
                primaryStore                    
              });
}