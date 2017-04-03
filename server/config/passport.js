const passportJWT       = require('passport-jwt'),
      SteamStrategy     = require('passport-steam'),
      jwt               = require('jsonwebtoken'),
      session           = require('express-session'),
      db                = require ('../../db/db');

const ExtractJwt        = passportJWT.ExtractJwt,
      JwtStrategy       = passportJWT.Strategy;

module.exports = (passport) => {

  passport.serializeUser(function(user, done) {
    console.log("serialize has been called")
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    console.log("deserialize has been called")
    done(null, obj);
  });

  passport.use(new SteamStrategy(
      {
        returnURL: 'http://localhost:8080/api/auth/return',
        realm: 'http://localhost:8080',
        apiKey: '6220B6C80257C88341932ABC2ADA553D'
      },

      (identifier, profile, done) => {
        console.log("it's me! steam!")
        profile.identifier = identifier;
        return done(null, profile);
      }
    )  
  );

  passport.use(new JwtStrategy(
      {
        jwtFromRequest : ExtractJwt.fromAuthHeader(),
        secretOrKey : 'testSecret123' 
      }, 
    
      (jwt_payload, next) => {
        console.log("it's me! jwt! ", jwt_payload)       
        db('users')
        .where('steamID', '=', jwt_payload.steamID)
        .then(user => {
          if(user.length != 1){
            next(null, false);
          } else {
            next(null, user);
          }
        });
      }
    )
  );
}
