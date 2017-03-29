const certs = require('../data').data.certs;

exports.seed = function(knex, Promise) {
  const certPromises = [];
  
  certs.forEach(cert => {
    certPromises.push(seedCert(knex, cert.type, cert.track));
  });

  return knex('certs').del().then(() => Promise.all(certPromises));
};

function seedCert(knex, type, track){
  return knex.table('certs')
              .insert({
                type,
                track                      
              });
}
