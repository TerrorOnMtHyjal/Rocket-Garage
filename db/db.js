var env = 'development'; 
var config = require('../knexfile.js')[env];   
var knex = require('knex')(config);

module.exports = knex;

knex.migrate.latest([config]);