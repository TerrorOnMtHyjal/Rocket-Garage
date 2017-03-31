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
      jsonParser        = parser.json(),
      ExtractJwt        = passportJWT.ExtractJwt,
      JwtStrategy       = passportJWT.Strategy;


app.set('views', __dirname + './../src/views');
app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT ,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//---------------------------------------------------------------------SERIALIZATION & STRATEGY

passport.serializeUser(function(user, done) {
  console.log("serialize has been called")
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  console.log("deserialize has been called")
  done(null, obj);
});

passport.use(new SteamStrategy({
    returnURL: 'http://localhost:8080/api/auth/return',
    realm: 'http://localhost:8080',
    apiKey: '6220B6C80257C88341932ABC2ADA553D'
  },
  function(identifier, profile, done) {
    profile.identifier = identifier;
    return done(null, profile);
  }
));

const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = 'testSecret123';

passport.use(new JwtStrategy(jwtOptions, (jwt_payload, next) => {
  db('users')
  .where('steamID', '=', jwt_payload.steamID)
  .then(user => {
    if(user.length != 1){
      next(null, false);
    } else {
      next(null, user);
    }
  });
}));

//---------------------------------------------------------------------PASSPORT MIDDLEWARE

// app.use(session({
//   secret: 'thisIsMyTestSecretString',
//   name: 'uid',
//   resave: true,
//   saveUninitialized: true
// }));

app.use(passport.initialize());
//app.use(passport.session());

//----------------------------------------------------------------------TEST ROUTES

app.get('/', (req, res) => {
  res.render('index', {user: req.user});
});

app.get('/api/auth', 
        passport.authenticate('steam', { failureRedirect: '/' }),
        (req, res) => {
          res.redirect('/');
        });

app.get('/api/auth/return',
        passport.authenticate('steam', { failureRedirect: '/'}),
        (req, res) => {
          const userSteamID = req.user._json.steamid;

          db('users')
          .select('steamID', 'uid')
          .where('steamID', "=", userSteamID)
          .then(user => {
            if(user.length != 1){
              console.log("User not found, making a new one!");                               //if the user doesn't exist, insert into db
              return db('users')
              .insert({ steamID : userSteamID }, ['uid', 'steamID']);                         //return the uid and steamID of new user, format is : [{ }]
            }
            console.log("User found!");
            return [{ uid : user[0].uid, steamID : user[0].steamID }];                        //if user exists, return in same format as new user db call : [{ }]
          })
          .then(result => {
            const payload = result[0];
            const token = jwt.sign(payload, jwtOptions.secretOrKey);
            res.cookie('accessToken', token);
            res.redirect(`/`);
          });
        });

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

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.listen(9000, () => {
  console.log("Listening on port 9000");
});

function checkAuth(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  console.log("Who are you!?");
  res.redirect('/');
}

