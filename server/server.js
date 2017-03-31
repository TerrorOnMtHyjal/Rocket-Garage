const express           = require('express'),
      proxy             = require('http-proxy-middleware'),
      parser            = require('body-parser'),
      passport          = require('passport'),
      passportJWT       = require('passport-jwt'),
      SteamStrategy     = require('passport-steam'),
      jwt               = require('jsonwebtoken'),
      session           = require('express-session'),
      path              = require('path'),
      util              = require('util'),
      db                = require ('../db/db');

const app               = express(),
      passportConfig    = require('./config/passport.js')(passport),
      jsonParser        = parser.json(),
      ExtractJwt        = passportJWT.ExtractJwt,
      JwtStrategy       = passportJWT.Strategy;

app.use(passport.initialize());

const authRouter = require('./routers/auth')(app, express, passport, db, jwt);

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT ,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//----------------------------------------------------------------------ROUTES
app.use('/api/auth', authRouter);

app.get('/api/items', 
        passport.authenticate('jwt', { session : false }), 
        (req, res) => {
          db('user_items')
          .where("user_id", "=", req.user[0].uid)
          .join('items', 'user_items.item', '=', 'items.iid')
          .leftOuterJoin('paints', 'user_items.paint', '=', 'paints.pid')
          .leftOuterJoin('certs', 'user_items.cert', '=', 'certs.cid')
          .select('items.name as name', 'paints.color as color', 'certs.type as cert')
          .then(items => {
            res.status(200);
            res.json(items);
          });
        });

app.get('/api/items/:username', (req, res) => {
  console.log("pinged!")
  db('users')
  .where('username', '=', req.params.username)
  .select('uid')
  .then(result => {
    console.log(result);
    if(result.length != 1){
      res.json({message : "User not found, home boy!"});
    }else{
      return db('user_items')
      .where('user_id', '=', result[0].uid)
      .join('items', 'user_items.item', '=', 'items.iid')
      .leftOuterJoin('paints', 'user_items.paint', '=', 'paints.pid')
      .leftOuterJoin('certs', 'user_items.cert', '=', 'certs.cid')
      .select('items.name as name', 'paints.color as color', 'certs.type as cert', 'user_items.uiid as uiid')
    }
  })
  .then(items => {
    res.json(items);
  });
});

app.listen(9000, () => {
  console.log("Listening on port 9000");
});
