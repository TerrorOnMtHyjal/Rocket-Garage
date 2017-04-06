const express   = require('express'),
      passport  = require('passport'),
      path      = require('path');

const app             = express(),
      passportConfig  = require('./config/passport.js')(passport);

app.use(passport.initialize());

const authRouter  = require('./routers/auth')(app, express, passport),
      itemRouter  = require('./routers/items')(app, express, passport),
      garageRouter = require('./routers/garages')(app, express, passport);

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT ,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/auth', authRouter);
app.use('/api/items', itemRouter);
app.use('/api/garages', garageRouter);

app.listen(9000, () => {
  console.log("Listening on port 9000");
});
