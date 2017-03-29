var env = 'development'; 
var config = require('../knexfile')[env];   
var knex = require('knex')(config);

module.exports = knex;