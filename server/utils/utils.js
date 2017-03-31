const db = require ('../../db/db');

exports.findOrCreateUser = (userSteamID) => {
  console.log("used!")
  db('users')
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
  .then(result => {
    return result;
  });
}
          