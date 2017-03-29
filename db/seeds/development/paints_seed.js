const paints = require('../data').data.paints;

exports.seed = function(knex, Promise) {
  const paintPromises = [];
  
  paints.forEach(paint => {
    paintPromises.push(seedPaint(knex, paint));
  });

  return knex('paints').del().then(() => Promise.all(paintPromises));
};

function seedPaint(knex, color){
  return knex.table('paints')
              .insert({
                color                       
              });
}
