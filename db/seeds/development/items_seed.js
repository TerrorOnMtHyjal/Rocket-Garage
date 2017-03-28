const items = require ('../data');

exports.seed = function(knex, Promise) {
  const itemPromises = []
                                                    
  for(let item_type in items){                                          //loop through top level keys of item types                                                  
    if(item_type === "decal"){                                          //if it's decals, add body type. probably much better way to do this, revisit
      for(let body_type in items[item_type]){
        for(let rarity in items[item_type][body_type]){
          items[item_type][body_type][rarity].forEach(item => {
            itemPromises.push(seedItem(knex, rarity, item_type, item, body_type));
          });
        }
      }
    }else{
      for(let rarity in items[item_type]){                              //loop through rarities of each item type
        items[item_type][rarity].forEach(item => {
          itemPromises.push(seedItem(knex, rarity, item_type, item));
        });
      }
    }
  }
  return knex('items').del().then(() => Promise.all(itemPromises));
};

function seedItem(knex, rarity, item_type, item, body_type){
  return knex.table('items')
              .insert({
                name : item,
                type : item_type,
                rarity : rarity,
                body_type : body_type || null                           
              });
}