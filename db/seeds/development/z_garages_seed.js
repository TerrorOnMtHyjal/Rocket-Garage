const garages = require('../data').garages;

exports.seed = function(knex, Promise) {
  const garagePromises = [];
  
  garages.forEach(garage => {
    garagePromises.push(seedGarage(knex, garage.user_id, garage.header, garage.subheader, garage.platform, garage.primaryGarage));
  });

  return knex('garages').del().then(() => Promise.all(garagePromises));
};

function seedGarage(knex, user_id, header, subheader, platform, primaryGarage){
  return knex.table('garages')
              .insert({
                user_id,
                header,
                subheader,
                platform,
                primaryGarage                    
              });
}