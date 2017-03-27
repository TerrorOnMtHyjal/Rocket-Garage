const express           = require('express'),
      parser            = require('body-parser'),
      passport          = require('passport'),
      path              = require('path'),
      //SteamStrategy     = require('../../').Strategy,
      db                = require ('../db/db');

const app               = express(),
      jsonParser        = parser.json();

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT ,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/items/:type', (req, res) => {
  db('items')
  .select("*")
  .where("type", "=", req.params.type)
  .then(items => {
    res.status(200);
    res.json(items);
  });
});

app.listen(9000, () => {
  console.log("Listening on port 9000");
});

