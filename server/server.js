const express           = require('express'),
      parser            = require('body-parser'),
      passport          = require('passport'),
      SteamStrategy     = require('passport-steam'),
      session           = require('express-session'),
      path              = require('path'),
      util              = require('util')
      db                = require ('../db/db');

const app               = express(),
      jsonParser        = parser.json();

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
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new SteamStrategy({
    returnURL: 'http://localhost:9000/auth/steam/return',
    realm: 'http://localhost:9000/',
    apiKey: '6220B6C80257C88341932ABC2ADA553D'
  },
  function(identifier, profile, done) {
    profile.identifier = identifier;
    return done(null, profile);
  }
));

//---------------------------------------------------------------------PASSPORT MIDDLEWARE

app.use(session({
  secret: 'thisIsMyTestSecretString',
  name: 'uid',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

//----------------------------------------------------------------------TEST ROUTES

app.get('/', (req, res) => {
  res.render('index', {user: req.user});
});

app.get('/auth/steam', 
  passport.authenticate('steam', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  });

app.get('/auth/steam/return',
  passport.authenticate('steam', { failureRedirect: '/'}),
  (req, res) => {
    res.redirect('/');
  });

app.get('/api/items', checkAuth, (req, res) => {
  db('items')
  .select("*")
  .then(items => {
    res.status(200);
    res.json(items);
  });
});

app.get('/api/items/:type', checkAuth, (req, res) => {
  db('items')
  .select("*")
  .where("type", "=", req.params.type)
  .then(items => {
    res.status(200);
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

