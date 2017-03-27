const express           = require('express'),
      parser            = require('body-parser'),
      passport          = require('passport'),
      SteamStrategy     = require('../../').Strategy,
      db                = require ('../db/db');

const app               = express(),
      jsonParser        = parser.json();

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

