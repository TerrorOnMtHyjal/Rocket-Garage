const db  = require ('../../db/db'),
      jwt = require('jsonwebtoken');

exports.findOrCreateUser = function (userSteamID) {
  return db('users')
  .select('steamID', 'uid')
  .where('steamID', "=", userSteamID)
  .then(user => {
    if(user.length != 1){
      console.log("User not found, making a new one!");
      return db('users')
      .insert({ steamID : userSteamID }, ['uid', 'steamID']);
    }
    console.log("User found!");
    return [{ uid : user[0].uid, steamID : user[0].steamID }];
  })
}

exports.generateJWT = (payload) => {
 return jwt.sign(payload, 'testSecret123');
}
          